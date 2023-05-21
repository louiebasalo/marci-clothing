
import styled from 'styled-components';

import { ReactComponent as ShoppingSVG } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`;

export const ShoppingIcon = styled(ShoppingSVG)`
  width: 24px;
  height: 24px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;

`;


// .cart-icon-container {
//     width: 45px;
//     height: 45px;
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
  
//     .shopping-icon {
//       width: 24px;
//       height: 24px;
//     }
  
//     .item-count {
//       position: absolute;
//       font-size: 10px;
//       font-weight: bold;
//       bottom: 12px;
//     }
//   }
  