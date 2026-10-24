import Nav from './components/Nav'
import Hero from './components/Hero'
import { RecentWork, Evidence, Systems, Built, Toolkit, Contact } from './components/Sections'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <RecentWork />
        <Evidence />
        <Systems />
        <Built />
        <Toolkit />
      </main>
      <Contact />
    </>
  )
}
