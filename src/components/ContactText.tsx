import { Heading, VStack, Text, SimpleGrid, useBreakpointValue } from '@chakra-ui/react'
import { FC } from 'react'
import { SocialLink } from './SocialLink'

interface ContactTextProps {}
const socials = [
    { color: '#ef0074', text: 'Instragram', href: '', src: 'insta.png' },
    { color: '#0175B4', text: 'Linkedin', href: '', src: 'ln.png' },
    { color: '#89D891', text: 'WhatsApp', href: '', src: 'wa.png' },
    { color: '#3749A2', text: 'Facebook', href: '', src: 'fb.png' }
]

export const ContactText: FC<ContactTextProps> = () => {
    const isMobile = useBreakpointValue({ base: true, md: false }) // Define breakpoints for mobile view

    return (
        <VStack
            alignItems={'flex-end'}
            w={isMobile ? '100%' : '50%'}
            p={isMobile ? 5 : 0}
            alignContent={'flex-start'}
            h="80%"
        >
            <VStack alignItems={'flex-start'}>
                <Heading color="brand.100" fontWeight={'bold'} as="h3" fontSize={'6xl'}>
                    Contact
                </Heading>
                <Text fontSize={'2xl'}>Get in touch with me via social media or email.</Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={5}>
                    {!isMobile &&
                        socials.map(social => (
                            <SocialLink
                                text={social.text}
                                src={social.src}
                                href={social.href}
                                color={social.color}
                            />
                        ))}
                </SimpleGrid>
            </VStack>
        </VStack>
    )
}
