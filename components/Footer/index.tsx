import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi';

import classNames from 'classnames/bind';
import styles from './footer.module.scss';

const cn = classNames.bind(styles);

const Footer = () => {
    const NAV_BAR = [
        { name: 'Home', href: '#' },
        { name: 'About me', href: '#about-me' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const SOCIAL_MEDIA = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/hdang.09',
            icon: <BiLogoFacebook color="#385c8e" size="30" />,
        },
        {
            name: 'Facebook',
            url: 'https://www.instagram.com/h.dang09/',
            icon: <BiLogoInstagram color="#ff8e40" size="30" />,
        },
        {
            name: 'Facebook',
            url: 'https://www.linkedin.com/in/hdang09/',
            icon: <BiLogoLinkedin color="#007aaa" size="30" />,
        },
    ];

    const TECHSTACKS = ['NextJS', 'TypeScript', 'Prisma', 'MySQL', 'Docker'];

    return (
        <footer className={cn('section')}>
            <div className={cn('container')}>
                <div className={cn('footer-info')}>
                    <h1 className={cn('logo')}>hdang</h1>

                    <ul className={cn('nav-bar')}>
                        {NAV_BAR.map((item) => (
                            <li key={item.name}>
                                <a href={item.href}>{item.name}</a>
                            </li>
                        ))}
                    </ul>

                    <ul className={cn('social-media')}>
                        {SOCIAL_MEDIA.map((item) => (
                            <li className={cn('sm-item')} key={item.name}>
                                <a href={item.url}>{item.icon}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={cn('copyright')}>
                <p className={cn('text')}>
                    Made with{' '}
                    {TECHSTACKS.map((item, index) => (
                        <>
                            {index > 0 && ', '}
                            <strong key={item}>{item}</strong>
                        </>
                    ))}
                </p>
            </div>
        </footer>
    );
};

Footer.propTypes = {};

export default Footer;
