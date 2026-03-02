import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import Testing from "./components/Pages/TestWorkplace/Testing";
import BoardingPage from "./components/Pages/BoardingPage/BoardingPage";
import "./App.css";

function App() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <div className="app-container">
            <Header />
            <main className="app-main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/playground" element={<Testing />} />
                    <Route path="/boarding" element={<BoardingPage />} />
                </Routes>
            </main>
            {isHomePage && <Footer />}
        </div>
    );
}

export default App;
