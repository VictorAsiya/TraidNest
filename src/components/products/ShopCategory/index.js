import React from "react";
import styles from "./ShopCategory.module.css";
import { one, two, three, four, five, six, seven, eight, nine, ten } from "./images";

function ShopCategory() {
  return (
    <div className={styles.parent}>

      <p className={styles.p} style={{}}>Shop by Category</p>
      <span className={styles.span}>
        <div className={styles.products}>
          <img src={one} alt="" />
          <p className={styles.product_details}>Washing Machine</p>
        </div>
        <div className={styles.products}>
          <img src={two} alt="" />
          <p className={styles.product_details}>Bags</p>
        </div>
        <div className={styles.products}>
          <img src={three} alt="" />
          <p className={styles.product_details}>Fans</p>
        </div>
        <div className={styles.products}>
          <img src={four} alt="" />
          <p className={styles.product_details}>Stove/Cooker</p>
        </div>
        <div className={styles.products}>
          <img src={five} alt="" />
          <p className={styles.product_details}>Laptops</p>
        </div>
        <div className={styles.products}>
          <img src={six} alt="" />
          <p className={styles.product_details}>Phones</p>
        </div>
        <div className={styles.products}>
          <img src={seven} alt="" />
          <p className={styles.product_details}>Clothes</p>
        </div>
        <div className={styles.products}>
          <img src={eight} alt="" />
          <p className={styles.product_details}>Shoes</p>
        </div>
        <div className={styles.products}>
          <img src={nine} alt="" />
          <p className={styles.product_details}>Kitchen Items</p>
        </div>
        <div className={styles.products}>
          <img src={ten} alt="" />
          <p className={styles.product_details}>Games</p>
        </div>
      </span>
    </div>
  );
}

export default ShopCategory;
