import {Route, Routes} from 'react-router'
import Home from './pages/Home/index'
import Movie from './pages/Movie/index'
import Seats from './pages/Seats/index'

function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:movie' element={<Movie />}/>
        <Route path='/:movie/seats' element={<Seats />}/>
    </Routes>
  )
}

export default Router