import { Box, Flex, Link, Text } from '@chakra-ui/react'

function Footer() {
    return (
        <Box bg="brand.100" color="white" w="100%" h="20%" py={4}>
            <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
                <Box flex="1">
                    <Text
                        style={{ fontSize: '2rem' }}
                        fontWeight="bold"
                        fontFamily="Dancing Script"
                        maxW="100px"
                        mx="auto"
                        mb={4}
                    >
                        SeaElle
                    </Text>
                    <Text textAlign="center" fontSize="sm">
                        © 2023 SeaElle. All rights reserved.
                    </Text>
                </Box>
                <Box flex="1">
                    <Flex justifyContent="center" alignItems="center">
                        <Link
                            href="#"
                            fontSize="sm"
                            color="whiteAlpha.700"
                            mx={2}
                            _hover={{ color: 'brand.500' }}
                        >
                            Home
                        </Link>
                        <Link
                            href="#about"
                            fontSize="sm"
                            color="whiteAlpha.700"
                            mx={2}
                            _hover={{ color: 'brand.500' }}
                        >
                            About
                        </Link>
                        <Link
                            href="#services"
                            fontSize="sm"
                            color="whiteAlpha.700"
                            mx={2}
                            _hover={{ color: 'brand.500' }}
                        >
                            Services
                        </Link>
                        {/* Add more links as needed */}
                    </Flex>
                    <Text textAlign="center" fontSize="sm" mt={2}>
                        Privacy Policy | Terms of Use
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}

export { Footer }
