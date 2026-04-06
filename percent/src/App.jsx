import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import Testing from "./components/Pages/TestWorkplace/Testing";

import { ModalProvider } from "./contexts/ModalContext";
import Editor from "./components/Pages/EditorPage/Editor";
import TypeVisualizer from "./components/Pages/TypeVisualizer/TypeVisualizer";

function App() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    return (
        <ModalProvider>
            <div className="app-container">
                <Header />
                <main className="app-main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/playground" element={<Testing />} />

                        <Route path="/editor" element={<Editor />} />
                        <Route path="/type-visualizer" element={<TypeVisualizer />} />
                        <Route path="/*" element={<Home />} />
                    </Routes>
                </main>
                {/* {isHomePage && <Footer />} */}
            </div>
        </ModalProvider>
    );
}

export default App;
