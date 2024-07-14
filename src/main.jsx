import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Header } from './Components/Header/Header.jsx'
import { Hero } from './Components/Section/Section.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <Header/>
    <Hero/>
  </React.StrictMode>,
   
   
)
