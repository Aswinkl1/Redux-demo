import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderIceCream, restock } from "./icecream";

const IceCreamView = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <>
      <div>no of ice creams - {numOfIceCream} </div>
      <button onClick={() => dispatch(orderIceCream())}>order</button>
      <button onClick={() => dispatch(restock(5))}>restock</button>
    </>
  );
};

export default IceCreamView;
