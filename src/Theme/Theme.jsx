import { extendTheme } from '@chakra-ui/react';

/* Función con el color para las barras de progreso */
const theme = extendTheme({
  
  colors: {
    customRed: {
      500: '#d2002c',
    },
  },
  components: {
    Progress: {
        baseStyle:{ /*Estilos predeterminados de un componente*/ 
            filledTrack:{
                borderRadius:`0` /*Le aplico el border radius a la parte llena de la barra*/ 
            },
        },
      defaultProps: {
        colorScheme: 'customRed', // El color por defecto de las barras de progreso
      },
    },
  },
});

export default theme; // Exportar por default
