import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  console.log("first");
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
