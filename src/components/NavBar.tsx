import {
    Box,
    Link as ChakraLink,
    ChakraProps,
    Divider,
    Flex,
    Text,
    useBreakpointValue,
    useDisclosure
} from '@chakra-ui/react'
import Hamburger from 'hamburger-react'
import { FC, useEffect, useState } from 'react'
interface NavBarProps {}

export const NavBar: FC<NavBarProps> = () => {
    const [isScrolled, setScrolled] = useState(false)
    const isMobile = useBreakpointValue({ base: true, sm: true, lg: false, md: true })
    const { isOpen, onToggle } = useDisclosure()

    const handleToggleMenu = () => {
        onToggle()
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 100 // You can adjust this value as needed
            setScrolled(window.scrollY > scrollThreshold)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            {' '}
            <Flex
                as="nav"
                justifyContent={['space-between', 'space-between', 'space-between', 'space-evenly']}
                alignItems="center"
                px={4}
                h="60px" // You can adjust the height as needed
                bg={isScrolled || isMobile ? 'brand.100' : 'transparent'} // Change background color when scrolled
                color="white"
                boxShadow={isScrolled ? 'md' : 'none'} // Add shadow effect when scrolled
                position={['absolute', 'fixed']}
                top={0}
                left={0}
                right={0}
                zIndex={400}
                style={
                    isScrolled || isMobile
                        ? {
                              transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s' // Add smooth transitions
                          }
                        : {
                              transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s', // Add smooth transitions
                              background: 'linear-gradient(transparent,rgba(0, 0, 0, 0.05 )'
                          }
                }
            >
                {/* Custom Logo */}
                <Text style={{ fontSize: '2rem' }} fontWeight="bold" fontFamily="Dancing Script">
                    SeaElle
                </Text>

                {/* Navigation Links */}
                <Flex
                    display={isMobile ? 'none' : 'flex'} // Hide on mobile, show on medium and larger screens
                    align="center"
                >
                    <NavLink path="services" text="Services" color="white" />
                    <NavLink path="about" text="About Me" color="white" />
                    <NavLink path="portfolio" text="Portfolio" color="white" />
                    <NavLink path="testimonials" text="Testimonials" color="white" />
                    <NavLink path="contact-me" text="Contact Me" color="white" />
                </Flex>
                {/* Socials Links */}
                {/* <Flex
                    display={{ base: 'none', md: 'flex' }} // Hide on mobile, show on medium and larger screens
                    align="center"
                > */}
                {/* <NavLink
                        path="services"
                        text="Baking School"
                        color={isScrolled || isMobile ? 'white' : 'black'}
                    /> */}
                {/* <NavLink path="about" text="Instagram" /> */}
                {/* <NavLink path="portfolio" text="Linkedin" /> */}
                {/* </Flex> */}
                {isMobile && (
                    <Hamburger
                        toggled={isOpen}
                        color={isOpen ? '#`D75559' : '#FFFFFF'}
                        toggle={handleToggleMenu}
                    />
                )}
            </Flex>
            {/* Hamburger Menu for Mobile */}
            <Flex
                direction="column"
                position="absolute"
                alignItems={'center'}
                left={0}
                top={10}
                w="100%"
                h="50vh"
                bg="brand.100"
                boxShadow="0px 2px 3px 0px rgba(0, 0, 0, 0.04)"
                zIndex={100}
                transition="transform 0.5s ease-in-out"
                transform={isOpen ? 'translateY(0)' : 'translateY(-100%)'}
                opacity={isOpen ? 1 : 0}
                gap={4}
                pt={6}
                onClick={handleToggleMenu}
            >
                <Divider opacity={0.1} />
                <NavLink fontSize={'2xl'} path="portfolio" text="portfolio" />
                <Divider opacity={0.1} />
                <NavLink fontSize={'2xl'} path="services" text="services" />
                <Divider opacity={0.1} />
                <NavLink fontSize={'2xl'} path="about" text="about" />
                <Divider opacity={0.1} />
                <NavLink fontSize={'2xl'} path="contact-me" text="contact" />
                <Divider opacity={0.1} />
                <NavLink fontSize={'2xl'} path="testimonials" text="testimonials" />
                <Divider opacity={0.1} />
            </Flex>
        </>
    )
}

interface NavLinkProps extends ChakraProps {
    path: string
    text: string
    lower?: boolean
    onClick?: () => void
}

export const NavLink: FC<NavLinkProps> = ({ path, text, onClick, lower, ...props }) => {
    const handleClick = () => {
        const targetSection = document.getElementById(path)

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'end' })
        }

        if (onClick) {
            onClick()
        }
    }

    return (
        <Box mx={3} onClick={handleClick} cursor="pointer">
            <ChakraLink
                fontSize="sm"
                fontWeight="semibold" // Use "semibold" for a bolder font weight
                textTransform={lower ? 'none' : 'uppercase'} // Convert text to uppercase
                color={props.color ? props.color : 'white'}
                style={{ textDecoration: 'none' }}
                _hover={{ color: 'brand.500' }} // Change color on hover
            >
                {text}
            </ChakraLink>
        </Box>
    )
}
