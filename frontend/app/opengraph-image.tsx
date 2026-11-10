import { renderShareImage, SHARE_IMAGE_SIZE, SHARE_IMAGE_TYPE } from '@/components/seo/shareImage'

export const alt = 'Javco Trailer Sales lot in Franksville, Wisconsin, filled with semi-trailers'
export const size = SHARE_IMAGE_SIZE
export const contentType = SHARE_IMAGE_TYPE

export default function Image() {
    return renderShareImage({
        eyebrow: 'Franksville, Wisconsin',
        title: 'Semi-trailers to buy, rent & store.',
        photo: 'images/aerial-lot.jpg'
    })
}
