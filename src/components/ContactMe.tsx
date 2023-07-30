import { Box, Flex } from '@chakra-ui/react'
import { ContactForm } from './ContactForm'

function ContactMeSection() {
    return (
        <Box id="contact-me" py={12} bg="brand.300" height="50%" w="100%">
            <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
                <Box flex="1" p={4} maxWidth="1000px">
                    <ContactForm />
                </Box>
            </Flex>
        </Box>
    )
}

export { ContactMeSection }
