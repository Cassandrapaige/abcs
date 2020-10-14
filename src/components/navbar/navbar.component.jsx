import React from 'react'

import HamburgerMenu from '../hamburger-menu/hamburger-menu.component'
import NavLink from '../nav-link/nav-link.component'

import {NavbarContainer, Logo, NavList, Links} from './navbar.styles'

export const Navbar = ({data, ...rest}) => {

    const {
        primary,
        secondary,
        complimentary
    } = data;

    return (
    <NavbarContainer>
        <NavList>
        <Logo to="/layout/a"> A to Z </Logo>
        <Links>
            <NavLink 
                linkTo = "#colors"
                text = "Colors"
                color = {primary}
            />
  
            <NavLink 
                linkTo = "#fonts"
                text = "Fonts"
                color = {secondary}
            />

            <NavLink 
                linkTo = "#cssTip"
                text = "CSS"
                color = {complimentary}
            />
            <HamburgerMenu {...rest}/>
        </Links>
    </NavList>
</NavbarContainer>
)}

export default Navbar;