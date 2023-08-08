import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    HStack,
    Input,
    Textarea,
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
                    // Display a success toast message after form submission
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

                    // Display a success toast message after form submission
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

        // Clear the form fields after submission
        setFormData({
            name: '',
            email: '',
            message: '',
            subject: ''
        })
    }
    return (
        <HStack w="100%" bg="backgrounds.200" justifyContent={'center'} zIndex={10}>
            <form ref={formRef} onSubmit={handleSubmit} style={{ width: '65%' }}>
                <Grid templateColumns="repeat(2, 1fr)" templateRows="auto 1fr" gap={4}>
                    <Box>
                        <FormControl mb={4}>
                            <FormLabel fontSize={'lg'} fontWeight={'light'}>
                                Name
                            </FormLabel>
                            <Input
                                _focus={{
                                    border: '#333333 solid 2px',
                                    boxShadow: 'none' // Remove the default box shadow
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
                            <FormLabel fontSize={'lg'} fontWeight={'light'}>
                                Subject
                            </FormLabel>
                            <Input
                                _focus={{
                                    border: '#333333 solid 2px',
                                    boxShadow: 'none' // Remove the default box shadow
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
                            <FormLabel fontWeight={'light'} fontSize={'lg'}>
                                Email
                            </FormLabel>
                            <Input
                                boxShadow="inset 0 1px 2px 0px rgba(0, 0, 0, 0.1)"
                                border="#949494 solid 1px"
                                _focus={{
                                    border: '#333333 solid 2px',
                                    boxShadow: 'none' // Remove the default box shadow
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
                            <FormLabel fontWeight={'light'} fontSize={'lg'}>
                                Message
                            </FormLabel>
                            <Textarea
                                _focus={{
                                    border: '#333333 solid 2px',
                                    boxShadow: 'none' // Remove the default box shadow
                                }}
                                borderRadius="4px"
                                h="223px"
                                resize="none"
                                boxShadow="inset 0 1px 2px 0px rgba(0, 0, 0, 0.1)"
                                border="#949494 solid 1px"
                                bg="backgrounds.100"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <Flex justifyContent="flex-end">
                            <Button
                                isLoading={loader}
                                type="submit"
                                bg="brand.100"
                                size="lg"
                                color="white"
                            >
                                Send Message
                            </Button>
                        </Flex>
                    </Box>
                </Grid>
            </form>
        </HStack>
    )
}

export { ContactForm }
