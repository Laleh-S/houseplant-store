import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { FaSearch } from "react-icons/fa";

function Searchbar() {
    const { searchQuery, setSearchQuery } = useContext(ShopContext);

    

    return (
        <div className="search-container">
            <FaSearch className="search-icon" />
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for plants..."
                className="search-input"
            />
        </div>
    );
}

export default Searchbar;
