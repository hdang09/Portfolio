import { IconType } from 'react-icons';
import { FiExternalLink } from 'react-icons/fi';
import classNames from 'classnames/bind';
import { JSX } from 'preact/compat';

import Button from '@/components/Button';
import Image from '@/components/Image';

import styles from './card.module.scss';

const cn = classNames.bind(styles);

interface CardProps {
    icon: JSX.Element;
    title: string;
    description: string;
    url: string;
    preview: JSX.Element;
    techstacks: IconType[];
}

const Card = ({ icon, title, description, url, preview, techstacks }: CardProps) => {
    const navigatePage = () => {
        window.open(url);
    };

    return (
        <div className={cn('card')}>
            <Image src="/components/bg-dots.png" alt="Background dots" className={cn('bg-dots')} />

            <div className={cn('card-heading')}>
                <a href={url} target="_blank" aria-label={title} className={cn('icon')}>
                    {icon}
                </a>
                <a href={url} target="_blank" className={cn('card-title')}>
                    {title}
                </a>
                <p className={cn('description')}>{description}</p>
            </div>

            <div className={cn('card-box')}>{preview}</div>

            <div className={cn('card-footer')}>
                <div className={cn('techstacks')}>
                    {techstacks.map((tech) => {
                        const Tech = tech;

                        return <Tech />;
                    })}
                </div>

                <Button large onClick={navigatePage}>
                    <FiExternalLink />
                    Demo
                </Button>
            </div>
        </div>
    );
};

export default Card;
