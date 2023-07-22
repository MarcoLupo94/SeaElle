import { HStack, Link } from '@chakra-ui/react'
import { FC } from 'react'

interface NavBarProps {

}

export const NavBar: FC<NavBarProps> = () => {
  return (
    <HStack justifyContent='space-between' w='100%'  bg="brand.100">
     <div>Logo</div>
     <HStack  w= '50%' justifyContent='space-evenly'>
     <Link href='#services'>Services</Link>
      <Link href='#about'>About Me</Link>
      <Link href='#portfolio'>Gallery/Portoflio</Link>
      <Link href='#testimonials'>Testimonials</Link>
      <Link href='#contact-me'>Contact Me</Link>
     </HStack>
    </HStack>
  )
}