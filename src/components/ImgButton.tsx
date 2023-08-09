import { Button, ButtonProps } from '@chakra-ui/react'
import { FC } from 'react'

interface ImgButtonProps extends ButtonProps {
    text: string
}

export const ImgButton: FC<ImgButtonProps> = ({ text, ...props }) => {
    return (
        <Button
            {...props}
            textTransform="uppercase" // Convert text to uppercase
            variant="ghost"
        >
            {text}
        </Button>
    )
}
