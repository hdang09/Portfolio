import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Tran Hai Dang - Full-stack Developer',
    description:
        'My name is Hai Dang. I am a full-stack developer and designer, currently studying Bachelor of Science and majoring in Software Engineering at FPT University.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
