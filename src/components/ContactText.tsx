import { HStack, Heading, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
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
        <VStack w={isMobile ? '100%' : '100%'} mt={10} alignContent={'flex-start'} h="80%">
            <VStack alignItems={'flex-start'} w="65%" gap={3}>
                <Heading
                    fontFamily={'Dancing Script'}
                    color="brand.100"
                    fontWeight={'bold'}
                    as="h3"
                    fontSize={'6xl'}
                >
                    Contact
                </Heading>
                <Text fontWeight="normal" fontSize={'2xl'}>
                    Get in touch with me via social media or email.
                </Text>
                <HStack spacing={8}>
                    {!isMobile &&
                        socials.map((social, i) => (
                            <SocialLink
                                key={(i + 1) * 17}
                                text={social.text}
                                src={social.src}
                                href={social.href}
                                color={social.color}
                            />
                        ))}
                </HStack>
            </VStack>
        </VStack>
    )
}
