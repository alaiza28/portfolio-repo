import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Nav from './components/Nav'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='bg-color bg-no-repeat bg-cover overflow-hidden text-white'>
      <Header />
      <Banner />
      <Nav />
      <div>
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
      </div>
   
    </div>
  )
}

export default App