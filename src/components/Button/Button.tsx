import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { PropsWithChildren } from 'preact/compat';
import { h } from 'preact';

const cn = classNames.bind(styles);

interface ButtonProps extends PropsWithChildren {
    large?: boolean;
    responsive?: boolean;
    onClick?: (event: h.JSX.TargetedMouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ large, responsive, children, onClick, ...rest }: ButtonProps) => {
    return (
        <button
            className={cn('button', large && 'large', responsive && 'responsive')}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
