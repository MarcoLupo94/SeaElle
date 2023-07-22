import { Button, HStack, Image } from '@chakra-ui/react'
import { FC, useRef } from 'react'

interface GalleryProps {}

const images: string[] = [
    '/public/bg.jpg',
    '/public/bg.jpg',
    '/public/bg.jpg',
    '/public/bg.jpg',
    '/public/bg.jpg',
    '/public/bg.jpg'
]

export const Gallery: FC<GalleryProps> = () => {
    const scrollStep = 100 // Set the scrolling distance in pixels
    const scrollDuration = 200 // Set the duration of the scrolling animation in milliseconds
    const galleryRef = useRef<HTMLDivElement>(null) // Create a reference to the gallery container
    const imageWidth = 20 // Set the width of each image in percentage

    const handleScroll = (direction: string) => {
        const targetSection = galleryRef.current
        if (targetSection) {
            const totalImages = images.length
            const scrollAmount = direction === 'left' ? -scrollStep : scrollStep
            const newPosition = targetSection.scrollLeft + scrollAmount
            const maxScroll = imageWidth * totalImages * images.length - imageWidth * totalImages

            const smoothScroll = (
                target: HTMLElement,
                currentScroll: number,
                targetScroll: number,
                duration: number
            ) => {
                const startTime =
                    'now' in window.performance ? performance.now() : new Date().getTime()
                const animateScroll = () => {
                    const currentTime =
                        'now' in window.performance ? performance.now() : new Date().getTime()
                    const timeElapsed = currentTime - startTime
                    const scrollProgress = Math.min(timeElapsed / duration, 1)

                    target.scrollLeft =
                        currentScroll + (targetScroll - currentScroll) * scrollProgress

                    if (scrollProgress < 1) {
                        requestAnimationFrame(animateScroll)
                    }
                }
                requestAnimationFrame(animateScroll)
            }

            // Handle infinite scroll when reaching the start or end of the gallery
            if (direction === 'left' && newPosition < 0) {
                const initialScroll = maxScroll + newPosition
                smoothScroll(targetSection, targetSection.scrollLeft, initialScroll, scrollDuration)
            } else if (direction === 'right' && newPosition >= maxScroll) {
                const initialScroll = newPosition - maxScroll
                smoothScroll(targetSection, targetSection.scrollLeft, initialScroll, scrollDuration)
            } else {
                smoothScroll(targetSection, targetSection.scrollLeft, newPosition, scrollDuration)
            }
        }
    }

    return (
        <HStack>
            <Button onClick={() => handleScroll('left')}>left</Button>
            <HStack
                id="bar"
                w={`${imageWidth * images.length * 2}%`} // Double the width to create the illusion of infinite scroll
                overflowX="hidden"
                ref={galleryRef} // Set the ref to the gallery container
            >
                {images.map((image, index) => (
                    <Image key={index} w={`${imageWidth}%`} src={image} alt="image" />
                ))}
            </HStack>
            <Button onClick={() => handleScroll('right')}>right</Button>
        </HStack>
    )
}
