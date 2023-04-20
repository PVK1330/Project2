import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { doGetProductList } from '../../axios/api'
import { Button, Table } from 'react-bootstrap'
import { toast } from 'react-toastify'



const TableRow = ({ item }) => {

    const navigate = useNavigate();
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.brand}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.qty}</td>
            <td>
                <Button variant="success" onClick={()=> navigate(`/product/detail/${item.id}`)} >Detail</Button>
            </td>
        </tr>
    )
}

const ProductList = () => {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProduct();

    }, []);


    const loadProduct = async () => {

        try {
            const result = await doGetProductList();
            // console.log(result)
            setProducts(result)
        }
        catch(error){
            toast.error(error.errorMessage)

        }
    }

    return (
        <>
            <h4>Product List</h4>
            <Button type='button' onClick={() => navigate('/product/add')}>Add New Product</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(item => <TableRow key={item.id} item={item} />)}
                </tbody>
            </Table>
        </>
    )
}



export default ProductList;

