import Nav from './components/Nav'
import Hero from './components/Hero'
import { Evidence, Systems, Built, Toolkit, Contact } from './components/Sections'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Evidence />
        <Systems />
        <Built />
        <Toolkit />
      </main>
      <Contact />
    </>
  )
}
