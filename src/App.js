import React from 'react'

import { Header, Places, Projects, Footer } from './containers';
import { CTA, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <Header />
        <Places />
        <Projects />
        <CTA />
        <Footer />
    </div>
  )
}

export default App