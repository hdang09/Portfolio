import classNames from 'classnames/bind';
import { useState } from 'preact/hooks';

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
        name: 'Award',
        component: Award,
    },
];

// Component
const AboutMe = () => {
    const [activeTab, setActiveTab] = useState<number>(1);

    return (
        <Section
            id="about-me"
            heading={
                <>
                    About <Strong>me</Strong>
                </>
            }
        >
            <ul className={cn('nav-list')}>
                {NAV_LIST.map((item) => (
                    <li
                        onClick={() => setActiveTab(item.id)}
                        className={cn('nav-item', { active: activeTab === item.id })}
                        key={item.id}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>

            {NAV_LIST.map((item) => {
                const Component = item.component;
                return <Component active={activeTab === item.id} />;
            })}
        </Section>
    );
};

AboutMe.propTypes = {};

export default AboutMe;
