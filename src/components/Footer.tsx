import { Box, Flex, Link, Text } from '@chakra-ui/react'
import { NavLink } from './NavBar'

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
                        <NavLink text="home" path={'home'} />
                        <NavLink text="about" path={'about'} />
                        <NavLink text="services" path={'services'} />

                        {/* Add more links as needed */}
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export { Footer }
