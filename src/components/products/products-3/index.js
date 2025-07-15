import React from "react";
import styles from "./product3.module.css";
import { latestProduct, topHundredLeft, topHundredRight } from "../data";
import { two } from "./images";
import Button from "../../button";

function Product3() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.one}>
          <p className={styles.p}>Latest Products</p>

          <div className={styles.parent}>
            {latestProduct.map((latestProduct) => (
              <div className={styles.side} key={latestProduct.id}>
                <div className={styles.img}>
                  <img src={latestProduct.image} alt="" />
                </div>
                <div style={{ color: "black", fontSize: "12px" }}>
                  <p style={{ fontSize: "15px" }}>{latestProduct.name}</p>
                  <p style={{ color: "rgba(0, 0, 0, .4)" }}>
                    {latestProduct.age} <br /> {latestProduct.Location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.two}>
          <div className={styles.left}>
            <div className={styles.each}>
              {/* <div className={styles.matchLabel}>
                <Button title={"buy now"}/>
              </div> */}
              <div className={styles.image}>
                <img src={two} alt="" />
                <Button title="-10%" className={styles.Button} />
                <div className={styles.absolute}>
                  <p>Add to Cart</p>
                </div>
              </div>
              <div className={styles.details}>
                <span>
                  <p style={{ fontWeight: "bold" }}>Cat tent</p>
                  <p style={{ color: "rgba(0, 0, 0, .4)" }}>1 month</p>
                  <p
                    style={{
                      fontSize: "11px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    seller: Joseph <img src={two} alt="" height={"20px"} />
                  </p>
                  <p style={{ color: "chocolate", fontWeight: "bold" }}>
                    #2,500
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div className={styles.right1}></div>
        </div>

        <div className={styles.three}>
          <div className={styles.textDiv}>
            <p className={styles.pa}>Top 100 Appliancies</p>

            <p className={styles.pb}>Shop More</p>
          </div>

          <div
            style={{
              height: "90%",
              display: "flex",
            }}
          >
            <div className={styles.threeone}>
              {topHundredLeft.map((topHundredLeft) => (
                <div className={styles.side}>
                  <div className={styles.img}>
                    <img src={topHundredLeft.image} alt="" />
                  </div>
                  <div style={{ color: "black", fontSize: "12px" }}>
                    <p style={{ fontSize: "15px" }}>{topHundredLeft.name}</p>
                    <p style={{ color: "rgba(0, 0, 0, .4)" }}>
                      {topHundredLeft.age} <br /> {topHundredLeft.Location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.threetwo}>
              {topHundredRight.map((topHundredRight) => (
                <div className={styles.side} key={topHundredRight.id}>
                  <div className={styles.img}>
                    <img src={topHundredRight.image} alt="" />
                  </div>
                  <div style={{ color: "black", fontSize: "12px" }}>
                    <p style={{ fontSize: "15px" }}>{topHundredRight.name}</p>
                    <p style={{ color: "rgba(0, 0, 0, .4)" }}>
                      {topHundredRight.age} <br />{" "}
                      {topHundredRight.Location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Product3;
