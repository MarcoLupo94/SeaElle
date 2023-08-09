import { EmailIcon } from '@chakra-ui/icons'
import { Button, HStack, Heading, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'

interface IntoBannerProps {}

const property = {
    imageUrl:
        'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691610415/Untitled_design_7_1_yc7ia0.png'
}

export const IntoBanner: FC<IntoBannerProps> = () => {
    const [backgroundOpacity, setBackgroundOpacity] = useState(1)
    const isMobile = useBreakpointValue({ base: true, md: false }) // Define breakpoints for mobile view

    const handleClick = (path: string) => {
        const targetSection = document.getElementById(path)
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'end' })
        }
    }

    const handleScroll = () => {
        const scrollOffset = -window.scrollY
        const fadeStart = -1000
        const fadeUntil = 600 // Adjust this value to control when the fade-in effect starts

        const opacity = Math.min(1, Math.max(0, (scrollOffset - fadeStart) / fadeUntil))

        setBackgroundOpacity(opacity)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <HStack
            id="home"
            boxShadow="lg"
            marginBottom={isMobile ? 0 : '2%'}
            as="section"
            paddingRight={isMobile ? 0 : '40%'}
            paddingLeft={isMobile ? '12%' : 0}
            paddingBottom={isMobile ? 0 : '7%'}
            style={{
                width: '100%',
                backgroundImage: `linear-gradient(
          transparent,
          rgba(0, 0, 0, 0.2)
        ), url(${property.imageUrl})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 20% bottom 70%', // Move the image 10% to the right
                opacity: backgroundOpacity, // Set the opacity for the fade-in effect
                transition: 'opacity 0.3s ease' // Add the transition property for smooth effect
            }}
            h={isMobile ? '80vh' : '100vh'}
            justifyContent="center"
            bg="brand.300"
        >
            <VStack
                color="white"
                {...(!isMobile && { w: '60%' })}
                alignItems={'flex-start'}
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
            >
                <Heading
                    style={isMobile ? { fontSize: '5rem' } : { fontSize: '8rem' }}
                    fontFamily={'Dancing Script'}
                >
                    SeaElle
                </Heading>
                <Heading fontSize={isMobile ? '3xl' : '5xl'}> Pastry Consultancy</Heading>
                <Text fontSize={isMobile ? 'xl' : '2xl'} w="75%">
                    by Caroline Lerus-Roulez, Executive pastry chef and consultant.
                </Text>
                <HStack>
                    <Button
                        color="white"
                        size={'lg'}
                        bg={'brand.100'}
                        onClick={() => handleClick('about')}
                    >
                        About
                    </Button>
                    <Button
                        aria-label="contact me"
                        leftIcon={<EmailIcon />}
                        color="white"
                        size={'lg'}
                        bg={'brand.200'}
                        onClick={() => handleClick('contact-me')}
                    >
                        Contact
                    </Button>
                </HStack>
            </VStack>
        </HStack>
    )
}
