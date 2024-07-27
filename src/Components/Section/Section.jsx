/*Importo la imagen de la compu*/
import compu from "../../assets/img/compu.jpg"

/* importo los componentes de CHAKRA IU*/
import { Box, Flex, Heading, Text,Image, Stack,Icon,Divider,Button} from '@chakra-ui/react';

/*Importo los iconos nesesarios de Icons-react*/
import { FaTachometerAlt, FaHandHoldingUsd, FaSignal } from 'react-icons/fa';

/*Creo la función SobreMi*/ 
function SobreMi() {
  return (
    <Box as="section" bg="gray.800" color="white" py="10" px="5">
      <Heading as="h1" textAlign="center" fontSize="32px" mb="3">
        SOBRE MI
      </Heading>
      <Divider borderColor="red.500" borderWidth="2px" maxW="100px" mx="auto" mt="3" mb="5" />
      <Flex direction={{ base: "column", md: "row" }} justify="center" align="center" mx="auto">
        <Box flex="1" pr={{ md: 10 }}>
          <Heading as="h3" fontSize="xl" mb="4">
            Joven Apasionado Al <Text as="span" color="red.500">Diseño Web</Text> Que Ama Un Diseño Limpio, Simple y Único.
          </Heading>
          <Divider borderColor="red.500" borderWidth="2px" maxW="100px" mx="auto" mt="3" mb="5" />
          <Text mb="4">
            Diseño y Desarrollo sitios Web para todo tipo de personas interesadas en adquirir alguna. Me especializo en el Diseño Web, Servicios Web y Tiendas en Línea Modernas y con estilo, también soy programador, Freelancer, Gamer. También disfruto creando Logos, Interfaces, entre muchas cosas más.
          </Text>
          <Flex direction={{ base: "column", md: "row" }} mb={4}>
            <Stack spacing={2} flex="1">
              <Text><Text as="span" fontWeight="bold">Nombre:</Text> Christian Chamizo</Text>
              <Text><Text as="span" fontWeight="bold">Edad:</Text> 26 Años.</Text>
              <Text><Text as="span" fontWeight="bold">Título:</Text> Estudiante universitario.</Text>
            </Stack>
            <Stack spacing={4} flex="1">
              <Text><Text as="span" fontWeight="bold">Dirección:</Text> Buenos Aires, Argentina.</Text>
              <Text><Text as="span" fontWeight="bold">Teléfono:</Text> +54 1132262737.</Text>
              <Text><Text as="span" fontWeight="bold">Correo Electrónico:</Text> Christianchamizo@live.com.ar.</Text>
            </Stack>
          </Flex>
          <Button variant="outline" colorScheme="whiteAlpha" rightIcon={<Text as="span">→</Text>}>
            Contáctame
          </Button>
        </Box>
        <Box flex="1" mt={{ base: 6, md: 0 }} p="5" position="relative">
          <Box
            position="absolute"
            top="20px"
            left="20px"
            width="100%"
            height="100%"
            bg="#d3002d"
            borderRadius="md"
            zIndex="1"
          />
          <Image src={compu} alt="Imagen de computadora" borderRadius="md" position="relative" zIndex="2" />
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
    <Box bg="#111827" color="white" py="10">
      
      <Heading as="h2" size="xl" textAlign="center" mb="3" borderColor="red.600" pb="2">
        SERVICIOS
      </Heading>
      <Divider borderColor="customRed.500" borderWidth="2px" maxW="100px" mx="auto" mt="3" mb="5" />

      <Flex justify="space-around">
        <Stack align="center" maxW="xs" textAlign="center" spacing={4}>
          <Icon as={FaTachometerAlt} boxSize={10} />
          <Heading as="h3" size="md">VELOCIDAD & OPTIMIZACIÓN</Heading>
          <Text>
            Acelera la <b>Velocidad</b> y <b>Optimiza</b> tu sitio web para una carga más rápida en dispositivos móviles y PC.
          </Text>
        </Stack>

        <Stack align="center" maxW="xs" textAlign="center" spacing={4}>
          <Icon as={FaHandHoldingUsd} boxSize={10} />
          <Heading as="h3" size="md">BRANDING</Heading>
          <Text>
            Tu marca personal de forma rápida y sencilla, especialmente diseñada para ti y tus ideales.
          </Text>
        </Stack>

        <Stack align="center" maxW="xs" textAlign="center" spacing={4}>
          <Icon as={FaSignal} boxSize={10} />
          <Heading as="h3" size="md">SEO & POSICIONAMIENTO</Heading>
          <Text>
            Posiciona tu sitio web para obtener mejores resultados cuando busquen tu sitio web.
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
}

export { Servicios };