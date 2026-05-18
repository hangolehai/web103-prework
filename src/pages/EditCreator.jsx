import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../client.js'

export default function EditCreator({ setCreators }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)
  const [submitError, setSubmitError] = useState(null)

  useEffect(() => {
    const fetchCreator = async () => {
      setLoading(true)

      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        setFetchError('Could not fetch this creator')
        console.log(error)
        setLoading(false)
        return
      }

      if (data) {
        setName(data.name)
        setUrl(data.url)
        setDescription(data.description)
        setImageURL(data.imageURL ?? '')
        setFetchError(null)
      }

      setLoading(false)
    }

    fetchCreator()
  }, [id])

  const updateCreator = async (e) => {
    e.preventDefault()
    setSubmitError(null)

    const { data, error } = await supabase
      .from('creators')
      .update({
        name,
        url,
        description,
        imageURL: imageURL || null,
      })
      .eq('id', id)
      .select()

    if (error) {
      setSubmitError('Could not update the creator')
      console.log(error)
      return
    }

    if (data) {
      setCreators((prev) =>
        (prev ?? []).map((creator) =>
          String(creator.id) === String(id) ? data[0] : creator,
        ),
      )
      navigate(`/view/${id}`)
    }
  }

  const deleteCreator = async () => {
    setSubmitError(null)

    const { error } = await supabase.from('creators').delete().eq('id', id)

    if (error) {
      setSubmitError('Could not delete the creator')
      console.log(error)
      return
    }

    setCreators((prev) =>
      (prev ?? []).filter((creator) => String(creator.id) !== String(id)),
    )
    navigate('/')
  }

  if (loading) {
    return <p className="empty-state">Loading creator...</p>
  }

  if (fetchError) {
    return (
      <>
        <div className="page-header">
          <h2>Edit Creator</h2>
          <Link to="/" className="button secondary">
            Back
          </Link>
        </div>
        <p className="empty-state">{fetchError}</p>
      </>
    )
  }

  return (
    <>
      <div className="page-header">
        <h2>Edit Creator</h2>
        <Link to={`/view/${id}`} className="button secondary">
          Cancel
        </Link>
      </div>

      <form className="creator-form" onSubmit={updateCreator}>
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
            Save changes
          </button>
          <button type="button" className="danger" onClick={deleteCreator}>
            Delete
          </button>
        </div>
      </form>
    </>
  )
}
