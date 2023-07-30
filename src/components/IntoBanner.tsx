import { FC, useEffect, useState } from 'react'
import { Button, HStack, Heading, Text, VStack } from '@chakra-ui/react'

interface IntoBannerProps {}

const property = {
    imageUrl:
        'https://res.cloudinary.com/dytcr3b3j/image/upload/v1690730285/bg.jpg_16-14-20-198_u61pm7.jpg'
}

export const IntoBanner: FC<IntoBannerProps> = () => {
    const [backgroundOpacity, setBackgroundOpacity] = useState(1)

    const handleClick = (path: string) => {
        const targetSection = document.getElementById(path)
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' })
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
            as="section"
            paddingRight="40%"
            paddingBottom="7%"
            style={{
                height: '100vh',
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
            justifyContent="center"
            bg="brand.300"
        >
            <VStack
                color="white"
                w="50%"
                alignItems={'flex-start'}
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
                {/* <Heading style={{ fontSize: '8rem' }} fontFamily={'Dancing Script'}>
                    SeaElle
                </Heading> */}
                <Heading fontSize="5xl"> Pastry Consultancy</Heading>
                <Text fontSize="2xl" w="75%">
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
