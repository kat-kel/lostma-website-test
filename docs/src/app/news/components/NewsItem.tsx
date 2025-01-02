import { NewsItemType } from "./models";
import {PublicationIcon, PresentationIcon, MeetingIcon, ConferenceIcon, OtherIcon} from "./icons";
import NewsItemClassifications from "./iconTypes";

function GetItemLink(link: string | null | undefined) {
    if (link) {
        return (
            <span className="
            inline-block dark:bg-gray-800 bg-gray-200 
            rounded-full px-3 py-1 
            text-sm font-semibold mr-2 mb-2
            ">
                <a target="_blank" rel="noreferrer noopener" href={link}>{link}</a>
            </span> );
    }

    else {
        return ( <></> ) ;
    }
}

function AddLinebreaks(str:string) {
    return str.replace(/\n/g, "<br/>");
}

function GetNewsBody(body:string) {
    const content = AddLinebreaks(body);
    return <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />

}

class IconData {
    icon: any | undefined;
    label: string | undefined;
}

function MakeIcon(str: string) {
    const icon = new IconData();

    if (NewsItemClassifications.Publication === str ) {
        icon.icon = PublicationIcon;
        icon.label = NewsItemClassifications.Publication;
    }
    else if (NewsItemClassifications.Presentation === str ) {
        icon.icon = PresentationIcon;
        icon.label = NewsItemClassifications.Presentation;
    }
    else if (NewsItemClassifications.Conference === str ) {
        icon.icon = ConferenceIcon;
        icon.label = NewsItemClassifications.Conference;
    }
    else if (NewsItemClassifications.Meeting === str ) {
        icon.icon = MeetingIcon;
        icon.label = NewsItemClassifications.Meeting;
    }
    else {
        icon.icon = OtherIcon;
        icon.label = NewsItemClassifications.Other;
    }

    return (
        <div className="min-w-10 max-w-14 h-12 text-[10px] grid justify-center items-center mx-2">
            <label className="ps-2 pt-1">{icon.label}</label>
            <span className="h-10 mx-auto ps-2">{icon.icon}</span>
        </div>
    )

}

export default function NewsItem({item, index}: {item: NewsItemType, index: number}) {
    return (
        <>
        <div key={index} className="
            relative
            p-2 md:p-4 rounded
            h-full min-h-48
            ring-2 ring-primary ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900
            bg-gradient-to-l from-gray-100 dark:from-gray-800
        ">
            <div className="absolute top-0 left-0 -mx-2">
                {MakeIcon(item.classification)}
            </div>
            <div className="flex mb-4 ps-12 space-x-4">
                <span className="order-last grow-0">{item.date}</span>
                <h2 className="order-first grow">
                    {item.title}
                </h2>
            </div>
            <div className="text-muted">{item.authors.map((n, a) => <span key={`${index}-author-${a}`} className="me-4">{n}</span>)}</div>
            <article className="
                min-h-24 max-h-48
                scroll-smooth focus:scroll-auto
                overflow-x-scroll
                p-2 my-4
            "
            >{GetNewsBody(item.body)}</article>
            {GetItemLink(item.link)}
        </div>
        </>
    )
}