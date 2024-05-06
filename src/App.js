import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop"
import Cart from "./pages/cart"
import PlantDetail from "./pages/plantDetail"
import ShopContextProvider from "./context/shop-context";
import plant from "./pages/plant"

function App() {

    return (
        <div className="App">
            <ShopContextProvider>{/* Allows all bellow components to have access to shopCntextProvider */}
                <Router>
                    <Navbar/> {/* We want Navbar to be above Routes so it can be seen in all Routes */}
                    <Routes>
                        <Route path="/" element={<Shop />}/> {/* "/" means its our main page. Where we see all the products */}
                        <Route path="/cart" element={<Cart />}/>
                        <Route path="/plant/:id" element={<PlantDetail />} />
                    </Routes>
                </Router>
            </ShopContextProvider>
        </div>
    )
}

export default App;