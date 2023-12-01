import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import BillPage from "./pages/BillPage.jsx";
import CustomerPage from "./pages/CustomerPage.jsx";


function App() {
  return (
  
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/bills" element={<BillPage />} />
      <Route path="/customers" element={<CustomerPage />} />
      
    </Routes>
 
    </BrowserRouter>
  );
}

export default App;