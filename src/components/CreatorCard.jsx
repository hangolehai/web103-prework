import { Link } from 'react-router-dom'
import './CreatorCard.css'

export default function CreatorCard({ creator }) {
  const { id, name, url, description, imageURL } = creator

  return (
    <article className="creator-card">
      {imageURL ? (
        <img src={imageURL} alt={name} className="creator-card-image" />
      ) : (
        <div className="creator-card-image-placeholder" aria-hidden="true">
          No image
        </div>
      )}
      <div className="creator-card-body">
        <h3 className="creator-card-name">
          <Link to={`/view/${id}`}>{name}</Link>
        </h3>
        <p className="creator-card-description">{description}</p>
        <p className="creator-card-url">
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        </p>
        <div className="creator-card-actions">
          <Link to={`/view/${id}`} className="button secondary">
            <span aria-hidden="true">👁️</span> View
          </Link>
          <Link to={`/edit/${id}`} className="button primary">
            <span aria-hidden="true">✏️</span> Edit
          </Link>
        </div>
      </div>
    </article>
  )
}
