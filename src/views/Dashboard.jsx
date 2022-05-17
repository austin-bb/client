import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CreateForm from './../components/CreateForm'
import ProductList from '../components/ProductList';



const Dashboard = (props) => {
    const [products, setProducts] = useState([]);
    const [refresh, setrefresh] = useState(true)


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(response => {
                setProducts(response.data)
            })
            .catch(err => console.log(err))
    }, [refresh]);


    const reload = () => {
        setrefresh(!refresh)
    }


    return (
        <div>
            <CreateForm reloadList={reload} />
            <hr/>
            <ProductList products={products} reloadList={reload} />        
        </div>
    )
}

export default Dashboard