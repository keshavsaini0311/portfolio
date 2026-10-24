import Nav from './components/Nav'
import Hero from './components/Hero'
import { Systems, Built, Toolkit } from './components/Sections'

export default function App() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Systems />
        <Built />
        <Toolkit />
      </main>
    </>
  )
}
