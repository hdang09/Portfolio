import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { title, description, icons, BASE_URL } from './metadata';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        type: 'website',
        url: BASE_URL,
        title,
        description,
        images: [
            {
                url: BASE_URL + '/og.png',
                width: 1200,
                height: 630,
                alt: title,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [
            {
                url: BASE_URL + '/og.png',
                width: 1200,
                height: 630,
                alt: title,
            },
        ],
    },
    icons,
    manifest: BASE_URL + '/favicon/manifest.json',
    applicationName: 'Tran Hai Dang Portfolio',
    metadataBase: new URL(BASE_URL),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
