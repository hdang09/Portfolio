import { Toaster } from 'react-hot-toast';

import Header from './components/Header';
import Footer from './components/Footer';
import FloatButton from './components/FloatButton';
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import RecentTech from './sections/RecentTech';

import './styles/main.scss';

export function App() {
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
