import React from 'react'

import {HeaderContainer, Letter} from './header.styles'

const Header = ({data}) => {

    const {
        secondary,
        primary,
        family,
        letter
    } = data;

    return (
         <HeaderContainer secondary = {secondary}>
            <Letter primary = {primary} family = {family}> 
                {letter.toUpperCase()}{letter}
            </Letter>
        </HeaderContainer>
    )
}

export default Header;
