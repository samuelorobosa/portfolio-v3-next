import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head >
                <meta charSet="utf-8"/>
                <meta name="image" property="og:image" content="https://i.postimg.cc/C1DRpHny/logo-5.png"/>
                <meta name="title" property="og:title" content="Samuel Orobosa Amagbakhen's Portfolio" />
                <meta property="og:type" content="Portfolio Website"/>
                <meta name="description" property="og:description" content="A creative, ambitious, and self-motivated frontend developer with a passion for creating things that live and breathe on the web."/>
                <meta name="author" content="Samuel Orobosa Amagbakhen"/>
                <meta property="og:url" content="https://samuelorobosa.xyz/" />
                <meta name="theme-color" content="#000000"/>
                <meta name="monetization" content="$ilp.uphold.com/WjBpJMJBe23a"/>
                <meta name="twitter:title" content="Samuel Orobosa Amagbakhen's Portfolio Website" />
                <meta name="twitter:description" content="A creative, ambitious, and self-motivated frontend developer with a passion for creating things that live and breathe on the web." />
                <meta name="twitter:site" content="https://samuelorobosa.xyz" />
                <meta name="twitter:image" content="https://i.postimg.cc/C1DRpHny/logo-5.png" />
                <meta name="twitter:image:alt" content="S.A" />
                <meta name="twitter:creator" content="@Samuel_Orobosa" />
                <meta name="twitter:card" content="summary" />

                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon-16x16.png" />
                
                {/* Google Fonts - DM Sans */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}