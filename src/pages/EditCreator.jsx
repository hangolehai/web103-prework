import { Link, useParams } from 'react-router-dom'

export default function EditCreator() {
  const { id } = useParams()

  return (
    <>
      <div className="page-header">
        <h2>Edit Creator</h2>
        <Link to={`/view/${id}`} className="button secondary">
          Cancel
        </Link>
      </div>

      <form className="creator-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Creator name" />
        </div>
        <div className="form-field">
          <label htmlFor="url">URL</label>
          <input id="url" name="url" type="url" placeholder="https://..." />
        </div>
        <div className="form-field">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows={4} placeholder="What do they create?" />
        </div>
        <div className="form-field">
          <label htmlFor="imageURL">Image URL (optional)</label>
          <input id="imageURL" name="imageURL" type="url" placeholder="https://..." />
        </div>
        <div className="form-actions">
          <button type="submit" className="primary">
            Save changes
          </button>
          <button type="button" className="danger">
            Delete
          </button>
        </div>
      </form>
    </>
  )
}
