
/*Importo los componentes de CHACKA IU*/ 
import { Box, Flex, Heading, Image, Text, Link, Icon, Button, VStack } from "@chakra-ui/react";
/*Importo los iconos de react-icons*/ 
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter, FaHandSparkles } from "react-icons/fa"
/*Importo la foto personal para el hero*/ 
import fotopersonal from "../../assets/img/fotopersonal.jpg";

const Hero = () => {
    return (
      <Box as="main"
       bg="#0a0f1a" 
       color="white" 
       textAlign="center" 
       p={{base: "4",md:"8"}}>
        <Box 
        as="section" 
        className="hero" 
        mb="8" 
        h="100vh">
          <Flex 
          className="contenedor-contenido-imagen" 
          align="center" 
          justify="space-between"
          direction={{base:"column", lg:"row"}}>


            <Box 
            className="hero-content" 
            mb="4" 
            textAlign={{ base: "center", lg: "left" }} 
            mr={{ base: "0", lg: "4" }} 
            ml={{ base: "0", lg: "14" }}>

              <Heading 
              as="h2" 
              size="md" 
              mb="2">
                <Icon 
                as={FaHandSparkles} 
                mr="2" 
                color="yellow.400" />
                HOLA!, SOY
              </Heading>

              <Heading as="h2" size={{base: "xl",md: "2xl"}} 
              fontWeight="bold" 
              mb="2">
                DISEÑADOR WEB
              </Heading>

              <Heading 
              as="h1" 
              size={{base: "xl", md:"2xl"}} 
              color="#d0002b">
                CHRISTIAN CHAMIZO
              </Heading>

              <Text fontSize={{base:"md",md:"lg"}} mt="4">
                Diseñador Web, Programador, Freelancer, Gamer Y Más...
              </Text>
  
              <Flex
               mt="8"
               align="center"
               direction={{base:"column",md:"row"}}>
                <Flex 
                className="iconos-redes" 
                mb={{base: "4",md:"0"}}
                 mr={{md:"4"}}>

                  <Link 
                  href="http://es-la.facebook.com" isExternal 
                  mx="2">
                    <Icon 
                    as={FaFacebook} 
                    boxSize={{base:"5",md:"6"}}
                    color="white" />
                  </Link>
                  <Link 
                  href="https://www.instagram.com/chris.chamy_/" isExternal 
                  mx="2">
                    <Icon 
                    as={FaInstagram} 
                    boxSize={{base:"5",md:"6"}}
                    color="white" />
                  </Link>
                  <Link 
                  href="http://wa.me/+541132262737" isExternal 
                  mx="2">
                    <Icon 
                    as={FaWhatsapp} 
                    boxSize={{base:"5",md:"6"}}
                    color="white" />
                  </Link>
                  <Link 
                  href="http://x.com/?lang=ES" isExternal 
                  mx="2">
                    <Icon 
                    as={FaTwitter} 
                    boxSize={{base:"5",md:"6"}}
                    color="white" />
                  </Link>
                </Flex>
  
                <Flex 
                className="contenedor-botones"
                direction={{base:"column",md:"row"}}>
                  <Button 
                  as="a" 
                  href="http://wa.me/+541132262737" 
                  colorScheme="white" 
                  variant="outline" 
                  mx="2"
                  my={{base:"2",md:"0"}}>
                    Contáctame 
                    <Box
                     as="span" 
                     ml="2"> 
                     &rarr;
                     </Box>
                  </Button>

                  <Button 
                  as="a" 
                  href="https://github.com/ChrisChamizo" 
                  colorScheme="white" 
                  variant="outline" 
                  mx="2"
                  my={{base:"2",md:"0"}}>
                    Portafolio
                  </Button>
                </Flex>
              </Flex>
            </Box>
            <Box 
            className="fotopersonal" 
            mr={{base:"0",lg:"8"}}
            mt={{ base: "8", lg: "0" }}>
              <Image 
              src={fotopersonal}
               alt="Foto personal" 
               borderRadius="md" 
               w={{ base: "300px", md: "400px" }} 
               h={{ base: "350px", md: "450px" }} />
            </Box>
          </Flex>
        </Box>
      </Box>
    );
  };
  
  export { Hero };