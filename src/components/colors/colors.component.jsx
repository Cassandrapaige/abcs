import React from 'react';

import CopyToClipboard from '../copy-to-clipboard/copy-to-clipboard.component';

import {ColorsSection, Color, Title, Text} from './colors.styles';

const Colors = ({data}) => {
    const {
        primary,
        secondary,
        complimentary,
        contrast
    } = data;


    const textToCopy = `
    :root {
        --primary: ${data.primary};
        --secondary: ${data.secondary};
        --complimentary: ${data.complimentary};
        --contrast: ${data.contrast};
    }
 `

    return (
        <CopyToClipboard 
            text = {textToCopy} 
            btnText = "Copy color variables"
            color = {secondary}>
            <ColorsSection id = "colors">
                <Title>Colors</Title>
                <Color color = {primary}>{primary}</Color>
                <Color color = {secondary}>{secondary}</Color>
                <Color color = {complimentary}>{complimentary}</Color>
                <Color color = {contrast}>{contrast}</Color>
            </ColorsSection>
        </CopyToClipboard>
    )
}

export default Colors;