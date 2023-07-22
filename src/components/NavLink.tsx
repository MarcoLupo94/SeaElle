import { Button } from '@chakra-ui/react';
import { FC } from 'react'

interface NavLinkProps {
    path:string
    text:string

}

export const NavLink: FC<NavLinkProps> = ({path,text}) => {
    const handleClick = (path: string) => {
        const targetSection = document.getElementById(path);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <Button color='white' variant='link' onClick={()=>handleClick(path)}>{text}</Button>
  )
}