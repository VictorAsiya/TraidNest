import React from "react";
import styles from "./products-4.module.css";
import Button from "../../button";
import { one, two, three } from "./image";     

function Product4() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.one}>
          <div className={styles.top}>
            <img src={one} alt="" />
          </div>

          <div className={styles.bottom}>
            <h2>Next Level Style</h2>
            <p style={{ textAlign: "center" }}>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              molestias corrupti doloribus umquam.
            </p>
            <Button title='Shop Now'/>
          </div>
        </div>

        <div className={styles.two}>
          <div className={styles.top}>
                        <img src={two} alt="" />

          </div>

          <div className={styles.bottom}>
            <h2 style={{color: 'var(--product)'}}>Superb Home Theater</h2>
            <p style={{ textAlign: "center" }}>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              molestias corrupti doloribus umquam.
            </p>
            <Button title='Shop Now'/>
          </div>
        </div>

        <div className={styles.three}>
          <div className={styles.top}>
            <img src={three} alt="" />
          </div>

          <div className={styles.bottom}>
            <h2>Beauty Hair Dryer</h2>
            <p style={{ textAlign: "center" }}>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              molestias corrupti doloribus umquam.
            </p>
            <Button title='Shop Now'/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Product4;
