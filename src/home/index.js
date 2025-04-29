import React from "react";
import * as SC from "../style";
import styles from "./home.module.css";
import Button from "../components/button";

function Home() {
  return (
    <main>
      <SC.Section>
        <SC.FixedDiv></SC.FixedDiv>
        <div className={styles.filter}>
          <ul>
            <li>
              Electronics
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={styles.size}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            <li>Fashion
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={styles.size}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            <li>Appliances
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={styles.size}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            <li>Furniture
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={styles.size}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
          </ul>

          <div>
            <Button title="Login/SignUp" className={Button} />
          </div>
        </div>

        <div className={styles.text_box}>
          <h1>
            Buy and Sell <br /> with ease
          </h1>
          <p>-Register Now and select from List of amazing Products-</p>
        </div>
      </SC.Section>

      <div className={styles.product_div}>
        <div className={styles.span_div}>
          {/* <img src="/images/two.png" alt="" /> */}
        </div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}

export default Home;
