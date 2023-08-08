import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Box, Heading, IconButton, Image } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const images = [
    'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691520438/BB_11-min_zsf9tb.jpg',
    'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691520439/BB_33-min_w1kh4g.jpg',
    'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691520436/BB_39-min_vt2kkv.jpg',
    'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691520432/BB_32-min_i1sdz8.jpg',
    'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691520435/BB_38-min_vqpx13.jpg',
    'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691520420/BB_16-min_ncp2jt.jpg'
    // 'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691520422/BB_18-min_uxqd2s.jpg'
    // Add more image URLs here
]

export function Gallery() {
    return (
        <Box
            w="100%"
            bg={'brand.300'}
            borderColor={'gray.200'}
            boxShadow="inset 0px 2px 3px 1px rgba(0, 0, 0, 0.08)" // Custom box shadow with adjusted values
            border="solid 1px #dddddd"
            zIndex={60}
        >
            <Box id="portfolio" w="100%" maxW="1000px" mx="auto" my={8}>
                <Heading
                    fontFamily={'Dancing Script'}
                    color="brand.100"
                    fontWeight={'bold'}
                    as="h3"
                    fontSize={'6xl'}
                    textAlign={'left'}
                    mb={8}
                >
                    My Work
                </Heading>
                <Carousel
                    autoPlay
                    showThumbs={false} // Hide thumbnail navigatio
                    interval={3000} // Change slide every 3 seconds
                    showStatus={false} // Hide slide status indicator
                    renderArrowNext={clickHandler => (
                        <IconButton
                            icon={<ArrowRightIcon />}
                            size="md"
                            variant="ghost"
                            onClick={clickHandler}
                            colorScheme="brand"
                            borderRadius="full"
                            _focus={{ outline: 'none' }}
                            position="absolute"
                            top="50%"
                            right="1rem"
                            transform="translateY(-50%)"
                            aria-label={''}
                        />
                    )}
                    renderArrowPrev={clickHandler => (
                        <IconButton
                            icon={<ArrowLeftIcon />}
                            variant="ghost"
                            size="md"
                            onClick={clickHandler}
                            colorScheme="brand"
                            borderRadius="full"
                            _focus={{ outline: 'none' }}
                            position="absolute"
                            top="50%"
                            left="1rem"
                            transform="translateY(-50%)"
                            zIndex={300}
                            aria-label={''}
                        />
                    )}
                >
                    {images.map((url, index) => (
                        <Box maxH={'800px'} key={index}>
                            <Image borderRadius={'5px'} src={url} alt={`Image ${index + 1}`} />
                        </Box>
                    ))}
                </Carousel>
            </Box>
        </Box>
    )
}
