import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'preact/hooks';
import { HiDownload } from 'react-icons/hi';

import stageLight from '@/assets/components/stage-light.png';
import { RESUME_URL } from '@/config/constants';
import Container from '@/components/Container';
import Image from '@/components/Image';

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
                        initial={{ width: '48px', height: '48px' }}
                        animate={{ width: 'revert-layer' }}
                    >
                        {NAV_LINKS.map((item, index) => (
                            <motion.a
                                href={item.href}
                                key={item.id}
                                initial={{ translateY: '20px', opacity: 0 }}
                                animate={{ translateY: '0px', opacity: 1 }}
                                transition={{ delay: 0.4 + index / 10 }}
                            >
                                {item.children}
                            </motion.a>
                        ))}

                        <a className={cn('nav-btn-link')} href="#">
                            <button
                                className={cn('action-btn', 'nav-btn')}
                                onClick={downloadResume}
                            >
                                <HiDownload />
                                <span>Resume</span>
                            </button>
                        </a>
                    </motion.nav>

                    <div className={cn('header-btn')}>
                        <motion.button
                            className={cn('action-btn')}
                            onClick={downloadResume}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <HiDownload />
                            <span>Resume</span>
                        </motion.button>
                    </div>
                </div>

                <Image src={stageLight} alt="Stage light" className={cn('stage-light')} />
            </Container>
        </header>
    );
};

export default Header;
