import { Box, Flex, Text, Image } from '@chakra-ui/react'

function AboutMeSection() {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            id="about"
            color="black"
            style={{ height: '60vh' }}
        >
            <Box flex="1" p={4} maxWidth="400px">
                <Text textAlign="center" fontSize="3xl" fontWeight="bold" mb={4}>
                    Hi, I'm Caroline
                </Text>
                <Text textAlign="center" fontSize="lg">
                    I am a passionate web developer with a love for creating beautiful and
                    functional websites. My journey began with coding in [your favorite language]
                    and I have been honing my skills ever since.
                </Text>
            </Box>
            <Box flex="1" p={4}>
                <Image
                    src="https://res.cloudinary.com/dytcr3b3j/image/upload/v1690730285/bg.jpg_16-14-20-198_u61pm7.jpg"
                    alt="Profile Picture"
                    boxSize="200px"
                    mx="auto"
                />
            </Box>
        </Flex>
    )
}

export { AboutMeSection }
