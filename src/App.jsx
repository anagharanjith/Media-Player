import './App.css'
import {Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Watch from './pages/Watch'
import Footer from './components/Footer'
import Header from './components/Header'

//angah
function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>  {/* Base url of the application */}
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch' element={<Watch/>}/>
    </Routes>
    <Footer/>
    </>
    
  )
}

export default App
