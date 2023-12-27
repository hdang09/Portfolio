import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { MouseEventHandler, PropsWithChildren } from 'react';
import Link from 'next/link';

const cn = classNames.bind(styles);

interface ButtonProps extends PropsWithChildren {
    large?: boolean;
    medium?: boolean;
    responsive?: boolean;
    gradient?: boolean;
    header?: boolean;
    rounded?: boolean;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    href?: string;
}

const Button = ({
    large = false,
    medium = false,
    responsive = false,
    gradient = false,
    header = false,
    rounded = false,
    leftIcon,
    rightIcon,
    children,
    onClick,
    href,
    ...rest
}: ButtonProps) => {
    const ButtonContent = () => {
        return (
            <button
                className={cn('button', { large, medium, responsive, gradient, header, rounded })}
                onClick={onClick}
                {...rest}
            >
                {leftIcon && <span className={cn('icon')}>{leftIcon}</span>}
                {children}
                {rightIcon && <span className={cn('icon')}>{rightIcon}</span>}
            </button>
        );
    };

    return href ? (
        <Link href={href} className={cn('wrapper')}>
            <ButtonContent />
        </Link>
    ) : (
        <ButtonContent />
    );
};

export default Button;
