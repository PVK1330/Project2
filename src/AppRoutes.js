import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import Account from "./layout/Account"
import Login from "./container/Login"
import Main from "./layout/Main"
import Home from './container/Home';
import ForgotPassword from "./container/ForgotPassword";
import Products from './container/products/Products';
import ProductList from './container/products/ProductList';
import AddProducts from './container/products/AddProduct';
import ProductDetails from './container/products/ProductDetails'

const AppRouters = () => {
    return (
        <Routes>
            <Route path="/account" element={<Account />}>
                <Route path="login" element={<Login />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
            </Route>
            <Route path="/" element={<Main />}>
                <Route path="" element={< Home />} />
                <Route path="/product" element={< Products />}>
                    <Route path='' element={<Navigate to="/product/list" />} />
                    <Route path="list" element={< ProductList />} />
                    <Route path="add" element={< AddProducts />} />
                    <Route path="detail/:id" element={< ProductDetails />} />
                </Route>
            </Route>
            <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
    )
}

export default AppRouters;