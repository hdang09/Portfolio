import classNames from 'classnames/bind';
import styles from './card.module.scss';
import { FC, PropsWithChildren } from 'preact/compat';

// classnames
const cn = classNames.bind(styles);

const HeadlessCard: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={cn('card')}>
            <div className={cn('card-box', 'headless')}>{children}</div>
        </div>
    );
};

export default HeadlessCard;
