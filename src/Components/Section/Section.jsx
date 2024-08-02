/*Importo la imagen de la compu*/
import laptop from "../../assets/img/laptop.jpg"

/* importo los componentes de CHAKRA IU*/
import { Box, Flex, Heading, Text,Image, Stack,Icon,Divider,Button,HStack} from '@chakra-ui/react';

/*Importo los iconos nesesarios de Icons-react*/
import { FaTachometerAlt, FaHandHoldingUsd, FaSignal } from 'react-icons/fa';

/*Creo la función SobreMi*/ 
function SobreMi() {
  return (
    <Box 
    as="section" 
    bg="gray.800" 
    color="white" 
    py={{base:"10", md:"20"}}
    px={{base:"5", md:"10"}}
    
    >
      <Heading 
      as="h1" 
      textAlign="center" 
      fontSize={{base:"24px",md:"32px"}} 
      mb="3"
      fontFamily="dm-serif-display"
      >
        SOBRE MÍ
      </Heading>
      <Divider 
      borderColor="#ca002e" 
      borderWidth="1px" 
      maxW="100px" 
      mx="auto" 
      mt="3" 
      mb="5" />
      <Flex direction={{ base: "column", md: "row" }} 
      justify="center" 
      align="center" 
      mx="auto">
        <Box 
        flex="1" 
        pr={{base:"0", md: "10" }}
        mb={{base:"6",md:"0"}}>
          <Heading
           as="h3" 
           fontSize={{base:"lg",md:"xl"}} 
           mb="4">
             Joven Apasionado Al <Text as="span" color="red.500">Diseño Web</Text> Que Ama Un Diseño Limpio, Simple y Único.
          </Heading>

          <Divider 
          borderColor="red.500
          " borderWidth="2px"
           maxW="100px" 
           mx={{base:"auto",md:"0"}}
           mt="3" 
           mb="5" />

          <Text mb="4">
            Diseño y Desarrollo sitios Web para todo tipo de personas interesadas en adquirir alguna. Me especializo en el Diseño Web, Servicios Web y Tiendas en Línea Modernas y con estilo, también soy programador, Freelancer, Gamer. También disfruto creando Logos, Interfaces, entre muchas cosas más.
          </Text>
          
          <Flex direction={{ base: "column", md: "row" }} 
          mb="4">
            <Stack 
            spacing="2" 
            flex="1"
            mb={{base:"4",md:"0"}}>
              <Text><Text as="span" fontWeight="bold">Nombre:</Text> Christian Chamizo</Text>
              <Text><Text as="span" fontWeight="bold">Edad:</Text> 26 Años.</Text>
              <Text><Text as="span" fontWeight="bold">Título:</Text> Estudiante universitario.</Text>
            </Stack>
            <Stack spacing="4" flex="1">
              <Text><Text as="span" fontWeight="bold">Dirección:</Text> Buenos Aires, Argentina.</Text>
              <Text><Text as="span" fontWeight="bold">Teléfono:</Text> +54 1132262737.</Text>
              <Text><Text as="span" fontWeight="bold">Correo Electrónico:</Text> Christianchamizo@live.com.ar.</Text>
            </Stack>
          </Flex>

          <Button
           variant="outline"
            colorScheme="whiteAlpha"
             rightIcon={<Text as="span">→</Text>}>
            Contáctame
          </Button>
        </Box>

        <Box //Contenedor principal
         flex="1"
          mt={{ base: 6, md: 0 }}
          p={{base: "2", md: "5"}}
          position="relative"
          height={{ base: "300px", md: "400px" }} //Ajusta la altura del contenedor principal 
          display="flex"
          justifyContent="center"
          alignItems="center"
          >


          <Box //Contenedor del fondo rojo
            position="absolute"
            top="50%" //centra verticalmente
            left="50%" //centra horizontalmente
            
            transform="translate(-50%, -50%)" // Ajusta la posición para centrar
            width={{ base: "35%", md: "45%" }} //ajusta el ancho del fondo
            height={{ base: "100%", md: "100%" }} //ajusta la altura del fondo
            bg="#d3002d"
            borderRadius="md"
            zIndex="1"
          />
          <Image //imagen
           src={laptop} 
           alt="Imagen de computadora"
           borderRadius="lg"
           position="absolute"
           left={{ base: "25%", md: "25%" }} // Ajusta la imagen para sobresalir a la izquierda
           top="50%" // centra verticalmente
           transform="translateY(-50%)" // Ajusta la posición vertical
           width={{ base: "50%", md: "40%" }} // Ajusta el tamaño de la imagen
           objectFit="cover"
           zIndex="2"
           />
        </Box>
      </Flex>
    </Box>
  );
}

