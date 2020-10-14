import styled, {css} from 'styled-components'

export const Container = styled.section`
background: ${({contrast}) => contrast};
transition: all .5s ease;
padding: 50px 0 50px 50px;
position: absolute;
z-index: 500;
width: 100vw;
overflow: hidden;
min-height: 100vh;
transform: translateY(-120%);
opacity: 0;

    ${({isVisible}) => isVisible && css`
        transform: translateY(0);
        opacity: 1;
    `}

@media(max-width: 800px) {
    padding: 10px;
    transform: translateX(120%);
    opacity: 0;

    ${({isVisible}) => isVisible && css`
        transform: translateX(0);
        opacity: 1;
    `}
}
`

export const DropdownContainer = styled.div`
padding: 20px 50px;
position: relative;
padding: 50px 50px 50px 100px;
box-shadow: 6px 6px 16px rgba(18, 18, 18, .3);
background-color: #fff;

@media(max-width: 1200px) {
    padding: 30px;
}
`

export const ListContainer = styled.ol`
list-style: none;
column-count: 4;
padding: 20px 0 30px 0;

@media(max-width: 1200px) {
    column-count: 3;
}

@media(max-width: 900px) {
    column-count: 2;
}

@media(max-width: 500px) {
    column-count: 1;
}
`

export const Text = styled.p`
font-size: 22px;
font-weight: 400;
padding: 10px 0;
`

export const BoldText = styled.h2`
font-weight: 900;
font-size: 22px;
line-height: 1.2em;

${({isLarge}) => isLarge && css`
    font-size: 45px;
    width: 500px;

    @media(max-width: 1200px) {
        font-size: 30px;
    }

    @media(max-width: 600px) {
        width: auto;
    }
`}
`
