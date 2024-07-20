import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Header } from './Components/Header/Header.jsx'
import { Main } from './Components/Main/Main.jsx'
import { Footer } from './Components/Footer/Footer.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
     <Main/>
    <Footer/>
   
  </React.StrictMode>,
  
   
   
)
