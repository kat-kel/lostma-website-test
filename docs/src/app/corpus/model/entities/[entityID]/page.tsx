import loadData from "../../components/loadData";
import fetchData from "../../components/fetchData";
import EntityProfile from "../../components/EntityProfile";
import Link from "next/link";

const UturnIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
</svg>


export async function generateStaticParams(): Promise<object[]> {
    // Load the JSON data store
    const arr = await loadData()

    // Generate slugs for only the valid entity IDs of the JSON data store
    return Object.values(arr).flatMap(({id}) => id ? {entityID:id}: []);
}
 
export default async function Page({params, }: {params: Promise<{ entityID: string }>}) {
  const { entityID } = await params
  const data = await fetchData(entityID)
  if (data) {
    return (
      <>
      <div className="flex">
        <Link className="hover:bg-[--background]" href="/corpus/model">
          {UturnIcon}
        </Link>
        <p>Return to list of ontologies.</p>
      </div>
      {EntityProfile({data})}
      </>
    )
  }
}

