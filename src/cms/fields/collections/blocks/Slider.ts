import { Block, CollectionConfig } from 'payload/types'

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
      admin: {
        components: {
          RowLabel: ({ data, index }) => {
            return data?.title || `Slide ${String(index).padStart(2, '0')}`
          },
        },
      },
    },
  ],
}