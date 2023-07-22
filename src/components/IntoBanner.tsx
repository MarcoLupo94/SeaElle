import { Button,HStack,Heading, Text, VStack } from '@chakra-ui/react'
import { FC } from 'react'

interface IntoBannerProps {
}
const property = {
    imageUrl : '/public/bg.jpg'
}

export const IntoBanner: FC<IntoBannerProps> = () => {

  const handleClick = (path: string) => {
    const targetSection = document.getElementById(path);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <HStack  as='section'
      p='40'
      style={{
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${property.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      justifyContent='flex-start'
      bg='brand.300'>
        <VStack w='80%' alignItems={'flex-start'}>
        <Heading  fontSize='6xl' >Caroline Deboos-Roulez</Heading>
        <Text fontSize='3xl'>Executive Pastry Chef Consultant</Text>
        <HStack>
            <Button color='white'size={'lg'} bg={'brand.100'} onClick={()=>handleClick('about')}>About</Button>
            <Button color='white' size={'lg'} bg={'brand.200'} onClick={()=>handleClick('contact')}>Contact</Button>
            </HStack>
        </VStack>
      </HStack>
  )
}