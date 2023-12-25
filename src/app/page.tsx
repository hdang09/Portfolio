import { Toaster } from 'react-hot-toast';

import Header from '@/components/header';
import Hero from '@/sections/hero';
import RecentTech from '@/sections/recent-tech';
import AboutMe from '@/sections/about-me';
import Projects from '@/sections/projects';
import Contact from '@/sections/contact';
import Footer from '@/components/footer';
import FloatButton from '@/components/float-button';

import '@/styles/main.scss';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <RecentTech />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />

            <Toaster />
            <FloatButton />
        </>
    );
}
