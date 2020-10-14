import React from 'react'

import {Link} from './nav-link.styles'

const NavLink = ({text, linkTo, ...rest}) => (
    <Link href={linkTo} {...rest}>
        {text}
    </Link>
)

export default NavLink;