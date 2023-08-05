import {
    Box,
    HStack,
    Heading,
    Icon,
    SimpleGrid,
    Text,
    VStack,
    useBreakpointValue
} from '@chakra-ui/react'
import { FC } from 'react'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'

// Sample testimonial data
const testimonialsData = [
    {
        id: 1,
        name: 'John Doe',
        company: 'NY Times',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget turpis justo. Aenean dignissim aliquet purus nec ultricies.',
        avatarUrl: '/path/to/avatars/avatar1.jpg' // Replace with the actual avatar URL
    },
    {
        id: 2,
        name: 'Jane Smith',
        company: 'Bisous Bisous',
        quote: 'Praesent congue justo id odio faucibus, vitae consequat velit bibendum. Suspendisse non enim tincidunt, tempor dolor nec, consequat nibh.',
        avatarUrl: '/path/to/avatars/avatar2.jpg' // Replace with the actual avatar URL
    },
    {
        id: 2,
        name: 'Jane Smith',
        company: 'Caramello',
        quote: 'Praesent congue justo id odio faucibus, vitae consequat velit bibendum. Suspendisse non enim tincidunt, tempor dolor nec, consequat nibh.',
        avatarUrl: '/path/to/avatars/avatar2.jpg' // Replace with the actual avatar URL
    },
    {
        id: 2,
        name: 'Jane Smith',
        company: "L'Oréal",
        quote: 'Praesent congue justo id odio faucibus, vitae consequat velit bibendum. Suspendisse non enim tincidunt, tempor dolor nec, consequat nibh.',
        avatarUrl: '/path/to/avatars/avatar2.jpg' // Replace with the actual avatar URL
    }
    // Add more testimonial data
]
interface CardComponentProps {
    name: string
    company: string
    quote: string
    avatarUrl: string
}

const CardComponent: FC<CardComponentProps> = ({ name, company, quote }) => {
    return (
        <HStack p={4} color="white" mb={4} mt={4}>
            {/* <Avatar size="sm" name={name} src={avatarUrl} mr={2} /> */}

            <VStack display="flex" alignItems="flex-start" mb={2}>
                <Text w="90%" color="black" fontSize="xl" fontStyle="italic" textAlign="left">
                    <Icon as={BiSolidQuoteAltLeft} fontSize={25} mr={2} color="brand.200" />
                    {quote}
                </Text>
                <Text color="brand.400" fontSize="lg" fontWeight="italic" fontStyle="italic">
                    - {name}, {company}
                </Text>
            </VStack>
        </HStack>
    )
}

function TestimonialsSection() {
    const isMobile = useBreakpointValue({ base: true, md: false }) // Define breakpoints for mobile view

    return (
        <Box>
            <Heading
                mt={8}
                color="brand.100"
                textAlign="center"
                fontWeight={'bold'}
                as="h3"
                fontSize={'4xl'}
            >
                Testimonials
            </Heading>
            <Box id="testimonials" py={12} minHeight="60vh">
                <Box maxWidth={isMobile ? '80%' : '1200px'} mx="auto">
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                        {testimonialsData.map(testimonial => (
                            <CardComponent
                                key={testimonial.id}
                                name={testimonial.name}
                                company={testimonial.company}
                                quote={testimonial.quote}
                                avatarUrl={testimonial.avatarUrl}
                            />
                        ))}
                    </SimpleGrid>
                </Box>
            </Box>
        </Box>
    )
}

export { TestimonialsSection }
