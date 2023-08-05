import { HStack, Link, Image } from '@chakra-ui/react'
import { FC } from 'react'

interface SocialLinkProps {
    src: string
    text: string
    href: string
    color: string
}

export const SocialLink: FC<SocialLinkProps> = ({ src, href, text, color }) => {
    return (
        <HStack _hover={{ opacity: '0.6' }}>
            <Image maxW={'70px'} src={src} alt={text} />
            <Link
                style={{ textDecoration: 'none' }}
                color={color}
                href={href}
                target="_blank"
                fontWeight="extrabold"
                fontSize={'lg'}
            >
                {text}
            </Link>
        </HStack>
    )
}
