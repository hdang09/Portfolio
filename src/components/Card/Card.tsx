import classNames from 'classnames/bind';
import { JSX } from 'preact/compat';
import Image from '@/components/Image';
import styles from './card.module.scss';

const cn = classNames.bind(styles);

interface CardProps {
    icon: JSX.Element | string;
    title: string;
    description: string;
    url: string;
    preview: JSX.Element;
}

const Card = ({ icon, title, description, url, preview }: CardProps) => {
    return (
        <div className={cn('card')}>
            <Image src="/components/bg-dots.png" alt="Background dots" className={cn('bg-dots')} />

            <div className={cn('card-heading')}>
                <a href={url} target="_blank" aria-label={title} className={cn('icon')}>
                    {typeof icon === 'string' ? <img src={icon} alt={title} /> : icon}
                </a>
                <a href={url} target="_blank" className={cn('card-title')}>
                    {title}
                </a>
                <p className={cn('description')}>{description}</p>
            </div>

            <div className={cn('card-box')}>{preview}</div>
        </div>
    );
};

export default Card;
