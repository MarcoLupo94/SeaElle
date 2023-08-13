import { Flex, HStack, VStack, useBreakpointValue } from '@chakra-ui/react'
import { FC } from 'react'
import { IconType } from 'react-icons'
import { BiCake } from 'react-icons/bi'
import { GiChefToque, GiWhisk } from 'react-icons/gi'
import { NavLink } from './NavLink'
import { ServiceCard } from './ServiceCard'

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
    const isMobile = useBreakpointValue({ base: true, md: false }) // Define breakpoints for mobile view

    return (
        <VStack
            id="services"
            height={{ base: '100%', md: '60vh' }} // Adjust the height based on the screen size
            maxWidth={isMobile ? '80%' : '1200px'}
            mb={isMobile ? '10%' : '0'}
            mx="auto"
            bg="white"
        >
            <Flex
                direction={isMobile ? 'column' : 'row'} // Adjust the direction based on the screen size
                gap={isMobile ? '6' : '10'} // Adjust the gap between cards based on the screen size
                justifyContent={isMobile ? 'center' : 'space-evenly'}
            >
                {services.map((service, i) => (
                    <ServiceCard
                        color={service.color}
                        key={service.title + i}
                        icon={service.icon}
                        title={service.title}
                        content={service.content}
                    />
                ))}
            </Flex>
            <HStack justifyContent="center" width="100%" mt={isMobile ? 8 : 0}>
                <NavLink
                    path="contact-me"
                    text="Get in touch"
                    color="brand.200"
                    size="lg"
                    fontSize={'xl'}
                />
            </HStack>
        </VStack>
    )
}
