/* TODO
- [x] filtrer par date de parution -> côté front
- [] styling
- [] sensible à la casse fix it 
- [] quand on supprime la recherche les box ne sont pas réafficher 
- [] charger plus de box
- [] quand description trop longue, couper et mettre ...
- [] faire les keys pour les box
*/

import type { loader } from "~/routes/_catalog.box"
import { useLoaderData } from "@remix-run/react"
import { useState } from "react"
import BoxCard from "./components/BoxCard"
import Filter from "./components/Search"
import Sort from "./components/Sort"


export default function BoxCatalog() {
  const acceptedBox = useLoaderData<typeof loader>()
  const [data, setData] = useState(acceptedBox)

  const handleSort = (sortedData: typeof acceptedBox.data) => {
    setData({ ...data, data: sortedData })
  }

  return (
    <main className="Main">
      <div className="Title">
        <h1>Catalogue - Box</h1>
      </div>
      <section className="Filter">
        <Filter />
        <Sort data={data.data} onSort={handleSort} />
      </section>
      <div className="Container-Filter-Box">
        <section className="Catalog-Box">
          {acceptedBox.success ? (
            data.data.map((box) => {
              return <BoxCard title={box.name} description={box.description} />
            })
          ) : (
            "Aucune Boxe"
          )}
        </section>
      </div>
      <div className="Load-Box">
        <button className="Load-Box-Button">charger plus de box</button>
        <img src="app/assets/icon/greenArrowLink.svg" alt="arrow pointing top corner right" />
      </div>
    </main>
  )
}
