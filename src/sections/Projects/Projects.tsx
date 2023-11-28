import { SiNextdotjs, SiSpring, SiStyledcomponents } from 'react-icons/si';
import { IoIosLink } from 'react-icons/io';
import { AiOutlineBulb } from 'react-icons/ai';
import { MdMovie } from 'react-icons/md';
import { FaSass } from 'react-icons/fa';
import { JSX } from 'preact/jsx-runtime';

import Card from '@/components/Card';
import Section from '@/components/Section';
import Strong from '@/components/Strong';

import HouseMatePreview from './HouseMatePreview';
import ShortenURLPreview from './ShortenURLPreview';
import IQChallengePreview from './IQChallengePreview';
import NetClickPreview from './NetClickPreview';

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
    preview: JSX.Element;
    icon: JSX.Element | null;
};

// Constants
const PROJECTS: Project[] = [
    {
        name: 'HouseMate',
        desc: 'A web application that provides service for student apartments',
        imgUrl: '/project/housemate-white.png',
        url: 'https://housemate.site',
        techstacks: [Tech.Spring, Tech.NextJS, Tech.Styledcomponents],
        preview: <HouseMatePreview />,
        icon: null,
    },
    {
        name: 'Shorten URL',
        desc: 'An URL Shortener transform long, ugly links into nice, short URLs',
        imgUrl: '/award/certificate-1.jpg',
        url: 'https://shorten.hdang09.tech',
        techstacks: [Tech.Spring, Tech.NextJS, Tech.Styledcomponents],
        preview: <ShortenURLPreview />,
        icon: <IoIosLink />,
    },
    {
        name: 'NetClick',
        desc: 'A movie web application',
        imgUrl: '/award/certificate-1.jpg',
        url: 'https://netclick.hdang09.tech',
        techstacks: [Tech.Spring, Tech.NextJS, Tech.Styledcomponents],
        preview: <NetClickPreview />,
        icon: <MdMovie />,
    },
    {
        name: 'IQ Challenge',
        desc: 'A quiz game for the orientation at FPT University HCM.',
        imgUrl: '/award/certificate-1.jpg',
        url: 'https://iq.hdang09.tech',
        techstacks: [Tech.Spring, Tech.NextJS, Tech.Styledcomponents],
        preview: <IQChallengePreview />,
        icon: <AiOutlineBulb />,
    },
];

const Projects = () => {
    return (
        <Section
            id="projects"
            heading={
                <>
                    <Strong>Pro</Strong>jects
                </>
            }
        >
            <div className="col-6">
                {PROJECTS.map((project) => (
                    <Card
                        title={project.name}
                        description={project.desc}
                        key={project.name}
                        url={project.url}
                        icon={project.icon || project.imgUrl}
                        preview={project.preview}
                    />
                ))}
            </div>
        </Section>
    );
};

Projects.propTypes = {};

export default Projects;
