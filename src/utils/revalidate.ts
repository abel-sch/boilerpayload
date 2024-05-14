import { revalidateTag } from 'next/cache'

export const revalidate = async (args: {
  slug?: string
  collection?: string
  tags?: string[]
}): Promise<void> => {
  const { slug, collection, tags } = args
  if (collection && slug != undefined) {
    revalidateTag(`${collection}_${slug}`)
    revalidateTag(collection)
    console.log(`Revalidated ${collection}_${slug}, ${collection}`)
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

export const revalidateArticle = ({ doc, previousDoc}: { doc: any, previousDoc: any}) => {
    revalidate({ slug: doc.slug, collection: 'articles' })
    if (previousDoc?.slug != doc?.slug) {
      revalidate({ slug: previousDoc.slug, collection: 'articles' })
    }
}

export const revalidateNavigation = () => {
  revalidate({ tags: ['menu'] })
}