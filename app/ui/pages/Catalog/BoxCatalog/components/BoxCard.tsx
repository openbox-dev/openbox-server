import { useEffect, useState } from "react";

interface BoxCardProps {
    id: number,
    title: string,
    description: string,
}
const BoxCard: React.FC<BoxCardProps> = ({ title, description, id }) => {
    const [url, setUrl] = useState('')
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const currentUrl = window.location.href
            const boxUrl = currentUrl + `/${id}`
            setUrl(boxUrl)
        }
    }, [])
    return (
        <a href={url}>
            <div className="Box">
                <h3 className="Box-Title">{title}</h3>
                <span>Description</span>
                <p className="Description">{description}</p>
            </div>
        </a>

    )
}

export default BoxCard