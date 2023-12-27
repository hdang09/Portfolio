'use client';

import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import Image from 'next/image';

import light from '@/assets/components/light.png';
import Button from '@/components/button';
import Container from '@/components/container';
import FadeUp from '@/components/fade-up';

import styles from './hero.module.scss';

// classnames
const cn = classNames.bind(styles);

const Hero = () => {
    return (
        <section className={cn('hero')}>
            <Container>
                <div className={cn('background')}>
                    <div className={cn('circles')}>
                        <div className={cn('circle', 'circle-1')} />
                        <div className={cn('circle', 'circle-2')} />
                        <div className={cn('circle', 'circle-3')} />
                    </div>

                    <div className={cn('lights')}>
                        <Image src={light} alt="Light" className={cn('light', 'light-1')} />
                        <Image src={light} alt="Light" className={cn('light', 'light-2')} />
                    </div>
                </div>

                <div className={cn('content')}>
                    <motion.a
                        initial={{ width: '32px' }}
                        animate={{ width: '220px' }}
                        transition={{ duration: 0.75 }}
                        href="mailto:contact@hdang09.tech"
                        className={cn('badge')}
                    >
                        <motion.span
                            initial={{ y: '-20px', opacity: 0 }}
                            animate={{ y: '0', opacity: 1 }}
                            transition={{ delay: 0.75, duration: 0.25 }}
                            style={{ display: 'inline-block' }}
                        >
                            contact@hdang09.tech
                        </motion.span>
                    </motion.a>

                    <div>
                        <FadeUp>
                            <h1 className={cn('title')}>Tran Hai Dang</h1>
                        </FadeUp>
                        <FadeUp delay={0.25}>
                            <h1 className={cn('title', 'main')}>Full-stack Developer</h1>
                        </FadeUp>
                    </div>

                    <FadeUp delay={0.5}>
                        <p className={cn('description')}>
                            Build client, server, design, deployments, and more.
                        </p>
                    </FadeUp>

                    <motion.div
                        initial={{ y: '-20px', opacity: 0 }}
                        animate={{ y: '0', opacity: 1 }}
                        transition={{ delay: 1.25, duration: 0.5 }}
                    >
                        <Button href="#projects" large responsive>
                            View projects
                        </Button>
                        <Button href="#contact" gradient large responsive>
                            Contact me
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
