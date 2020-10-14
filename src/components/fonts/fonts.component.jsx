import React from 'react'

import CopyToClipboard from '../copy-to-clipboard/copy-to-clipboard.component';

import {FontsContainer, Declaration, Property, Value} from './fonts.style'

const Fonts = ({data}) => {
    const {
        primary,
        secondary,
        complimentary,
        family,
        fontstyle,
        weight
    } = data;

    const textToCopy = `
        font-family: ${family};
        font-style: ${fontstyle};
        font-weight: ${weight};
    `
    return (
        <CopyToClipboard 
            text = {textToCopy} 
            btnText = "Copy font styles"
            color = {secondary}>
            <FontsContainer primary = {primary} id = "fonts" family = {family} weight = {weight}>
                <Declaration>
                    <Property secondary = {secondary}>font-family:</Property>
                    <Value complimentary = {complimentary}>{family}</Value>
                </Declaration>
                <Declaration>
                    <Property secondary = {secondary}>font-style:</Property>
                    <Value complimentary = {complimentary}>{fontstyle}</Value>
                </Declaration>
                <Declaration>
                    <Property secondary = {secondary}>font-weight:</Property>
                    <Value complimentary = {complimentary}>{weight}</Value>
                </Declaration>
            </FontsContainer>
        </CopyToClipboard>
    )
}

export default Fonts;