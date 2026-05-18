import { Link } from 'react-router-dom'

export default function AddCreator() {
  return (
    <>
      <div className="page-header">
        <h2>Add Creator</h2>
        <Link to="/" className="button secondary">
          Cancel
        </Link>
      </div>

      <form className="creator-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Creator name" required />
        </div>
        <div className="form-field">
          <label htmlFor="url">URL</label>
          <input id="url" name="url" type="url" placeholder="https://..." required />
        </div>
        <div className="form-field">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows={4} placeholder="What do they create?" required />
        </div>
        <div className="form-field">
          <label htmlFor="imageURL">Image URL (optional)</label>
          <input id="imageURL" name="imageURL" type="url" placeholder="https://..." />
        </div>
        <div className="form-actions">
          <button type="submit" className="primary">
            Add creator
          </button>
        </div>
      </form>
    </>
  )
}
