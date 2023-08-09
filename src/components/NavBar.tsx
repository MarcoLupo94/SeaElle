import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Box,
    Link as ChakraLink,
    ChakraProps,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    IconButton,
    Text
} from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const [isScrolled, setScrolled] = useState(false)

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen)
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
        <Flex
            as="nav"
            justifyContent="space-between"
            alignItems="center"
            px={4}
            h="60px" // You can adjust the height as needed
            bg={isScrolled ? 'brand.100' : 'transparent'} // Change background color when scrolled
            color={isScrolled ? 'white' : 'black'} // Change text color when scrolled
            boxShadow={isScrolled ? 'md' : 'none'} // Add shadow effect when scrolled
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex="45"
            style={{
                transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s' // Add smooth transitions
            }}
        >
            {/* Custom Logo */}
            <Text style={{ fontSize: '2rem' }} fontWeight="bold" fontFamily="Dancing Script">
                SeaElle
            </Text>

            {/* Navigation Links */}
            <Flex
                display={{ base: 'none', md: 'flex' }} // Hide on mobile, show on medium and larger screens
                align="center"
            >
                <NavLink path="services" text="Services" />
                <NavLink path="about" text="About Me" />
                <NavLink path="portfolio" text="Gallery" />
                <NavLink path="testimonials" text="Testimonials" />
                <NavLink path="contact-me" text="Contact Me" />
            </Flex>
            {/* Socials Links */}
            <Flex
                display={{ base: 'none', md: 'flex' }} // Hide on mobile, show on medium and larger screens
                align="center"
            >
                <NavLink path="services" text="Baking School" />
                {/* <NavLink path="about" text="Instagram" /> */}
                {/* <NavLink path="portfolio" text="Linkedin" /> */}
            </Flex>

            {/* Hamburger Menu for Mobile */}
            <Box display={{ base: 'block', md: 'none' }}>
                <IconButton
                    aria-label="Menu"
                    icon={<HamburgerIcon />}
                    onClick={handleMenuToggle}
                    color={isScrolled ? 'white' : 'black'} // Change icon color when scrolled
                    variant="outline"
                    _hover={{ color: 'brand.500' }}
                />
                <Drawer placement="right" onClose={() => setMenuOpen(false)} isOpen={isMenuOpen}>
                    <DrawerOverlay />
                    <DrawerContent bg={'brand.500'}>
                        <DrawerCloseButton />
                        <DrawerHeader>Menu</DrawerHeader>
                        <DrawerBody>
                            <Box as="nav">
                                <NavLink
                                    path="services"
                                    text="Services"
                                    onClick={handleMenuToggle}
                                />
                                <NavLink path="about" text="About Me" onClick={handleMenuToggle} />
                                <NavLink
                                    path="portfolio"
                                    text="Gallery"
                                    onClick={handleMenuToggle}
                                />
                                <NavLink
                                    path="testimonials"
                                    text="Testimonials"
                                    onClick={handleMenuToggle}
                                />
                                <NavLink
                                    path="contact-me"
                                    text="Contact Me"
                                    onClick={handleMenuToggle}
                                />
                            </Box>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Flex>
    )
}

interface NavLinkProps extends ChakraProps {
    path: string
    text: string
    onClick?: () => void
}

export const NavLink: FC<NavLinkProps> = ({ path, text, onClick, ...props }) => {
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
                textTransform="uppercase" // Convert text to uppercase
                color={props.color ? props.color : 'white'}
                style={{ textDecoration: 'none' }}
                _hover={{ color: 'brand.500' }} // Change color on hover
            >
                {text}
            </ChakraLink>
        </Box>
    )
}
