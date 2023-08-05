import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { ContactForm } from './ContactForm'
import { ContactText } from './ContactText'

function ContactMeSection() {
    const isMobile = useBreakpointValue({ base: true, md: false }) // Define breakpoints for mobile view

    return (
        <Flex
            direction={isMobile ? 'column' : 'row'}
            id="contact-me"
            alignItems={'center'}
            h={isMobile ? '100%' : '70vh'}
            w="100%"
            bg="brand.300"
            boxShadow={'sm'}
            border={'1px'}
            borderColor={'gray.200'}
        >
            <ContactText />
            <ContactForm />
        </Flex>
    )
}

export { ContactMeSection }
