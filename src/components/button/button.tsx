import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { PropsWithChildren } from 'preact/compat';
import { JSX, h } from 'preact';

const cn = classNames.bind(styles);

interface ButtonProps extends PropsWithChildren {
    large?: boolean;
    medium?: boolean;
    responsive?: boolean;
    gradient?: boolean;
    header?: boolean;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    onClick?: (event: h.JSX.TargetedMouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
    large,
    medium,
    gradient,
    responsive,
    header,
    leftIcon,
    rightIcon,
    children,
    onClick,
    ...rest
}: ButtonProps) => {
    return (
        <button
            className={cn('button', { large, medium, responsive, gradient, header })}
            onClick={onClick}
            {...rest}
        >
            {leftIcon && <span className={cn('icon')}>{leftIcon}</span>}
            {children}
            {rightIcon && <span className={cn('icon')}>{rightIcon}</span>}
        </button>
    );
};

export default Button;
