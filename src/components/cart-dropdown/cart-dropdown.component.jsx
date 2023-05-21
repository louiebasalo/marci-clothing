import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import {CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles.jsx';

import CartItem from '../cart-item/cart-item.component';


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const gotToCheckoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (
                        cartItems.map((item) => (<CartItem key={item.id} cartItem = {item}/>) )
                    )
                    : (
                        <EmptyMessage>Cart is Empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={gotToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;