import styled from 'styled-components'

export const FontsContainer = styled.section`
background: ${({primary}) => primary};
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
font-family: ${({family}) => family};
font-weight: ${({weight}) => weight};
`

export const Declaration = styled.div`
    border-bottom: 2px solid black;
    padding: 50px;
    line-height: 65px;

    &:last-of-type {
        border: unset;
    }

    @media(max-width: 800px) {
        line-height: 50px;
    }

    @media(max-width: 600px) {
        padding: 40px 20px;
    }
`

export const Property = styled.h3`
color: ${({secondary}) => secondary};
font-size: 3.5em;
font-weight: 800;

@media(max-width: 800px) {
    font-size: 2.5em;
}
`

export const Value = styled.h3`
color: ${({complimentary}) => complimentary};
font-size: 3.5em;
font-weight: 800;

@media(max-width: 800px) {
    font-size: 2.5em;
}
`