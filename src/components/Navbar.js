import React from "react";
import { Link } from "react-router-dom"
import { LuShoppingBasket } from "react-icons/lu";
import "./Navbar.css"

function Navbar() {

    return (
        <div className="Navbar">
            <div className="links">
                <Link to="/"> Plants </Link> 
                <Link to="/cart"> <LuShoppingBasket  size={30}/></Link>
            </div>
        </div>
    )
}
export default Navbar;