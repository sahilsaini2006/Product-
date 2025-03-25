import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Article from "./pages/Article.jsx";
import Shop from "./pages/Shop.jsx"
import Product from "./pages/Product.jsx";
import About from "./pages/About.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Product" element={<Product/>}></Route>
        <Route path="/About" element={<About/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
