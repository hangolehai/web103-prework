import { useRoutes } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import AddCreator from './pages/AddCreator'
import './App.css'

export default function App() {
  const element = useRoutes([
    { path: '/', element: <ShowCreators /> },
    { path: '/view/:id', element: <ViewCreator /> },
    { path: '/edit/:id', element: <EditCreator /> },
    { path: '/add', element: <AddCreator /> },
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
