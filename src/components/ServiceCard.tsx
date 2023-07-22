import { Card, CardBody, CardHeader, Heading, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'

import { FC } from 'react'

interface ServiceCardProps {
    icon: IconType
    title: string
    content: string
}

export const ServiceCard: FC<ServiceCardProps> = ({ title, content, icon }) => {
    return (
        <Card w="40%" bg="brand.400">
            <CardHeader color="white">
                <Heading fontSize="2xl">
                    {' '}
                    <Icon as={icon} mr="6" />
                    {title}
                </Heading>
            </CardHeader>
            <CardBody>
                <Text color="brand.300">{content}</Text>
            </CardBody>
        </Card>
    )
}
