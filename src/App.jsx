import React, { Fragment, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Checkout from "./pages/checkout/Checkout";
import Profile from "./pages/admin/profile/Profile";
const ManageProduct = lazy(() =>
  import("./pages/admin/manageProduct/ManageProduct")
);
const CreateProduct = lazy(() =>
  import("./pages/admin/createProduct/CreateProduct")
);
const CreateCategory = lazy(() =>
  import("./pages/admin/createCategory/CreateCategory")
);
const Auth = lazy(() => import("./pages/auth/Auth"));
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));
const Brands = lazy(() => import("./pages/brands/Brands"));
const Shop = lazy(() => import("./pages/shop/Shop"));
const ManageCategory = lazy(() => import("./pages/admin/manageCategory/index"));
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
          <Route path="/register" element={<Register />} />
          <Route path="/single/:id" element={<Detail />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/payme" element={<Checkout />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}>
            <Route path="profile" element={<Profile />} />
            <Route path="manageProduct" element={<ManageProduct />} />
            <Route path="createProduct" element={<CreateProduct />} />
            <Route path="manageCategory" element={<ManageCategory />} />
            <Route path="createCategory" element={<CreateCategory />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
