import React from "react";
import * as SC from "../../style";
import styles from "./index.module.css";
import Button from "../button";
import Categories from "../categories";
import { adSectionBottom, adSectionTop, bestPicks } from "../products/data";

function FirstSection() {
  return (
    <div>
      <SC.FixedDiv className={styles.FixedDiv}></SC.FixedDiv>

      <section className={styles.sectionOne}>
        <Categories className={styles.filter} />

        <div className={styles.text_box}>
          <h1>
            Buy and Sell <br /> with ease
          </h1>
          <p>-Register now and shop from List of amazing Products-</p>
        </div>
      </section>

      <div className={styles.product_div}>
        <div className={styles.left_div}>
          <h1>Fairly Used Hisense Fridge</h1>
          <p className={styles.p}>#50,000</p>
          <Button title="Buy Now" className={styles.Button} />
        </div>

        <div className={styles.right_div}>
          <div className={styles.one}>
            <div className={styles.one_left}>
              <p>Special Offer</p>
              <h1>Soft Cushon Chair</h1>
              <p className={styles.p}>#28,000</p>
              <Button title="Buy Now" className={styles.Button} />
            </div>

            <div className={styles.one_right}>
              <h3>Hot Sales</h3>
              <div className={styles.all_products}>
                <div className={styles.top}>
                  {adSectionTop.map((adSectionTop) => (
                    <div className={styles.products} key={adSectionTop.id}>
                      <img src={adSectionTop.image} alt="" />
                      <p className={styles.product_details}>
                        {adSectionTop.name}
                      </p>
                    </div>
                  ))}
                </div>

                <div className={styles.bottom}>
                  {adSectionBottom.map((adSectionBottom) => (
                    <div className={styles.products}>
                      <img src={adSectionBottom.image} alt="" />
                      <p className={styles.product_details}>
                        {adSectionBottom.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.two}>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 20px",
                margin: "0",
                height: "5vh",
              }}
            >
              <p>Best Picks for You</p>
              <p>Show More</p>
            </span>
            <div className={styles.listing}>
              {bestPicks.map((bestPicks) => (
                <div className={styles.each} key={bestPicks.id}>
                  <Button title="Buy Now" className={styles.Button} />
                  <div>
                    <img
                      src={bestPicks.image}
                      alt=""
                      style={{ height: "60px" }}
                    />
                  </div>
                  <div>
                    <p className={styles.product_details}>{bestPicks.name}</p>
                    <p style={{ margin: "0", color: "red", fontSize: "12px" }}>
                      {bestPicks.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
