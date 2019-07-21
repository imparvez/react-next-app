import React from 'react'
import Link from 'next/link'
import {
    Container,
    NavBar,
    CopyRightText,
} from './style'

const Footer = () => (
    <Container>
        <h5 className='brand-name'>Vex</h5>
        <NavBar>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/service'><a>Service</a></Link>
            <Link href='/contact'><a>Contact</a></Link>
        </NavBar>
        <CopyRightText>Copyright © Themefisher| All right reserved.</CopyRightText>
    </Container>
)

export default Footer
