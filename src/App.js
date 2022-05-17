import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import Dashboard from "./views/Dashboard";
import Detail from "./views/Details";
import './App.css';

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <h1>Product Manager</h1>
            <Link to="/products">Dashboard</Link>

            <Routes>
                <Route path="/products" element={<Dashboard />} />
                <Route path="/products/:id" element={<Detail />} />
            </Routes>


        </div>
        </BrowserRouter>
    );
}

export default App;
