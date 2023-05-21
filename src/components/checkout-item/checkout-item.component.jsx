
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {CheckoutItemContainer, ImageContainer, BaseSpan,Quantity, Arrow, Value, RemoveButton} from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity} = cartItem;
    const {  addItemToCart, removeItemToCart, clearItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);


    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan> {name} </BaseSpan>
            <Quantity> 
                <Arrow onClick={removeItemHandler}>
                    &#10094;
                </Arrow>
                    <Value>{quantity}</Value>
                <Arrow className='arrow' onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <BaseSpan> {price} </BaseSpan>
            <RemoveButton>
                <BaseSpan onClick={clearItemHandler}>
                    &#10006;
                </BaseSpan>
            </RemoveButton>
        </CheckoutItemContainer>
    )

}

export default CheckoutItem;