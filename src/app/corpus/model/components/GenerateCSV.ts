
import { EntityDetail } from "./models";

export function MakeHeaders(entityDetail: EntityDetail):Array<Array<string>> {
    let fields:string[] = [];
    for (const section of entityDetail.sections) {
        for (const field of section.fields) {
            if (field.dty_Type === "resource") {
                const header = `${field.rst_DisplayName} H-ID`
                fields.push(header)
            }
            else {
                fields.push(field.rst_DisplayName)
            }
        }
    }
    const csvRows:Array<Array<string>> = []
    csvRows.push(fields)
    return csvRows
}

export default function GenerateCSV({entity,}: {entity:EntityDetail}) {
    const rows = MakeHeaders(entity);
    let csvContent = "data:text/csv;charset=utf-8," 
    + rows.map(e => e.join(",")).join("\n");
    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
}