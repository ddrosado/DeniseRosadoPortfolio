import Welcome from './components/welcome/Welcome'
import About from './components/about/About'
import Nav from './components/about/nav/Nav'


export default function Home() {
  return (
    <main>
      <div>
        <Nav/>
        <div>
        <Welcome/>
        <About/>
        </div>
      </div>
    </main>
  )
}
