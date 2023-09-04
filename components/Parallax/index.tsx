'use client';

import { useEffect, useRef } from 'react';

import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './parallax.module.scss';

const cn = classNames.bind(styles);

const Parallax = () => {
    const textRef = useRef<HTMLImageElement>(null);
    const leafRef = useRef<HTMLImageElement>(null);
    const hill1Ref = useRef<HTMLImageElement>(null);
    const hill4Ref = useRef<HTMLImageElement>(null);
    const hill5Ref = useRef<HTMLImageElement>(null);
    const plantRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            let value = window.scrollY;

            if (textRef.current && value < 1024) {
                textRef.current.style.marginTop = value * 2.5 + 'px';
            }
            if (leafRef.current) {
                leafRef.current.style.top = value * -1.5 + 'px';
                leafRef.current.style.left = value * 1.5 + 'px';
            }
            if (hill5Ref.current) {
                hill5Ref.current.style.left = value * 1.5 + 'px';
            }
            if (hill4Ref.current) {
                hill4Ref.current.style.left = value * -1.5 + 'px';
            }
            if (hill1Ref.current) {
                hill1Ref.current.style.top = value * 1 + 'px';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={cn('parallax')}>
            <Image src="/parallax/hill1.png" alt="hill1" id="hill1" width={2000} height={2000} ref={hill1Ref} />
            <Image src="/parallax/hill2.png" alt="hill2" id="hill2" width={2000} height={2000} />
            <Image src="/parallax/hill3.png" alt="hill3" id="hill3" width={2000} height={2000} />
            <Image src="/parallax/hill4.png" alt="hill4" id="hill4" width={2000} height={2000} ref={hill4Ref} />
            <Image src="/parallax/hill5.png" alt="hill5" id="hill5" width={2000} height={2000} ref={hill5Ref} />
            <Image src="/parallax/tree.png" alt="teee" id="tree" width={2000} height={2000} ref={leafRef} />
            <Image src="/parallax/leaf.png" alt="teee" id="leaf" width={2000} height={2000} ref={leafRef} />

            <div ref={textRef} className={cn('text')}>
                <h2 className={cn('heading')}>Tran Hai Dang</h2>
                <h3 className={cn('subheading')}>Fullstack Developer, Designer</h3>
            </div>

            <Image src="/parallax/plant.png" alt="plant" id="plant" width={2000} height={2000} ref={plantRef} />
        </section>
    );
};

Parallax.propTypes = {};

export default Parallax;
