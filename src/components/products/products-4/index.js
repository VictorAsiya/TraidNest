import React from "react";
import styles from "./products-4.module.css";
import Button from "../../button";
import { product4Data } from "../data";

function Product4() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {product4Data.map((product) => (
          <div className={styles.one} key={product.id}>
            <div
              className={styles.top}
              style={{ backgroundColor: product.bg }}
            >
              <img src={product.image} alt="" />
            </div>
        
            <div
              className={styles.bottom}
              style={{ backgroundColor: product.bg }}
            >
              <h2>{product.name}</h2>
              <p style={{ textAlign: "center" }}>{product.description}</p>
              <Button title="Shop Now" />
            </div>
          </div>
        ))}
        
      </div>
    </main>
  );
}

export default Product4;
