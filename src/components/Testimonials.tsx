import {
    Box,
    Flex,
    HStack,
    Heading,
    Icon,
    Text,
    VStack,
    useBreakpointValue
} from '@chakra-ui/react'
import { FC } from 'react'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'

// Sample testimonial data
const testimonialsData = [
    {
        id: 'asd2131dasd',
        name: 'John Doe',
        company: 'NY Times',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget turpis justo. Aenean dignissim aliquet purus nec ultricies.',
        avatarUrl: '/path/to/avatars/avatar1.jpg' // Replace with the actual avatar URL
    },
    {
        id: '213ASDDXad',
        name: 'Jane Smith',
        company: 'Bisous Bisous',
        quote: 'Praesent congue justo id odio faucibus, vitae consequat velit bibendum. Suspendisse non enim tincidunt, tempor dolor nec, consequat nibh.',
        avatarUrl: '/path/to/avatars/avatar2.jpg' // Replace with the actual avatar URL
    },
    {
        id: 's401dasaxaw',
        name: 'Jane Smith',
        company: 'Caramello',
        quote: 'Praesent congue justo id odio faucibus, vitae consequat velit bibendum. Suspendisse non enim tincidunt, tempor dolor nec, consequat nibh.',
        avatarUrl: '/path/to/avatars/avatar2.jpg' // Replace with the actual avatar URL
    }
]
interface CardComponentProps {
    name: string
    company: string
    quote: string
    avatarUrl: string
}

const CardComponent: FC<CardComponentProps> = ({ name, company, quote }) => {
    return (
        <HStack color="white" mb={4} mt={4}>
            <VStack display="flex" alignItems="flex-start" mb={2}>
                <Icon as={BiSolidQuoteAltLeft} fontSize={25} mr={2} color="brand.200" />
                <Text w="90%" color="black" fontSize="xl" fontStyle="italic">
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
        <Box w="65%">
            <Heading
                fontFamily={'Dancing Script'}
                color="brand.100"
                fontWeight={'bold'}
                as="h3"
                fontSize={'6xl'}
                textAlign={'left'}
                mt={8}
            >
                Testimonials
            </Heading>
            <Box id="testimonials" py={12}>
                <Flex direction={isMobile ? 'column' : 'row'} gap={10} alignContent={'center'}>
                    {testimonialsData.map(testimonial => (
                        <CardComponent
                            key={testimonial.id}
                            name={testimonial.name}
                            company={testimonial.company}
                            quote={testimonial.quote}
                            avatarUrl={testimonial.avatarUrl}
                        />
                    ))}
                </Flex>
            </Box>
        </Box>
    )
}

export { TestimonialsSection }
