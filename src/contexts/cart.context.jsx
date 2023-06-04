import { createContext, useState, useEffect, useReducer} from "react";


const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    return [ ...cartItems, { ...productToAdd, quantity: 1}];

} 

const removeCartItem = (cartItems,cartItemToRemove) => {
    //find the cart item to remove
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    //check if quantity is equal to 1, and if it is, remove that item from the cart
    if(existingCartItem.quantity === 1){
        return removeItem(cartItems, cartItemToRemove);
    }

    //return back the cartItems with matching cart item with reduced quantity
    return cartItems.map(
        (cartItem) => cartItem.id === cartItemToRemove.id ?
         { ...cartItem, quantity:cartItem.quantity - 1}
         : cartItem
    );
}   


const removeItem = (cartItems, itemToRemove) => {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [] ,
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    totalPrice: 0
});


const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [] ,
    cartCount: 0,
    cartTotal: 0
}

const cartReducer = (state, action) => {
    const { type, payload} = action;

    switch(type){
        case 'SET_CART_ITEMS':
            return {
                ...state,
                ...payload
            }
        default: 
            throw new Error(`Unhandled type" ${type} " in cartReducer`);
    }
}


export const CartProvider = ({children}) => {

    const [{cartItems, isCartOpen, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

        dispatch({ type: 'SET_CART_ITEMS', payload:{ cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount}})

    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    const removeItemToCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemFromCart = (itemToRemove) => {
        const newCartItems = removeItem(cartItems, itemToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const value = {isCartOpen, setIsCartOpen: () => {}, addItemToCart, cartItems, cartCount, removeItemToCart, clearItemFromCart,cartTotal};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}