import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import {
    Box,
    Grid,
    GridItem,
    IconButton,
    Image,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    useBreakpointValue
} from '@chakra-ui/react'
import { FC } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

interface GalleryTabProps {
    click: (imageSrc: string) => void
}
const GalleryTab: FC<GalleryTabProps> = ({ click }) => {
    const isMobile = useBreakpointValue({ base: true, md: false }) // Define breakpoints for mobile view

    // 1. Create the component
    function DataTabs({ data }) {
        return (
            <Tabs w="70%">
                <TabList justifyContent={'center'}>
                    {data.map((tab, index) => (
                        <Tab
                            key={index}
                            color="brand.100"
                            fontSize={'lg'}
                            _selected={{ color: 'black' }}
                        >
                            {tab.label}
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {data.map((tab, index) => (
                        <TabPanel key={(index + 1) * 92} position="relative">
                            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                                {tab.content.map((url, index) => (
                                    <GridItem key={(index + 1) * 321} onClick={() => click(url)}>
                                        <Image
                                            _hover={{
                                                cursor: 'pointer',
                                                filter: 'brightness(85%)',
                                                transition: 'transform 0.3s ease',
                                                transform: 'scale(1.05)'
                                            }}
                                            objectFit="cover"
                                            maxWidth="100%"
                                            height="100%"
                                            borderRadius={'5px'}
                                            src={url}
                                            alt={`Image ${index + 1}`}
                                        />
                                    </GridItem>
                                ))}
                            </Grid>
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        )
    }

    // 2. Create an array of data
    const tabData = [
        {
            label: 'Cakes',
            content: [
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600281/BB_39-min_qnbvf6.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600273/BB_38-min_k1rwnn.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600267/BB_18-min_gyxoo3.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600284/BB_42-min_vmcyar.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600282/BB_33-min_nqhsxt.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600268/BB_11-min_zzfvpd.jpg'
            ]
        },
        {
            label: 'Chocolate',
            content: [
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600273/BB_38-min_k1rwnn.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600281/BB_39-min_qnbvf6.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600284/BB_42-min_vmcyar.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600267/BB_18-min_gyxoo3.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600268/BB_11-min_zzfvpd.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600282/BB_33-min_nqhsxt.jpg'
            ]
        },
        {
            label: 'Viennoiserie',
            content: [
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600273/BB_38-min_k1rwnn.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600281/BB_39-min_qnbvf6.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600282/BB_33-min_nqhsxt.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600267/BB_18-min_gyxoo3.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600284/BB_42-min_vmcyar.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600268/BB_11-min_zzfvpd.jpg'
            ]
        }
    ]

    // 3. Pass the props and chill!

    return isMobile ? <CarouselSection data={tabData} /> : <DataTabs data={tabData} />
}

const CarouselSection = ({ data }) => {
    return (
        <Carousel
            autoPlay
            showThumbs={false} // Hide thumbnail navigatio
            interval={3000} // Change slide every 3 seconds
            showStatus={false} // Hide slide status indicator
            renderArrowNext={clickHandler => (
                <IconButton
                    icon={<ArrowRightIcon />}
                    size="md"
                    variant="ghost"
                    onClick={clickHandler}
                    colorScheme="brand"
                    borderRadius="full"
                    _focus={{ outline: 'none' }}
                    position="absolute"
                    top="50%"
                    right="1rem"
                    transform="translateY(-50%)"
                    aria-label={''}
                />
            )}
            renderArrowPrev={clickHandler => (
                <IconButton
                    icon={<ArrowLeftIcon />}
                    variant="ghost"
                    size="md"
                    onClick={clickHandler}
                    colorScheme="brand"
                    borderRadius="full"
                    _focus={{ outline: 'none' }}
                    position="absolute"
                    top="50%"
                    left="1rem"
                    transform="translateY(-50%)"
                    zIndex={300}
                    aria-label={''}
                />
            )}
        >
            {data
                .reduce((acc, curr) => {
                    return [...acc, ...curr.content]
                }, [])
                .slice(0, 10)
                .map((url, index) => (
                    <Box>
                        <Image
                            key={(index + 1) * 321}
                            objectFit="cover"
                            maxWidth="100%"
                            height="100%"
                            borderRadius={'5px'}
                            src={url}
                            alt={`Image ${index + 1}`}
                        />
                    </Box>
                ))}
        </Carousel>
    )
}
export default GalleryTab
