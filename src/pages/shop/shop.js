import React from "react";
import { allPlants } from "../../allPlants";
import Plant from "./plant";
import "./shop.css";



function Shop() {

    return (
        <div className="shop">
            <div className="shop-title">
                <h1>Evergreen Houseplant Store</h1>
            </div>
            <div className="plants">
                {allPlants.map((plant)=> {
                    return <Plant data={plant} key={plant.id}/>
                })}
            </div>
        </div>
    )
}

export default Shop;