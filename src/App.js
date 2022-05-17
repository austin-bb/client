import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import Dashboard from "./views/Dashboard";
import Detail from "./views/Details";
import './App.css';
import Update from "./views/Update";

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <h1>Product Manager</h1>
            <Link to="/">Dashboard</Link>

            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products/:id" element={<Detail />} />
                <Route path="/products/:id/edit" element={<Update />} />
            </Routes>


        </div>
        </BrowserRouter>
    );
}

export default App;
