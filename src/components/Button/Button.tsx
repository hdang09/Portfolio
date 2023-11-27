import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { PropsWithChildren } from 'preact/compat';

const cn = classNames.bind(styles);

interface ButtonProps extends PropsWithChildren {
    large?: boolean;
    responsive?: boolean;
    onClick?: () => void;
}

const Button = ({ large, responsive, children, onClick, ...rest }: ButtonProps) => {
    return (
        <div
            className={cn('button', large && 'large', responsive && 'responsive')}
            onClick={onClick}
            {...rest}
        >
            {children}
        </div>
    );
};

export default Button;
