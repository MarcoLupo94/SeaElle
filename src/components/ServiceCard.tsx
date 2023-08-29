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
    const cardWidth = useBreakpointValue({ base: '100%', sm: '250px', md: '80%', lg: '30%' }) // Define width based on screen size
    const cardHeight = useBreakpointValue({ base: 'auto', sm: '300px', md: '350px', lg: '100%' }) // Define height based on screen size

    return (
        <Card
            width={cardWidth}
            height={cardHeight}
            bg="transparent"
            boxShadow={'none'}
            textAlign={['left']}
        >
            <CardHeader>
                <Icon as={icon} m={[0, 0]} mb={[2, 6]} fontSize={['5xl', '7xl']} color={color} />
                <Heading fontSize="xl" color={color}>
                    {' '}
                    {title}
                </Heading>
            </CardHeader>
            <CardBody>
                <Text color="#757575" fontSize={['md', 'lg']} textAlign={['left']} mt={-6}>
                    {content}
                </Text>
            </CardBody>
        </Card>
    )
}
