import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'

// Custom Component/Utility Libraries
import Header from 'components/header'
import GlobalStyle from 'utils/globals'
import theme from 'utils/theme'
import { Root } from 'styles/document'
export default class MyDocument extends Document {
    render() {
        const sheet = new ServerStyleSheet()
        const main = sheet.collectStyles(<Main />)
        const styleTags = sheet.getStyleElement()

        return (
            <Html lang='en'>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    {styleTags}
                    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
                </Head>
                <ThemeProvider theme={theme}>
                    <body>
                        <Root>
                            <Header />
                            {main}
                        </Root>
                        <NextScript />
                        <GlobalStyle />
                    </body>
                </ThemeProvider>
            </Html>
        )
    }
}