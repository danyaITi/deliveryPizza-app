import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Cart from "./components/Pages/cart/Cart";
import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/notFound";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <section className="header">
        <div className="header-content">
          <Header />
        </div>
      </section>
      <section className="body">
        <div className="body-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </section>
    </div>
  );
}
