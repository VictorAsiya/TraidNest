import React, { useState, useEffect } from "react";
import styles from "./products.module.css";
import { products } from "./data";
// import Button from "../button";

const Product = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  const [userPrompt, setUserPrompt] = useState("");

  const handleFilter = () => {
    const query = userPrompt.toLowerCase();

    const matched = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.condition.toLowerCase().includes(query)
      );
    });

    const unmatched = products.filter((product) => !matched.includes(product));

    const withHighlight = [
      ...matched.map((p) => ({ ...p, isMatched: true })),
      ...unmatched.map((p) => ({ ...p, isMatched: false })),
    ];

    setFilteredProducts(withHighlight);
  };

  return (
    <div className={styles.main}>
      <div className={styles.chat}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            stroke="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
          />
        </svg>
        <div className={styles.input}>
          <span style={{ display: "flex", gap: "1vh" }}>
            <input
              type="text"
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              placeholder="Describe what you want..."
            />

            <button onClick={handleFilter} className={styles.Button}>
              search
            </button>
          </span>
        </div>
      </div>

      <div className={styles.left}>
        <div className={styles.container}>
          <h3 style={{ fontSize: "25px" }}>Samsung J6</h3>

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
                  strokeLinejoin="round"
                  d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21..."
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
                  strokeLinejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08..."
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
            Featured Products
          </p>
          <span style={{ color: "var(--header-color)", cursor: "pointer" }}>
            <p>Popular</p>
            <p>Most Viewed</p>
            <p>Discounted</p>
          </span>
        </div>

        <div className={styles.product}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`${styles.each} ${
                product.isMatched ? styles.highlight : ""
              }`}
            >
              {products.isMatched && (
                <div className={styles.matchLabel}>Match</div>
              )}
              <div className={styles.image}>
                <img src={product.image} alt={product.name} />
                <div className={styles.absolute}>
                  <p>Add to Cart</p>
                </div>
              </div>

              <div className={styles.details}>
                <span>
                  <p>{product.name}</p>
                  <p>{product.age}</p>
                  <p style={{ color: "red" }}>
                    #{product.price.toLocaleString()}
                  </p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
