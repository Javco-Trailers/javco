import { renderShareImage, SHARE_IMAGE_SIZE, SHARE_IMAGE_TYPE } from '@/components/seo/shareImage'

export const alt = 'Dry van trailers at a loading dock, available to rent from Javco'
export const size = SHARE_IMAGE_SIZE
export const contentType = SHARE_IMAGE_TYPE

export default function Image() {
    return renderShareImage({
        eyebrow: 'Rentals',
        title: 'A quality rental fleet for short and long-term needs',
        cta: 'Get a rental quote',
        photo: 'images/dry-vans-at-dock.jpg'
    })
}
