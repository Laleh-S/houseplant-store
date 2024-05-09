import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { Link } from "react-router-dom"
import { LuShoppingBasket } from "react-icons/lu";
import "./Navbar.css"

function Navbar() {
    const { searchQuery, setSearchQuery } = useContext(ShopContext);
    
    return (
        <div className="Navbar">
            <div className="links">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search plants..."
                    className="search"
                />
                <Link to="/"> Plants </Link> 
                <Link to="/cart"> <LuShoppingBasket  size={30}/></Link>
            </div>
        </div>
    )
}
export default Navbar;