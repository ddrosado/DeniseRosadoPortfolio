import Welcome from './components/welcome/Welcome'
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects'
import About from './components/aboutme/About'


export default function Home() {
  return (
    <main>
      <div>
        <Nav/>
        <div>
        <Welcome/>
        <About/>
        <Projects/>
        </div>
      </div>
    </main>
  )
}
