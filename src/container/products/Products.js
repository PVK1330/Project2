import React from 'react'
import { Outlet } from 'react-router-dom'

const Products = () => {
    return (
        <>
            <h1>Products Management</h1>
            <Outlet />
        </>
    )
}


export default Products;