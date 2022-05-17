import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";
    
const Detail = () => {
    const [product, setProduct] = useState()
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => navigate(`/`))
            .catch(err => console.log(err))
    }
    
    return (
        <>
        {
            product&&
            <div>
                <p>Title: {product.title}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
                <Link to={`/products/${product._id}/edit`}> Edit </Link>
                <button onClick={handleDelete}> Delete </button>
            </div>

        }
        </>
    )
}
    
export default Detail;

