import React from "react";
import * as SC from "../../style";
import styles from "./index.module.css";
import Button from "../button";
import Categories from "../categories";
import {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
} from "../image-exports";
import { fifteen, fourteen, thirteen } from "../products/product-images";

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
                  <div className={styles.products}>
                    <img src={one} alt="" />
                    <p className={styles.product_details}>Washing Machine</p>
                  </div>
                  <div className={styles.products}>
                    <img src={seven} alt="" />
                    <p className={styles.product_details}>HP Laptop</p>
                  </div>
                  <div className={styles.products}>
                    <img src={three} alt="" />
                    <p className={styles.product_details}>Air Conditioner</p>
                  </div>
                  <div className={styles.products}>
                    <img src={four} alt="" />
                    <p className={styles.product_details}>Ceiling Fan</p>
                  </div>
                </div>

                <div className={styles.bottom}>
                  <div className={styles.products}>
                    <img src={five} alt="" />
                    <p className={styles.product_details}>Hand Saw</p>
                  </div>
                  <div className={styles.products}>
                    <img src={six} alt="" />
                    <p className={styles.product_details}>Redmi Q5</p>
                  </div>
                  <div className={styles.products}>
                    <img src={two} alt="" />
                    <p className={styles.product_details}>Microwave</p>
                  </div>
                  <div className={styles.products}>
                    <img src={eight} alt="" />
                    <p className={styles.product_details}>Behringer Mick</p>
                  </div>
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
              <div className={styles.each}>
                <Button title="Buy Now" className={styles.Button} />
                <div>
                  <img src={nine} alt="" style={{ height: "60px" }} />
                </div>
                <div>
                  <p className={styles.product_details}>Handbag</p>
                  <p style={{ margin: "0", color: "red", fontSize: "12px" }}>
                    #5,000
                  </p>
                </div>
              </div>

              <div className={styles.each}>
                <Button title="Buy Now" className={styles.Button} />
                <div>
                  <img src={ten} alt="" style={{ height: "60px" }} />
                </div>
                <div>
                  <p className={styles.product_details}>Nike Sneaker</p>
                  <p style={{ margin: "0", color: "red", fontSize: "12px" }}>
                    #5,000
                  </p>
                </div>
              </div>

              <div className={styles.each}>
                <Button title="Buy Now" className={styles.Button} />
                <div>
                  <img src={eleven} alt="" style={{ height: "60px" }} />
                </div>
                <div>
                  <p className={styles.product_details}> Knife Rack</p>
                  <p style={{ margin: "0", color: "red", fontSize: "12px" }}>
                    #5,000
                  </p>
                </div>
              </div>

              <div className={styles.each}>
                <Button title="Buy Now" className={styles.Button} />
                <div>
                  <img src={twelve} alt="" style={{ height: "60px" }} />
                </div>
                <div>
                  <p className={styles.product_details}>LG TV</p>
                  <p style={{ margin: "0", color: "red", fontSize: "12px" }}>
                    #5,000
                  </p>
                </div>
              </div>

              <div className={styles.each}>
                <Button title="Buy Now" className={styles.Button} />
                <div>
                  <img src={thirteen} alt="" style={{ height: "60px" }} />
                </div>
                <div>
                  <p className={styles.product_details}>Generator</p>
                  <p style={{ margin: "0", color: "red", fontSize: "12px" }}>
                    #5,000
                  </p>
                </div>
              </div>

              <div className={styles.each}>
                <Button title="Buy Now" className={styles.Button} />
                <div>
                  <img src={fourteen} alt="" style={{ height: "50px" }} />
                </div>
                <div>
                  <p className={styles.product_details}>Drum Set</p>
                  <p style={{ margin: "0", color: "red", fontSize: "12px" }}>
                    #5,000
                  </p>
                </div>
              </div>

              <div className={styles.each}>
                <Button title="Buy Now" className={styles.Button} />
                <div>
                  <img src={fifteen} alt="" style={{ height: "60px" }} />
                </div>
                <div>
                  <p className={styles.product_details}>Wrist Watch</p>
                  <p style={{ margin: "0", color: "red", fontSize: "12px" }}>
                    #5,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
