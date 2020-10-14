import React from 'react'
import LAYOUT_DATA from '../../constants/layout_data'
import {animated, useSpring, useTransition, config} from 'react-spring'

import NavItem from '../nav-item/nav-item.component'

import {DropdownContainer, 
        ListContainer,
        BoldText,
        Text,
        Container
        } from './dropdown.styles'

const Dropdown = ({contrast, ...rest}) => {

    return (
        <Container contrast = {contrast} {...rest}>
            <DropdownContainer>
                <Text> Explore the <span style={{ color: contrast, fontWeight: 800 }} >menu</span> below or</Text>
                <BoldText isLarge>Click any letter on your keyboard to get started.</BoldText>
                <ListContainer>
                {
                    LAYOUT_DATA.map(({letter, lesson}) => (
                        <NavItem 
                            contrast = {contrast}
                            letter = {letter}
                            text = {lesson}
                            {...rest}
                        />
                    ))
                }
                </ListContainer>
                <BoldText>Your goal is to design and create 26 websites using the provided colour palettes, font-families and CSS rules. </BoldText>
                <Text>** Bonus points if your theme starts with the corresponding letter.</Text>
            </DropdownContainer>
            </Container>
    )
}

export default Dropdown;