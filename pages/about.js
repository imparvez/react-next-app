import React from 'react'
import Link from 'next/link'

const About = () => (
    <div>
        <Link href='/'><a>Home</a></Link>
        <Link href='/pages'><a>Pages</a></Link>
        <Link href='/about'><a>About</a></Link>
        <h1>ABOUT PAGE</h1>
        <p>THIS IS ABOUT PAGE</p>
    </div>
)

export default About