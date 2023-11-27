import classNames from 'classnames/bind';

import styles from './about-me.module.scss';
import Button from '@/components/Button';
import Strong from '@/components/Strong';
import FadeUp from '@/components/FadeUp';

// classnames
const cn = classNames.bind(styles);

const About = ({ active }: { active: boolean }) => {
    return (
        <div className={cn('tab', 'about', { active })}>
            <div className="col-6">
                <div>
                    <img width="1000" height="1000" src="/about/about-img.png" alt="About" />
                </div>

                <div>
                    <FadeUp delay={0.2}>
                        <h1 className={cn('heading')}>A designer not just a developer</h1>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <p className={cn('desc')} style={{ height: 'inherit' }}>
                            My name is <Strong>Hai Dang</Strong>. I am a fullstack designer and
                            developer, currently studying Bachelor of Science and majoring in{' '}
                            <Strong>Software Engineering</Strong>. My keen eye for detail,
                            creativity, and technical expertise allows me to create seamless,
                            responsive interfaces across different devices and platforms.
                        </p>
                    </FadeUp>

                    <Button large responsive onClick={() => (window.location.href = '#contact')}>
                        Let's Talk
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default About;
