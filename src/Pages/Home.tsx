import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import Groups from "../components/Groups/Groups";
import PizzasBlock from "../components/pizzasBlock";
import Sort, { sortItemsName } from "../components/Sort/sort";
import Skeleton from "../components/pizzasBlock/skeleton";
import Pagination from "../components/Pagination/Pagination";
import { useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectFilter,
  selectSort,
  
} from "../redux/filter/selectors";
import { selectPizza } from "../redux/pizza/selectors";
import { fetchPizzas } from "../redux/pizza/asyncAction";
import{ ParamsPizza, Pizza } from "../redux/pizza/types";
import { setStatePage, setStateValue, setStateFilters } from "../redux/filter/slice";
import { RootState, useAppDispatch } from "../redux/store";

const Home: React.FC = () => {
  const searchParams = useRef(false);
  const isMounted = useRef(false);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const activeIndex = useSelector(selectFilter);
  const selected = useSelector(selectSort);
  const currentPage = useSelector(selectCurrentPage);
  const { items, status } = useSelector(selectPizza);
  const searchInput = useSelector((state: RootState) => state.filter.input);

  const onChangePage = (page: number) => {
    dispatch(setStatePage(page));
  };

  const toggleIndex = React.useCallback((id: number) => {
    dispatch(setStateValue(id));
  },[])

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        activeIndex,
        selected,
        currentPage
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [activeIndex, selected, searchInput, currentPage]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(
        window.location.search.substring(1)
      ) as ParamsPizza;
      
      const sort = sortItemsName.find(
        (obj) => obj.sortProperty === params.sort
      );

      dispatch(
        setStateFilters({
          ...params,
          sort
        })
      );
      searchParams.current = true;
    }
  }, []);

  async function getPizzas() {
    const categories = activeIndex > 0 ? `category=${activeIndex}` : "";
    const sort = selected.sortProperty.replace("-", "");
    const order = selected.sortProperty.includes("-") ? "asc" : "desc";

    dispatch(
      fetchPizzas({ categories, sort, order, currentPage: String(currentPage) })
    );

    window.scrollTo(0, 0);
  }
  useEffect(() => {
    if (!searchParams.current) {
      getPizzas();
    }
    searchParams.current = false;
  }, [activeIndex, selected, searchInput, currentPage]);

  return (
    <>
      <div className="groups-sort">
        <Groups toggleIndex={toggleIndex} activeIndex={activeIndex} />
        <Sort />
      </div>
      {status === "error" ? (
        <div>
          <h2>Произошла ошибка...</h2>
        </div>
      ) : (
        <div className="groups-pizzas">
          {status === "loading"
            ? [...new Array(4)].map((skelet, index) => <Skeleton key={index} />)
            : items
                .filter((item: any) => {
                  if (
                    item.title.toLowerCase().includes(searchInput.toLowerCase())
                  ) {
                    return true;
                  }
                  return false;
                })
                .map((pizza: any ) => (
                  <PizzasBlock
                    id={pizza.id}
                    title={pizza.title}
                    img={pizza.imageUrl}
                    type={pizza.types}
                    size={pizza.sizes}
                    price={pizza.price}
                    key={pizza.id}
                  />
                ))}
        </div>
      )}

      <Pagination onChangePage={onChangePage} />
    </>
  );
};

export default Home;
