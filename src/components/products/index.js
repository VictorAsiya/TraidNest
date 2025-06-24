import React, { useState, useEffect, useRef } from "react";
import styles from "./products.module.css";
import { products } from "./data";
import Button from "../button";
import { twentyone } from "./product-images";

const Product = () => {
  const [loading, setLoading] = useState(true);

  // Loading Effect on start

  // useEffect(() => {
  //   const images = Array.from(document.images);
  //   const imagePromises = images.map((img) => {
  //     if (img.complete) return Promise.resolve();
  //     return new Promise((resolve) => {
  //       img.onload = img.onerror = resolve;
  //     });
  //   });

  //   Promise.all(imagePromises).then(() => setLoading(false));
  // }, []);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [userPrompt, setUserPrompt] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  const productRef2 = useRef(null);

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  const handleFilter = () => {
    setSearchClicked(true);
    const query = userPrompt.toLowerCase();
    const stopWords = [
      "i",
      "need",
      "a",
      "an",
      "do",
      "you",
      "have",
      "cheap",
      "the",
      "want",
      "like",
      "to",
    ];
    const keywords = query
      .split(" ")
      .map((w) => w.trim())
      .filter((word) => word.length > 1 && !stopWords.includes(word));

    const matched = products.filter((product) => {
      const text = (
        product.name +
        " " +
        product.description +
        " " +
        product.condition
      ).toLowerCase();

      return keywords.every((word) => text.includes(word));
    });

    const unmatched = products.filter((product) => !matched.includes(product));

    const withHighlight = [
      ...matched.map((p) => ({ ...p, isMatched: true })),
      ...unmatched.map((p) => ({ ...p, isMatched: false })),
    ];

    setFilteredProducts(withHighlight);

    if (productRef2.current) {
      productRef2.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={productRef2} className={styles.main}>
      {/* {loading && (
        <div className={styles.loading}>
          <div className={styles.spinner} />
        </div>
      )} */}
      <div className={styles.chat}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
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
              placeholder="name of product..."
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
                strokeWidth="1"
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
                strokeWidth="1.5"
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
            Featured Products
          </p>
          {searchClicked &&
            filteredProducts.every((product) => !product.isMatched) && (
              <p className={styles.found}>
                No products found matching your search.
              </p>
            )}
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
              {product.isMatched && (
                <div className={styles.matchLabel}>
                  <Button title={"buy now"} />
                </div>
              )}
              <div className={styles.image}>
                <img src={product.image} alt={product.name} />
                <div className={styles.absolute}>
                  <p>Add to Cart</p>
                </div>
              </div>
              <div className={styles.details}>
                <span>
                  <p style={{ fontWeight: "bold" }}>{product.name}</p>
                  <p style={{ color: "rgba(0, 0, 0, .4)" }}>
                    {product.age} ({product.Location})
                  </p>
                  <p style={{ fontSize: "11px" }}>
                    seller: {product.seller}{" "}
                    <img src={product.dp} alt="" height={"12px"} />
                  </p>
                  <p style={{ color: "chocolate", fontWeight: "bold" }}>
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
