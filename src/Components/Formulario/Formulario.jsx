import { useState } from "react";
import { Box, Flex, Heading, Text, Button, FormControl, Input, Textarea, VStack, Icon, Divider} 
  
 from '@chakra-ui/react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    asunto: "",
    mensaje: ""
  });

  const obtengoDatos = (event) => {
    const { name, value } = event.target;
    setDatos((datoPrevio) => ({
      ...datoPrevio,
      [name]: value
    }));
  }

  const EnvioFormulario = (event) => {
    event.preventDefault(); 
    // Aquí puedes manejar el envío del formulario
  }

  return (
    <Box bg="#141b24" color="#fff" p={{ base: "4", md: "6", lg: "10" }}>
      <Box textAlign="center">
        <Heading as="h1" fontSize={{ base: "24px", md: "28px", lg: "32px" }} color="rgb(205,207,208)">
          CONTACTO
        </Heading>
        <Divider
          my="3"
          borderColor="customRed.500"
          borderWidth="2px"
          maxW="100px"
          mx="auto"
          mt="3"
          mb="5"
        />
      </Box>

      <Flex direction={{ base: "column", md: "row" }} justify="space-between" maxW="1200px" mx="auto" spacing={{ base: "4", md: "8" }}>
        <Box w={{ base: "100%", md: "40%" }} mb={{ base: "4", md: "0" }}>
          <VStack align="start" spacing="4" ml={{ base: "0", md: "8px" }}>
            <Flex align="center">
              <Icon as={FaMapMarkerAlt} mr="2px" />
              <Text>Ubicación: Buenos Aires, Argentina</Text>
            </Flex>

            <Flex align="center">
              <Icon as={FaEnvelope} mr="2px" />
              <Text>Correo electrónico: Christianchamizo@live.com.ar</Text>
            </Flex>

            <Flex align="center">
              <Icon as={FaPhone} mr="2px" />
              <Text>Teléfono: +54 11-3226-2737</Text>
            </Flex>
          </VStack>

          <Box mt="6px" ml={{ base: "0", md: "8px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.23949906467!2d-58.43329845000001!3d-34.615823750000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1717097539226!5m2!1ses-419!2sar"
              
              style={{ border: 0, width:"100%",height:"300px"}}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Box>
        </Box>

        <Box w={{ base: "100%", md: "50%" }}>
          <Box as="form" onSubmit={EnvioFormulario} mx="auto">
            <VStack spacing="4">
              <Flex
                direction={{ base: "column", sm: "row" }}
                w="100%"
                justify="space-between"
                mb="15px"
                p="10px 20px"
              >
                <FormControl id="nombre" w={{ base: "100%", sm: "48%" }}>
                  <Input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={datos.nombre}
                    onChange={obtengoDatos}
                    _focus={{ borderColor: '#007bff', outline: 'none' }}
                  />
                </FormControl>
                <FormControl id="apellido" w={{ base: "100%", sm: "48%" }} mt={{ base: "4", sm: "0" }}>
                  <Input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={datos.apellido}
                    onChange={obtengoDatos}
                    _focus={{ borderColor: '#007bff', outline: 'none' }}
                  />
                </FormControl>
              </Flex>

              <Box w="95%">
                <FormControl id="asunto">
                  <Input
                    type="text"
                    name="asunto"
                    placeholder="Asunto"
                    value={datos.asunto}
                    onChange={obtengoDatos}
                  />
                </FormControl>
              </Box>

              <FormControl id="mensaje" w="95%">
                <Textarea
                  name="mensaje"
                  placeholder="Mensaje"
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
    </Box>
  );
}

export { Formulario };