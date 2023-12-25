import classNames from 'classnames/bind';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import styles from './about-me.module.scss';

// classnames
const cn = classNames.bind(styles);

// Constants
const SOCIAL_MEDIA = [
    {
        name: 'Facebook',
        icon: <FaFacebookF />,
        classname: 'fb',
        href: 'https://www.facebook.com/hdang.09',
    },
    {
        name: 'Instagram',
        icon: <FaInstagram />,
        classname: 'ins',
        href: 'https://www.instagram.com/h.dang09/',
    },
    {
        name: 'LinkedIn',
        icon: <FaLinkedin />,
        classname: 'in',
        href: 'https://www.linkedin.com/in/hdang09/',
    },
    { name: 'GitHub', icon: <FaGithub />, classname: 'git', href: 'https://github.com/hdang09' },
];

// Component
const SocialMedia = () => {
    return (
        <div className={cn('tab')}>
            <div className={cn('col-3')}>
                {SOCIAL_MEDIA.map((item) => (
                    <a href={item.href} key={item.name} className={cn('sm-group')}>
                        <div className={cn('icon', item.classname)}>{item.icon}</div>
                        <span className={cn('name')}>{item.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SocialMedia;
