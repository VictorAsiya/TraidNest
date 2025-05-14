import React, { useState, useEffect } from "react";
import styles from "./chat.module.css";
import Button from "../button";
import { products } from "../products/data";
import { products as allProducts } from "react";

function Chat() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  useEffect(() => {
    setFilteredProducts(allProducts);
  }, []);

  

  return (
    <div>
        
    </div>
  );
}

export default Chat;
