import type { Payload } from 'payload'

export const revalidate = async (args: {
//   collection: string
  slug: string
//   payload: Payload
}): Promise<void> => {
  const { slug } = args
  const collection = 'pages'

  try {
    const res = await fetch(
        `http://localhost:3000/api/revalidate?&collection=${collection}&slug=${slug}`
    //   `${process.env.PAYLOAD_PUBLIC_APP_URL}/api/revalidate?secret=${process.env.REVALIDATION_KEY}&collection=${collection}&slug=${slug}`,
    )

    if (res.ok) {
      console.log(`Revalidated page '${slug}' in collection '${collection}'`)
    } else {
      console.error(
        `Error revalidating page '${slug}' in collection '${collection}': ${res}`,
      )
    }
  } catch (err: unknown) {
    console.error(
      `Error hitting revalidate route for page '${slug}' in collection '${collection}': ${err}`,
    )
  }
}

export const revalidatePage = ({ doc }: { doc: any}) => {
    console.log('start revalidating page', doc.slug)
    revalidate({ slug: doc.slug })
}