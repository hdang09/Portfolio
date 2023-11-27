import { useEffect, useState } from 'preact/hooks';
import { HiDownload } from 'react-icons/hi';
import Container from '@/components/Container';
import classNames from 'classnames/bind';

import styles from './header.module.scss';
import { RESUME_URL } from '@/config/constants';

// classnames
const cn = classNames.bind(styles);

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
                    <a href="/" className={cn('logo')}>
                        hdang09
                    </a>

                    <nav>
                        <a href="#">Home</a>
                        <a href="#about-me">About me</a>
                        <a href="#projects">
                            Projects
                            <span className={cn('project-count')}>4</span>
                        </a>
                        <a href="#contact">Contact</a>
                        <a className={cn('nav-btn-link')}>
                            <button
                                className={cn('action-btn', 'nav-btn')}
                                onClick={downloadResume}
                            >
                                <HiDownload />
                                <span>Resume</span>
                            </button>
                        </a>
                    </nav>

                    <button className={cn('action-btn', 'header-btn')} onClick={downloadResume}>
                        <HiDownload />
                        <span>Resume</span>
                    </button>
                </div>

                <img
                    src="https://www.dimension.dev/build/q-9f76d447.png"
                    alt="Stage light"
                    className={cn('stage-light')}
                />
            </Container>
        </header>
    );
};

export default Header;
