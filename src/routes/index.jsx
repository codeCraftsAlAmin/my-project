import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../components/About";
import Cart from "../components/Cart";
import Contact from "../components/Contact";
import Error from "../components/Error";
import Home from "../components/Home";
import Products from "../components/Products";
import SingleProduct from "../components/SingleProduct";
import Header from "../layouts/Header";

const Index = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
