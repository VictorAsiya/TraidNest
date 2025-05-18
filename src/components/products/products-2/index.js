import React from "react";
import styles from "./products2.module.css";
import Button from "../../button";
import { four, one, three, two, five, six, seven, eight } from "./images";

function Product2() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.one}>
          <span
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "5vh",
              alignItems: "center",
              width: "100%",
            }}
          >
            <p
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                lineHeight: "7vh",
              }}
            >
              Get Discount on <br /> these Products
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                backgroundColor: "var(--product-color)",
                width: "80px",
                height: "80px",
              }}
            >
              <p
                style={{
                  padding: "0",
                  margin: "0",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Save up to
              </p>
              <p
                style={{
                  padding: "0",
                  margin: "0",
                  fontSize: "24px",
                  fontWeight: "bolder",
                }}
              >
                30%
              </p>
            </div>
          </span>
          <Button title={"Buy Now"} />
          <div className={styles.images}>
            <img src={one} alt="" />
            <img src={two} alt="" />
          </div>
        </div>
        <div className={styles.two}>
          <div className={styles.each}>
            {/* <div className={styles.matchLabel}>
              <Button title={"buy now"} />
            </div> */}
            <div className={styles.image}>
              <img src={three} alt="" />
              <div className={styles.absolute}>
                <p>Add to Cart</p>
              </div>
            </div>
            <div className={styles.details}>
              <span>
                <p style={{ fontWeight: "bold" }}>Green Magic </p>
                <p style={{ color: "rgba(0, 0, 0, .4)" }}>1 month</p>
                <p
                  style={{
                    fontSize: "11px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  seller: Peter <img src={one} alt="" height={"20px"} />
                </p>
                <p style={{ color: "chocolate", fontWeight: "bold" }}>#400</p>
              </span>
            </div>
          </div>
          <div className={styles.each}>
            {/* <div className={styles.matchLabel}>
              <Button title={"buy now"} />
            </div> */}
            <div className={styles.image}>
              <img src={four} alt="" />
              <div className={styles.absolute}>
                <p>Add to Cart</p>
              </div>
            </div>
            <div className={styles.details}>
              <span>
                <p style={{ fontWeight: "bold" }}>Rich Dad/Poor Dad</p>
                <p style={{ color: "rgba(0, 0, 0, .4)" }}>6 months</p>
                <p
                  style={{
                    fontSize: "11px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  seller: Joseph <img src={one} alt="" height={"20px"} />
                </p>
                <p style={{ color: "chocolate", fontWeight: "bold" }}>#2,500</p>
              </span>
            </div>
          </div>
          <div className={`${styles.each} ${styles.last}`}>
            {/* <div className={styles.matchLabel}>
              <Button title={"buy now"} />
            </div> */}
            <div className={styles.image}>
              <img src={five} alt="" />
              <div className={styles.absolute}>
                <p>Add to Cart</p>
              </div>
            </div>
            <div className={styles.details}>
              <span>
                <p style={{ fontWeight: "bold" }}>Black & White</p>
                <p style={{ color: "rgba(0, 0, 0, .4)" }}>Brand New</p>
                <p
                  style={{
                    fontSize: "11px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  seller: Victor <img src={one} alt="" height={"20px"} />
                </p>
                <p style={{ color: "chocolate", fontWeight: "bold" }}>#4,200</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <p
          className={styles.p}
          style={{
            color: "black",
            padding: "1vh 4vh",
            fontSize: "3vh",
            fontWeight: "bold",
          }}
        >
          Latest In Gaming
        </p>

        <div className={styles.parent}>
          <div className={styles.side}>
            <div className={styles.img}>
              <img src={six} alt="" />
            </div>
            <div style={{ color: "black", fontSize: "12px" }}>
              <p style={{ fontSize: "15px" }}>
                Best Gaming <br /> gadgets
              </p>
              <p style={{ color: "rgba(0, 0, 0, .4)" }}>
                2Months Old <br /> Enugu
              </p>
            </div>
          </div>

          <div className={styles.side}>
            <div className={styles.img}>
              <img src={seven} alt="" />
            </div>
            <div style={{ color: "black", fontSize: "12px" }}>
              <p style={{ fontSize: "15px" }}>
                Spelling <br /> Pizza
              </p>
              <p style={{ color: "rgba(0, 0, 0, .4)" }}>
                4Months Old <br /> Onitsha
              </p>
            </div>
          </div>

          <div className={styles.side}>
            <div className={styles.img}>
              <img src={eight} alt="" />
            </div>
            <div style={{ color: "black", fontSize: "12px" }}>
              <p style={{ fontSize: "15px" }}>
                Gangster <br /> Lord
              </p>
              <p style={{ color: "rgba(0, 0, 0, .4)" }}>
                1year Old <br /> Lagos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product2;
