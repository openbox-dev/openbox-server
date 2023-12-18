import { Link } from '@remix-run/react'
interface BoxCardProps {
    id: number,
    title: string,
    description: string,
    className: string
}
const BoxCard: React.FC<BoxCardProps> = ({ title, description, id, className }) => {
    return (
        <Link to={'box/' + id}>
            <div className={className}>
                <h3 className="Box-Title">{title}</h3>
                <span>Description</span>
                <p className="Description">{description}</p>
            </div>
        </Link>

    )
}

export default BoxCard