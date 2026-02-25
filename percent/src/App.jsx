import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
