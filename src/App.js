import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<h1>404 - Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
