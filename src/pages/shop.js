import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import { allPlants } from "../allPlants";
import "./shop.css";

function Shop() {
    const { searchQuery, setSearchQuery } = useContext(ShopContext);

    // Function to filter plants based on the search query
    const filteredPlants = allPlants.filter(plant =>
        plant.plantName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="shop">
            <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search plants..."
                className="search"
            />
            <div className="page-title">
                <img src="/logo512.png" alt="logo" width={80}  style={{ marginBottom: '23px' }}/>
                <h1>Evergreen Plants</h1>
            </div>
            <div className="plants">
                {filteredPlants.map((plant)=> { 
                    const { id, plantImage, plantName } = plant;
                    return (
                        <div className="plant" key={id}>
                            <Link  to={`/plant/${id}`}>
                                <img  src={plantImage} alt={plantName} />
                            </Link>
                            <div className="plant-name">
                                <h3>{plantName}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Shop;