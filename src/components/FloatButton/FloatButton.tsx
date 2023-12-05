import classNames from 'classnames/bind';
import { useEffect, useState } from 'preact/hooks';
import { MdSunny } from 'react-icons/md';
import { HiMoon } from 'react-icons/hi';

import styles from './float-button.module.scss';

// classnames
const cn = classNames.bind(styles);

const FloatButton = () => {
    // Dark mode
    const [isDark, setIsDark] = useState<boolean>(
        JSON.parse(localStorage.getItem('is-dark') || 'true'),
    );

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('is-dark') || 'true')) {
            document.documentElement.classList.toggle('dark');
            setIsDark(true);
        }
    }, []);

    const toggleTheme = () => {
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
