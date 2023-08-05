import { Box, useBreakpointValue } from '@chakra-ui/react'
import { FC } from 'react'
interface DividerStyledProps {
    text?: string
}

const DividerStyled: FC<DividerStyledProps> = props => {
    const isMobile = useBreakpointValue({ base: true, md: false }) // Define breakpoints for mobile view
    return (
        <Box width="100%" position="relative">
            <Box
                {...props}
                fontFamily="Dancing Script"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                bg="brand.400"
                px={isMobile ? 10 : 20} // Increase the horizontal padding for a larger text container
                style={isMobile ? { fontSize: '1rem' } : { fontSize: '1.5rem' }}
                fontWeight="bold"
                color="white"
                borderRadius="3xl" // Adjust the border radius to match the Divider's rounded corners
                boxShadow="sm" // Add a shadow to the text container
            >
                {props.text}
            </Box>
        </Box>
    )
}

export { DividerStyled }
