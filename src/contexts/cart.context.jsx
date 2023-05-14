import { createContext, useState, useEffect} from "react";


//  find the id  of the productToAdd in cartItems
// if found, make existingCartItem true
// if existingCartItem is true, map cartItems to check if productToAdd.id is equal to any record in the cartItems
// if true, then the return opject is the found cartItem object and the quantity + 1
// if no record found equals to the productToAdd.id then return the whole cartItem object
// if existingCartItem is false then, return the cartItems with additional productToAdd plus quantity 1
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


//my activity >>>
// const subtractCartItem = (cartItems, productToSubtract) => {
   
//     const existingCartItem = cartItems.find((item) => item.id === productToSubtract.id);

//     if(existingCartItem){
//         const item = cartItems.find((i) => i.id === productToSubtract.id);
//         if(item.quantity === 1){
//             return removeItem(cartItems, productToSubtract);
//         }        
//         return cartItems.map((cartItem) => cartItem.id === productToSubtract.id ?
//             { ...cartItem, quantity: cartItem.quantity - 1 }
//             : cartItem
//         )
//     }

//     return cartItems;
    
// }

const removeItem = (cartItems, itemToRemove) => {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
}
 //  <<<


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [] ,
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    // //my activity >>>
    // const subtractItemToCart = (itemToSubtract) => {
    //     setCartItems(subtractCartItem(cartItems, itemToSubtract));
    // }
    // // <<<

    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    // my activity >>>
    const clearItemFromCart = (itemToRemove) => {
        setCartItems(removeItem(cartItems, itemToRemove));
    }

    /// <<<

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemToCart, clearItemFromCart};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}