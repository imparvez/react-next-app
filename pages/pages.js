import React from 'react'
import Link from 'next/link'

const Pages = () => (
    <div>
        <Link href='/'><a>Home</a></Link>
        <Link href='/pages'><a>Pages</a></Link>
        <Link href='/about'><a>About</a></Link>
        <h1>PAGE POST</h1>
    </div>
)

export default Pages