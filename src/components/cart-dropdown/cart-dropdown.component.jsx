
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import {CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles.jsx';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';


const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
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