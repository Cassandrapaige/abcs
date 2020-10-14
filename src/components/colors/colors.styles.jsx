import styled from 'styled-components'

export const ColorsSection = styled.section`
display: -ms-grid;
display: grid;
-ms-grid-columns: (minmax(250px, 1fr))[auto-fit];
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 20px;
padding: 50px 50px 100px 50px;

@media(max-width: 600px) {
    padding: 35px 20px;
}
`

export const Title = styled.h2`
grid-column: 1/-1;
font-size: 3em;
font-weight: 800;
`

export const Color = styled.div`
background: ${({color}) => color};
position: relative;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
height: 200px;
font-size: 2em;
color: #fff;
font-weight: 700;
`

export const Text = styled.textarea`
background: transparent;
border: none;
text-align: center;
outline: none;
display: -ms-flexbox;
font-family: titling-gothic-fb, sans-serif;
position: absolute;
opacity: 0;

    &::selection {
        background: inherit;
    }
`