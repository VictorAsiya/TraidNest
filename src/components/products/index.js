import React from "react";
import styles from "./products.module.css";
import {
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
  eighteen,
  nineteen,
  twenty,
  twentyone,
  twentytwo,
  twentythree,
} from "./product-images";

const Product = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.container}>
          <h3 style={{fontSize: '25px'}}>Samsung J6</h3>

          <span>
            <div className={styles.contents}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className={styles.battery}
              >
                <path
                  stroke="round"
                  strokeLinejoin="round"
                  d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h6.75V15H4.5v-4.5ZM3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z"
                />
              </svg>
              <p>
                2days <br />
                battery life
              </p>
            </div>

            <div className={styles.contents}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className={styles.battery}
              >
                <path
                  stroke="round"
                  strokeLinejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>

              <p>
                100% <br />
                Durable
              </p>
            </div>
          </span>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.write}>
          <p
            style={{
              fontWeight: "800",
              fontSize: "20px",
              color: "var(--header-color)",
            }}
          >
            Feautured Products
          </p>
          <span style={{ color: "var(--header-color)", cursor: "pointer" }}>
            <p>Popular</p>
            <p>Most Viewed</p>
            <p>Discounted</p>
          </span>
        </div>
        
        <div className={styles.product}>
          <div className={styles.each}>
            <div className={styles.image}>
              <img src={thirteen} alt="" />
              <div className={styles.absolute}>
                <p>Add to Cart</p>
              </div>
            </div>

            <div className={styles.details}>
              <span>
                <p>Generator</p>
                <p>1 year old</p>
                <p style={{ color: "red" }}>#20,000</p>
              </span>
            </div>
          </div>

          <div className={styles.each}>
            <div className={styles.image}>
              <img src={fourteen} alt="" />

              <div className={styles.absolute}>
                <p>Add to Cart</p>
              </div>
            </div>

            <div className={styles.details}>
              <span>
                <p>Drum Set</p>
                <p>Good as new</p>
                <p style={{ color: "red" }}>#150,000</p>
              </span>
            </div>
          </div>

          <div className={styles.each}>
            <div className={styles.image}>
              <img src={fifteen} alt="" />

              <div className={styles.absolute}>
                <p>Add to Cart</p>
              </div>
            </div>

            <div className={styles.details}>
              <span>
                <p>Wrist Watch</p>
                <p>4 Months old</p>
                <p style={{ color: "red" }}>#23,000</p>
              </span>
            </div>
          </div>

          <div className={styles.each}>
            <div className={styles.image}>
              <img src={sixteen} alt="" />

              <div className={styles.absolute}>
                <p>Add to Cart</p>
              </div>
            </div>

            <div className={styles.details}>
              <span>
                <p>Chair</p>
                <p>1 year old</p>
                <p style={{ color: "red" }}>#5,000</p>
              </span>
            </div>
          </div>

          <div className={styles.each}>
            <div className={styles.image}>
              <img src={seventeen} alt="" />

              <div className={styles.absolute}>
                <p>Add to Cart</p>
              </div>
            </div>

            <div className={styles.details}>
              <span>
                <p>Blender</p>
                <p>Good as New</p>
                <p style={{ color: "red" }}>#10,000</p>
              </span>
            </div>
          </div>

          <div className={styles.each}>
            <div className={styles.image}>
              <img src={eighteen} alt="" />

              <div className={styles.absolute}>
                <p>Add to Cart</p>
              </div>
            </div>

            <div className={styles.details}>
              <span>
                <p>Gas Cylinder</p>
                <p>3 years old</p>
                <p style={{ color: "red" }}>#25,000</p>
              </span>
            </div>
          </div>

          <div className={styles.each}>
            <div className={styles.image}>
              <img src={nineteen} alt="" />

              <div className={styles.absolute}>
                <p>Add to Cart</p>
              </div>
            </div>

            <div className={styles.details}>
              <span>
                <p>Canon 4D</p>
                <p>4 years old</p>
                <p style={{ color: "red" }}>#600,000</p>
              </span>
            </div>
          </div>

          <div className={styles.each}>
            <div className={styles.image}>
              <img src={twenty} alt="" />

              <div className={styles.absolute}>
                <p>Add to Cart</p>
              </div>
            </div>

            <div className={styles.details}>
              <span>
                <p>Tripod Stand</p>
                <p>2 years old</p>
                <p style={{ color: "red" }}>#15,000</p>
              </span>
            </div>
          </div>

          <div className={styles.each}>
            <div className={styles.image}>
              <img src={twentythree} alt="" />

              <div className={styles.absolute}>
                <p>Add to Cart</p>
              </div>
            </div>

            <div className={styles.details}>
              <span>
                <p>Samsung Laptop</p>
                <p>10 Months old</p>
                <p style={{ color: "red" }}>#230,000</p>
              </span>
            </div>
          </div>

          <div className={styles.each}>
            <div className={styles.image}>
              <img src={twentytwo} alt="" />

              <div className={styles.absolute}>
                <p>Add to Cart</p>
              </div>
            </div>

            <div className={styles.details}>
              <span>
                <p>PS 4 Console</p>
                <p>1 Year old</p>
                <p style={{ color: "red" }}>#630,000</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
