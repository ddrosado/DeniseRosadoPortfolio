import Welcome from './components/welcome/Welcome'
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects'
import About from './components/aboutme/About'
import Opinions from './opinions/Opinions'
import Contact from './components/Contact/Contact'


export default function Home() {
  return (
    <main>
      <div>
        <Nav/>
        <div>
        <Welcome/>
        <About/>
        <Projects/>
        <Opinions/>
        <Contact/>
        </div>
      </div>
    </main>
  )
}
