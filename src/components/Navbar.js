import React from "react";
import { Link } from "react-router-dom"
import { FaShoppingBag } from "react-icons/fa";
import { RiHandbagFill } from "react-icons/ri";
import "./Navbar.css"

function Navbar() {

    return (
        <div className="Navbar">
            <div className="links">
                <Link to="/"> Store </Link> 
                <Link to="/cart"> <FaShoppingBag  size={25}/></Link>

            </div>
        </div>
    )
}
export default Navbar;