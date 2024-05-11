import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { ShopContext } from "../context/shop-context";


function Searchbar() {
    const { searchQuery, setSearchQuery } = useContext(ShopContext);

    // Handle input change
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value); // Updates searchQuery state with the input value
    };

    return (
        <div className="search-container">
            <FaSearch className="search-icon" />
            <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange} 
                placeholder="Search for plants..."
                className="search-input"
            />
        </div>
    );
}

export default Searchbar;
