import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import IceCreamView from "./features/icecream/icecream.jsx";
import UserView from "./features/user/userView";
import CakeView from "./features/cake/cakeView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <IceCreamView />
      <UserView />
      <CakeView />
    </>
  );
}

export default App;
