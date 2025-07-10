// import React from "react";
// import Why from "../../components/why_us";
// import Product from "../../components/products/product-1";
// import Product2 from "../../components/products/products-2";
// import FirstSection from "../../components/FirstSection";
// import Product3 from "../../components/products/products-3";
// import ShopCategory from "../../components/products/ShopCategory";
// import Product4 from "../../components/products/products-4";
// import Footer from "../../components/footer/footer";
// import NavBar from "../../components/navBar/navBar";
// import AllProducts from "../../components/products/all-products";

// function Home() {
//   return (
//     <main className="page-container">
//       <NavBar />
//       <div className="content-wrap">
//         <FirstSection />
//         <Why />
//         <Product />
//         <Product2 />
//         <Product3 />
//         <ShopCategory />
//         <Product4 />
//         <AllProducts />
//       </div>
//       <Footer />
//     </main>
//   );
// }

// export default Home;

import React, { useState, useRef } from "react";
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";
import FirstSection from "../../components/FirstSection";
import Why from "../../components/why_us";
import Product from "../../components/products/product-1";
import Product2 from "../../components/products/products-2";
import Product3 from "../../components/products/products-3";
import ShopCategory from "../../components/products/ShopCategory";
import Product4 from "../../components/products/products-4";
import AllProducts from "../../components/products/all-products";

import { products } from "../../components/products/data"; // make sure path is correct

function Home() {
  const [userPrompt, setUserPrompt] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchClicked, setSearchClicked] = useState(false);
  const productRef2 = useRef(null);

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
    <main className="page-container">
      <NavBar
        userPrompt={userPrompt}
        setUserPrompt={setUserPrompt}
        handleFilter={handleFilter}
      />

      <div className="content-wrap">
        <FirstSection />
        <Why />
        <Product />
        <Product2 />
        <Product3 />
        <ShopCategory />
        <Product4 />

        {/* AI-filterable products */}
        <AllProducts
          filteredProducts={filteredProducts}
          productRef2={productRef2}
          userPrompt={userPrompt}
          setUserPrompt={setUserPrompt}
          handleFilter={handleFilter}
          searchClicked={searchClicked}
        />
      </div>

      <Footer />
    </main>
  );
}

export default Home;
