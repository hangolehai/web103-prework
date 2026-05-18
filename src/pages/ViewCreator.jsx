import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { supabase } from '../client.js'

export default function ViewCreator() {
  const { id } = useParams()
  const [creator, setCreator] = useState(null)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        setFetchError('Could not fetch this creator')
        setCreator(null)
        console.log(error)
      }

      if (data) {
        setCreator(data)
        setFetchError(null)
      }
    }

    fetchCreator()
  }, [id])

  return (
    <>
      <div className="page-header">
        <h2>{creator ? creator.name : 'View Creator'}</h2>
        <div className="page-actions">
          <Link to="/" className="button secondary">
            Back
          </Link>
          <Link to={`/edit/${id}`} className="button primary">
            Edit
          </Link>
        </div>
      </div>

      {fetchError && <p className="empty-state">{fetchError}</p>}

      {!fetchError && creator === null && (
        <p className="empty-state">Loading creator...</p>
      )}

      {creator && (
        <div className="creator-detail">
          {creator.imageURL ? (
            <img src={creator.imageURL} alt={creator.name} />
          ) : (
            <div className="creator-detail-image-placeholder">No image</div>
          )}
          <h2>{creator.name}</h2>
          <p>{creator.description}</p>
          <p>
            <a href={creator.url} target="_blank" rel="noreferrer">
              {creator.url}
            </a>
          </p>
        </div>
      )}
    </>
  )
}
