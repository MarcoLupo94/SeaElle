import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

function AboutMeSection() {
    return (
        <Flex
            direction={['column-reverse', 'row']}
            gap={[3, 20]}
            justifyContent="center"
            alignItems="center"
            id="about"
            color="black"
            style={{ height: '100%', width: '100%', padding: '5%' }}
        >
            <Box boxShadow={'2xl'}>
                <Image
                    objectFit="cover"
                    maxWidth="100%"
                    height="600px"
                    borderRadius={'10px'}
                    src="https://res.cloudinary.com/dytcr3b3j/image/upload/v1691608595/martin_caro_dvtgnd.jpg"
                    alt="Profile Picture"
                    border="2px solid #946070"
                />
            </Box>
            <Box w={['90%', '40%']} height="600px">
                <Heading
                    fontFamily={'Dancing Script'}
                    color="brand.100"
                    fontWeight={'bold'}
                    as="h3"
                    fontSize={['5xl', '7xl']}
                    textAlign={'left'}
                >
                    About Me
                </Heading>
                <Text textAlign="left" fontSize={['md', '2xl']} fontWeight="normal" mb={2} mt={2}>
                    HI, I'M CAROLINE
                </Text>
                <Text textAlign="left" fontSize={['md', 'xl']} w="100%" color={'#757575'}>
                    I am an Executive Head Pastry Chef with over 10 years of experience in the
                    industry. From american style bakeries to 5 star hotels, as well as french
                    restaurants and bread making bakery; I thrive on widening my knowledge, learning
                    from great, talented pastry chefs and teaching anyone wiling to learn. I am
                    deeply passionate about all styles of baking but I specialize in dairy free,
                    gluten free and vegan patisseries. After realizing the gap in dairy free baking
                    content, I decided to start sharing my knowledge and expertise to allow everyone
                    to explore and enjoy different ways of baking and learn how to successfully make
                    amazing cakes and desserts without any dairy (and other allergens).
                </Text>
            </Box>
        </Flex>
    )
}

export { AboutMeSection }
