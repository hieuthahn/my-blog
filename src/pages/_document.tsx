import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html className="scroll-smooth" lang="vi">
            <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
            <Head />
            <body className="transition-colors dark:bg-dark">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
