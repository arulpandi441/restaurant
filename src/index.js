import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Menu from "./pages/Menu/menu";
import Cart from "./pages/Cart/cart";
import History from "./pages/History/History";
import Table from "./pages/Table/Table";

export default function App() {

  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu cart={cart} setCart={setCart} />} />
          <Route path="cart" element={<Cart cart={cart} setCart={setCart} setHistory={setHistory} />} />
          <Route path="history" element={<History history={history} />} />
          <Route path="contact" element={<Contact />} />
          <Route path="table" element={<Table />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);