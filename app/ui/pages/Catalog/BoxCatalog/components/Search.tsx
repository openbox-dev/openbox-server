import { Link, useLocation } from '@remix-run/react'

const Filter: React.FC = () => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const q = params.get('q') || '';

    return (
        <div>
            <form method="GET">
                <h3 className='Filter-Title'>Filtres</h3>
                <input
                    className='Searchbar'
                    type="text"
                    name='q'
                    placeholder="Rechercher"
                    defaultValue={q}
                />
            </form>
            {
                q.length > 1 ? (
                    <div>
                        <span> Voici les Box qui match avec ce nom "{q}"</span>
                        <Link to={location.pathname} prefetch='intent'>
                            &times; Supprimer la recherche
                        </Link>
                    </div>
                ) : null
            }
        </div>
    );
}

export default Filter;
