// src/hooks/useProductFilter.ts
import { useState, useEffect, useRef } from "react";
import { products } from "../products/data";

export function useProductFilter() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [userPrompt, setUserPrompt] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const productRef = useRef(null);

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  const handleFilter = () => {
    setSearchClicked(true);
    const query = userPrompt.toLowerCase();
    const stopWords = ["i", "need", "a", "an", "do", "you", "have", "cheap", "the", "want", "like", "to"];
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

    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    filteredProducts,
    userPrompt,
    setUserPrompt,
    handleFilter,
    searchClicked,
    productRef,
  };
}
