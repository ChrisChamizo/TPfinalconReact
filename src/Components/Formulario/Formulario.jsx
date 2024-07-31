import { useState } from "react";
/*importo los componentes de CHAKRA IU*/
import { Box, Flex, Heading, Text, Button, FormControl, Input, Textarea, VStack, Icon,Divider} from '@chakra-ui/react';
/*importo los iconos de la libreria de react utilizandolos como componentes*/ 
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

/* Creo la función del formulario */
const Formulario = () => {
  /* Preparo los datos que contiene el formulario */
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    asunto: "",
    mensaje: ""
  });

  /* Funciones */
  function obtengoDatos(event) {
    /* Destructuring de los datos */
    const { name, value } = event.target;

    setDatos(datoPrevio => ({
      ...datoPrevio,
      [name]: value
    }));
  }

  function EnvioFormulario(event) {
    event.preventDefault(); // el preventDefault evita que se recargue la página y se envíen los datos vacíos
  }

  <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        maxW="1200px"
        mx="auto"
        spacing={{ base: "4", md: "8" }}
      >
        <Box 
        w={{ base: "100%", md: "40%" }} 
        mb={{ base: "4", md: "0" }}>
          <VStack
           align="start"
            spacing="4" 
            ml={{ base: "0", md: "8px" }}>
            <Flex align="center"
            >
              <Icon 
              as={FaMapMarkerAlt} 
              mr="2px" />
              <Text>
                Ubicación: Buenos Aires, Argentina
                </Text>
            </Flex>
            <Flex 
            align="center"
            >
              <Icon
               as={FaEnvelope} 
               mr="2px" />
              <Text>
                Correo electrónico: Christianchamizo@live.com.ar
              </Text>
            </Flex>
            <Flex
             align="center"
             >
              <Icon
               as={FaPhone} 
               mr="2px" />
              <Text>
                Teléfono: +54 11-3226-2737
              </Text>
            </Flex>
          </VStack>
          <Box
           mt="6px"
           ml={{ base: "0", md: "8px" }}
            >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.23949906467!2d-58.43329845000001!3d-34.615823750000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1717097539226!5m2!1ses-419!2sar"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Box>

        <Box 
        w={{ base: "100%", md: "50%" }}
        >
          <Box 
          as="form" onSubmit={EnvioFormulario} 
          mx="auto">
            <VStack
             spacing="4">
              <Flex
                direction={{ base: "column", sm: "row" }}
                w="100%"
                justify="space-between"
                mb="15px"
                p="10px 20px"
              >
                <FormControl
                 id="nombre"
                  w={{ base: "100%", sm: "48%" }}>
                  <Input
                    type="text"
                    placeholder="Nombre"
                    maxLength="15"
                    name="nombre"
                    value={datos.nombre}
                    onChange={obtengoDatos}
                    bg="rgb(20,27,36)"
                    color="#fff"
                    borderColor="#ccc"
                    fontSize="15px"
                    _focus={{ borderColor: '#007bff', outline: 'none' }}
                  />
                </FormControl>
                <FormControl
                 id="apellido" 
                 w={{ base: "100%", sm: "48%" }} 
                 mt={{ base: "4", sm: "0" }}>
                  <Input
                    type="text"
                    placeholder="Apellido"
                    maxLength="15"
                    name="apellido"
                    value={datos.apellido}
                    onChange={obtengoDatos}
                    bg="rgb(20,27,36)"
                    color="#fff"
                    borderColor="#ccc"
                    _focus={{ borderColor: '#007bff', outline: 'none' }}
                  />
                </FormControl>
              </Flex>
              <Box w="95%">
                <FormControl 
                id="asunto">
                  <Input
                    type="text"
                    placeholder="Asunto"
                    name="asunto"
                    value={datos.asunto}
                    onChange={obtengoDatos}
                    bg="rgb(20,27,36)"
                    color="#fff"
                    borderColor="#ccc"
                    mb="15px"
                    p="10px 20px"
                    _focus={{ borderColor: '#007bff', outline: 'none' }}
                  />
                </FormControl>
              </Box>
              <FormControl 
              id="mensaje" 
              w="95%">
                <Textarea
                  name="mensaje"
                  value={datos.mensaje}
                  onChange={obtengoDatos}
                  bg="rgb(20,27,36)"
                  color="#fff"
                  borderColor="#ccc"
                  _focus={{ borderColor: '#007bff', outline: 'none' }}
                  h="150px"
                  w="100%"
                />
              </FormControl>
              <Button
                type="submit"
                bg="#fff"
                color="#1a1a2e"
                w="100%"
                py="6px"
                _hover={{ bg: '#e6e6e6' }}
                borderRadius="5px"
                fontSize="16px"
                cursor="pointer"
              >
                Enviar Mensaje <Box as="span" ml="10px">➤</Box>
              </Button>
            </VStack>
          </Box>
        </Box>
      </Flex>
    
}

export { Formulario };