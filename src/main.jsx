import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import Theme from './Theme/Theme.jsx';

import { Header } from './Components/Header/Header.jsx'
import { Main } from './Components/Main/Main.jsx'
import { Footer } from './Components/Footer/Footer.jsx'
import { Resumen } from './Components/Resumen/Resumen.jsx'
import { MiPortafolio } from './Components/Miportatfolio/Miportafolio.jsx';
import { Formulario } from './Components/Formulario/Formulario.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ChakraProvider  theme={Theme}>
      <Header />
      <Main />
      <Footer />
   </ChakraProvider>

  </React.StrictMode>,
  
   
   
)
