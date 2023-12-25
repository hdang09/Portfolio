import classNames from 'classnames/bind';
import Image from 'next/image';
import { FaJava } from 'react-icons/fa';
import { GiServerRack } from 'react-icons/gi';
import { FaCode } from 'react-icons/fa6';
import { CgWebsite } from 'react-icons/cg';

import techStackItem1 from '@/assets/teckstacks/items/item-1.png';
import techStackItem2 from '@/assets/teckstacks/items/item-2.png';
import techStackItem3 from '@/assets/teckstacks/items/item-3.png';
import techStackItem4 from '@/assets/teckstacks/items/item-4.png';

import styles from './about-me.module.scss';

// classnames
const cn = classNames.bind(styles);

const TECH_STACKS = [
    {
        title: 'Front-end',
        desc: 'HTML, CSS, ReactJS, ViteJS, NextJS, SASS, Tailwind CSS, Bootstrap, Redux, ANT Design, Styled Components.',
        icon: <CgWebsite color="#05051e" />,
        bgIcon: techStackItem1,
    },
    {
        title: 'Back-end',
        desc: 'JSP, Servlet, Spring MVC, JPA, Hibernate, Spring Boot, Spring Security, SQL Server, MySQL, MongoDB.',
        icon: <FaCode color="#05051e" />,
        bgIcon: techStackItem2,
    },
    {
        title: 'Programming Languages',
        desc: 'C, Java, JavaScript, TypeScript.',
        icon: <FaJava color="#05051e" />,
        bgIcon: techStackItem3,
    },
    {
        title: 'DevOps',
        desc: 'Linux, Docker, GitHub Actions, Lightsail.',
        icon: <GiServerRack color="#05051e" />,
        bgIcon: techStackItem4,
    },
];

const TechStacks = () => {
    return (
        <div className={cn('tab')}>
            <div className="col-6">
                {TECH_STACKS.slice(0, 2).map((item, index) => (
                    <div className={cn('techstacks-item')} key={index}>
                        <div className={cn('techstacks-img')}>
                            <Image
                                className={cn('bg-img')}
                                src={item.bgIcon}
                                alt="Teckstack item"
                            />
                            <div className={cn('icon-img')}>{item.icon}</div>
                        </div>

                        <div className={cn('techstacks-text')}>
                            <h1 className={cn('title')}>{item.title}</h1>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="col-6">
                {TECH_STACKS.slice(2, 4).map((item, index) => (
                    <div className={cn('techstacks-item')} key={index}>
                        <div className={cn('techstacks-img')}>
                            <Image
                                className={cn('bg-img')}
                                src={item.bgIcon}
                                alt="Teckstack item"
                            />
                            <div className={cn('icon-img')}>{item.icon}</div>
                        </div>

                        <div className={cn('techstacks-text')}>
                            <h1 className={cn('title')}>{item.title}</h1>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStacks;
