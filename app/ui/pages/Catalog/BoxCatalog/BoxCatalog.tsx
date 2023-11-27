/* TODO
- [x] filtrer par date de parution -> côté front
- [x] box redirect vers box/:id
- [] styling
- [] sensible à la casse fix it 
- [] quand on supprime la recherche les box ne sont pas réafficher 
- [] quand description trop longue, couper et mettre ...
- [] faire les keys pour les box
- [] loop impair class bleu
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
      <h1 className="Title">Catalogue - Box</h1>
      <section className="Filter">
        <Filter />
        <Sort data={data.data} onSort={handleSort} />
      </section>
      <div className="Container-Filter-Box">
        <section className="Catalog-Box">
          {acceptedBox.success ? (
            data.data.map((box) => {
              return <BoxCard title={box.name} description={box.description} id={box.id} />
            })
          ) : (
            "Aucune Boxe"
          )}
        </section>
      </div>
    </main>
  )
}
