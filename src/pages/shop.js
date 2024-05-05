import React from "react";
import { allPlants } from "../allPlants";
import Plant from "./plant";
import "./shop.css";



function Shop() {
    return (
        <div className="shop">
            <div className="shop-title">
                <img src="/logo512.png" alt="Shop Image" width={80}/>
                <h1>Evergreen Plants</h1>
            </div>
            <div className="plants">
                {allPlants.map((plant)=> { 
                    return <Plant data={plant} key={plant.id}/> //Rturning Plant objects in the allPlants array.
                })}
            </div>
        </div>
    )
}
export default Shop;

