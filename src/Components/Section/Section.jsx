/*Importo la imagen de la compu*/
import compu from "../../assets/img/compu.jpg"

/* importo los componentes de CHAKRA IU*/
import { Box, Flex, Heading, Text, Icon, Stack,Divider} from '@chakra-ui/react';

/*Importo los iconos nesesarios de Icons-react*/
import { FaTachometerAlt, FaHandHoldingUsd, FaSignal } from 'react-icons/fa';



/*Creo la funcion Sobre mi*/ 
function SobreMi() {
    return (
        <section className="sobre-mi">
            <h2>SOBRE MÍ</h2>
            <div className="contenedor-hijo-directo">
                <div className="contenedor-texto-imagen">
                    <div className="contenedor-texto">
                        <h3>
                            Joven apasionado al <span className="highlight">diseño web</span> que ama un diseño lindo, simple y único.
                        </h3>
                        <p>Diseño y desarrollo sitios web para todo tipo de personas interesadas en adquirir alguna.</p>
                        <p>
                            Me especializo en el diseño web y mantenimiento web, aplicando diferentes estilos. También soy
                            programador y disfruto haciendo esto.
                        </p>
                    </div>
                    <div className="contenedor-listas">
                        <ul>
                            <li>Nombre: Christian Chamizo</li>
                            <li>Edad: 26 años</li>
                            <li>Título: Estudiante universitario</li>
                            <li>Dirección: Buenos Aires, Argentina</li>
                            <li>Teléfono: +54 113226-2737</li>
                            <li>Correo electrónico: christianchamizo@live.com.ar</li>
                        </ul>
                    </div>
                    <button className="boton-contactame">
                        Contáctame<span className="arrow">→</span>
                    </button>
                </div>
                <div className="contenedor-imagen fondo-rosa">
                    <img src={compu} alt="Imagen de computadora" />
                </div>
            </div>
        </section>
    );
}

export { SobreMi };

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