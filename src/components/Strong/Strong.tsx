import classNames from 'classnames/bind';
import styles from './strong.module.scss';
import { FC, PropsWithChildren } from 'preact/compat';

// classnames
const cn = classNames.bind(styles);

const Strong: FC<PropsWithChildren> = ({ children }) => {
    return <strong className={cn('strong')}>{children}</strong>;
};

export default Strong;
