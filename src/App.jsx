import React, { Fragment, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
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
          <Route path="/admin" element={<Admin />} />
          <Route path="/single/:id" element={<Detail />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
