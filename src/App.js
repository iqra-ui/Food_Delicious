// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Main_Components/Home";
import Navigation_Bar from "./Navigation_Bar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckoutPage from "./Main_Components/CheckoutPage";
import ProductCategory from "./Sub_Components/Page2/ProductCategory";
import CartView from "./Sub_Components/Page4/CartView";
import SelectOptionPage from "./Sub_Components/Page3/SelectOptionPage";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation_Bar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productCategories" element={<ProductCategory />} />
          <Route path="/selectOption" element={<SelectOptionPage />} />
          <Route path="/cartview" element={<CartView />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
