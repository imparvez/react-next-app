import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Pages = () => (
    <div>
        <Head>
            <meta name="description" content="this is my description" />
            <meta name="keywords" content="React boilerberg" />
            <meta content="IE=edge" httpEquiv="" />
            <meta content="yes" name="mobile-web-app-capable" />
            <title>POST PAGE</title>
        </Head>
        <Link href='/'><a>Home</a></Link>
        <Link href='/pages'><a>Pages</a></Link>
        <Link href='/about'><a>About</a></Link>
        <h1>PAGE POST</h1>
    </div>
)

export default Pages