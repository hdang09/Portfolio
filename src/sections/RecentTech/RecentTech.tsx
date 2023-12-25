import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import { RECENT_TECH } from '@/config/constants';
import FadeUp from '@/components/FadeUp';
import Image from '@/components/Image';

import styles from './recent-tech.module.scss';

// classnames
const cn = classNames.bind(styles);

const RecentTech = () => {
    return (
        <section className={cn('recent-tech')}>
            <FadeUp>
                <h2 className={cn('label')}>Some of the technologies that I recently used</h2>
            </FadeUp>

            <div className={cn('list')}>
                {RECENT_TECH.map((tech, index) => (
                    <motion.a
                        viewport={{ once: true }}
                        href={tech.url}
                        target="_blank"
                        initial={{ y: '20px', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index / 10, duration: 0.4 }}
                    >
                        <Image src={tech.image} alt={tech.name} className={cn('img')} />
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default RecentTech;
