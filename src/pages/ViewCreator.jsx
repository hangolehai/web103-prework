import { Link, useParams } from 'react-router-dom'

export default function ViewCreator() {
  const { id } = useParams()

  return (
  <>
      <div className="page-header">
        <h2>View Creator</h2>
        <div className="page-actions">
          <Link to="/" className="button secondary">
            Back
          </Link>
          <Link to={`/edit/${id}`} className="button primary">
            Edit
          </Link>
        </div>
      </div>

      <div className="creator-detail">
        <p className="empty-state">
          Creator details for ID <strong>{id}</strong> will load here in Step 6.
        </p>
      </div>
    </>
  )
}
