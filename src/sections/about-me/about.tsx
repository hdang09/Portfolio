import classNames from 'classnames/bind';

import aboutImg from '@/assets/about/about-img.png';
import Button from '@/components/button';
import Strong from '@/components/strong';
import FadeUp from '@/components/fade-up';

import styles from './about-me.module.scss';
import Image from 'next/image';

// classnames
const cn = classNames.bind(styles);

const About = () => {
    return (
        <div className={cn('tab', 'about')}>
            <div className="col-6">
                <div>
                    <Image src={aboutImg} alt="About" />
                </div>

                <div>
                    <FadeUp delay={0.2}>
                        <h1 className={cn('heading')}>A designer not just a developer</h1>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <p className={cn('desc')} style={{ height: 'inherit' }}>
                            My name is <Strong>Hai Dang</Strong>. I am a full-stack developer and
                            designer, currently studying Bachelor of Science and majoring in{' '}
                            <Strong>Software Engineering</Strong>. My keen eye for detail,
                            creativity, and technical expertise allows me to create seamless,
                            responsive interfaces across different devices and platforms.
                        </p>
                    </FadeUp>

                    <Button large responsive onClick={() => (window.location.href = '#contact')}>
                        Let&apos;s Talk
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default About;
