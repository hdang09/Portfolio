import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import styles from './card.module.scss';
import { FC, PropsWithChildren } from 'preact/compat';

// classnames
const cn = classNames.bind(styles);

const HeadlessCard: FC<PropsWithChildren> = ({ children }) => {
    return (
        <motion.div
            className={cn('card')}
            initial={{ scale: 0.75, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
        >
            <div className={cn('card-box', 'headless')}>{children}</div>
        </motion.div>
    );
};

export default HeadlessCard;
