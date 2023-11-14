import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";


function App() {
  return (
  
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      
    </Routes>
 
    </BrowserRouter>
  );
}

export default App;