import { Bar } from './components/Shell'
import { Whoami, Changed, Systems, Built, Toolkit, Contact } from './components/Session'

export default function App() {
  return (
    <>
      <Bar />
      {/* One column, one session. Every section is a command and its output. */}
      <main className="mx-auto max-w-page px-5 sm:px-8">
        <Whoami />
        <Changed />
        <Systems />
        <Built />
        <Toolkit />
        <Contact />
      </main>
    </>
  )
}
