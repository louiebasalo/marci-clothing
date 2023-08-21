

import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

import {CheckoutItemContainer, ImageContainer, BaseSpan,Quantity, Arrow, Value, RemoveButton} from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity} = cartItem;
    
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));


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