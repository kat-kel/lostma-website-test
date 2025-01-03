import Link from "next/link";
import { VocabTerms } from "./models";

function VocabURL({data}: {data:VocabTerms}) {
    if (data.url) {
        return <Link target="_blank" rel="noreferrer noopener" href={data.url}>{data.label}</Link>;
    }
    else {
        return <>{data.label}</>;
    }
}

export default function ParseVocabTerms({terms, }: {terms:VocabTerms[] | null}) {
    if (terms) {
        return Object.values(terms).map((obj, index) => [
                <li key={`term-${obj.id}-${index}`}>
                    <VocabURL data={obj}/>
                </li>
        ]
            )
    }
    else {
        return [<></>]
    }
}