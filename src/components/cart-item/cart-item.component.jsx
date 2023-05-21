
import {CartItemContainer, ItemDetails, Name, QuantityXPrice} from './cart-item.styles';

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;

    return (
        <CartItemContainer> 
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <Name>{name}</Name>
                <QuantityXPrice>{quantity} X ${price}</QuantityXPrice>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;