import { useState } from 'react'
import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    useToast
} from '@chakra-ui/react'

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: '',
        subject: ''
    })

    const toast = useToast()

    const handleInputChange = (e: { target: { name: string; value: string } }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        // Here, you can add your logic for form submission, like sending an email or making an API call.

        // Display a success toast message after form submission
        toast({
            title: 'Message Sent',
            description: 'Your message has been sent successfully!',
            status: 'success',
            duration: 5000,
            isClosable: true
        })

        // Clear the form fields after submission
        setFormData({
            name: '',
            email: '',
            message: '',
            phone: '',
            subject: ''
        })
    }
    return (
        <Box p={4} bg="white" borderRadius="lg" boxShadow="md" color="black">
            <form onSubmit={handleSubmit}>
                <FormControl isRequired mb={4}>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl isRequired mb={4}>
                    <FormLabel>Subject</FormLabel>
                    <Input
                        type="text"
                        name="subject"
                        placeholder="Subject of your message"
                        value={formData.subject}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl isRequired mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <FormControl mb={4}>
                        <FormLabel>Phone number</FormLabel>
                        <Input
                            type="tel"
                            name="phone"
                            placeholder="Your phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                </FormControl>
                <FormControl isRequired mb={4}>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <Flex justifyContent="center">
                    <Button type="submit" bg="brand.200" size="sm">
                        Send Message
                    </Button>
                </Flex>
            </form>
        </Box>
    )
}

export { ContactForm }
