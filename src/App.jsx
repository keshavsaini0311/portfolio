import Nav from './components/Nav'
import Hero from './components/Hero'
import Map from './components/Map'
import { Changed, Built, Toolkit, Contact } from './components/Sections'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Map />
        <Changed />
        <Built />
        <Toolkit />
      </main>
      <Contact />
    </>
  )
}
