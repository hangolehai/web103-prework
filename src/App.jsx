import { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import { supabase } from './client.js'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import AddCreator from './pages/AddCreator'
import './App.css'

export default function App() {
  const [creators, setCreators] = useState(null)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from('creators').select('*')

      if (error) {
        setFetchError('Could not fetch the creators')
        setCreators(null)
        console.log(error)
      }

      if (data) {
        setCreators(data)
        setFetchError(null)
      }
    }

    fetchCreators()
  }, [])

  const element = useRoutes([
    {
      path: '/',
      element: <ShowCreators creators={creators} fetchError={fetchError} />,
    },
    { path: '/view/:id', element: <ViewCreator /> },
    { path: '/edit/:id', element: <EditCreator setCreators={setCreators} /> },
    { path: '/add', element: <AddCreator setCreators={setCreators} /> },
  ])

  return (
    <div className="app">
      <header className="app-header">
        <h1>Creatorverse</h1>
        <p>Your favorite content creators, in one place</p>
      </header>
      <main className="app-main">{element}</main>
    </div>
  )
}
