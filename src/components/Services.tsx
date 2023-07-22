import { Box, HStack, Heading } from '@chakra-ui/react'
import { FC } from 'react'
import { ServiceCard } from './ServiceCard'
import { GiWhisk, GiChefToque } from 'react-icons/gi'
import { BiCake } from 'react-icons/bi'
import { IconType } from 'react-icons'

interface ServicesProps {}
interface Service {
    title: string
    content: string
    icon: IconType
}

const services: Service[] = [
    { title: 'Service 1', content: 'Content 1 lorem ipsum lorem ipsum lorem ipsum', icon: GiWhisk },
    {
        title: 'Service 2',
        content: 'Content 2 lorem ipsum lorem ipsum lorem ipsum',
        icon: GiChefToque
    },
    { title: 'Service 3', content: 'Content 3 lorem ipsum lorem ipsum lorem ipsum', icon: BiCake }
]

export const Services: FC<ServicesProps> = () => {
    return (
        <Box id="services" style={{ height: '50vh' }} p="10">
            {/* <Heading>Services</Heading> */}
            <HStack justifyContent={'space-evenly'}>
                {services.map(service => (
                    <ServiceCard
                        icon={service.icon}
                        title={service.title}
                        content={service.content}
                    />
                ))}
            </HStack>
        </Box>
    )
}
