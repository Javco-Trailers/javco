import { renderShareImage, SHARE_IMAGE_SIZE, SHARE_IMAGE_TYPE } from '@/components/seo/shareImage'

export const alt = 'Refrigerated trailers lined up at Javco Trailer Sales'
export const size = SHARE_IMAGE_SIZE
export const contentType = SHARE_IMAGE_TYPE

export default function Image() {
    return renderShareImage({
        eyebrow: 'Inventory',
        title: 'Trailers on the lot right now',
        photo: 'images/reefers-lined-up.jpg'
    })
}
