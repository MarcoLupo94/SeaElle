import { Box, Flex, HStack, Heading, Icon, Text, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'

// Sample testimonial data
const testimonialsData = [
    {
        id: '213ASDDXad',
        name: 'Alex Moreau, ',
        company: 'Bisous Bisous',
        quote: 'I am absolutely delighted with the pastry consultancy services provided by Caroline over the past 3 years. Her expertise and personalized guidance have been instrumental in taking the standards of my patisserie shops to the next level. I highly recommend her services to anyone looking to refine and upgrade their dessert offerings.',
        avatarUrl: '/path/to/avatars/avatar2.jpg' // Replace with the actual avatar URL
    },
    {
        id: 's401dasaxaw',
        name: 'Consultancy customer',
        company: '',
        quote: "I just wanted to thank you for the vegan/dairy free patisserie order that I collected last week for my mum's birthday. Everything was absolutely delicious, and looked wonderful - particularly the lemon financiers! I really appreciate the work that was put into this order and it made a fantastic birthday present. Having been unable to enjoy things like this since chemotherapy, it was so lovely for my mum not to worry about what she was eating as we could be sure of the ingredients!",
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
        <HStack
            mb={[0, 4]}
            mt={[0, 4]}
            p={[4, 6]}
            bg="#F8F8F8"
            borderRadius={'10px'}
            maxW={'500px'}
            minH={[0, 0, 0, '400px']}
        >
            <VStack display="flex" alignItems="flex-start" mb={2}>
                <Icon as={BiSolidQuoteAltLeft} fontSize={25} mr={2} color="brand.200" />
                <Text w="90%" color="black" fontSize={['lg,', 'lg']} fontStyle="italic">
                    {quote}
                </Text>
                <Text
                    color="brand.400"
                    fontSize={['md', 'lg']}
                    fontWeight="italic"
                    fontStyle="italic"
                >
                    - {name} {company}
                </Text>
            </VStack>
        </HStack>
    )
}

function TestimonialsSection() {
    return (
        <Box w={['100%', '100%', '100%', '65%']} p={[4, 0]}>
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
                <Flex
                    direction={['column', 'column', 'column', 'row']}
                    alignItems={'center'}
                    gap={10}
                    alignContent={'center'}
                >
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
