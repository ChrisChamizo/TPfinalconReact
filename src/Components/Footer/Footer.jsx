/*Importo los componentes de CHAKRA IU*/
import {Box,Heading,Link,Text,Icon, Flex} from "@chakra-ui/react";

/*Importo los iconos de la libreria de react como componentes.*/
 import { FaFacebook,FaInstagram,FaWhatsapp,FaTwitter,FaCopyright } from "react-icons/fa";

 /*Creo la funcion Footer*/ 
 const Footer=() =>{
    return (
        <Box 
        as="footer" 
        bg="#0b0d17" 
        color="white" 
        py="6px"
        >
          <Flex 
          direction="column" 
          align="center"
          >
            <Flex
             direction="row"
             align="center"
             gap="2"
             >
              <Heading
              as="h2"
              size="2xl"
              color="rgb(201, 59, 75)" 
              m="0" 
              p="0"
              >
                CC
              </Heading>
              <Heading 
              as="h1" 
              size="md"  
              m="0" 
              p="0">
              CHRISTIAN CHAMIZO
              </Heading>
            </Flex>
    
            <Flex
              mt="4"
              justify="center"
              mb="4">
              <Link 
              href="http://es-la.facebook.com" 
              isExternal 
              mx="3"
              >
                <FaFacebook size="24px" />
              </Link>
              <Link
               href="https://www.instagram.com/chris.chamy_/"
                isExternal 
                mx="3">
                <FaInstagram size="24px" />
              </Link>
              <Link
               href="http://wa.me/+541132262737"
                isExternal 
                mx="3">
                <FaWhatsapp size="24px" />
              </Link>
              <Link
               href="http://x.com/?lang=ES"
                isExternal 
                mx="3"
                >
                <FaTwitter size="24px" />
              </Link>
            </Flex>
    
            <Text
            fontSize="sm"
            textAlign="center"
            mt="2"
              >
              CopyRight <Box as="span" fontSize="sm" fontWeight="normal">&copy;</Box> 2024 All rights reserved | Este sitio fue diseñado por Christian Chamizo.
            </Text>
          </Flex>
        </Box>
      );
    };
    
    export {Footer};

 