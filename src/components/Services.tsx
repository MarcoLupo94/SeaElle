import { Flex, HStack, VStack, useBreakpointValue } from '@chakra-ui/react'
import { FC } from 'react'
import { IconType } from 'react-icons'
import { GiChefToque, GiCakeSlice, GiWhisk } from 'react-icons/gi'
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
        icon: GiCakeSlice,
        color: 'brand.200'
    },
    {
        title: 'RECIPE & MENU CREATION',
        content:
            "I specialize in crafting customized recipes and menus that cater to your unique preferences. Whether it's creating new recipes from scratch, refining existing ones, or conducting thorough testing, I leverage proven methodologies to ensure exceptional outcomes.",
        icon: GiWhisk,
        color: 'brand.400'
    },
    {
        title: 'PRODUCTIVITY OPTIMISATION',
        content:
            "I will help elevate your pastry team's productivity and maintain top-notch quality, even during high-volume production, by refining processes and optimizing workflows. Together, we'll achieve efficiency without compromising the excellence that sets your creations apart.",
        icon: GiChefToque,
        color: 'brand.100'
    }
]

export const Services: FC<ServicesProps> = () => {
    const isMobile = useBreakpointValue({ base: true, sm: true, lg: false, md: true })
    return (
        <VStack
            id="services"
            w="100%"
            height={{ base: '100%', md: '100%' }} // Adjust the height based on the screen size
            maxWidth={isMobile ? '100%' : '100%'}
            mb={['10%', '10%', '10%', '0']}
            mx="auto"
            bg="white"
            p={[0, 0, 0, 10]}
        >
            <Flex
                direction={['column', 'column', 'column', 'row']} // Adjust the direction based on the screen size
                gap={['6', '6', '0', '10']} // Adjust the gap between cards based on the screen size
                justifyContent={isMobile ? 'center' : 'space-evenly'}
                alignItems="center"
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
            <HStack justifyContent="center" width="100%" mt={[8, 8, 8, 8]}>
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
