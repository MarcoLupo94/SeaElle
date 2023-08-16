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
interface TabData {
    label: string
    content: string[]
}
const GalleryTab: FC<GalleryTabProps> = ({ click }) => {
    const isMobile = useBreakpointValue({ base: true, md: false }) // Define breakpoints for mobile view

    // 1. Create the component
    interface DataTabsProps {
        data: TabData[]
    }
    const DataTabs: FC<DataTabsProps> = ({ data }) => {
        return (
            <Tabs w="70%">
                <TabList justifyContent={'center'}>
                    {data.map((tab, index) => (
                        <Tab
                            key={index}
                            color="#757575"
                            fontWeight={'semibold'}
                            fontSize={'lg'}
                            _selected={{ color: '#946070', fontWeight: 'bold' }}
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

    const tabData: TabData[] = [
        {
            label: 'Cakes',
            content: [
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600285/BB_Large_Range-min_duboig.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600273/BB_16-min_g7cfto.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1692209931/WhatsApp_Image_2023-08-16_at_19.18.21_1_ygyse2.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600285/BB_32-min_kkhsbj.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1692210287/WhatsApp_Image_2023-08-16_at_19.24.28_c4agln.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1691600268/BB_11-min_zzfvpd.jpg'
            ]
        },
        {
            label: 'Chocolate',
            content: [
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1692205957/WhatsApp_Image_2023-08-16_at_18.06.34_1_tmrcn8.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1692205957/WhatsApp_Image_2023-08-16_at_18.06.33_vypjuo.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1692205956/WhatsApp_Image_2023-08-16_at_18.06.32_naid7k.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1692209436/WhatsApp_Image_2023-08-16_at_18.53.07_1_lcxuav.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1692205955/WhatsApp_Image_2023-08-13_at_13.21.54_tsjfwc.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1692206340/WhatsApp_Image_2023-08-16_at_18.06.34_2_vrklpy.jpg'
            ]
        },
        {
            label: 'Vegan & Gluten Free',
            content: [
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1692207111/WhatsApp_Image_2023-08-16_at_18.31.23_1_tkekfk.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1692207728/WhatsApp_Image_2023-08-16_at_18.41.20_1_itnxuf.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1692207042/WhatsApp_Image_2023-08-16_at_18.27.29_emu2dm.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1692207730/WhatsApp_Image_2023-08-16_at_18.41.39_1_arbale.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1692208056/WhatsApp_Image_2023-08-16_at_18.46.23_1_jszkcm.jpg',
                'https://res.cloudinary.com/dytcr3b3j/image/upload/v1692207817/WhatsApp_Image_2023-08-16_at_18.42.38_1_abct3k.jpg'
            ]
        }
    ]

    return isMobile ? <CarouselSection data={tabData} /> : <DataTabs data={tabData} />
}
interface CarouselSectionProps {
    data: TabData[]
}
const CarouselSection: FC<CarouselSectionProps> = ({ data }) => {
    return (
        <Carousel
            autoPlay
            showThumbs={false} // Hide thumbnail navigatio
            interval={3000} // Change slide every 3 seconds
            showStatus={false} // Hide slide status indicator
        >
            {data
                .reduce((acc: string[], curr) => {
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
