import { EntityDetail, VocabDetail } from './models';

export async function loadVocabData(): Promise<VocabDetail[]> {
    // Import JSON data store
    const allData = await loadData();

    // Get all instances of vocabulary from the data
    const vocabList:VocabDetail[] = []
    for (let entity of allData) {
        for (let section of entity.sections) {
            for (let field of section.fields) {
                if (field.trm_TreeID && field.trm_Label && field.vocabTerms) {
                    vocabList.push({
                        "id": field.trm_TreeID.toString(),
                        "label": field.trm_Label,
                        "description": field.trm_Description,
                        "terms": field.vocabTerms
                    })
                }
            }
        }
    }

    // Define a function to remove duplicate vocab
    const removeDuplicates = (arr: VocabDetail[]): VocabDetail[] => {
        const uniqueObjects = arr.filter((value, index, self) =>
            index === self.findIndex((t) =>
                t.id === value.id
            )
        );
        
        return uniqueObjects;
    };

    // Remove duplicate vocabs
    const uniqueVocab = removeDuplicates(vocabList)

    return uniqueVocab
}

export default async function loadData(): Promise<EntityDetail[]> {
    // Import JSON data store
    const jsonData = await import('@/data/recordTypes.json');
    let arr = jsonData as EntityDetail[];
    
    // Ignore the 'default' and 'length' from the JSON array 
    return Object.values(arr).flatMap(({id,}, index) => id ? arr[index]: []);
}