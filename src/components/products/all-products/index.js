// import React from "react";
// import { useState, useEffect, useRef } from "react";
// import styles from "./all-products.module.css";
// import { products } from "../data";
// import Button from "../../../components/button";

// function AllProducts() {
//   const [loading, setLoading] = useState(true);

//   // Loading Effect on start

//   // useEffect(() => {
//   //   const images = Array.from(document.images);
//   //   const imagePromises = images.map((img) => {
//   //     if (img.complete) return Promise.resolve();
//   //     return new Promise((resolve) => {
//   //       img.onload = img.onerror = resolve;
//   //     });
//   //   });

//   //   Promise.all(imagePromises).then(() => setLoading(false));
//   // }, []);

//   const [filteredProducts, setFilteredProducts] = useState(products);
//   const [userPrompt, setUserPrompt] = useState("");
//   const [searchClicked, setSearchClicked] = useState(false);

//   const productRef2 = useRef(null);

//   useEffect(() => {
//     setFilteredProducts(products);
//   }, []);

//   const handleFilter = () => {
//     setSearchClicked(true);
//     const query = userPrompt.toLowerCase();
//     const stopWords = [
//       "i",
//       "need",
//       "a",
//       "an",
//       "do",
//       "you",
//       "have",
//       "cheap",
//       "the",
//       "want",
//       "like",
//       "to",
//     ];
//     const keywords = query
//       .split(" ")
//       .map((w) => w.trim())
//       .filter((word) => word.length > 1 && !stopWords.includes(word));

//     const matched = products.filter((product) => {
//       const text = (
//         product.name +
//         " " +
//         product.description +
//         " " +
//         product.condition
//       ).toLowerCase();

//       return keywords.every((word) => text.includes(word));
//     });

//     const unmatched = products.filter((product) => !matched.includes(product));

//     const withHighlight = [
//       ...matched.map((p) => ({ ...p, isMatched: true })),
//       ...unmatched.map((p) => ({ ...p, isMatched: false })),
//     ];

//     setFilteredProducts(withHighlight);

//     if (productRef2.current) {
//       productRef2.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <main ref={productRef2} className={styles.main}>

//       {/* {loading && (
//         <div className={styles.loading}>
//           <div className={styles.spinner} />
//         </div>
//       )} */}

//       {/* Chat Icon */}
//       <div className={styles.chat}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="2"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
//           />
//         </svg>
//         <div className={styles.input}>
//           <span style={{ display: "flex", gap: "1vh" }}>
//             <input
//               type="text"
//               value={userPrompt}
//               onChange={(e) => setUserPrompt(e.target.value)}
//               placeholder="name of product..."
//             />
//             <button onClick={handleFilter} className={styles.Button}>
//               search
//             </button>
//           </span>
//         </div>
//       </div>

//       <div className={styles.parent}>
//         <p className={styles.p}>More recommended products</p>

//         {searchClicked &&
//           filteredProducts.every((product) => !product.isMatched) && (
//             <p className={styles.found}>
//               No products found matching your search.
//             </p>
//           )}

//         <div className={styles.product}>
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className={`${styles.each} ${
//                 product.isMatched ? styles.highlight : ""
//               }`}
//             >
//               {product.isMatched && (
//                 <div className={styles.matchLabel}>
//                   <Button title={"buy now"} />
//                 </div>
//               )}
//               <div className={styles.image}>
//                 <img src={product.image} alt={product.name} />
//                 <div className={styles.absolute}>
//                   <p>Add to Cart</p>
//                 </div>
//               </div>
//               <div className={styles.details}>
//                 <span>
//                   <p style={{ fontWeight: "bold" }}>{product.name}</p>
//                   <p style={{ color: "rgba(0, 0, 0, .4)" }}>
//                     {product.age} ({product.Location})
//                   </p>
//                   <p style={{ fontSize: "11px" }}>
//                     seller: {product.seller}{" "}
//                     <img src={product.dp} alt="" height={"12px"} />
//                   </p>
//                   <p style={{ color: "chocolate", fontWeight: "bold" }}>
//                     #{product.price.toLocaleString()}
//                   </p>
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

// export default AllProducts;

import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "./all-products.module.css";
import { products } from "../data";
import Button from "../../../components/button";

function AllProducts({
  filteredProducts,
  productRef2,
  userPrompt,
  setUserPrompt,
  handleFilter,
  searchClicked,
}) {
  return (
    <main ref={productRef2} className={styles.main}>
      
      {/* Chat-like search UI */}
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

      <div className={styles.parent}>
        <p className={styles.p}>More recommended products</p>
        {searchClicked && filteredProducts.every((p) => !p.isMatched) && (
          <p className={styles.found}>
            No products found matching your search.
          </p>
        )}
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
                  <p>
                    <strong>{product.name}</strong>
                  </p>
                  <p>
                    {product.age} ({product.Location})
                  </p>
                  <p>
                    seller: {product.seller}{" "}
                    <img src={product.dp} alt="" height="12px" />
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
    </main>
  );
}
export default AllProducts;
