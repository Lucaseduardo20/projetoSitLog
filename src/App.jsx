import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/Header/HeaderComponent'
import CotacaoComponent from './components/Cotação/CotacaoComponent'
import Feedbacks from './components/Feedbacks/FeedbacksComponent'

function App() {
  
  return (
    <>
      <HeaderComponent />
      <CotacaoComponent />
      <Feedbacks />
    </>
  )
}

export default App
