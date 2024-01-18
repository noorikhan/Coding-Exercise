import React from "react";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../utils/ProductSlice";

function ProductCard({ prod, isCartProd }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addProduct(prod));
  };

  const handleRemove = () => {
    dispatch(removeProduct(prod));
  };

  return (
    <div className="border m-2 p-4 w-60 h-30">
      <img className="h-[75%]" src={prod.image} alt="prod" />
      <p className="font-semibold">{prod.title}</p>

      {isCartProd ? (
        <>
          <div className="flex justify-between">
            <span className="font-bold">Price: {prod.price} </span>
            <span className="font-bold">Quantity : {prod.prodQuantity}</span>
          </div>
          <button
            className="w-full font-medium bg-green-300 py-2 mb-10 text-center text"
            onClick={handleRemove}
          >
            Remove
          </button>
        </>
      ) : (
        <>
          <p className="font-bold">Price: {prod.price} </p>
          <button
            className="w-full font-medium bg-green-300 py-2 text-center text"
            onClick={handleAdd}
          >
            Add to Cart
          </button>
        </>
      )}
    </div>
  );
}

export default ProductCard;
