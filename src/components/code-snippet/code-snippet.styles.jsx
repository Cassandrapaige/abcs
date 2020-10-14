import styled from 'styled-components'

export const CodeSnippetContainer = styled.section`
min-height: 50vh;
`

export const Container = styled.div`
padding: 70px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;

@media(max-width: 800px) {
    padding: 40px 32px;
}
`

export const Selector = styled.h3`
color: ${({secondary}) => secondary};
font-size: 2.5em;
font-weight: 800;

@media(max-width: 800px) {
    font-size: 2em;
}
`

export const Method = styled.h3`
color: ${({primary}) => primary};
font-size: 2.6em;
font-weight: 800;

@media(max-width: 800px) {
    font-size: 2.2em;
}
`

export const Button = styled.a`
border: ${({complimentary}) => `2px solid ${complimentary}`};
padding: 15px 35px;
font-size: 1.2em;
margin-top: 35px;
color: ${({complimentary}) => complimentary};
font-weight: 500;
transition: transform .5s ease;
outline-offset: 5px;

@media(max-width: 800px) {
    font-size: 1em;
}
    &:hover {
        outline: ${({complimentary}) => `2px dotted ${complimentary}`};
        transform: scale(1.02);
    }
`

export const Description = styled.div`
background: ${({secondary}) => secondary};
color: #fff;
padding: 80px;
font-size: 1.3em;
text-align: center;
font-weight: 200;
line-height: 30px;

@media(max-width: 800px) {
    font-size: 1.2em;
    line-height: 28px;
    padding: 40px 20px;
}
`
