'use client';

import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './about-me.module.scss';
import { useState } from 'react';

type SocialMedia = {
    name: string;
    icon: string;
    color: string;
};

const cn = classNames.bind(styles);

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState<number>(1);

    const NAV_LIST: string[] = ['About', 'Techstacks', 'Social Media', 'Award'];
    const SOCIAL_MEDIA: SocialMedia[] = [
        { name: 'Facebook', icon: 'icon', color: 'color' },
        { name: 'Instagram', icon: 'icon', color: 'color' },
        { name: 'LinkedIn', icon: 'icon', color: 'color' },
        { name: 'GitHub', icon: 'icon', color: 'color' },
    ];

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
                    <div className={cn('col-6')}>
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
                            <button className="button">Lets Talk</button>
                        </div>
                    </div>
                </div>

                {/****** TECHSTACKS ******/}
                <div className={cn('tab', { active: activeTab === 2 })}>
                    <div className={cn('col-6')}>
                        <div className={cn('services-item')}>
                            <div
                                // style="background: url(./img/container/services/items/item-4.png) no-repeat center / contain;"
                                className="services-item__img-bg"
                            >
                                <div
                                    // style="background: url(./img/container/services/icons/004-employee.png) no-repeat center / contain;"
                                    className="services-item__img-icon"
                                ></div>
                            </div>
                            <div className="services-item__body">
                                <h1 className="services-item__body-title">Front-end</h1>
                                <div className="services-item__body--text">
                                    HTML, CSS, ReactJS, ViteJS, NextJS, SASS, Tailwind CSS, Bootstrap, Redux, ANT
                                    Design, Styled Components.
                                </div>
                            </div>
                        </div>
                        <div className={cn('services-item')}>
                            <div
                                // style="background: url(./img/container/services/items/item-1.png) no-repeat center / contain;"
                                className="services-item__img-bg"
                            >
                                <div
                                    // style="background: url(./img/container/services/icons/001-lightbulb.png) no-repeat center / contain;"
                                    className="services-item__img-icon"
                                ></div>
                            </div>
                            <div className="services-item__body">
                                <h1 className="services-item__body-title">Back-end</h1>
                                <div className="services-item__body--text">
                                    Spring Boot, NodeJS, ExpressJS, SQL Server, MySQL, MongoDB.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cn('col-6')}>
                        <div className={cn('services-item')}>
                            <div
                                // style="background: url(./img/container/services/items/item-3.png) no-repeat center / contain;"
                                className="services-item__img-bg"
                            >
                                <div
                                    // style="background: url(./img/container/services/icons/003-visualization.png) no-repeat center / contain;"
                                    className="services-item__img-icon"
                                ></div>
                            </div>
                            <div className="services-item__body">
                                <h1 className="services-item__body-title">Programming Languages</h1>
                                <div className="services-item__body--text">C, Java, JavaScript, TypeScript.</div>
                            </div>
                        </div>
                        <div className={cn('services-item')}>
                            <div
                                // style="background: url(./img/container/services/items/item-2.png) no-repeat center / contain;"
                                className="services-item__img-bg"
                            >
                                <div
                                    // style="background: url(./img/container/services/icons/002-edit-file.png) no-repeat center / contain;"
                                    className="services-item__img-icon"
                                ></div>
                            </div>
                            <div className="services-item__body">
                                <h1 className="services-item__body-title">DevOps</h1>
                                <div className="services-item__body--text">
                                    Linux, Docker, GitHub Actions, Lightsail.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/****** SOCIAL MEDIA ******/}
                <div className={cn('tab', { active: activeTab === 3 })}>
                    <div className={cn('col-3')}>
                        {SOCIAL_MEDIA.map((item) => (
                            <div key={item.name} className={cn('sm-group')}>
                                <div className={cn('icon')}>{item.icon}</div>
                                <span className={cn('name')}>{item.name}</span>
                            </div>
                        ))}
                        <div className="col l-4 m-6 c-12 flexible">
                            {/* <button style="border-color: #3b5998;" className="btn-l social--fb">
                <a style="color: #3b5998;" className="social--fb-link" href="#">
                    <i className="social--fb-link-icon fab fa-facebook-f"></i>
                </a>
            </button> */}
                            <span className="section-4__title">Facebook</span>
                        </div>

                        <div className="col l-4 m-6 c-12 flexible">
                            {/* <button style="border-color: #ff8e40;" className="btn-l social--ins">
                <a className="social--ins-link" href="#">
                    <i className="social--ins-link-icon fab fa-instagram"></i>
                </a>
            </button> */}
                            <span className="section-4__title">Instagram</span>
                        </div>

                        <div className="col l-4 m-6 c-12 flexible">
                            {/* <button style="border-color: #ea4c89;" className="btn-l social--dribble">
                <a style="color: #ea4c89;" className="social--dribble-link" href="#">
                    <i className="social--dribble-link-icon fas fa-basketball-ball"></i>
                </a>
            </button> */}
                            <span className="section-4__title">Dribble</span>
                        </div>

                        <div className="col l-4 m-6 c-12 flexible">
                            {/* <button style="border-color: #007aaa;" className="btn-l social--li">
                <a style="color: #007aaa;" className="social--li-link" href="#">
                    <i className="social--li-link-icon fab fa-linkedin-in"></i>
                </a>
            </button> */}
                            <span className="section-4__title">Linkedin</span>
                        </div>
                    </div>
                </div>

                {/****** AWARD ******/}
                <div className={cn('tab', { active: activeTab === 4 })}>
                    <div className={cn('col-6')}>
                        <div>
                            {/* <img src="./img/container/award/certificate-1.jpg" alt="" className="section-img"> */}
                        </div>

                        <div>
                            {/* <img src="./img/container/award/certificate-2.jpg" alt="" className="section-img"> */}
                        </div>
                    </div>

                    <div className={cn('col-6')}>
                        <div>
                            {/* <img src="./img/container/award/certificate-3.jpg" alt="" className="section-img"> */}
                        </div>
                        <div>
                            {/* <img src="./img/container/award/certificate-4.jpg" alt="" className="section-img"> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

AboutMe.propTypes = {};

export default AboutMe;
