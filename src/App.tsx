import { useEffect, useState } from "react"
import { SectionAbout } from "./components/section-about"
import { SectionContact } from "./components/section-contact"
import { SectionContext } from "./components/section-context"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  return (
    <>
      <h1>Hello World!</h1>

      {/* Exemplo de Context usando Provider */}
      <SectionAbout />

      {/* Exemplo de Context usando Passagem de props entre components */}
      <SectionContext loading={loading} />

      {/* Exemplo de Context usando Consumer */}
      <SectionContact />
    </>
  )
}

export default App
