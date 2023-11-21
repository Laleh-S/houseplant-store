import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/shop"
import Cart from "./pages/cart/cart"
import ShopContextProvider from "./context/shop-context";

function App() {

    return (
        <div className="App">
            <ShopContextProvider>{/* Allows all bellow components to have access to shopCntextProvider */}
                <Router>
                    <Navbar/> {/* We want Navbar to be above Routes so it will be available and seen in all Routes */}
                    <Routes>
                        <Route path="/" element={<Shop />}/> {/* "/" means its our main page. Where we see all the products */}
                        <Route path="/cart" element={<Cart />}/>
                    </Routes>
                </Router>
            </ShopContextProvider>
        </div>
    )
}

export default App;