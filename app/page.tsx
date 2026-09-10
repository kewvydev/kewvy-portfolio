import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Highlights from "@/components/Highlights";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import LinkFeedback from "@/components/LinkFeedback";
import MotionScene from "@/components/MotionScene";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Intro />
      <MotionScene>
        <Navbar />
        <main id="main" tabIndex={-1}>
          <HeroSection />
          <Projects />
          <AboutMe />
          <Experience />
          <Skills />
          <Highlights />
          <Contact />
        </main>
        <Footer />
        <LinkFeedback />
      </MotionScene>
    </>
  );
}
