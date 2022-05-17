import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CreateForm from './../components/CreateForm'
import ProductList from '../components/ProductList';



const Dashboard = (props) => {
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(response => {
                setProducts(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <CreateForm />
            <hr/>
            
            <ProductList products={products}/>
        
        </div>
    )
}

export default Dashboard