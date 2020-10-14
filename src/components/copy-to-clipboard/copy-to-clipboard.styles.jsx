import styled from 'styled-components'

export const ComponentWrapper = styled.div`
position: relative;

    &:hover .copybtn {
        opacity: 1;
    }
`

export const Textarea = styled.textarea`
opacity: 0;
height: 0;
position: absolute;
pointer-events: none;
`

export const CopyBtn = styled.button`
position: absolute;
top: 20px;
right: 50px;
opacity: 0;
background: ${({color}) => color};
border: none;
padding: 20px;
font-size: 1.1em;
cursor: pointer;
color: #fff;
outline-offset: 5px;
transition: opacity .3s ease, transform .5s ease;

 &:hover{
    transform: scale(1.02);
    outline: ${({color}) => `2px dotted ${color}`};
 }

 @media(max-width: 500px) {
    display: none;
 }
`