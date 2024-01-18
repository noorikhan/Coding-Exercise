const CartIcon = ({ num }) => {
  return (
    <div className="relative py-2">
      <div className="t-0 absolute left-4">
        <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
          {num}
        </p>
      </div>
      <img className="pt-2" src={require("../assets/cart.png")} alt="cart" />
    </div>
  );
};

export default CartIcon;
