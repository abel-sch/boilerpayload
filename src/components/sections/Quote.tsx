import { Quote as QuoteType} from "payload-types"

export function Quote({ quoteHeader, quoteText} : QuoteType) {
    return (
        <blockquote className="w-3/4 mx-auto my-4 bg-slate-400 flex flex-col p-12 gap-4 rounded-md">
            <div className="text-sm">Quote Sectie</div>
            <p>{ quoteHeader }</p>
        </blockquote>
    )
}