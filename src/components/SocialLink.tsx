import { HStack, Link, Image, useBreakpointValue, Text } from '@chakra-ui/react'
import { FC } from 'react'

interface SocialLinkProps {
    src: string
    text: string
    href: string
    color: string
}

export const SocialLink: FC<SocialLinkProps> = ({ src, href, text, color }) => {
    const isMobile = useBreakpointValue({ base: true, md: false })

    return !isMobile ? (
        <HStack _hover={{ opacity: '0.6' }}>
            <Link color={color} href={href} target="_blank" fontWeight="extrabold" fontSize={'lg'}>
                <HStack spacing={0}>
                    <Image maxW={['70px']} src={src} alt={text} />
                    <Text> {text}</Text>
                </HStack>
            </Link>
        </HStack>
    ) : (
        <HStack _hover={{ opacity: '0.6' }}>
            <Link
                style={{ textDecoration: 'none' }}
                color={color}
                href={href}
                target="_blank"
                fontWeight="extrabold"
                fontSize={'lg'}
            >
                <Image maxW={['80px']} src={src} alt={text} />
            </Link>
        </HStack>
    )
}
