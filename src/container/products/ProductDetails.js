import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { doGetProduct } from "../../axios/api";



const ProductDetails = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() => {
        doGetProduct(id).then(response => {
            setDetail(response)
        })
    }, []);

    return (
        <>
            <h1>Product Detail</h1>
            <div>
                <span>{detail.brand}</span>
            </div>
        </>

    )
}

export default ProductDetails;