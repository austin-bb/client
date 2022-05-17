import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TestComponent = () => {
    const [message, setMessage] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/test`)
            .then(response => {
                setMessage(response.data)
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>TestComponent</h1>
            {
                message?
                <h2> { message } </h2>:
                <h2> Loading... </h2>
            }
        </div>

    )
}

export default TestComponent