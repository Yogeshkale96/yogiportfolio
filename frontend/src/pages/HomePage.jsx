import Hero from "../components/sections/Hero";
import TechStack from "../components/sections/TechStack";
import About from "../components/sections/About";
import WhyChooseMe from "../components/sections/WhyChooseMe";
import Projects from "../components/sections/Projects";
import Process from "../components/sections/Process";
import Skills from "../components/sections/Skills";
import Services from "../components/sections/Services";
import Stats from "../components/sections/Stats";
import FAQ from "../components/sections/FAQ";
// import Testimonials from '../components/sections/Testimonials'
// import ContactCTA from '../components/sections/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <About />
      <WhyChooseMe />
      <Projects />
      <Process />
      <Skills />
      <Services />
      {/* <Testimonials /> */}
      <Stats />
      <FAQ />
      {/* <ContactCTA /> */}
    </>
  );
}
