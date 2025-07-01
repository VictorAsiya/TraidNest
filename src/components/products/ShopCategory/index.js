import React from "react";
import styles from "./ShopCategory.module.css";
import {ShopCategoryData} from '../data'

function ShopCategory() {
  return (
    <div className={styles.parent}>

      <p className={styles.p}>Shop by Category</p>
      <span className={styles.span}>
        {ShopCategoryData.map((ShopCategoryData)=>(
          <div className={styles.products}>
          <img src={ShopCategoryData.image} alt="{ShopCategoryData.category}" />
          <p className={styles.product_details}>{ShopCategoryData.category}</p>
        </div>
        ))}
      </span>
    </div>
  );
}

export default ShopCategory;
