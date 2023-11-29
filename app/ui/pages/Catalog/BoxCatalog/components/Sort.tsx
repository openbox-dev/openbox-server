interface SortProps {
    data: {
        id: number
        status: string
        name: string
        description: string
        image: string | null
        createdAt: any // le type est un string et passe en date pour être trié
    }[]
    onSort: Function
}

const Sort: React.FC<SortProps> = ({ data, onSort }) => {
    const dataParsed = data.map((box) => {
        const parsedDate = Date.parse(box.createdAt)
        return {
            ...box,
            createdAt: new Date(parsedDate),
        }
    })
    const handleSortAsc = () => {
        const sortedAsc = dataParsed.sort(
            (objA, objB) => Number(objA.createdAt) - Number(objB.createdAt),
        )
        onSort(sortedAsc)
    }
    const handleSortDesc = () => {
        const sortedDesc = dataParsed.sort(
            (objA, objB) => Number(objB.createdAt) - Number(objA.createdAt),
        )
        onSort(sortedDesc)
    }
    return (
        <div className="Filter-Sort">
            <h3 className="Sort-Title">Ordre</h3>
            <div>
                <button className="Sort-Button" onClick={handleSortAsc}>— Récent à ancien</button>
                <button className="Sort-Button" onClick={handleSortDesc}>— Ancien à récent</button>
            </div>
        </div>
    )
}

export default Sort
