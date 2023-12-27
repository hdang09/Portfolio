import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FiExternalLink } from 'react-icons/fi';

import backgroundDots from '@/assets/components/bg-dots.png';
import Button from '@/components/button';

import styles from './card.module.scss';

const cn = classNames.bind(styles);

interface CardProps {
    icon: JSX.Element;
    title: string;
    description: string;
    url: string;
    preview: () => JSX.Element;
    techstacks: IconType[];
}

const Card = ({ icon, title, description, url, preview, techstacks }: CardProps) => {
    const Preview = preview;

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
                <Link href={url} target="_blank" aria-label={title} className={cn('icon')}>
                    {icon}
                </Link>
                <Link href={url} target="_blank" className={cn('card-title')}>
                    {title}
                </Link>
                <p className={cn('description')}>{description}</p>
            </div>

            <motion.div
                initial={{ y: '20px', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className={cn('card-box')}
            >
                <Preview />
            </motion.div>

            <div className={cn('card-footer')}>
                <div className={cn('techstacks')}>
                    {techstacks.map((tech, idx) => {
                        const Tech = tech;

                        return <Tech key={idx} />;
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
