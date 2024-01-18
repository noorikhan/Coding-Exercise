import React, { useEffect } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import { data } from "../utils/Data";

function Catalogue() {
  const prods = data;
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <div className="flex justify-start flex-wrap p-4 my-2">
        {prods?.map((prod) => (
          <ProductCard key={prod.id} prod={prod} isCartProd={false} />
        ))}
      </div>
    </>
  );
}

export default Catalogue;
