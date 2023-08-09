import { Heading, Text, VStack } from '@chakra-ui/react'
import GalleryTab from './GalleryTab'
import { FC } from 'react'

interface GalleryProps {
    click: (imageSrc: string) => void
}

export const Gallery: FC<GalleryProps> = ({ click }) => {
    return (
        <VStack
            w="100%"
            bg={'brand.300'}
            borderColor={'gray.200'}
            boxShadow="inset 0px 2px 3px 1px rgba(0, 0, 0, 0.08)" // Custom box shadow with adjusted values
            border="solid 1px #dddddd"
            zIndex={40}
            p={10}
            justifyContent={'space-between'}
        >
            <VStack>
                <Heading
                    fontFamily={'Dancing Script'}
                    color="brand.100"
                    fontWeight={'bold'}
                    as="h3"
                    fontSize={'7xl'}
                    textAlign={'left'}
                >
                    Portfolio
                </Heading>
                <Text fontSize={'2xl'} color="black">
                    SOME OF MY WORK
                </Text>
            </VStack>
            <GalleryTab click={click} />
        </VStack>
    )
}
