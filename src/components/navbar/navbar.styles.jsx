import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.nav`
background-color: #fff;
width: 100%;
z-index: 1000;
padding: 15px 50px;
-webkit-box-shadow: 0 3px 3px rgba(18, 18, 18, .2);
box-shadow: 0 3px 3px rgba(18, 18, 18, .2);
position: relative;

@media(max-width: 600px) {
    padding: 15px 20px;
}
`

export const Logo = styled(Link)`
font-size: 36px;
font-weight: 800;
`

export const NavList = styled.ul`
list-style-type: none;
display: flex;
justify-content: space-between;
align-items: center;
`

export const Links = styled.div`
display: flex;
align-items: center;

@media(max-width: 800px) {
    a {
        display: none;
    }
}
`