export { SobreMi };


/*Para lograr el efecto de la imagen, encapsule en un contenedor dicha imagen que tenga un fondo
rojo y otro contenedor para la imagen que contenga el borde redondeado.*/ 


function Servicios() {
  return (
    <Box 
    bg="#111827" 
    color="white" 
    py={{base:"10", md:"20"}}
    px={{base:"5",md:"10"}}
    fontFamily="'acumin-pro', 'Acumin Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    >
      
      <Heading 
      as="h2" 
      size={{base:"lg", md:"xl"}} 
      textAlign="center" 
      mb="3" 
      borderColor="red.600" 
      pb="2">
        SERVICIOS
      </Heading>

      <Divider 
      borderColor="#ca002e" 
      borderWidth="1px" 
      maxW="100px" 
      mx="auto" 
      mt="3" 
      mb="5" />

      <Flex
      direction={{base:"column",md:"row"}} 
      justify="space-around"
      align="center"
      mx="auto"
      wrap="wrap">
        <Stack 
        align="center" 
        maxW="xs" 
        textAlign="center" 
        spacing="4"
        mb={{base:"6",md:"0"}}>
          <Icon 
          as={FaTachometerAlt}
           boxSize={{base:"8",md:"10"}} />
          <Heading 
          as="h3" 
          size={{base:"md", md:"lg"}}
          >VELOCIDAD & OPTIMIZACIÓN
          </Heading>
          <Text fontSize={{base:"sm",md:"md"}}>
            Acelera la <b>Velocidad</b> y <b>Optimiza</b> tu sitio web para una carga más rápida en dispositivos móviles y PC.
          </Text>
        </Stack>

        <Stack 
        align="center"
         maxW="xs" 
         textAlign="center" 
         spacing="4"
         mb={{base:"6",md:"0"}}>
          <Icon 
          as={FaHandHoldingUsd} 
          boxSize={{base:"8", md:"10"}} />
          <Heading 
          as="h3" 
          size={{base:"md",md:"lg"}}>
            BRANDING
            </Heading>
          <Text fontSize={{base:"sm", md:"md"}}>
            Tu marca personal de forma rápida y sencilla, especialmente diseñada para ti y tus ideales.
          </Text>
        </Stack>

        <Stack 
        align="center" 
        maxW="xs" 
        textAlign="center" 
        spacing="4">
          <Icon 
          as={FaSignal} 
          boxSize={{base:"8", md:"10"}} />
          <Heading 
          as="h3" 
          size={{base:"md",md:"lg"}}>
            SEO & POSICIONAMIENTO
            </Heading>
          <Text fontSize={{base:"sm",md:"md"}}>
            Posiciona tu sitio web para obtener mejores resultados cuando busquen tu sitio web.
          </Text>
        </Stack>
      </Flex>

       {/* Componente de scroll */}
       <Flex justify="center" mt="5">
        <HStack spacing="2">
          <Box w="6" h="6" bg="white" borderRadius="full" border="2px solid red"></Box>
          <Box w="6" h="6" bg="#d2002d" borderRadius="full" border="2px solid red"></Box>
          <Box w="6" h="6" bg="#d9d9d9" borderRadius="full" border="2px solid red"></Box>
          <Box w="6" h="6" bg="#d9d9d9" borderRadius="full" border="2px solid red"></Box>
          <Box w="6" h="6" bg="#d9d9d9" borderRadius="full" border="2px solid red"></Box>
          <Box w="6" h="6" bg="#d9d9d9" borderRadius="full" border="2px solid red"></Box>
        </HStack>
      </Flex>
    </Box>
  );
}

export { Servicios };