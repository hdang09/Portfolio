'use client';

import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiDownload } from 'react-icons/hi';

import stageLight from '@/assets/components/stage-light.png';
import { RESUME_URL } from '@/config/constants';
import Button from '@/components/button';
import Container from '@/components/container';

import styles from './header.module.scss';

// classnames
const cn = classNames.bind(styles);

// Constants
const NAV_LINKS = [
    { id: 1, href: '#', children: 'Home' },
    { id: 2, href: '#about-me', children: 'About me' },
    {
        id: 3,
        href: '#projects',
        children: (
            <>
                Projects
                <span className={cn('project-count')}>6</span>
            </>
        ),
    },
    { id: 4, href: '#contact', children: 'Contact' },
];

const Header = () => {
    const [scroll, setScroll] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 0) setScroll(true);
        else setScroll(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);

    const downloadResume = () => {
        window.open(RESUME_URL);
    };

    return (
        <header className={cn('header')}>
            <div className={cn('stage-light', 'stage-background')} />
            <Image src={stageLight} alt="Stage light" className={cn('stage-light')} />

            <Container>
                <div className={cn('header-inner', scroll && 'header-scrolled')}>
                    <motion.a
                        href="/"
                        className={cn('logo')}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        hdang09
                    </motion.a>

                    <motion.nav
                        className={cn('nav')}
                        initial={{ width: '48px', height: '48px' }}
                        animate={{ width: 'revert-layer', display: 'revert-layer' }}
                    >
                        {NAV_LINKS.map((item, index) => (
                            <motion.a
                                href={item.href}
                                key={item.id}
                                initial={{ y: '20px', opacity: 0 }}
                                animate={{ y: '0px', opacity: 1 }}
                                transition={{ delay: 0.4 + index / 10 }}
                            >
                                {item.children}
                            </motion.a>
                        ))}

                        <Link className={cn('nav-btn-link')} href="#">
                            <Button
                                gradient
                                medium
                                rounded
                                onClick={downloadResume}
                                leftIcon={<HiDownload />}
                            >
                                Resume
                            </Button>
                        </Link>
                    </motion.nav>

                    <motion.div
                        className={cn('header-btn')}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Button medium header onClick={downloadResume} leftIcon={<HiDownload />}>
                            Resume
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
