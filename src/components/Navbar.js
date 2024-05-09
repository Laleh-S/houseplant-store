import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { Link } from "react-router-dom"
import { LuShoppingBasket } from "react-icons/lu";
import { AiOutlineSearch } from "react-icons/ai"; // Adding the search icon
import "./Navbar.css"

function Navbar() {
    const { searchQuery, setSearchQuery,  } = useContext(ShopContext);
    
    return (
        <div className="Navbar">
            <div className="center-content">
                <div className="page-title">
                    <img src="/logo512.png" alt="logo" width={80}  />
                    <Link to="/"> <h1>Evergreen Plants</h1> </Link> 
                </div>
            </div>
            <div className="input-group">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search plants..."
                    className="search"
                />
                <div className="links">
                    <Link to="/"> Shop </Link> 
                    <Link to="/cart"> <LuShoppingBasket  size={30}/></Link>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar;