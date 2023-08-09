import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

function AboutMeSection() {
    return (
        <Flex
            justifyContent="space-evenly"
            alignItems="center"
            id="about"
            color="black"
            style={{ height: '60vh', width: '100%' }}
        >
            <Box w="38%">
                <Heading
                    fontFamily={'Dancing Script'}
                    color="brand.100"
                    fontWeight={'bold'}
                    as="h3"
                    fontSize={'6xl'}
                    textAlign={'left'}
                >
                    About Me
                </Heading>
                <Text textAlign="left" fontSize="2xl" fontWeight="normal" mb={2} mt={2}>
                    Hi, I'm Caroline
                </Text>
                <Text textAlign="left" fontSize={'lg'} w="90%">
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
            <Box>
                <Image
                    src="https://res.cloudinary.com/dytcr3b3j/image/upload/v1691520415/IMG_20221014_170152-min_uhwwe7.jpg"
                    alt="Profile Picture"
                    maxHeight={'400px'}
                    maxWidth={'400px'}
                />
            </Box>
        </Flex>
    )
}

export { AboutMeSection }
