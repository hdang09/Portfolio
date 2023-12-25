'use client';

import Image from 'next/image';
import {
    SiNextdotjs,
    SiSpring,
    SiStyledcomponents,
    SiReact,
    SiTailwindcss,
    SiMicrosoftsqlserver,
    SiDocker,
    SiNodedotjs,
    SiExpress,
} from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import { GrMysql } from 'react-icons/gr';
import { FaJava, FaSass } from 'react-icons/fa';
import { IoIosLink } from 'react-icons/io';
import { AiOutlineBulb } from 'react-icons/ai';
import { MdMovie } from 'react-icons/md';
import { RiHotelFill } from 'react-icons/ri';

import Card from '@/components/card';
import Section from '@/components/section';
import Strong from '@/components/strong';

import HousemateSVG from '@/assets/svg/housemate.svg';
import FcodeSVG from '@/assets/svg/f-code.svg';

import HouseMatePreview from './housemate-preview';
import ShortenURLPreview from './shorten-url-preview';
import IQChallengePreview from './iq-challenge-preview';
import NetClickPreview from './netclick-preview';
import FCodeLandingPagePreview from './fcode-landing-page-preview';
import HotelReservationPreview from './hotel-reservation-preview';

// Constants
const PROJECTS = [
    {
        title: 'HouseMate',
        description: 'A web application that provides service for student apartments',
        url: 'https://housemate.site',
        techstacks: [SiReact, BiLogoTypescript, SiStyledcomponents, SiSpring, GrMysql],
        preview: HouseMatePreview,
        icon: <Image src={HousemateSVG} alt="HouseMate Icon" />,
    },
    {
        title: 'Shorten URL',
        description: 'An URL Shortener transform long, ugly links into nice, short URLs',
        url: 'https://shorten.hdang09.tech',
        techstacks: [SiReact, SiStyledcomponents, SiSpring, GrMysql],
        preview: ShortenURLPreview,
        icon: <IoIosLink />,
    },
    {
        title: 'NetClick',
        description: 'A movie web application',
        url: 'https://netclick.hdang09.tech',
        techstacks: [FaJava, SiTailwindcss, SiMicrosoftsqlserver],
        preview: NetClickPreview,
        icon: <MdMovie />,
    },
    {
        title: 'IQ Challenge',
        description: 'A quiz game for the orientation at FPT University HCM.',
        url: 'https://iq.hdang09.tech',
        techstacks: [SiNextdotjs, BiLogoTypescript, FaSass, SiSpring, GrMysql],
        preview: IQChallengePreview,
        icon: <AiOutlineBulb />,
    },
    {
        title: 'F-Code Landing Page',
        description: 'A landing page for recruiting members into F-Code Club.',
        url: 'https://f-code.tech',
        techstacks: [SiReact, SiStyledcomponents, SiSpring, GrMysql, SiDocker],
        preview: FCodeLandingPagePreview,
        icon: <Image src={FcodeSVG} alt="F-Code Icon" />,
    },
    {
        title: 'Hotel Reservation',
        description: 'A project to book rooms for receptionist.',
        url: 'https://hotel.hdang09.tech',
        techstacks: [SiReact, SiTailwindcss, SiNodedotjs, SiExpress],
        preview: HotelReservationPreview,
        icon: <RiHotelFill />,
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
                    <Card key={project.title} {...project} />
                ))}
            </div>
        </Section>
    );
};

Projects.propTypes = {};

export default Projects;
