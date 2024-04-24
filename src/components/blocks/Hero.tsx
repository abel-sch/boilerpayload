export default function Hero({ title }: { title: string }) {
    return (
        <section className="px-5 py-20">
            <h1 className="text-6xl font-bold">{ title }</h1>
        </section>
    )
}