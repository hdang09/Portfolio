import classNames from 'classnames/bind';
import Link from 'next/link';
import { BiLogoGmail, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi';

import Strong from '@/components/strong';
import Container from '@/components/container';

import styles from './footer.module.scss';

const cn = classNames.bind(styles);

// Constants
const NAV_BAR = [
    { name: 'Home', href: '#' },
    { name: 'About me', href: '#about-me' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const SOCIAL_MEDIA = [
    {
        name: 'Email',
        url: 'mailto:hdang09.tech',
        icon: BiLogoGmail,
    },
    {
        name: 'GitHub',
        url: 'https://github.com/hdang09',
        icon: BiLogoGithub,
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/hdang09/',
        icon: BiLogoLinkedin,
    },
];

const Footer = () => {
    return (
        <footer className={cn('footer')}>
            <Container>
                <div className={cn('footer-info')}>
                    <h1 className={cn('logo')}>hdang09</h1>

                    <ul className={cn('nav-bar')}>
                        {NAV_BAR.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>

                    <ul className={cn('social-media')}>
                        {SOCIAL_MEDIA.map((item) => {
                            const Icon = item.icon;

                            return (
                                <li className={cn('sm-item')} key={item.name}>
                                    <Link target="_blank" href={item.url} aria-label={item.name}>
                                        <Icon size="30" />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Container>

            <div className={cn('copyright')}>
                <p className={cn('text')}>
                    Copyright © 2024 <Strong>hdang09</Strong>. Inspired by{' '}
                    <Link href="https://dribbble.com" target="_blank">
                        <strong>Dribbble</strong>
                    </Link>
                </p>
            </div>
        </footer>
    );
};

Footer.propTypes = {};

export default Footer;
