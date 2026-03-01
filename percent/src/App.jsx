import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import Testing from "./components/Pages/TestWorkplace/Testing";
import "./App.css";

function App() {
    return (
        <div className="app-container">
            <Header />
            <main className="app-main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/playground" element={<Testing />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
