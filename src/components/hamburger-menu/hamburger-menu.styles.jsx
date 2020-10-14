import styled from 'styled-components'

export const HamburgerMenuContainer = styled.div`
position: relative;
height: 25px;
width: 32px;
margin-left: 20px;
cursor: pointer;

    &:before,
    &:after {
        position: absolute;
        content: '';
        width: 100%;
        height: 20%;
        background: black;
        transition: all .3s ease;
    }

    &:before {
        transform: ${({isOpen}) => isOpen && `rotate(45deg) translate(5px, 9px)`};
    }

    &:after {
        bottom: 0;
        transform: ${({isOpen}) => isOpen && `rotate(-45deg) translate(5px, -9px)`};
    }
`

export const HamburgerMenuMiddle = styled.div`
position: absolute;
top: 50%;
transform: translateY(-50%);
background: black;
height: 20%;
width: 100%;
opacity: ${({isOpen}) => isOpen && 0};
transition: all .3s ease;
`