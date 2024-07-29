
/*Importo los componentes de CHACKA IU*/ 
import { Box, Flex, Heading, Image, Text, Link, Icon, Button, VStack } from "@chakra-ui/react";
/*Importo los iconos de react-icons*/ 
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter, FaHandSparkles } from "react-icons/fa"
/*Importo la foto personal para el hero*/ 
import fotopersonal from "../../assets/img/fotopersonal.jpg";

const Hero = () => {
    return (
      <Box as="main" bg="#0a0f1a" color="white" textAlign="center" p="4">
        <Box as="section" className="hero" mb="8" h="100vh">
          <Flex className="contenedor-contenido-imagen" align="center" justify="space-between">


            <Box className="hero-content" mb="4" textAlign="left" mr="4" ml="14">
              <Heading as="h2" size="md" mb="2">
                <Icon as={FaHandSparkles} mr="2" color="yellow.400" />
                HOLA!, SOY
              </Heading>
              <Heading as="h2" size="2xl" fontWeight="bold" mb="2">
                DISEÑADOR WEB
              </Heading>
              <Heading as="h1" size="2xl" color="#d0002b">
                CHRISTIAN CHAMIZO
              </Heading>
              <Text fontSize="lg" mt="4">
                Diseñador Web, Programador, Freelancer, Gamer Y Más...
              </Text>
  
              <Flex mt="8" align="center">
                <Flex className="iconos-redes" mb="1" mr="4">
                  <Link href="http://es-la.facebook.com" isExternal mx="2">
                    <Icon as={FaFacebook} boxSize="6" color="white" />
                  </Link>
                  <Link href="https://www.instagram.com/chris.chamy_/" isExternal mx="2">
                    <Icon as={FaInstagram} boxSize="6" color="white" />
                  </Link>
                  <Link href="http://wa.me/+541132262737" isExternal mx="2">
                    <Icon as={FaWhatsapp} boxSize="6" color="white" />
                  </Link>
                  <Link href="http://x.com/?lang=ES" isExternal mx="2">
                    <Icon as={FaTwitter} boxSize="6" color="white" />
                  </Link>
                </Flex>
  
                <Flex className="contenedor-botones">
                  <Button as="a" href="http://wa.me/+541132262737" colorScheme="whiteAlpha" variant="outline" mx="2">
                    Contáctame <Box as="span" ml="2"> &rarr;</Box>
                  </Button>
                  <Button as="a" href="https://github.com/ChrisChamizo" colorScheme="whiteAlpha" variant="outline" mx="2">
                    Portafolio
                  </Button>
                </Flex>
              </Flex>
            </Box>
            <Box className="fotopersonal" mr="8">
              <Image src={fotopersonal} alt="Foto personal" borderRadius="md" w="400px" h="450px" />
            </Box>
          </Flex>
        </Box>
      </Box>
    );
  };
  
  export { Hero };