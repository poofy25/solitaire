
import './App.css'

import { BrowserRouter , Route , Routes } from 'react-router-dom'
import HomePage from './pages/Home/Home'
import ContactPage from './pages/Contact/Contact'
import GamePage from './pages/Game/Game'
import NavigationBar from './components/Navbar/Navbar'
import { Suspense } from 'react'

function App() {


  return (
    <>
<BrowserRouter>
<NavigationBar/>
<Routes>
  <Route path="/" element={<Suspense fallback={'Loading...'}><HomePage /></Suspense>} />
  <Route path="/home" element={<Suspense fallback={'Loading...'}><HomePage /></Suspense>}/>
  <Route path="/contact" element={<Suspense fallback={'Loading...'}><ContactPage /></Suspense>} />
  <Route path="/game/:id" element={<Suspense fallback={'Loading...'}><GamePage /></Suspense>} />
</Routes>

</BrowserRouter>
    </>
  )
}

export default App
