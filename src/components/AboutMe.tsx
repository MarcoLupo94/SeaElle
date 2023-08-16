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
            <Box w={['100%', '40%']} height="600px" h="100%">
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
                <Text textAlign="left" fontSize={['md', 'xl']} fontWeight="normal" mb={2} mt={2}>
                    HI, I'M CAROLINE
                </Text>
                <Text textAlign="left" fontSize={['md', 'lg']} w="100%" color={'#757575'}>
                    I am an Executive Head Pastry Chef with over 10 years of experience in the
                    industry, spanning American-style bakeries, 5-star hotels, French restaurants,
                    and bread-making bakeries. I thrive on expanding my knowledge, collaborating
                    with talented pastry chefs, and imparting knowledge to those eager to learn. My
                    profound passion encompasses diverse baking styles, with specializations in
                    French Pâtisserie, Dairy-free, Gluten-free, and Vegan recipe creation.
                    <br />
                    <br />
                    Having accumulated a wealth of expertise over the years, I have now transitioned
                    into the role of a dedicated pastry consultant. Drawing from my extensive
                    background and hands-on experience, I am committed to sharing valuable insights
                    and strategies with businesses and individuals alike, aiming to elevate their
                    pastry operations. Whether it's refining production processes, innovating menu
                    offerings, or ensuring high-quality standards, I am here to guide and empower
                    pastry establishments towards greater success.
                </Text>
            </Box>
        </Flex>
    )
}

export { AboutMeSection }
