import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CartIcon from "./CartIcon";

function Header() {
  const cartLength = useSelector((store) => store?.product?.cartItems?.length);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart");
  };

  return (
    <div className="flex justify-between w-full px-2 py-2 border bg-green-200">
      <p className="text-xl pt-4 font-bold">Code Example</p>

      <div className="px-4" onClick={handleClick}>
        <CartIcon num={cartLength} />
      </div>
    </div>
  );
}

export default Header;
