import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'preact/hooks';

import Section from '@/components/Section';
import Strong from '@/components/Strong';

import About from './About';
import TechStacks from './TechStacks';
import SocialMedia from './SocialMedia';
import Award from './Award';
import styles from './about-me.module.scss';

// classnames
const cn = classNames.bind(styles);

// Constants
const NAV_LIST = [
    {
        id: 1,
        name: 'About',
        component: About,
    },
    {
        id: 2,
        name: 'Techstacks',
        component: TechStacks,
    },
    {
        id: 3,
        name: 'Social Media',
        component: SocialMedia,
    },
    {
        id: 4,
        name: 'Awards',
        component: Award,
    },
];

// Component
const AboutMe = () => {
    const [activeTab, setActiveTab] = useState(NAV_LIST[0].id);

    const ref = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     container: ref,
    // });

    // const handleScroll = () => {
    //     const scrollY = window.scrollY;

    //     if (scrollY < 750) {
    //         setActiveTab(1);
    //     } else if (scrollY < 1000) {
    //         setActiveTab(2);
    //     } else if (scrollY < 1250) {
    //         setActiveTab(3);
    //     } else {
    //         setActiveTab(4);
    //     }
    // };

    // useEffect(() => {
    //     // Add event listener for scroll
    //     window.addEventListener('scroll', handleScroll);

    //     // Cleanup function to remove the event listener
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    const Component = () => {
        const item = NAV_LIST.find((item) => item.id === activeTab);

        if (!item) return <></>;

        const Component = item.component;
        return <Component />;
    };

    return (
        <Section
            id="about-me"
            heading={
                <>
                    About <Strong>me</Strong>
                </>
            }
        >
            <div
                style={{
                    position: 'sticky',
                    top: '150px',
                }}
            >
                <ul className={cn('nav-list')}>
                    {NAV_LIST.map((item) => (
                        <motion.li
                            onClick={() => setActiveTab(item.id)}
                            className={cn('nav-item', { active: activeTab === item.id })}
                            key={item.id}
                        >
                            {item.name}
                            {/* <motion.div
                                className={cn('nav-item-progress')}
                                style={{ scaleX: scrollYProgress }}
                            /> */}
                        </motion.li>
                    ))}
                </ul>

                <div ref={ref}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            // key={activeTab ? activeTab : 'empty'}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Component />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* <div style={{ height: '2000px' }}></div> */}
        </Section>
    );
};

AboutMe.propTypes = {};

export default AboutMe;
