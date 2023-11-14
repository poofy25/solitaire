
import './App.css'

import { BrowserRouter , Route , Routes } from 'react-router-dom'
import HomePage from './pages/Home/Home'
import ContactPage from './pages/Contact/Contact'
import GamePage from './pages/Game/Game'
import AdBlockPopUp from './components/AdBlockPopup/AdBlockPopup'
import PrivacyPolicyPage from './pages/Privacy-Policy/Privacy-Policy'
import NavigationBar from './components/Navbar/Navbar'
import { Suspense, useEffect, useState } from 'react'
import { useDetectAdBlock } from "adblock-detect-react";

function App() {

  const[areAdsRunning , setAreAdsRunning] = useState(null)
  const detectedAdBlock = useDetectAdBlock()
  console.log(detectedAdBlock)

  useEffect(()=>{

  if(detectedAdBlock)setAreAdsRunning('true')
  if(!detectedAdBlock)setAreAdsRunning('false')

  },[])
console.log(areAdsRunning)

  return (
    <>
      <AdBlockPopUp areAdsRunning={areAdsRunning} setAreAdsRunning={setAreAdsRunning}/>
<BrowserRouter>

<Routes>
  <Route path="/" element={<Suspense fallback={'Loading...'}><HomePage /></Suspense>} />
  <Route path="/home" element={<Suspense fallback={'Loading...'}><HomePage /></Suspense>}/>
  <Route path="/contact" element={<Suspense fallback={'Loading...'}><ContactPage /></Suspense>} />
  <Route path="/game/:id" element={<Suspense fallback={'Loading...'}><GamePage /></Suspense>} />
  <Route path="/privacy-policy" element={<Suspense fallback={'Loading...'}><PrivacyPolicyPage /></Suspense>} />
</Routes>

</BrowserRouter>
    </>
  )
}

export default App
