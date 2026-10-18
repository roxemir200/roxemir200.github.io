import { ArrowUp } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import About from './components/About'
import Competitive from './components/Competitive'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { profile } from './data/portfolio'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Competitive />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
          </p>
          <div className="flex items-center gap-4">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-fg">
              <FaGithub size={18} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-fg">
              <FaLinkedin size={18} />
            </a>
            <a href="#top" aria-label="Haut de page" className="rounded-lg border border-line p-1.5 hover:text-fg">
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
