// Here is where i defined all of the states and anything related to logic that need to be accessed anywhere in the project.
// I can use the states created here in my Shop and my Cart.

// The cartItems state:
// Is an object with a key=id of each plant. so for any ids we provide how many items are currently in the cart.
// initially all item's value would be 0, but if we want to add a product with certain id to cart, then that particular 
// id's value will change to 1 and if we add more it will change to 2 and so on

import React, { createContext, useState, useEffect  } from "react";
import { allPlants } from "../allPlants";


export const ShopContext = createContext(null); 

// ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ Function to represent the initial state of our shopping cart .◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈

function defaultCart () {
    // Looping through allPlants and assigns a key-value pair to the cart object, where key is the plant id and value set to 0;
    let cart = {};
    for(let i = 1; i < allPlants.length + 1; i++) {  // <- setting i = 1 because ids start with 1 not 0
        cart[i] = 0; // storing a value of 0 for each plant, because when the app first starts running there is 0 item in the shopping card.
    } 
    return cart;
};

function ShopContextProvider(props) {  // <- provider for shopContext
    const [cartItems, setCartItems] = useState(defaultCart()); // setting "defaultCart()" object above as our default value.
    const [searchQuery, setSearchQuery] = useState(""); // State for search functionality 
    const [searchResults, setSearchResults] = useState([]);

    // ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ Get Total Cart Amount ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ 
    function totalCartAmount(){
        let totalAmount = 0;
        for (let item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allPlants.find((plant) => plant.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    };
    

    // ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ Add Items to Cart Function ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ 
    function addToCart(itemId) { // The id of the item we want to add to basket
        setCartItems(prev => {
            const updatedCart = { ...prev }; // Creating a copy of the previous cart state
            const currentItemCount = updatedCart[itemId] || 0;  // Get the current count of the item in the cart or default to 0 if it doesn't exist
            updatedCart[itemId] = currentItemCount + 1; 
            return updatedCart;
    });
    }


    // ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ Remove items From Cart Function ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ 
    function removeFromCart(itemId) { // The id of the item we want to remove from cart
        setCartItems(prev => {
            const updatedCart = { ...prev };
            const currentItemCount = updatedCart[itemId] || 0;
            updatedCart[itemId] = currentItemCount - 1;
            return updatedCart;
    });
    }

    // ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ Update cart Function ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ 
    function updateItemInCart(newAmount, itemId) {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    };


    const contextValue = {
        cartItems, // Passing in everything we need to access outside this file.
        addToCart, 
        removeFromCart, 
        updateItemInCart,
        totalCartAmount,
        searchQuery, 
        setSearchQuery,
        searchResults,
        }  
    console.log(cartItems)
    
    return (
        <ShopContext.Provider value={contextValue }> 
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

