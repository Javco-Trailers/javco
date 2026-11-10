import { renderShareImage, SHARE_IMAGE_SIZE, SHARE_IMAGE_TYPE } from '@/components/seo/shareImage'

export const alt = 'Used semi-trailers for sale at Javco Trailer Sales'
export const size = SHARE_IMAGE_SIZE
export const contentType = SHARE_IMAGE_TYPE

export default function Image() {
    return renderShareImage({
        eyebrow: 'Sales',
        title: 'The right trailer at the right price',
        cta: 'Shop trailers for sale',
        photo: 'images/original-sales-lot.jpg'
    })
}
