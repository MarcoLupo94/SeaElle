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
                <Text textAlign="left" fontSize={'xl'} w="90%">
                    I am a passionate web developer with a love for creating beautiful and
                    functional websites. My journey began with coding in [your favorite language]
                    and I have been honing my skills ever since.
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
