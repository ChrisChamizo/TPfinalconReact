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
     h="100vh">
        <Heading 
        as="h1" 
        mb="3" 
        textAlign="center" 
        fontSize={{base:"24px",md:"32px"}}>
          RESUMEN
        </Heading>
        <Divider 
        borderColor="customRed.500" 
        borderWidth="2px" 
        maxW="100px"
        mx="auto"
        mt="3" 
        mb="5" />

        <Stack 
        spacing="8" 
        maxW="750px"
        mx="auto">
          <Box 
          flexBasis="100%" 
          textAlign="left" 
          bg="gray.800"
          p={{base:"5",md:"20px"}} 
          borderRadius="md">

            
            <Heading 
            as="h2" 
            size="md" 
            mb="2">
            2018 - Actualidad
            </Heading>
            <Divider 
            my="3" 
            borderColor="customRed.500" 
            borderWidth="2px" 
            maxW="100px" />
            <Text fontWeight="bold">Tecnicatura Universitaria en Informática</Text>
            <Text>
              Universidad Nacional De General Sarmiento (UNGS)
              </Text>
          </Box>

          <Stack
          direction={{base:"column",md:"row"}} 
          spacing="4" 
          wrap="wrap" 
          justify="center">
            <Box 
            flexBasis={{ base: "100%", md: "45%" }} 
            bg="gray.800" 
            p={{base:"5",md:"20px"}}
            borderRadius="md" 
            textAlign="left">

              <Heading
               as="h2"
                size="sm"
                 mb="2">
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
            textAlign="left">
              <Heading
              as="h2"
              size="sm"
              mb="2"
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