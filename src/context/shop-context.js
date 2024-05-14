// Here is where i defined all of the states and anything related to logic that need to be accessed anywhere in the project.
// I can use the states created here in my Shop and my Cart.

// The cartItems state:
// Is an object with a key=id of each plant. so for any ids we provide how many items are currently in the cart.
// initially all item's value would be 0, but if we want to add a product with certain id to cart, then that particular 
// id's value will change to 1 and if we add more it will change to 2 and so on

import React, { createContext, useState } from "react";
import { allPlants } from "../allPlants";


export const ShopContext = createContext(null); 

// ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ Function to set the initial state of our shopping cart ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈
function defaultCart () {
    // Looping through allPlants and assigns a key-value pair to the cart object, where key is the plant id and value set to 0;
    let cart = {};
    for(let i = 1; i < allPlants.length + 1; i++) {  // <- setting i = 1 because ids start with 1 not 0
        cart[i] = 0; // storing a value of 0 for each plant, because when the app first starts running there is 0 item in the shopping card.
    } 
    return cart;
};

    function ShopContextProvider(props) {  // <- provider for shopContext

    // ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ States ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ 
    // Can access the all states in any component that consumes the ShopContext by using the useContext hook.
    const [cartItems, setCartItems] = useState(defaultCart()); // setting "defaultCart()" object above as our default value.
    const [searchQuery, setSearchQuery] = useState(""); // State for search functionality 
    const [checkoutComplete, setCheckoutComplete] = useState(false);

    
    // ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ Clears filtered plants after clicking on shop link ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ 
    function clearFilter() {
        setSearchQuery("");
    };


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
    function addToCart(itemId) {
        setCartItems(prev => {
            const updatedCart = { ...prev }; // Creating a copy of the previous cart state
            let currentItemCount = 0;
            if (updatedCart[itemId] !== null && updatedCart[itemId] !== undefined) {
                currentItemCount = updatedCart[itemId];
            }
            updatedCart[itemId] = currentItemCount + 1; 
            return updatedCart;
            });
    }


    // ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ Remove items From Cart Function ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ 
    function removeFromCart(itemId) {
        setCartItems(prev => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId] !== null && updatedCart[itemId] !== undefined) {
                updatedCart[itemId] = updatedCart[itemId] - 1;
            }
            return updatedCart;
        });
    }

    // ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ Update cart Function ◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈ 
    function updateItemInCart(newAmount, itemId) {
        newAmount = Math.max(0, Math.floor(newAmount)); 
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    };


    const contextValue = {
        cartItems, 
        setCartItems,
        addToCart, 
        removeFromCart, 
        updateItemInCart,
        totalCartAmount,
        searchQuery, 
        setSearchQuery,
        clearFilter,
        checkoutComplete, 
        setCheckoutComplete,
        }  
    
    return (
        <ShopContext.Provider value={contextValue }> 
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

