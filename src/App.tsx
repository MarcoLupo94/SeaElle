import { VStack } from '@chakra-ui/react'
import { AboutMeSection } from './components/AboutMe'
import { ContactMeSection } from './components/ContactMe'
import { DividerStyled } from './components/DividerStyled'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { IntoBanner } from './components/IntoBanner'
import { NavBar } from './components/NavBar'
import { Services } from './components/Services'
import { TestimonialsSection } from './components/Testimonials'

const App = () => {
    return (
        <VStack sx={{ width: '100%', height: '100%' }} bg="brand.300">
            <NavBar />
            <IntoBanner />
            <DividerStyled text="SERVICES" />
            <Services />
            <DividerStyled text="MY WORK" />
            <Gallery />
            <DividerStyled text="ABOUT ME" />
            <AboutMeSection />
            <DividerStyled text="TESTIMONIALS" />
            <TestimonialsSection />
            <DividerStyled text="CONTACT ME" />
            <ContactMeSection />
            <Footer />
        </VStack>
    )
}

export default App
