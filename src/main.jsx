import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Theme from './Theme/Theme.jsx';

import { Header } from './Components/Header/Header.jsx'
import { Main } from './Components/Main/Main.jsx'
import { Footer } from './Components/Footer/Footer.jsx'
import { Resumen } from './Components/Resumen/Resumen.jsx'
import { MiPortafolio } from './Components/Miportatfolio/Miportafolio.jsx';
import { Formulario } from './Components/Formulario/Formulario.jsx';

/*creo los breakpoints*/
const theme =extendTheme ({
  breakpoints:{
    base: "0px",
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1367px",
    "2xl": "1440px",
  },
}); 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ChakraProvider  theme={Theme}>
      <Header />
      <Main />
      <Footer />
   </ChakraProvider>

  </React.StrictMode>,
  
   
   
)
