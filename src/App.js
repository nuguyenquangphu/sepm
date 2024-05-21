import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import MyAccount from "./pages/MyAccount/MyAccount";
import HomePage from "./pages/HomePage/HomePage";
import Category from "./pages/Category/Category";
import PlantInfo from "./pages/PlantInfo/PlantInfo";
import PlantSearch from "./pages/PlantSearch/PlantSearch";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/search" element={<PlantSearch />} />
        <Route path="/plant-info" element={<PlantInfo />} />
        <Route path="/category" element={<Category />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
