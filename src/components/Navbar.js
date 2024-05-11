import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { LuShoppingBasket } from "react-icons/lu";
import { ShopContext } from "../context/shop-context";
import "./Navbar.css"


function Navbar() {
    const { clearFilter } = useContext(ShopContext);
    
    const handleShopClick = () => {
        clearFilter();
    };

    return (
        <div className="Navbar">
                <div className="page-title">
                    <img src="/logo512.png" alt="logo" width={80}  />
                    <h1>Evergreen Plants</h1> 
                </div>
            <div className="input-group">
                <div className="links">
                    <Link to="/" onClick={handleShopClick}> Shop </Link> 
                    <Link to="/cart"> <LuShoppingBasket  size={30}/></Link>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar;