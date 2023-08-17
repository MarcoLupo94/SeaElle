import { Box, Button, Image, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { AboutMeSection } from './components/AboutMe'
import { ContactMeSection } from './components/ContactMe'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { IntoBanner } from './components/IntoBanner'
import { NavBar } from './components/NavBar'
import { Services } from './components/Services'
import { TestimonialsSection } from './components/Testimonials'
import { FaTimes } from 'react-icons/fa'
const App = () => {
    const [zoomed, setZoomed] = useState(false)
    const [clickedImage, setClickedImage] = useState('')

    const handleImageClick = (imageSrc: string) => {
        setZoomed(true)
        setClickedImage(imageSrc)
        document.body.style.overflow = 'hidden' // Prevent scrolling
    }

    const handleCloseZoom = () => {
        setZoomed(false)
        setClickedImage('')
        document.body.style.overflow = 'auto' // Restore scrolling
    }
    return (
        <VStack overflowX={'hidden'}>
            <NavBar />
            <IntoBanner />
            <Services />
            <Gallery click={handleImageClick} />
            <AboutMeSection />
            <ContactMeSection />
            <TestimonialsSection />
            <Footer />
            {zoomed && (
                <Box
                    boxShadow={'dark-lg'}
                    className="zoom-overlay"
                    onClick={handleCloseZoom}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.7)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: '2000'
                    }}
                >
                    <Button
                        onClick={handleCloseZoom}
                        colorScheme="red"
                        position="absolute"
                        top="40px"
                        right="40px"
                        zIndex={4000}
                    >
                        <FaTimes />
                    </Button>
                    <Image
                        loading="lazy"
                        src={clickedImage}
                        style={{
                            maxWidth: '80%',
                            maxHeight: '80%'
                        }}
                    />
                </Box>
            )}
        </VStack>
    )
}

export default App
