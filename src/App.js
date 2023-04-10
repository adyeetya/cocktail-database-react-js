import React from 'react'
import { BrowserRouter,Routes, Route  } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
// import Navbar from './components/Navbar'
import SharedLayout from './components/SharedLayout'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About/>} />

            {/* here :id is sent through useParams and is deconstructed in the singlecocktail page */}
            <Route path='cocktail/:id' element={<SingleCocktail />} />
          </Route>
          <Route path='*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
