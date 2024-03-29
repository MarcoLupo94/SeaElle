import { Box, Center, Flex, useBreakpointValue } from '@chakra-ui/react'
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
                    <Center flex="1">
                        <a
                            href="https://www.lupowebdesign.com"
                            color="fonts.100"
                            style={{ textDecoration: 'none' }}
                        >
                            © Website by Lupo Web Design
                        </a>
                    </Center>
                    <Box flex="1">
                        <Flex justifyContent="center" alignItems="center">
                            <NavLink text="home" path={'home'} />
                            <NavLink text="about" path={'about'} />
                            <NavLink text="services" path={'services'} />
                            <NavLink text="contact" path={'contact-me'} />

                            {/* Add more links as needed */}
                        </Flex>
                    </Box>
                </Flex>
            )}
        </Box>
    )
}

export { Footer }
