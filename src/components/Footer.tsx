import { Box, Center, Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import { NavLink } from './NavBar'

function Footer() {
    const isMobile = useBreakpointValue({ base: true, md: false })
    return (
        <Box bg="brand.100" color="white" w="100%" h="20%" py={4}>
            {isMobile ? (
                <Center w="100%">
                    <NavLink
                        path={'home'}
                        text="© 2023  SeaElle"
                        fontSize="sm"
                        color="fonts.200"
                        _hover={{ color: 'fonts.100' }}
                        lower={true}
                    />
                </Center>
            ) : (
                <Flex h="40px" justifyContent="center" alignItems="center" flexWrap="wrap">
                    <Box flex="1">
                        <Text textAlign="center" fontSize="sm">
                            © 2023 SeaElle
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
            )}
        </Box>
    )
}

export { Footer }
