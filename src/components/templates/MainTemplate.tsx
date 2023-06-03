import React from 'react';
import { Footer, Header } from '@/components/organisms';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { HeadMeta, Route } from '@/lib';
import Image from 'next/image';
import backgroundRight from '../../../public/assets/images/gradient-right-dark.svg'
import backgroundLeft  from '../../../public/assets/images/gradient-left-dark.svg'

interface MainTemplateProps {
    children: React.ReactNode;
    head?: any;
    options?: any;
}

const MainTemplate = ({ children, head, options }: MainTemplateProps) => {
    let { settings, navigation } = options ?? {};
    let headMeta = HeadMeta(options, head);

    return (
        <div className="app-container">
            <NextSeo
                title={headMeta.siteTitle}
                description={headMeta.siteDescription}
                canonical={headMeta.url}
                openGraph={{
                    title: headMeta.siteTitle,
                    description: headMeta.siteDescription,
                    images: [
                        {
                            url: headMeta.ogImage,
                            width: 800,
                            height: 400,
                            alt: headMeta.siteTitle
                        }
                    ]
                }}
            />
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{headMeta.siteTitle}</title>
                <link rel="icon" href={Route.defaultLogo(true)} />
                <meta name="author" content={headMeta.author} />
            </Head>
            <nav className="sticky top-0 z-[9999] w-full py-2 mb-2 transition-shadow bg-white shadow-sm dark:bg-[#00000080] bg-[#ffffffcc] backdrop-blur-[10px] dark:backdrop-saturate-[100%] backdrop-saturate-[180%]">
                <div className="layout ">
                    <Header settings={settings} navigation={navigation} />
                </div>
            </nav>
            <main className="relative">
                <div className="relative z-10">{children}</div>

                <Image
                    alt='background-left'
                    // draggable={false}
                    className="select-none fixed block bottom-[-50%] left-[-10%] right-[-50%] transition"
                    src={backgroundLeft}
                />
                <Image
                     alt='background-right'
                    // draggable={false}
                    className="fixed top-[-30%] right-[-45%] md:right-0 md:top-0 lg:top-[-50%] lg:bottom-[-50%] lg:right-[-50%] block transition"
                    src={backgroundRight}
                />
            </main>

            <Footer />
        </div>
    );
};
export default MainTemplate;
