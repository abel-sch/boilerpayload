import type { Block } from 'payload'

export const Slider: Block = {
  slug: 'Slider', // required
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'A Slider',
  interfaceName: 'SliderBlock', // optional
  fields: [
    {
      name: 'imageSlider', // required
      type: 'array', // required
      label: 'Image Slider',
      minRows: 2,
      maxRows: 10,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
  ],
}