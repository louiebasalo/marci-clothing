import { Outlet} from "react-router-dom";
import {Fragment } from 'react'

import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

// import { signOutUser } from "../../utils/firebase/firebase.utils";

import { singOutUserStart } from "../../store/user/user.action";

import { useDispatch } from "react-redux";

import {ReactComponent as CrownLogo} from '../../assets/crown.svg'

import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './navigation.styles';

const Navigation = () => {

  const currentUser = useSelector(selectCurrentUser); 
  const isCartOpen = useSelector(selectIsCartOpen);  

  const dispatch = useDispatch();

  const signout = () => {
    dispatch(singOutUserStart());
  }


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
                  <NavLink as='span' onClick={signout}>SIGN OUT</NavLink> //video 108, stoped at minute 5:23
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