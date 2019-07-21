import React from 'react'
import Link from 'next/link'
import {
    Nav
} from './style'

const NavBar = () => (
    <Nav>
        <Link href='/'><a>Home</a></Link>
        <Link href='/about'><a>About</a></Link>
        <Link href='/service'><a>Service</a></Link>
        <Link href='/contact'><a>Contact</a></Link>
    </Nav>
)

export default NavBar