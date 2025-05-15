// type ProductListProps = {
//   products: typeof products; // adjust type based on your product structure
// };

// const ProductList = ({ products }: ProductListProps) => {
//   return (
//     <div className={styles.product}>
//       {products.length === 0 ? (
//         <p style={{ padding: "2rem", textAlign: "center", color: "red" }}>
//           No products found matching your search.
//         </p>
//       ) : (
//         products.map((product) => (
//           <div
//             key={product.id}
//             className={`${styles.each} ${
//               product.isMatched ? styles.highlight : ""
//             }`}
//           >
//             {product.isMatched && (
//               <div className={styles.matchLabel}>
//                 <Button title={"buy now"} />
//               </div>
//             )}
//             <div className={styles.image}>
//               <img src={product.image} alt={product.name} />
//               <div className={styles.absolute}>
//                 <p>Add to Cart</p>
//               </div>
//             </div>

//             <div className={styles.details}>
//               <span>
//                 <p>{product.name}</p>
//                 <p>{product.age}</p>
//                 <p style={{ color: "red" }}>
//                   #{product.price.toLocaleString()}
//                 </p>
//               </span>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };
