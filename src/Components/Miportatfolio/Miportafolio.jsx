/*Importo react sino no se muestran los componentes*/ 
import React from 'react';

/* Importación  de las imágenes */
import imagentp3 from '../../assets/img/imagentp3.jpg';
import imagentp4 from '../../assets/img/imagentp4.jpg';
import imagentpreact from '../../assets/img/imagentpreact.png';

/* Importación de los componentes de Chakra UI */
import { Box, Heading, Image, Link, Text, HStack,Divider } from '@chakra-ui/react';
/*Utilizo el componente HStack para alinear horizontalmente las imagenes*/ 

/* Creación de la función MiPortfolio */
const MiPortafolio = () => {
  return (
    <Box 
    bg="#101324" 
    color="white" 
    py={{ base: "10", md: "20" }}>
      <Box 
      textAlign="center" 
      mb="3"
      >
        <Heading
         as="h1"
         fontSize={{ base: "24px", md: "32px" }}>
          MI PORTAFOLIO
        </Heading>
        <Divider
         borderColor="customRed.500"
         borderWidth="2px" 
         maxW="100px" 
         mx="auto" 
         mt="3" 
         mb="5" />
      </Box>

      <Box 
      mx="auto" 
      maxW="1200px" 
      px={{ base: "5", md: "10" }}>
        <HStack
        direction={{ base: "column", md: "row" }}
        spacing="6" 
        justify="center">
          <Box
           className="screenshot-portfolio"
           >
            <Image
             src={imagentp3}
            alt="screenshot de porfolio3"
            borderRadius="md"
            boxShadow="lg"
            />
          </Box>
          <Box
           className="screenshot-portfolio"
           >
            <Image
             src={imagentp4}
              alt="screenshot de porfolio4"
              borderRadius="md" 
              boxShadow="lg" />
          </Box>
          <Box
           className="screenshot-portfolio"
           >
            <Image
             src={imagentpreact}
              alt="screenshot de porfolio4"
              borderRadius="md"
              boxShadow="lg"
            />
          </Box>
        </HStack>

        <Box className="link-porfolio" textAlign={{ base: "center", md: "left" }} mt="10">
          <Link
            href="https://github.com/ChrisChamizo"
            isExternal
            fontSize="lg"
            color="teal.300"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
          >
            Web Design / porfolio
          </Link>
          <Text fontSize="lg">
            De Christian Chamizo.{' '}
            <Link
              href="https://www.behance.net/"
              isExternal
              color="teal.300"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              Seguir
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export { MiPortafolio };