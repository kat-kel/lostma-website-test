import { EntityDetail, VocabTerms, Field } from "./models";
import Card from "@/app/components/Card";
import Hashtag from "@/app/components/Hashtag";
import Link from "next/link";
import SetInnerHTML from "@/app/components/innerHTML";

function Header({data} :{data:EntityDetail}) {
    let p ;
    if (data.metadata.rty_ReferenceURL) {
        p = <>
            {SetInnerHTML(data.metadata.rty_Description)}
            <p className="text-muted">
            Equivalent Entity: <Hashtag url={data.metadata.rty_ReferenceURL}/>
            </p>
        </>
    }
    else {
        p = <>
            {SetInnerHTML(data.metadata.rty_Description)}
            <p className="text-muted">
                Equivalent Entity:
            </p>
        </>
    }
    return (
        <div className="flex justify-center">
            <div id="header" className="container md:w-3/4">
                <Card title={data.metadata.rty_Name} subtitle={data.id} paragraph={p} />
            </div>
        </div>
    );
}

const LockSVG = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <title>Required Field</title>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>

const UnlockSVG = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <title>Optional Field</title>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>

const RepeatableSVG = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <title>Repeatable Field</title>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

enum HeuristFieldTypes {
    freetext = 'freetext',
    blocktext = 'blocktext',
    integer = 'integer',
    date = 'date',
    year = 'year',
    relmarker = 'relmarker',
    boolean = 'boolean',
    enum = 'enum',
    relationtype = 'relationtype',
    resource = 'resource',
    float = 'float',
    file = 'file',
    geo = 'geo',
    separator = 'separator',
    calculated = 'calculated',
    fieldsetmarker = 'fieldsetmarker',
    urlinclude = 'urlinclude'
}

function ConvertFieldType({field,}: {field: Field}) {

    if (field.dty_Type === HeuristFieldTypes.resource) {
        return (<div>foreign key</div>)
    }
    else if (field.dty_Type === HeuristFieldTypes.enum) {
        return (<div>vocabulary</div>)
    }
    else if (field.dty_Type === HeuristFieldTypes.blocktext) {
        return (<div>text</div>)
    }
    else if (field.dty_Type === HeuristFieldTypes.freetext) {
        return (<div>text</div>)
    }
    else return (<div>{field.dty_Type}</div>)
}

function VocabURL({data}: {data:VocabTerms}) {
    if (data.url) {
        return <Link target="_blank" rel="noreferrer noopener" href={data.url}>{data.label}</Link>;
    }
    else {
        return <>{data.label}</>;
    }
}

function ParseVocabTerms({terms, }: {terms:VocabTerms[] | null}) {
    if (terms) {
        return Object.values(terms).map((obj, index) => 
                <li key={`term-${obj.id}-${index}`}>
                    <VocabURL data={obj}/>
                </li>
            )
    }
    else {
        return [<></>]
    }
}

function IsRepeatable({data}: {data:boolean}) {
    if (data) {
        return (<>{RepeatableSVG}</>)
    }
    else {
        return (<></>)
    }
}

function IsRequired({data}: {data:boolean}) {
    if (data) {
        return (<>{LockSVG}</>)
    }
    else {
        return (<>{UnlockSVG}</>)
    }
}

export default function EntityProfile({data}: {data:EntityDetail}) {
    return (
        <>
            {Header({data})}
            <div className="grid md:grid-cols-3 md:w-1/3 w-1/2 p-2">
                <div>
                    <span>{RepeatableSVG}</span>
                    <label>Repeatable</label> 
                </div>
                <div>
                    <span>{LockSVG}</span>
                    <label>Required</label>
                </div>
                <div>
                    <span>{UnlockSVG}</span>
                    <label>Not required</label>
                </div>
            </div>
            {
                Object.values(data.sections).map((section, index) => 
                    <div className="container relative overflow-x" key={`section-${index}`}>
                        <table className="md:w-full min-w-fit overflow-scroll table-fixed text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <caption className="caption-top text-muted">
                                {section.sectionName}
                            </caption>
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3 w-12"></th>
                                    <th scope="col" className="px-6 py-3 w-12"></th>
                                    <th scope="col" className="px-6 py-3">Name</th>
                                    <th scope="col" className="px-6 py-3">Type</th>
                                    <th scope="col" className="px-6 py-3">Description</th>
                                    <th scope="col" className="px-6 py-3">Equivalent Property</th>
                                    <th scope="col" className="px-6 py-3">Controlled Vocabulary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.values(section.fields).map((field, index) =>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={`field-${field.dty_ID}-${index}`}>
                                            <td scope="row" className="px-6 py-4"><IsRepeatable data={true}/></td>
                                            <td scope="row" className="px-6 py-4"><IsRequired data={true} /></td>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {field.rst_DisplayName}
                                            </th>
                                            <td className="px-6 py-4">
                                                {ConvertFieldType({field:field})}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="content" dangerouslySetInnerHTML={{__html: field.rst_DisplayHelpText}}/>
                                            </td>
                                            <td className="px-6 py-4 text-center overflow-scroll"><Hashtag url={field.dty_SemanticReferenceURL} /></td>
                                            <td className="px-6 py-4 space-y-1">
                                                <div className="uppercase text-xs text-center">
                                                    <Link href={`/corpus/model/vocabs/${field.trm_TreeID}`}>
                                                        {field.trm_Label}
                                                    </Link>
                                                </div>
                                                <ul className="list-disc">
                                                    {ParseVocabTerms({terms:field.vocabTerms})}
                                                </ul>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }
        </>
    )
}