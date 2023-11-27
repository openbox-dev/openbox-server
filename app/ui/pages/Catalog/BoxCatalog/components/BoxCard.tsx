interface BoxCardProps {
    title: string,
    description: string,
}
const BoxCard: React.FC<BoxCardProps> = (props) => {
    const { title, description } = props
    return (
        <div className="Box">
            <h3 className="Box-Title">{title}</h3>
            <span>Description</span>
            <p className="Description">{description}</p>
        </div>
    )
}

export default BoxCard