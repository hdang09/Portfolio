import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Parallax from '@/components/Parallax';
import Projects from '@/components/Projects/projects';

export default function Home() {
    return (
        <main>
            <Header />
            <Parallax />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}
