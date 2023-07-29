import { Card, CardBody, CardHeader, Heading, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'

import { FC } from 'react'

interface ServiceCardProps {
    icon: IconType
    title: string
    content: string
    color: string
}

export const ServiceCard: FC<ServiceCardProps> = ({ title, content, icon, color }) => {
    return (
        <Card width="400px" height="300px">
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
