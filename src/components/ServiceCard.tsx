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
        <Card width={cardWidth} height={cardHeight}>
            <CardHeader color="white">
                <Icon as={icon} mr="6" fontSize={'4xl'} color={color} />
                <Heading fontSize="xl" color="black">
                    {' '}
                    {title}
                </Heading>
            </CardHeader>
            <CardBody>
                <Text color="gray.700" fontSize="lg">
                    {content}
                </Text>
            </CardBody>
        </Card>
    )
}
