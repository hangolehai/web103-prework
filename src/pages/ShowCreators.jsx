import { Link } from 'react-router-dom'
import CreatorCard from '../components/CreatorCard'

export default function ShowCreators({ creators, fetchError }) {
  return (
    <>
      <div className="page-header">
        <h2>All Creators</h2>
        <Link to="/add" className="button primary">
          Add Creator
        </Link>
      </div>

      {fetchError && <p className="empty-state">{fetchError}</p>}

      {!fetchError && creators === null && (
        <p className="empty-state">Loading creators...</p>
      )}

      {!fetchError && creators !== null && creators.length === 0 && (
        <p className="empty-state">
          No creators yet. Add your first favorite creator to the Creatorverse!
        </p>
      )}

      {!fetchError && creators !== null && creators.length > 0 && (
        <div className="creator-grid">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      )}
    </>
  )
}
