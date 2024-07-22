import React, { Component } from 'react';
/* Importación de los componentes de Chakra UI */
import { Box, Heading, Text, Divider, Progress, Stack,extendTheme } from '@chakra-ui/react';




function Resumen() {
  return (
    <Box as="section" p="5">
      <Heading as="h1" mb="5">RESUMEN</Heading>

      <Box mb="5">
        <Heading as="h2" size="lg">2018 - Actualidad</Heading>
        <Divider my="3" />
        <Text fontWeight="bold">Tecnicatura Universitaria en Informática</Text>
        <Text>Universidad Nacional De General Sarmiento (UNGS)</Text>
      </Box>

      <Stack spacing={5}>
        <Box>
          <Heading as="h2" size="lg" mb="2">DISEÑO</Heading>
          <Progress  value={80} size="sm" mb="4" colorScheme="customRed" />
          
          <Heading as="h2" size="lg" mb="2">APP DE ESCRITORIO</Heading>
          <Progress  value={75} size="sm" mb="4" colorScheme="customRed" />
          
          <Heading as="h2" size="lg" mb="2">MANTENIMIENTO WEB</Heading>
          <Progress  value={70} size="sm" mb="4" colorScheme="customRed" />
        </Box>

        <Box mb="5">
          <Heading as="h2" size="lg" mb="2">HTML</Heading>
          <Progress  value={50} size="sm" mb="4" colorScheme="customRed" />

          <Heading as="h2" size="lg" mb="2">CSS</Heading>
          <Progress  value={70} size="sm" mb="4" colorScheme="customRed" />
        </Box>
      </Stack>
    </Box>
  );
}

export { Resumen };
