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
        <VStack>
            <NavBar />
            <IntoBanner />
            <Services />
            {/* <DividerStyled text="MY WORK" /> */}
            <Gallery />
            {/* <DividerStyled text="ABOUT ME" /> */}
            <AboutMeSection />
            <ContactMeSection />
            <TestimonialsSection />
            <Footer />
        </VStack>
    )
}

export default App
