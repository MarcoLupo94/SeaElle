import {
    Card,
    CardBody,
    CardHeader,
    Heading,
    Icon,
    Text,
    useBreakpointValue
} from '@chakra-ui/react'
import { IconType } from 'react-icons'

import { FC } from 'react'

interface ServiceCardProps {
    icon: IconType
    title: string
    content: string
    color: string
}

export const ServiceCard: FC<ServiceCardProps> = ({ title, content, icon, color }) => {
    const cardWidth = useBreakpointValue({ base: '100%', sm: '250px', md: '300px', lg: '400px' }) // Define width based on screen size
    const cardHeight = useBreakpointValue({ base: 'auto', sm: '300px', md: '350px', lg: '400px' }) // Define height based on screen size

    return (
        <Card
            width={cardWidth}
            height={cardHeight}
            bg="transparent"
            boxShadow={'none'}
            textAlign={['left', 'center']}
        >
            <CardHeader>
                <Icon as={icon} m={[0, 5]} mb={[2, 0]} fontSize={['5xl', '7xl']} color={color} />
                <Heading fontSize="xl" color={color}>
                    {' '}
                    {title}
                </Heading>
            </CardHeader>
            <CardBody>
                <Text color="black" fontSize={['md', 'lg']} textAlign={['left', 'center']} mt={-6}>
                    {content}
                </Text>
            </CardBody>
        </Card>
    )
}
