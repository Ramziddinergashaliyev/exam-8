import React, { Fragment, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ManageProduct from "./pages/admin/manageProduct/ManageProduct";
import CreateProduct from "./pages/admin/createProduct/CreateProduct";
import CreateCategory from "./pages/admin/createCategory/CreateCategory";
import Login from "./pages/login/Login";
import Auth from "./pages/auth/Auth";
import Register from "./pages/register/Register";
import NewArrivals from "./pages/new-arrivals/NewArrivals";
import Brands from "./pages/brands/Brands";
import ManageCategory from "./pages/admin/manageCategory/ManageCategory";
const Shop = lazy(() => import("./pages/shop/Shop"));
const Home = lazy(() => import("./pages/home/Home"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const Admin = lazy(() => import("./pages/admin/Admin"));
const Detail = lazy(() => import("./pages/detail/Detail"));
const Wishlist = lazy(() => import("./pages/wishlist/Wishlist"));

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/single/:id" element={<Detail />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/new" element={<NewArrivals />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/" element={<Auth />}>
            <Route path="admin" element={<Admin />}>
              <Route path="manageProduct" element={<ManageProduct />} />
              <Route path="createProduct" element={<CreateProduct />} />
              <Route path="manageCategory" element={<ManageCategory />} />
              <Route path="createCategory" element={<CreateCategory />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
