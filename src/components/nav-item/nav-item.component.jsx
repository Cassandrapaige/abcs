import React from 'react'
import { Link } from 'react-router-dom'

import {ListItem, Letter} from './nav-item.styles'

const NavItem = ({letter, text, history, handleClick, ...rest}) => (
    <ListItem onClick = {() => {handleClick(letter)}}>
        <Letter {...rest}> {letter.toUpperCase()})</Letter> 
        {text}
    </ListItem>
)

export default NavItem;
