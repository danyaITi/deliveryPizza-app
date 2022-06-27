import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./pizzasBlock.module.scss";

const Skeleton = () => (
  <ContentLoader
    className={styles.second}
    speed={2}
    width={260}
    height={440}
    viewBox="0 0 260 440"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="115" cy="115" r="115" />
    <rect x="20" y="267" rx="0" ry="0" width="180" height="24" />
    <rect x="6" y="311" rx="10" ry="10" width="207" height="68" />
    <rect x="0" y="397" rx="0" ry="0" width="79" height="34" />
    <rect x="110" y="400" rx="30" ry="30" width="125" height="40" />
  </ContentLoader>
);

export default Skeleton;
