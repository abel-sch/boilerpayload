export default async function NotFound({ params }: { params: { locale: string } }) {
    const { locale } = params;
    return <div>404</div>
}