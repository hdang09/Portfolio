'use client';

import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './about-me.module.scss';
import { useState } from 'react';

// Type
type SocialMedia = {
    name: string;
    icon: React.ReactNode;
    classname: string;
    href: string;
};

// classnames
const cn = classNames.bind(styles);

// Constants
const NAV_LIST: string[] = ['About', 'Techstacks', 'Social Media', 'Award'];
const SOCIAL_MEDIA: SocialMedia[] = [
    { name: 'Facebook', icon: <FaFacebookF />, classname: 'fb', href: 'https://www.facebook.com/hdang.09' },
    { name: 'Instagram', icon: <FaInstagram />, classname: 'ins', href: 'https://www.instagram.com/h.dang09/' },
    { name: 'LinkedIn', icon: <FaLinkedin />, classname: 'in', href: 'https://www.linkedin.com/in/hdang09/' },
    { name: 'GitHub', icon: <FaGithub />, classname: 'git', href: 'https://github.com/hdang09' },
];

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState<number>(1);

    return (
        <section id="about-me" className={cn('section')}>
            <div className={cn('container')}>
                <h2 className={cn('heading')}>About me</h2>
                <ul className={cn('nav-list')}>
                    {NAV_LIST.map((item, index) => (
                        <li
                            onClick={() => setActiveTab(index + 1)}
                            className={cn('nav-item', { active: activeTab === index + 1 })}
                            key={item}
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                {/****** ABOUT ******/}
                <div className={cn('tab', 'about', { active: activeTab === 1 })}>
                    <div className="col-6">
                        <div>
                            <Image width="1000" height="1000" src="/about/about-img.png" alt="About" />
                        </div>

                        <div>
                            <h1 className={cn('heading')}>A designer not just a developer</h1>
                            <p className={cn('desc')}>
                                My name is <strong>Hai Dang</strong>. I am a fullstack designer and developer, currently
                                studying Bachelor of Science and majoring in <strong>Software Engineering</strong>. My
                                keen eye for detail, creativity, and technical expertise allows me to create seamless,
                                responsive interfaces across different devices and platforms.
                            </p>
                            <Link href="#contact" className="button">
                                Lets Talk
                            </Link>
                        </div>
                    </div>
                </div>

                {/****** TECHSTACKS ******/}
                <div className={cn('tab', { active: activeTab === 2 })}>
                    <div className="col-6">
                        <div className={cn('techstacks-item')}>
                            <Image
                                className={cn('bg-img')}
                                src="/services/items/item-1.png"
                                alt="Item"
                                width={200}
                                height={200}
                            />
                            <div className={cn('techstacks-text')}>
                                <h1 className={cn('title')}>Front-end</h1>
                                <p>
                                    HTML, CSS, ReactJS, ViteJS, NextJS, SASS, Tailwind CSS, Bootstrap, Redux, ANT
                                    Design, Styled Components.
                                </p>
                            </div>
                        </div>
                        <div className={cn('techstacks-item')}>
                            <Image
                                className={cn('bg-img')}
                                src="/services/items/item-2.png"
                                alt="Item"
                                width={200}
                                height={200}
                            />
                            <div className={cn('techstacks-text')}>
                                <h1 className={cn('title')}>Back-end</h1>
                                <div>Spring Boot, NodeJS, ExpressJS, SQL Server, MySQL, MongoDB.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={cn('techstacks-item')}>
                            <Image
                                className={cn('bg-img')}
                                src="/services/items/item-3.png"
                                alt="Item"
                                width={200}
                                height={200}
                            />
                            <div className={cn('techstacks-text')}>
                                <h1 className={cn('title')}>Programming Languages</h1>
                                <p>C, Java, JavaScript, TypeScript.</p>
                            </div>
                        </div>
                        <div className={cn('techstacks-item')}>
                            <Image
                                className={cn('bg-img')}
                                src="/services/items/item-4.png"
                                alt="Item"
                                width={200}
                                height={200}
                            />
                            <div className={cn('techstacks-text')}>
                                <h1 className={cn('title')}>DevOps</h1>
                                <p>Linux, Docker, GitHub Actions, Lightsail.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/****** SOCIAL MEDIA ******/}
                <div className={cn('tab', { active: activeTab === 3 })}>
                    <div className={cn('col-3')}>
                        {SOCIAL_MEDIA.map((item) => (
                            <Link href={item.href} key={item.name} className={cn('sm-group')}>
                                <div className={cn('icon', item.classname)}>{item.icon}</div>
                                <span className={cn('name')}>{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/****** AWARD ******/}
                <div className={cn('tab', { active: activeTab === 4 })}>
                    <div className="col-6">
                        <Image
                            src="/award/certificate-1.jpg"
                            alt="Award"
                            width={500}
                            height={500}
                            className={cn('award-img')}
                        />
                        <Image
                            src="/award/certificate-2.jpg"
                            alt="Award"
                            width={500}
                            height={500}
                            className={cn('award-img')}
                        />
                    </div>

                    <div className="col-6">
                        <Image
                            src="/award/certificate-3.jpg"
                            alt="Award"
                            width={500}
                            height={500}
                            className={cn('award-img')}
                        />
                        <Image
                            src="/award/certificate-4.jpg"
                            alt="Award"
                            width={500}
                            height={500}
                            className={cn('award-img')}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

AboutMe.propTypes = {};

export default AboutMe;
