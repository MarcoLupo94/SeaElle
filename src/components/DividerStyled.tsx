import { Box, Divider } from '@chakra-ui/react'
import { FC } from 'react'
interface DividerStyledProps {
    text?: string
}

const DividerStyled: FC<DividerStyledProps> = props => {
    return (
        <Box width="100%" py={6} position="relative">
            <Divider borderColor="gray.300" />
            <Box
                {...props}
                fontFamily="Dancing Script"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                bg="brand.400"
                px={20} // Increase the horizontal padding for a larger text container
                style={{ fontSize: '1.5rem' }}
                fontWeight="bold"
                color="white"
                borderRadius="md" // Adjust the border radius to match the Divider's rounded corners
                boxShadow="sm" // Add a shadow to the text container
            >
                {props.text}
            </Box>
        </Box>
    )
}

export { DividerStyled }
