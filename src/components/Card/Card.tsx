import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FiExternalLink } from 'react-icons/fi';
import classNames from 'classnames/bind';
import { JSX } from 'preact/compat';

import backgroundDots from '@/assets/components/bg-dots.png';
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
        <motion.div
            className={cn('card')}
            initial={{ scale: 0.75, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <Image src={backgroundDots} alt="Background dots" className={cn('bg-dots')} />

            <div className={cn('card-heading')}>
                <a href={url} target="_blank" aria-label={title} className={cn('icon')}>
                    {icon}
                </a>
                <a href={url} target="_blank" className={cn('card-title')}>
                    {title}
                </a>
                <p className={cn('description')}>{description}</p>
            </div>

            <motion.div
                initial={{ y: '20px', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className={cn('card-box')}
            >
                {preview}
            </motion.div>

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
        </motion.div>
    );
};

export default Card;
