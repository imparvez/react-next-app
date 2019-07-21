import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const About = () => (
	<div>
		<Head>
            <meta name="description" content="this is my description" />
            <meta name="keywords" content="React boilerberg" />
            <meta content="IE=edge" httpEquiv="" />
            <meta content="yes" name="mobile-web-app-capable" />
            <title>About PAGE</title>
        </Head>
		<Link href='/'><a>Home</a></Link>
		<Link href='/pages'><a>Pages</a></Link>
		<Link href='/about'><a>About</a></Link>
		<h1>ABOUT PAGE</h1>
		<p>THIS IS ABOUT PAGE</p>
	</div>
)

export default About
