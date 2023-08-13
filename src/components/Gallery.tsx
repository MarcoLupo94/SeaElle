import { Heading, Text, VStack } from '@chakra-ui/react'
import GalleryTab from './GalleryTab'
import { FC } from 'react'

interface GalleryProps {
    click: (imageSrc: string) => void
}

export const Gallery: FC<GalleryProps> = ({ click }) => {
    return (
        <VStack
            id="portfolio"
            w="100%"
            bg={'brand.300'}
            borderColor={'gray.200'}
            boxShadow="inset 0px 2px 3px 1px rgba(0, 0, 0, 0.08)" // Custom box shadow with adjusted values
            border="solid 1px #dddddd"
            zIndex={40}
            p={10}
            justifyContent={'space-between'}
            alignItems={['flex-start', 'center']}
        >
            <VStack alignItems={['flex-start', 'center']}>
                <Heading
                    fontFamily={'Dancing Script'}
                    color="brand.100"
                    fontWeight={'bold'}
                    as="h3"
                    fontSize={['5xl', '7xl']}
                    textAlign={'left'}
                >
                    Portfolio
                </Heading>
                <Text fontSize={['md', '2xl']} color="black">
                    SOME OF MY WORK
                </Text>
            </VStack>
            <GalleryTab click={click} />
        </VStack>
    )
}
