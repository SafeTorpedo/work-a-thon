import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import "./index.css";

function App() {
    return (
        <div className="App bg-[url('./assets/background.jpg')] ">
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
