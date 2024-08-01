/*Importo los componentes de CHAKRA IU */
import {Box,Button,Flex,Heading,Text} from "@chakra-ui/react"


/*Creo la funcion Header*/
function Header() {
  const menuItems = ["INICIO", "SOBRE MI", "SERVICIOS", "RESUMEN", "PORTAFOLIO", "CONTACTAME"];

  return (
    <Box 
    as="header" 
    bg="#040b15" 
    color="white" 
    p="4">
      <Flex
        align="center"
        justify={{ base: "center", md: "space-between" }}
        flexDirection={{ base: "column", md: "row" }}
        
      >
        <Flex 
        align="center" 
        mb={{ base: 4, md: 0 }}>
          <Text
           fontSize="2xl"
            fontWeight="bold"
            color="red.600" 
            mr="4" 
            fontFamily="Poppins, sans-serif">
            CC
          </Text>
          <Heading
          as="h1" 
          size="lg" 
          fontWeight="bold" 
          fontFamily="Poppins, sans-serif">
          Christian Chamizo
        </Heading>
        </Flex>

        <Flex
          flexDirection={{ base: "column", md: "row" }}
          align={{ base: "center", md: "center" }}
          wrap="wrap"
          mt={{base: 4,md: 0}}
        >
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant="link"
              colorScheme={item === "INICIO" ? "red" : "white"}
              color={item === "INICIO" ? "red.600" : "white"}
              mb={{ base: 2, md: 0 }}
              mr={{ base: 0, md: 8 }}
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              fontFamily="Poppins, sans-serif"
            >
              {item}
            </Button>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}

export { Header };