import { Link } from 'react-router-dom'
import CreatorCard from '../components/CreatorCard'

// Placeholder data for Checkpoint 1 — replaced with Supabase fetch in Step 5
const PLACEHOLDER_CREATORS = []

export default function ShowCreators({ creators = PLACEHOLDER_CREATORS }) {
  return (
    <>
      <div className="page-header">
        <h2>All Creators</h2>
        <Link to="/add" className="button primary">
          Add Creator
        </Link>
      </div>

      {creators.length === 0 ? (
        <p className="empty-state">
          No creators yet. Add your first favorite creator to the Creatorverse!
        </p>
      ) : (
        <div className="creator-grid">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      )}
    </>
  )
}
