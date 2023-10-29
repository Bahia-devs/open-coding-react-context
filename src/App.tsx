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
      <SectionAbout loading={loading} />
      <SectionContext loading={loading} />
      <SectionContact loading={loading} />
    </>
  )
}

export default App
