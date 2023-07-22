import { HStack } from '@chakra-ui/react'
import { FC } from 'react'
import { NavLink } from './NavLink'

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = () => {
    return (
        <HStack
            justifyContent="space-between"
            w="100%"
            h="6%"
            bg="brand.100"
            position="fixed"
            zIndex={'1000'}
        >
            <div>Logo</div>
            <HStack w="50%" justifyContent="space-evenly">
                <NavLink path="services" text="Services" />
                <NavLink path="about" text="About Me" />
                <NavLink path="portfolio" text="Gallery/Portoflio" />
                <NavLink path="testimonials" text="Testimonials" />
                <NavLink path="contact-me" text="Contact Me" />
            </HStack>
        </HStack>
    )
}
