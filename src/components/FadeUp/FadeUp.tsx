import classNames from 'classnames/bind';
import { FC, PropsWithChildren, useEffect, useRef, useState } from 'preact/compat';

import styles from './fade-up.module.scss';

// classnames
const cn = classNames.bind(styles);

interface FadeUpProps {
    delay?: number;
}

const FadeUp: FC<PropsWithChildren<FadeUpProps>> = ({ delay = 0, children }) => {
    const fadeUpRef = useRef<HTMLDivElement | null>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    const handleScroll = () => {
        if (hasAnimated || !fadeUpRef.current) return;
        const rect = fadeUpRef.current.getBoundingClientRect();
        setHasAnimated(rect.top >= 0 && rect.top <= window.innerHeight);
    };

    useEffect(() => {
        handleScroll();
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, [hasAnimated]);

    return (
        <div className={cn('fade-up')}>
            <div
                ref={fadeUpRef}
                style={{
                    transform: `translateY(${hasAnimated ? '0' : '100%'})`,
                    transition: `all 1s ${delay}s`,
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default FadeUp;
