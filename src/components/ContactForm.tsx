import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    Heading,
    Input,
    Textarea,
    useBreakpointValue,
    useToast
} from '@chakra-ui/react'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: ''
    })
    const [loader, setLoader] = useState(false)

    const formRef = useRef<HTMLFormElement>(null)

    const toast = useToast()

    const handleInputChange = (e: { target: { name: string; value: string } }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const sendEmail = () => {
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAIL_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                formRef.current,
                import.meta.env.VITE_EMAILJS_KEY
            )
            .then(
                () => {
                    setLoader(false)
                    toast({
                        title: 'Message Sent',
                        description: 'Your message has been sent successfully!',
                        status: 'success',
                        duration: 5000,
                        isClosable: true
                    })
                },
                () => {
                    setLoader(false)
                    toast({
                        title: 'Error Sending Message',
                        description:
                            'We were not able to send your message. Please try again later.',
                        status: 'error',
                        duration: 5000,
                        isClosable: true
                    })
                }
            )
    }

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if (!formData.name || !formData.email || !formData.message || !formData.subject)
            return toast({
                title: 'Please fill out all the fields',
                description: 'We were not able to send your message. Please try again.',
                status: 'error',
                duration: 5000,
                isClosable: true
            })
        setLoader(true)
        sendEmail()
        setFormData({
            name: '',
            email: '',
            message: '',
            subject: ''
        })
    }

    const isMobile = useBreakpointValue({ base: true, md: false })

    return (
        <Flex
            as="section"
            w="100%"
            h={isMobile ? 'auto' : '60vh'}
            boxShadow="0px 2px 3px 0px rgba(0, 0, 0, 0.04)"
            borderTop="none"
            borderLeft="solid 1px #dddddd"
            borderRight="solid 1px #dddddd"
            borderBottom="solid 1px #dddddd"
            bg="backgrounds.200"
            zIndex={10}
            justifyContent={'center'}
            p={{ base: '2rem', md: '3.4rem 4rem' }} // Adjust padding
            pt={[0, 0]}
        >
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                style={isMobile ? { width: '100%' } : { width: '69%' }}
            >
                <Grid
                    templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} // Adjust template columns
                    templateRows={{ base: 'auto', md: 'auto 1fr' }} // Adjust template rows
                    gap={4}
                >
                    <Box>
                        <FormControl mb={4}>
                            <FormLabel fontSize="lg" fontWeight="light">
                                Name
                            </FormLabel>
                            <Input
                                _focus={{
                                    border: '#333333 solid 2px',
                                    boxShadow: 'none'
                                }}
                                borderRadius="4px"
                                boxShadow="inset 0 1px 2px 0px rgba(0, 0, 0, 0.1)"
                                border="#949494 solid 1px"
                                bg="backgrounds.100"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel fontSize="lg" fontWeight="light">
                                Subject
                            </FormLabel>
                            <Input
                                _focus={{
                                    border: '#333333 solid 2px',
                                    boxShadow: 'none'
                                }}
                                borderRadius="4px"
                                boxShadow="inset 0 1px 2px 0px rgba(0, 0, 0, 0.1)"
                                border="#949494 solid 1px"
                                bg="backgrounds.100"
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel fontWeight="light" fontSize="lg">
                                Email
                            </FormLabel>
                            <Input
                                boxShadow="inset 0 1px 2px 0px rgba(0, 0, 0, 0.1)"
                                border="#949494 solid 1px"
                                _focus={{
                                    border: '#333333 solid 2px',
                                    boxShadow: 'none'
                                }}
                                borderRadius="4px"
                                bg="backgrounds.100"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                    </Box>
                    <Box position="relative">
                        <FormControl mb={4}>
                            <FormLabel fontWeight="light" fontSize="lg">
                                Message
                            </FormLabel>
                            <Textarea
                                _focus={{
                                    border: '#333333 solid 2px',
                                    boxShadow: 'none'
                                }}
                                borderRadius="4px"
                                h={{ base: '150px', md: '223px' }} // Adjust height
                                resize="none"
                                boxShadow="inset 0 1px 2px 0px rgba(0, 0, 0, 0.1)"
                                border="#949494 solid 1px"
                                bg="backgrounds.100"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <Flex justifyContent={['center', 'flex-end']}>
                            <Button
                                isLoading={loader}
                                type="submit"
                                bg="brand.100"
                                size="lg"
                                color="white"
                                w={['100%', 'auto']}
                            >
                                Send Email
                            </Button>
                        </Flex>
                    </Box>
                </Grid>
            </form>
        </Flex>
    )
}

export { ContactForm }
