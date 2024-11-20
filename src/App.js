import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import FounderPage from './components/FounderPage'
import MyWordSlider from './components/MyWordSlider'
import ServicesSlider from './components/ServicesSlider'
import Footer from './components/Footer'
import VisionSection from './components/ServicesSlider'
import ImageDetailsPage from "./components/ImageDetailsPage";
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
            <Navbar/>

     

      


     
      
      


<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='services' element={<ServicesSlider/>}/>
  {/* <Route path='work' element={<MyWordSlider/>}/> */}
  <Route path='founder' element={<FounderPage/>}/>
  <Route path='footer'element={<Footer/>}/>
  {/* <Route path="/" element={<MyWordSlider />} /> */}
  {/* <Route path="/image/:id" element={<ImageDetailsPage />} /> */}
  <Route path="/" element={<MyWordSlider />} />
  <Route path="/image/:id" element={<ImageDetailsPage />} />
</Routes>;

    </div>
  )
}

export default App