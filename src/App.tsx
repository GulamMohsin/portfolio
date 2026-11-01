import { MotionConfig } from 'framer-motion';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { ManualTesting } from './sections/ManualTesting';
import { AutomationTesting } from './sections/AutomationTesting';
import { Frameworks } from './sections/Frameworks';
import { ApiTesting } from './sections/ApiTesting';
import { DatabaseTesting } from './sections/DatabaseTesting';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { DevProjects } from './sections/DevProjects';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Certifications } from './sections/Certifications';
import { GithubActivity } from './sections/GithubActivity';
import { Resume } from './sections/Resume';
import { Contact } from './sections/Contact';

export default function App() {
  return (
    // reducedMotion="user" disables animations for visitors who prefer reduced motion.
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <AmbientBackground />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <ManualTesting />
        <AutomationTesting />
        <Frameworks />
        <ApiTesting />
        <DatabaseTesting />
        <FeaturedProjects />
        <DevProjects />
        <Experience />
        <Education />
        <Certifications />
        <GithubActivity />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
