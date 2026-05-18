import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../client.js'

export default function AddCreator({ setCreators }) {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [submitError, setSubmitError] = useState(null)

  const addCreator = async (e) => {
    e.preventDefault()
    setSubmitError(null)

    const { data, error } = await supabase
      .from('creators')
      .insert([
        {
          name,
          url,
          description,
          imageURL: imageURL || null,
        },
      ])
      .select()

    if (error) {
      setSubmitError('Could not add the creator')
      console.log(error)
      return
    }

    if (data) {
      setCreators((prev) => [...(prev ?? []), data[0]])
      navigate('/')
    }
  }

  return (
    <>
      <div className="page-header">
        <h2>Add Creator</h2>
        <Link to="/" className="button secondary">
          Cancel
        </Link>
      </div>

      <form className="creator-form" onSubmit={addCreator}>
        {submitError && <p className="empty-state">{submitError}</p>}

        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Creator name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="url">URL</label>
          <input
            id="url"
            name="url"
            type="url"
            placeholder="https://..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows={4}
            placeholder="What do they create?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="imageURL">Image URL (optional)</label>
          <input
            id="imageURL"
            name="imageURL"
            type="url"
            placeholder="https://..."
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
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
