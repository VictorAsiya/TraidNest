import React from "react";
import Why from "../../components/why_us";
import Product from "../../components/products/product-1";
import Product2 from "../../components/products/products-2";
import FirstSection from "../../components/FirstSection";
import Product3 from "../../components/products/products-3";
import ShopCategory from "../../components/products/ShopCategory";
import Product4 from "../../components/products/products-4";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/navBar/navBar";
import AllProducts from "../../components/products/all-products";

function Home() {
  return (
    <main className="page-container">
      <NavBar />
      <div className="content-wrap">
        <FirstSection />
        <Why />
        <Product />
        <Product2 />
        <Product3 />
        <ShopCategory />
        <Product4 />
        <AllProducts />
      </div>
      <Footer />
    </main>
  );
}

export default Home;
