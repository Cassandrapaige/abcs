import React from 'react'

import {CodeSnippetContainer, Container, Selector, Method, Button, Description} from './code-snippet.styles'

const CodeSnippet = ({data}) => {

    const {
        primary,
        secondary,
        complimentary,
        selector,
        method,
        link,
        exp
    } = data;

    return (
        <CodeSnippetContainer id = "cssTip">
            <Container>
                <Selector secondary = {secondary}>{selector}</Selector>
                <Method primary = {primary}>{method}</Method>
                <Button 
                    href = {link} 
                    target= "_blank"
                    complimentary = {complimentary}
                >
                    Example
                </Button>
            </Container>
            <Description secondary = {secondary}>
                {exp}
            </Description>
        </CodeSnippetContainer>
    )
}

export default CodeSnippet;