import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Courses from './pages/Courses/Courses'
import Footer from './components/Footer/Footer'

const App = () => {
  return (<>
    <Navbar />
    <Hero />
    <Courses />
    <Footer />
  </>
  )
}

export default App