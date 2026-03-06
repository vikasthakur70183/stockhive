import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/Auth/AuthLayout";
import MainLayout from "../layouts/Main/MainLayout";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home/Home";
import Inventory from "../pages/Inventory/Inventory";
import Reports from "../pages/Reports/Reports";
import Suppliers from "../pages/Suppliers/Suppliers";
import Orders from "../pages/Orders/Orders";
import ManageStore from "../pages/ManageStore/ManageStore";
import Settings from "../pages/Settings/Settings";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
  {
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/inventory", element: <Inventory /> },
      { path: "/reports", element: <Reports /> },
      { path: "/suppliers", element: <Suppliers /> },
      { path: "/orders", element: <Orders /> },
      { path: "/manage-store", element: <ManageStore /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
]);

export default router;
