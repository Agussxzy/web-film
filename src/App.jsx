import NavbarComponents from './components/navBarComponent'
import { Route, Routes } from 'react-router-dom'
import homePage from './pages/homePage'
import populerPage from './pages/populerPage'
import moviePage from './pages/moviePage'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component={homePage} />
        <Route path='/populer' Component={populerPage} />
        <Route path='/movie' Component={moviePage} />
      </Routes>
    </>
  )
}

export default App
