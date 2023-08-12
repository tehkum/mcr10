import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import Departments from "../pages/Departments";
import Products from "../pages/Products";
import Product from "../pages/product";
import AddNew from "../pages/AddNew";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dept" element={<Departments />} />
      <Route path="/products/:cat" element={<Products />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/add-new" element={<AddNew />} />
    </Routes>
  );
}
