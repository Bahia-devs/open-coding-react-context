import { useContext } from "react"
import { LoadingContext } from "../context/LoadingContext/loading-context"

/* Exemplo de Context usando Provider */
export function SectionAbout() {
  const { loading } = useContext(LoadingContext)

  if (loading) {
    return <p>loading...</p>
  }

  return (
    <div>
      <h2>Section About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis urna nisi, cursus id sollicitudin non, mattis non ex. Donec odio sem, fringilla nec aliquam non, condimentum sed libero. Curabitur molestie velit in nunc pulvinar fermentum. Sed maximus congue massa, in consequat est fermentum at. Aliquam accumsan sem sem, quis sagittis ipsum rutrum ut. Nulla eu nibh at massa iaculis lacinia. Praesent aliquam malesuada erat quis sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lorem vitae nulla placerat viverra non a risus. Aenean commodo laoreet ante sit amet sagittis. Sed consectetur velit fringilla consequat cursus. Donec et diam sollicitudin, consequat arcu vitae, sagittis ligula. Fusce vel ex iaculis, ultricies dolor sed, imperdiet turpis.
      </p>
    </div>
  )
}