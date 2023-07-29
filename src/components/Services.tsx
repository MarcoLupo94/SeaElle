import { HStack, Heading, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { ServiceCard } from './ServiceCard'
import { GiWhisk, GiChefToque } from 'react-icons/gi'
import { BiCake } from 'react-icons/bi'
import { IconType } from 'react-icons'
import { NavLink } from './NavLink'

interface ServicesProps {}
interface Service {
    title: string
    content: string
    icon: IconType
    color: string
}

const services: Service[] = [
    {
        title: 'CREATIVE CONSULTING',
        content:
            'I can help your business with all creative sweet & baked inspirations for your business, if you are a small café or start up, to 5 star hotels & restaurants.',
        icon: GiWhisk,
        color: 'brand.200'
    },
    {
        title: 'RECIPE & MENU CREATION',
        content:
            'Bespoke recipe & menu creation, testing or amending, we can create bespoke recipes and menus using tried and tested formulas, support to implementing this into your business model.',
        icon: GiChefToque,
        color: 'brand.400'
    },
    {
        title: 'INCREASE PRODUCTIVITY',
        content:
            'When you need to increase productivity within you team, or need to create, particularly at a high quality & with quick speed.',
        icon: BiCake,
        color: 'brand.100'
    }
]

export const Services: FC<ServicesProps> = () => {
    return (
        <VStack
            id="services"
            style={{ height: '80vh' }}
            maxWidth="1200px"
            m="10"
            justifyContent="space-evenly"
            align="start" // Align the header to the left
        >
            <Heading marginBottom="10">Services</Heading>
            <HStack gap="10" justifyContent="space-evenly" marginBottom="10">
                {services.map((service, i) => (
                    <ServiceCard
                        color={service.color}
                        key={service.title + i}
                        icon={service.icon}
                        title={service.title}
                        content={service.content}
                    />
                ))}
            </HStack>
            <HStack justifyContent="center" w="100%">
                <NavLink path="contact-me" text="Get in touch" color="brand.200" size="lg" />
            </HStack>{' '}
        </VStack>
    )
}
