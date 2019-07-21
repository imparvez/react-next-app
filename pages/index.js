import React from "react"
import Link from 'next/link'
import Head from 'next/head'

const Index = () => (
    <div>
        <Head>
            <meta name="description" content="this is my description" />
            <meta name="keywords" content="React boilerberg" />
            <meta content="IE=edge" httpEquiv="" />
            <meta content="yes" name="mobile-web-app-capable" />
            <title>HOME PAGE</title>
        </Head>
        <Link href='/'><a>Home</a></Link>
        <Link href='/pages'><a>Pages</a></Link>
        <Link href='/about'><a>About</a></Link>
        <h1>asjdhfkjhsdajkf</h1>
        <p>THis is post content</p>
    </div>
)

export default Index