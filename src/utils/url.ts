const getUrl = (path: string) =>
  `${process.env.NEXT_PUBLIC_URL}${path}`;

export default getUrl;