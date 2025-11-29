import { useDispatch, useSelector } from "react-redux";
import { ordered, reStock } from "./cakeSlice";

const CakeView = () => {
  const noOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <div style={{ padding: "23px", margin: "10px" }}>
        <div>no of cakes- {noOfCakes}</div>
        <button onClick={() => dispatch(ordered())}>order cake</button>
        <button onClick={() => dispatch(reStock(5))}>restock </button>
      </div>
    </>
  );
};

export default CakeView;
