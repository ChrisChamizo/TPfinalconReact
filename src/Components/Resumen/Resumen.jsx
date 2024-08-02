import React from 'react';
/* Importación de los componentes de Chakra UI */
import { Box, Heading, Text, Divider, Progress, Stack,extendTheme, ChakraProvider} from '@chakra-ui/react';


/* Función Resumen */
function Resumen(){
  return(
    <Box 
    as="section" 
    p={{base:"5",md:"10"}} 
    bg="gray.900"
    color="white"
    h="100vh"
    fontFamily="Poppins, sans-serif">
        <Heading 
        as="h1" 
        mb="3" 
        textAlign="center" 
        fontSize={{base:"24px",md:"32px"}}
        fontFamily="Poppins, sans-serif">
          RESUMEN
        </Heading>
        <Divider 
        borderColor="#ca002e" 
        borderWidth="1px" 
        maxW="100px"
        mx="auto"
        mt="3" 
        mb="5" />

        <Stack 
        spacing="8" 
        maxW="750px"
        mx="auto"
        fontFamily="Poppins, sans-serif"
        
        >
          <Box 
          flexBasis="100%" 
          textAlign="left" 
          bg="gray.800"
          p={{base:"5",md:"20px"}} 
          borderRadius="md"
          fontFamily="Poppins, sans-serif">

            
            <Heading 
            as="h2" 
            size="md" 
            mb="2"
            fontFamily="Poppins, sans-serif">
            2018 - Actualidad
            </Heading>

            <Divider 
            my="3" 
            borderColor="customRed.500" 
            borderWidth="2px" 
            maxW="100px" 
            
            />
            <Text
             fontWeight="bold"
             fontFamily="Poppins, sans-serif"
             >Tecnicatura Universitaria en Informática
             </Text>
            <Text 
            fontFamily="Poppins, sans-serif"
            >
            Universidad Nacional De General Sarmiento (UNGS)
            </Text>
          </Box>

          <Stack
          direction={{base:"column",md:"row"}} 
          spacing="4" 
          wrap="wrap" 
          justify="center"
          fontFamily="Poppins, sans-serif"
          >
            <Box 
            flexBasis={{ base: "100%", md: "45%" }} 
            bg="gray.800" 
            p={{base:"5",md:"20px"}}
            borderRadius="md" 
            textAlign="left"
            fontFamily="Poppins, sans-serif"
            >

              <Heading
               as="h2"
                size="sm"
                 mb="2"
                 fontFamily="Poppins, sans-serif"
                 >
                  DISEÑO
                </Heading>
              <Progress
               value={80} 
               size="sm"
                mb="4" 
                colorScheme="customRed" />

              <Heading
                as="h2"
                size="sm"
                mb="2"
                fontFamily="Poppins, sans-serif"
                 >
                APP DE ESCRITORIO
                </Heading>
              <Progress
               value={85}
                size="sm"
                mb="4"
                colorScheme="customRed"
                 />
              <Heading
               as="h2"
              size="sm"
              mb="2"
              fontFamily="Poppins, sans-serif"
              >
              MANTENIMIENTO WEB
            </Heading>
              <Progress
               value={70}
              size="sm"
              mb="4"
              colorScheme="customRed" 
              />
            </Box>

            <Box 
            flexBasis={{ base: "100%", md: "45%" }} 
            bg="gray.800" 
            p={{base:"5",md:"20px"}} 
            borderRadius="md" 
            textAlign="left"
            fontFamily="Poppins, sans-serif"
            >
              <Heading
              as="h2"
              size="sm"
              mb="2"
              fontFamily="Poppins, sans-serif"
               >
              HTML
              </Heading>
              <Progress
               value={70}
              size="sm" 
              mb="4" 
              colorScheme="customRed"
              />
              <Heading
              as="h2"
              size="sm"
              mb="2"
              fontFamily="Poppins, sans-serif"
              >
              CSS
              </Heading>
              <Progress
               value={75}
              size="sm"
              mb="4" 
              colorScheme="customRed"
              />
            </Box>
          </Stack>
        </Stack>
      </Box>
  )
}
export {Resumen}