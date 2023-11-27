import { Link } from '@remix-run/react'
interface BoxCardProps {
    id: number,
    title: string,
    description: string,
}
const BoxCard: React.FC<BoxCardProps> = ({ title, description, id }) => {
    return (
        <Link to={'http://localhost:3000/box/' + id}>
            <div className="Box">
                <h3 className="Box-Title">{title}</h3>
                <span>Description</span>
                <p className="Description">{description}</p>
            </div>
        </Link>

    )
}

export default BoxCard