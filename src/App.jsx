import NavbarComponents from './components/navBarComponent'
import { Route, Routes } from 'react-router-dom'
import homePage from './pages/homePage'
import populerPage from './pages/populerPage'
import moviePage from './pages/moviePage'
import AnimeDetailPage from './pages/detailPage'
import NotFoundPage from './pages/NotFoundPage'
import ShowAllPage from './pages/ShowAllPage'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component={homePage} />
        <Route path='/anime/:id' Component={AnimeDetailPage} />
        <Route path='/populer' Component={populerPage} />
        <Route path='/movie' Component={moviePage} />
        <Route path='/showall' Component={ShowAllPage} />
        <Route path={'*'} Component={NotFoundPage} />
      </Routes>
    </>
  )
}

export default App
