import classNames from 'classnames/bind';
import styles from './container.module.scss';
import { FC, PropsWithChildren } from 'preact/compat';

// classnames
const cn = classNames.bind(styles);

const Container: FC<PropsWithChildren> = ({ children }) => {
    return <div className={cn('container')}>{children}</div>;
};

export default Container;
