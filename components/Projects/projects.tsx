import { SiNextdotjs, SiSpring, SiStyledcomponents } from 'react-icons/si';

import { FaSass } from 'react-icons/fa';
import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './projects.module.scss';

const cn = classNames.bind(styles);

const Tech = {
    Spring: <SiSpring size={40} color="green" />,
    NextJS: <SiNextdotjs size={40} color="black" />,
    Styledcomponents: <SiStyledcomponents size={40} />,
    SaaS: <FaSass size={40} />,
};

type Project = {
    name: string;
    desc: string;
    imgUrl: string;
    url: string;
    techstacks: any[];
};

// const getProjects = async () => {
//     const res = await fetch(`https://...`);
//     const projects = await res.json();

//     return projects;
// };

const Projects = () => {
    const PROJECTS: Project[] = [
        {
            name: 'Shorten URL',
            desc: 'An URL Shortener that transform long, ugly links into nice, short URLs',
            imgUrl: '/award/certificate-1.jpg',
            url: 'short.hdang09.site',
            techstacks: [Tech.Spring, Tech.NextJS, Tech.Styledcomponents],
        },
        {
            name: 'IQ Challenge',
            desc: 'A quiz game website of F-code club for the orientation to welcome K18 of FPT University HCM.',
            imgUrl: '/award/certificate-1.jpg',
            url: 'iq.hdang09.site',
            techstacks: [Tech.Spring, Tech.NextJS, Tech.Styledcomponents],
        },
    ];
    return (
        <section id="projects" className={cn('section')}>
            <div className={cn('container')}>
                <h2 className={cn('heading')}>Projects</h2>

                <div className="col-6">
                    {PROJECTS.map((project) => (
                        <a href={project.url} className={cn('project')} key={project.name}>
                            <Image src={project.imgUrl} alt={project.name} width={200} height={200} />

                            <div className={cn('details')}>
                                <h1>{project.name}</h1>
                                <p>{project.desc}</p>
                                {project.techstacks.map((item) => item)}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

Projects.propTypes = {};

export default Projects;
