import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/Header/HeaderComponent'
import CotacaoComponent from './components/Cotação/CotacaoComponent'
import Feedbacks from './components/Feedbacks/FeedbacksComponent'
import Home from './components/Home/HomeComponent'
import { Footer } from './components/Footer/FooterComponent'

function App() {
  
  return (
    <>

      <HeaderComponent />
      <Home />
      <CotacaoComponent />
      <Feedbacks />
      <Footer />
    </>
  )
}

export default App
