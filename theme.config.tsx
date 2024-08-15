import React from 'react'

import { DocsThemeConfig } from 'nextra-theme-docs';
import AppLoginButton from './components/AppLoginButton';

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
};

export default config
