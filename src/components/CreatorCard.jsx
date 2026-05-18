import { Link } from 'react-router-dom'
import './CreatorCard.css'

export default function CreatorCard({ creator }) {
  const { id, name, url, description, imageURL } = creator

  return (
    <article className="creator-card">
      {imageURL && (
        <img src={imageURL} alt={name} className="creator-card-image" />
      )}
      <div className="creator-card-body">
        <h3>{name}</h3>
        <p className="creator-card-description">{description}</p>
        <a href={url} target="_blank" rel="noreferrer" className="creator-card-link">
          Visit channel
        </a>
        <div className="creator-card-actions">
          <Link to={`/view/${id}`} className="button secondary">
            View
          </Link>
          <Link to={`/edit/${id}`} className="button primary">
            Edit
          </Link>
        </div>
      </div>
    </article>
  )
}
