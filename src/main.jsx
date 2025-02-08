import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import TodoScreen from "./screens/TodoScreen.jsx";
import EditTodoScreen from "./screens/EditTodoScreen.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="" element={<PrivateRoute />}>
        <Route index path="/" element={<HomeScreen />} />
        <Route path="/todo/:id" element={<TodoScreen />} />
        <Route path="/todo/edit/:id" element={<EditTodoScreen />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
