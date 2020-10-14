import React, {useState} from 'react'

import {HamburgerMenuContainer, HamburgerMenuMiddle} from './hamburger-menu.styles'

const HamburgerMenu = ({handleClick, ...rest}) => (
    <HamburgerMenuContainer onClick = {handleClick} {...rest}>
        <HamburgerMenuMiddle {...rest}/>
    </HamburgerMenuContainer>
)

export default HamburgerMenu;
