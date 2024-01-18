import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router";

function Cart() {
  const navigate = useNavigate();

  const cartItems = useSelector((store) => store?.product?.cartItems);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className={`flex justify-items-start flex-wrap p-4 my-2`}>
        {cartItems?.map((prod) => (
          <ProductCard key={prod.id} prod={prod} isCartProd={true} />
        ))}
      </div>

      <div
        onClick={handleClick}
        className="font-extrabold cursor-pointer mb-6 text-green-500 flex justify-center text-2xl"
      >
        {cartItems.length <= 0
          ? "Cart is Empty.. Shop Now!"
          : "Contiue Shoping.."}
      </div>
    </>
  );
}

export default Cart;
