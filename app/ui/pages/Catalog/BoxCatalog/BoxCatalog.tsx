/* TODO
- [x] filtrer par date de parution -> côté front
- [x] box redirect vers box/:id
- [x] loop impair class bleu
- [] styling
- [] sensible à la casse fix it 
- [] quand on supprime la recherche les box ne sont pas réafficher 
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
  const [isSort, setIsSort] = useState(false)

  const handleSort = (sortedData: typeof acceptedBox.data) => {
    setData({ ...data, data: sortedData })
    setIsSort(true)
  }

  const removeSort = () => {
    setIsSort(false)
    setData(acceptedBox)
  }

  return (
    <main className="Main">
      <h1 className="Title">Catalogue - Box</h1>
      <section className="Filter">
        <Filter />
        <Sort data={data.data} onSort={handleSort} />
        {isSort ? <button className="Remove-Sort" onClick={removeSort}>Supprimer le filtre <img src="app/assets/icon/square-close.svg" alt="cross" /></button> : null}
      </section>
      <div className="Container-Filter-Box">
        <section className="Catalog-Box">
          {acceptedBox.success ? (
            data.data.map((box, index) => {
              const isOdd = index % 2 !== 0;
              const boxClass = isOdd ? "Odd-Box" : "Even-Box";
              return <BoxCard key={box.id} title={box.name} description={box.description} id={box.id} className={boxClass} />;
            })
          ) : (
            "Aucune Boxe"
          )}
        </section>
      </div>
    </main>
  )
}
