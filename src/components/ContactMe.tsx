import { Flex } from '@chakra-ui/react'
import { ContactForm } from './ContactForm'
import { ContactText } from './ContactText'

function ContactMeSection() {
    return (
        <Flex
            direction="column"
            id="contact-me"
            alignItems={['flex-start', 'center']}
            h={'100%'}
            w="100%"
            bg="brand.300"
            boxShadow={'sm'}
            border={'1px'}
            pt={8}
            borderColor={'gray.200'}
        >
            <ContactText />
            <ContactForm />
        </Flex>
    )
}

export { ContactMeSection }
