
import styled from 'styled-components';

import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 260px;
  height: 360px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }

`;


export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: auto;
  color: gray;

`;

export const CartItems = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  `;


//note ! which ever component that targets another component inside the same style file, needs to come after/next/below the targeted component

