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
        id: '213ASDDXad',
        name: 'Alex Moreau',
        company: 'Bisous Bisous',
        quote: 'Praesent congue justo id odio faucibus, vitae consequat velit bibendum. Suspendisse non enim tincidunt, tempor dolor nec, consequat nibh.',
        avatarUrl: '/path/to/avatars/avatar2.jpg' // Replace with the actual avatar URL
    },
    {
        id: 's401dasaxaw',
        name: 'Jane Smith',
        company: 'NyTimes',
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
        <HStack mb={[0, 4]} mt={[0, 4]} p={[4, 6]} bg="#F8F8F8" borderRadius={'10px'}>
            <VStack display="flex" alignItems="flex-start" mb={2}>
                <Icon as={BiSolidQuoteAltLeft} fontSize={25} mr={2} color="brand.200" />
                <Text w="90%" color="black" fontSize={['lg,', 'xl']} fontStyle="italic">
                    {quote}
                </Text>
                <Text
                    color="brand.400"
                    fontSize={['md', 'lg']}
                    fontWeight="italic"
                    fontStyle="italic"
                >
                    - {name}, {company}
                </Text>
            </VStack>
        </HStack>
    )
}

function TestimonialsSection() {
    const isMobile = useBreakpointValue({ base: true, md: false }) // Define breakpoints for mobile view

    return (
        <Box w={['80%', '65%']}>
            <Heading
                fontFamily={'Dancing Script'}
                color="brand.100"
                fontWeight={'bold'}
                as="h3"
                fontSize={['5xl', '7xl']}
                textAlign={['left', 'center']}
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
