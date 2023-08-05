import { Box, Flex } from '@chakra-ui/react'
import { ContactForm } from './ContactForm'
import { DividerStyled } from './DividerStyled'

function ContactMeSection() {
    return (
        <Box id="contact-me" bg="brand.300" height="50%" w="100%">
            <DividerStyled text="CONTACT ME" />
            <Flex py={12} justifyContent="center" alignItems="center" flexWrap="wrap">
                <Box flex="1" p={4} maxWidth="1000px">
                    <ContactForm />
                </Box>
            </Flex>
        </Box>
    )
}

export { ContactMeSection }
