import { Button } from '@chakra-ui/react'
import { FC } from 'react'

interface NavLinkProps {
    path: string
    text: string
    color: string
    variant?: string
}

export const NavLink: FC<NavLinkProps> = props => {
    const { path, text, color, variant } = props
    const handleClick = (path: string) => {
        const targetSection = document.getElementById(path)
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <Button
            {...props}
            color="white"
            variant={variant}
            bg={color}
            onClick={() => handleClick(path)}
        >
            {text}
        </Button>
    )
}
