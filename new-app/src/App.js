import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Post from "./pages/Post";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/post" element={<Post />}></Route>
      </Routes>
    </>
  );
}

export default App;
