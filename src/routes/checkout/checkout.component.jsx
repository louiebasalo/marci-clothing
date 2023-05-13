
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const CheckOut = () => {

    const { cartItems, addItemToCart, subtractItemToCart } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <h2>Checkout items</h2>
            <div>
                {
                    cartItems.map((cartItem) => {
                        const {id, name, quantity} = cartItem;
                        return (
                            <div key = {id}>
                                <h2>{name}</h2>
                                <pand>{quantity}</pand>
                                <br />
                                <span onClick={() => subtractItemToCart(cartItem)}>decreament</span>
                                <br />
                                <span onClick={() => addItemToCart(cartItem)}>increment</span>
                                
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );

}

export default CheckOut;