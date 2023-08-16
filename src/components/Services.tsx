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
            "I can assist your business by providing a range of creative confectionery and baked goods inspirations. Whether you're operating a small café or a startup, or even managing a prestigious 5-star hotel or restaurant, I can offer ideas and solutions tailored to your specific needs.",
        icon: GiWhisk,
        color: 'brand.200'
    },
    {
        title: 'RECIPE & MENU CREATION',
        content:
            "I specialize in crafting customized recipes and menus that cater to your unique preferences. Whether it's creating new recipes from scratch, refining existing ones, or conducting thorough testing, I leverage proven methodologies to ensure exceptional outcomes.",
        icon: GiChefToque,
        color: 'brand.400'
    },
    {
        title: 'INCREASE PRODUCTIVITY',
        content:
            "I will help elevate your pastry team's productivity and maintain top-notch quality, even during high-volume production, by refining processes and optimizing workflows. Together, we'll achieve efficiency without compromising the excellence that sets your creations apart.",
        icon: BiCake,
        color: 'brand.100'
    }
]

export const Services: FC<ServicesProps> = () => {
    const isMobile = useBreakpointValue({ base: true, md: false }) // Define breakpoints for mobile view

    return (
        <VStack
            id="services"
            height={{ base: '100%', md: '100%' }} // Adjust the height based on the screen size
            maxWidth={isMobile ? '80%' : '1200px'}
            mb={isMobile ? '10%' : '0'}
            mx="auto"
            bg="white"
            p={[0, 10]}
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
