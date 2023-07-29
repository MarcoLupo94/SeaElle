import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Box, IconButton, Text } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const images = [
    'bg.jpg',
    'bg.jpg',
    'bg.jpg',
    'bg.jpg',
    'bg.jpg',
    'bg.jpg',
    'bg.jpg',
    'bg.jpg',
    'bg.jpg'
    // Add more image URLs here
]

export function Gallery() {
    return (
        <Box id="portfolio" w="100%" maxW="800px" mx="auto" my={8}>
            <Carousel
                autoPlay
                showThumbs={true} // Hide thumbnail navigatio
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
                    <div key={index}>
                        <img src={url} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </Carousel>
        </Box>
    )
}
