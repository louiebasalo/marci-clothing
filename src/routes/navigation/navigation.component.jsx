import { Outlet} from "react-router-dom";
import {Fragment, useContext } from 'react'

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import {ReactComponent as CrownLogo} from '../../assets/crown.svg'

import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './navigation.styles';

const Navigation = () => {

  const {currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to="/">
                <CrownLogo className="logo"/>
            </LogoContainer>
            <NavLinks>
                 <NavLink to='/shop'>
                   SHOP
                </NavLink>
                {currentUser ? (
                  <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink> //video 108, stoped at minute 5:23
                ):(
                  <NavLink to = '/auth'>
                    SIGN IN
                  </NavLink>
                )}
                <CartIcon />
                
            </NavLinks>
            {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet /> 
      </Fragment>
      
    )
  }

  export default Navigation;