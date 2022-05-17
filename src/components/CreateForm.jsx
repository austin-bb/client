import axios from 'axios'
import React, { useState } from 'react'

const Create = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        axios.post(`http://localhost:8000/api/products`, {title, price, description})
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Title </label>
                    <input type="text" name='title' value={title}
                        onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <label> Price </label>
                    <input type="number" name='price' value={price}
                        onChange={e => setPrice(e.target.value)} />
                </div>
                <div>
                    <label> Description </label>
                    <input type="text" name='description' value={description}
                        onChange={e => setDescription(e.target.value)} />
                </div>
                <button type='submit'> Add </button>
            </form>
        </div>
    )
}

export default Create