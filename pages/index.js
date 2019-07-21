import React from "react"
import Head from 'next/head'
import Home from 'views/index'

const Index = () => (
    <div>
        <Head>
            <meta name="description" content="this is my description" />
            <meta name="keywords" content="React boilerberg" />
            <meta content="IE=edge" httpEquiv="" />
            <meta content="yes" name="mobile-web-app-capable" />
            <title>HOME PAGE</title>
        </Head>
        <Home />
    </div>
)

export default Index