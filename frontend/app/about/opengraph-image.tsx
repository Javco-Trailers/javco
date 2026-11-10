import { renderShareImage, SHARE_IMAGE_SIZE, SHARE_IMAGE_TYPE } from '@/components/seo/shareImage'

export const alt = 'Aerial view of the Javco Trailer Sales lot'
export const size = SHARE_IMAGE_SIZE
export const contentType = SHARE_IMAGE_TYPE

export default function Image() {
    return renderShareImage({
        eyebrow: 'About us',
        title: 'Four decades of trailers and trust, since 1984',
        cta: 'Visit our lot',
        photo: 'images/aerial-lot.jpg'
    })
}
