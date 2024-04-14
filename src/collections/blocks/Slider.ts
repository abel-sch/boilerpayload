import { Block, CollectionConfig } from 'payload/types'

export const Slider: Block = {
  slug: 'Slider', // required
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'A Slider',
  interfaceName: 'SliderBlock', // optional
  fields: [
    {
      name: 'sliderHeader',
      type: 'text',
      required: true,
    },
    {
      name: 'image', // required
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
    },
  ],
}