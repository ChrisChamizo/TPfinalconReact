import { useState } from "react"

/*importo los componentes de CHAKRA UI*/
import { Box, Button, FormControl, Input, Textarea, VStack,Heading } from '@chakra-ui/react'

/*Creo la función del formulario*/
const Formulario = ({ envioFormulario }) => {
  /*Preparo los datos que contiene el formulario*/
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    asunto: "",
    mensaje: ""
  });

  /*Funciones*/
  function obtengoDatos(event) {
    /*Destructuring de los datos*/
    const { name, value } = event.target;

    setDatos(datoPrevio => ({
      ...datoPrevio,
      [name]: value
    }))
  }

  function envioFormulario(event) {
    event.preventDefault(); // el preventDefault evita que se recargue la página y se envíen los datos vacíos
    
  }

  /*Estilo el formulario*/
  return (
    <Box className="formulario" p="20px" borderRadius="lg" maxW="md"mx="auto">
      <form onSubmit={envioFormulario}>
      <Heading as="h1" size="lg" textAlign="center" mb="6">
        Contacto
      </Heading>
        <VStack spacing={4}>
          <Box className="formulario-nombre-apellido" w="100%">
            <FormControl id="nombre">
              <Input
                type="text"
                placeholder="Nombre"
                maxLength="15"
                name="nombre"
                value={datos.nombre}
                onChange={obtengoDatos}
              />
            </FormControl>
            <FormControl id="apellido" mt={4}>
              <Input
                type="text"
                placeholder="Apellido"
                maxLength="15"
                name="apellido"
                value={datos.apellido}
                onChange={obtengoDatos}
              />
            </FormControl>
          </Box>
          <Box className="formulario-asunto" w="100%">
            <FormControl id="asunto">
              <Input
                type="text"
                placeholder="Asunto"
                name="asunto"
                value={datos.asunto}
                onChange={obtengoDatos}
              />
            </FormControl>
          </Box>
          <FormControl id="mensaje">
            <Textarea
              placeholder="Mensaje"
              name="mensaje"
              value={datos.mensaje}
              onChange={obtengoDatos}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Enviar Mensaje <span className="arrow">➤</span>
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export { Formulario }
