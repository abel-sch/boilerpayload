import { revalidateTag } from 'next/cache'

export const revalidate = async (args: {
  slug?: string
  collection?: string
  tags?: string[]
}): Promise<void> => {
  const { slug, collection, tags } = args

  if (collection && slug) {
    revalidateTag(`${collection}_${slug}`)
  }

  if (tags) {
    tags.forEach((tag) => {
      revalidateTag(tag)
    })
  }
}

export const revalidatePage = ({ doc, previousDoc}: { doc: any, previousDoc: any}) => {
    revalidate({ slug: doc.slug, collection: 'pages' })
    if (previousDoc?.slug != doc?.slug) {
      revalidate({ slug: previousDoc.slug, collection: 'pages' })
    }
}

export const revalidateNavigation = () => {
  revalidate({ tags: ['menu'] })
}