import { HStack, Heading, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import { FC } from 'react'
import { SocialLink } from './SocialLink'

interface ContactTextProps {}
const socials = [
    { color: '#ef0074', text: 'Instragram', href: '', src: 'insta.png' },
    { color: '#0175B4', text: 'Linkedin', href: '', src: 'ln.png' }
]

export const ContactText: FC<ContactTextProps> = () => {
    const isMobile = useBreakpointValue({ base: true, md: false }) // Define breakpoints for mobile view

    return (
        <VStack
            w={isMobile ? '100%' : '100%'}
            mt={[0, 10]}
            alignContent={'flex-start'}
            h="80%"
            p={isMobile ? { base: '2rem', md: '3.4rem 4rem' } : {}}
        >
            <VStack alignItems={'flex-start'} w={['100%', '65%']} gap={3}>
                <Heading
                    fontFamily={'Dancing Script'}
                    color="brand.100"
                    fontWeight={'bold'}
                    as="h3"
                    fontSize={['5xl', '7xl']}
                >
                    Contact
                </Heading>
                <Text fontWeight="normal" fontSize={['xl', '2xl']}>
                    Get in touch with me via social media or send me an email.
                </Text>
                <HStack spacing={8}>
                    {socials.map((social, i) => (
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
