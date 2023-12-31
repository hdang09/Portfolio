'use client';

import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { MdSunny } from 'react-icons/md';
import { HiMoon } from 'react-icons/hi';

import styles from './float-button.module.scss';

// classnames
const cn = classNames.bind(styles);

const FloatButton = () => {
    // Dark mode
    const [isDark, setIsDark] = useState<boolean>(true);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        if (JSON.parse(localStorage.getItem('is-dark') || 'true')) {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        if (typeof window === 'undefined') return;

        document.documentElement.classList.toggle('dark');
        localStorage.setItem('is-dark', isDark ? 'false' : 'true');
        setIsDark((prev) => !prev);
    };

    return (
        <div className={cn('float-button')} onClick={toggleTheme}>
            {isDark ? <MdSunny /> : <HiMoon />}
        </div>
    );
};

export default FloatButton;
