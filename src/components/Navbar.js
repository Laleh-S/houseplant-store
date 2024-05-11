import React from "react";
import { Link } from "react-router-dom"
import { LuShoppingBasket } from "react-icons/lu";
import "./Navbar.css"



function Navbar() {
    return (
        <div className="Navbar">
                <div className="page-title">
                    <img src="/logo512.png" alt="logo" width={80}  />
                    <Link to="/"> <h1>Evergreen Plants</h1> </Link> 
                </div>
            <div className="input-group">
                <div className="links">
                    <Link to="/"> Shop </Link> 
                    <Link to="/cart"> <LuShoppingBasket  size={30}/></Link>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar;