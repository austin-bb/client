import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

    
const ProductList = (props) => {
    const { removeFromDom } = props;

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
            .then(res => { 
                props.reloadList()
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div>
            {props.products.map( (product, i) =>
                <p key={i}>
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                    <button onClick={() => handleDelete(product._id)}> Delete </button>
                </p>
            )}
        </div>
    )
}
    
export default ProductList;

