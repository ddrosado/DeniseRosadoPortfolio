import Welcome from './components/welcome/Welcome'
import Stack from './components/stack/Stack'
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects'


export default function Home() {
  return (
    <main>
      <div>
        <Nav/>
        <div>
        <Welcome/>
        <Stack/>
        <Projects/>
        </div>
      </div>
    </main>
  )
}
