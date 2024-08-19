import React from 'react'

import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import AppLoginButton from './components/AppLoginButton';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
    logo: (
        <div className='overflow-none'>
            <img
                className='object-contain'
                height={40}
                width={160}
                src='/general/zenetics-logo.png'
                alt='Zenetics Logo'
            />
        </div>
    ),

    chat: {
        link: 'https://discord.com',
    },
    footer: {
        text: (
            <span>
                <a href='https://www.zenetics.io' target='_blank'>
                    ZENETICS - Build Reliable GenAI Applications.
                </a>
                .
            </span>
        ),
    },
    feedback: {
        content: <></>,
    },
    editLink: {
        component: null,
    },
    gitTimestamp: <></>,
    navbar: {
        extraContent: (
            <>
                <AppLoginButton />
            </>
        ),
    },
    head: () => {
        const { frontMatter } = useConfig();
        const url = 'https://docs.zenetics.io';

        return (
            <>
                <meta property='og:url' content={url} />
                <meta
                    property='og:title'
                    content={frontMatter.title || 'Zenetics Docs'}
                />
                <meta
                    property='og:description'
                    content={
                        frontMatter.description ||
                        'Zenetics - the application development platform for the age of AI'
                    }
                />
            </>
        );
    },
    useNextSeoProps() {
        const { asPath } = useRouter();
        if (asPath !== '/') {
            return {
                titleTemplate: '%s | Zenetics Docs',
            };
        }
    },
};

export default config
