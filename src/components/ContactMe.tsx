import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { ContactForm } from './ContactForm'
import { ContactText } from './ContactText'

function ContactMeSection() {
    const isMobile = useBreakpointValue({ base: true, md: true }) // Define breakpoints for mobile view

    return (
        <Flex
            direction="column"
            id="contact-me"
            alignItems={'center'}
            h={isMobile ? '100%' : '100%'}
            w="100%"
            bg="brand.300"
            boxShadow={'sm'}
            border={'1px'}
            pt={8}
            pb={8}
            borderColor={'gray.200'}
            gap={12}
        >
            <ContactText />
            <ContactForm />
        </Flex>
    )
}

export { ContactMeSection }
