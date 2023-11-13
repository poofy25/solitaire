
import './App.css'

import { BrowserRouter , Route , Routes } from 'react-router-dom'
import HomePage from './pages/Home/Home'
import ContactPage from './pages/Contact/Contact'
import GamePage from './pages/Game/Game'
import AdBlockPopUp from './components/AdBlockPopup/AdBlockPopup'
import PrivacyPolicyPage from './pages/Privacy-Policy/Privacy-Policy'
import NavigationBar from './components/Navbar/Navbar'
import { Suspense, useEffect, useState } from 'react'

function App() {

  const[areAdsRunning , setAreAdsRunning] = useState(null)

  useEffect(()=>{

    async function detectAdBlock() {
      let adBlockEnabled = false
      const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      try {
        await fetch(new Request(googleAdUrl)).catch(_ => adBlockEnabled = true)
      } catch (e) {
        adBlockEnabled = true
        
      } finally {
        console.log(`AdBlock Enabled: ${adBlockEnabled}` , window.areAdsRunning   , window.areAdsRunning1)
      }
      if(window.areAdsRunning == undefined){
       // adBlockEnabled = true
      }
      setAreAdsRunning(adBlockEnabled)


    }
    detectAdBlock()

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
