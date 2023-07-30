import { Box, SimpleGrid, Text, Avatar, useBreakpointValue } from '@chakra-ui/react'
import { FC } from 'react'

// Sample testimonial data
const testimonialsData = [
    {
        id: 1,
        name: 'John Doe',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget turpis justo. Aenean dignissim aliquet purus nec ultricies.',
        avatarUrl: '/path/to/avatars/avatar1.jpg' // Replace with the actual avatar URL
    },
    {
        id: 2,
        name: 'Jane Smith',
        quote: 'Praesent congue justo id odio faucibus, vitae consequat velit bibendum. Suspendisse non enim tincidunt, tempor dolor nec, consequat nibh.',
        avatarUrl: '/path/to/avatars/avatar2.jpg' // Replace with the actual avatar URL
    },
    {
        id: 2,
        name: 'Jane Smith',
        quote: 'Praesent congue justo id odio faucibus, vitae consequat velit bibendum. Suspendisse non enim tincidunt, tempor dolor nec, consequat nibh.',
        avatarUrl: '/path/to/avatars/avatar2.jpg' // Replace with the actual avatar URL
    },
    {
        id: 2,
        name: 'Jane Smith',
        quote: 'Praesent congue justo id odio faucibus, vitae consequat velit bibendum. Suspendisse non enim tincidunt, tempor dolor nec, consequat nibh.',
        avatarUrl: '/path/to/avatars/avatar2.jpg' // Replace with the actual avatar URL
    }
    // Add more testimonial data
]
interface CardComponentProps {
    name: string
    quote: string
    avatarUrl: string
}

const CardComponent: FC<CardComponentProps> = ({ name, quote, avatarUrl }) => {
    return (
        <Box
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.300"
            bg="brand.100"
            color="white"
            mb={4}
            boxShadow="md" // Add a nice shadow effect
        >
            <Box display="flex" alignItems="center" mb={2}>
                <Avatar size="sm" name={name} src={avatarUrl} mr={2} />
                <Text fontSize="xl" fontWeight="bold" fontStyle="italic">
                    {name}
                </Text>
            </Box>
            <Text fontSize="lg" fontStyle="italic" textAlign="center">
                &ldquo;{quote}&rdquo;
            </Text>
        </Box>
    )
}

function TestimonialsSection() {
    const isMobile = useBreakpointValue({ base: true, md: false }) // Define breakpoints for mobile view

    return (
        <Box id="testimonials" py={12} bg="transparent" minHeight="60vh">
            <Box maxWidth={isMobile ? '80%' : '1200px'} mx="auto">
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                    {testimonialsData.map(testimonial => (
                        <CardComponent
                            key={testimonial.id}
                            name={testimonial.name}
                            quote={testimonial.quote}
                            avatarUrl={testimonial.avatarUrl}
                        />
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export { TestimonialsSection }
