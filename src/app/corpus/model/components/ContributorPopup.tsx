'use client';
import { useState } from "react";
import { LinkSVG } from "@/public/svgs";
import { GenerateFullTemplate, GenerateReqTemplate } from "./GenerateCSV";
import { EntityDetail } from "./models";

export default function ContributorPopup(entityDetail:EntityDetail) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
          setIsOpen(!isOpen);
    };
    
    return (
        <div className="">
            <div className="row flex justify-center max-h-12">
                <button 
                    id="contributor-popup-button"
                    type="button" 
                    className="
                        relative px-4 py-2 rounded-full dark:bg-primary-dark bg-primary hover:outline-none hover:ring-2 hover:ring-inset hover:ring-white
                    " 
                    aria-controls="contributor-popup" 
                    aria-expanded="false"
                    aria-label="contributor-popup"
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                >
                    Click for Contributor Information
                </button>
            </div>
            {isOpen && (
            <div className="grid md:grid-cols-2">
                <div className="order-last flex items-center justify-center">
                    <div className="grid">
                    <p>Do you want to upload instances of this record type? Download a template for organising each record&apos;s information, wherein each row will be 1 new record of this type.</p>
                    <div className="flex justify-center py-2">
                        <button 
                            className="h-12 px-4 py-1 w-max rounded-full dark:bg-primary-dark bg-primary hover:outline-none hover:ring-2 hover:ring-inset hover:ring-white"
                            onClick={() => GenerateFullTemplate({entity:entityDetail})}
                        >
                            CSV Template: All Fields
                        </button>
                    </div>
                    <div className="flex justify-center py-2">
                        <button 
                            className="h-12 px-4 py-1 w-max rounded-full dark:bg-primary-dark bg-primary hover:outline-none hover:ring-2 hover:ring-inset hover:ring-white"
                            onClick={() => GenerateReqTemplate({entity:entityDetail})}
                        >
                            CSV Template: Required Fields
                        </button>
                    </div>
                    </div>
                </div>
                <div className="order-first p-2">
                    <p className="flex"><span>{LinkSVG}</span> Foreign key</p>
                    <p className="my-1">The value of this field is the H-ID (unique Heurist ID) of another entity. When uploading instances of this record type via CSV, the column of this field must end in the 4-character phrase &quot;H-ID.&quot;</p>
                    <p className="my-1">If the record&apos;s field links to an entity created for the LostMa project, it is named in the table below. If no name is provided, the field links to a generic Heurist entity (i.e. Place) that is not documented on this website. In that case, login to the database for more information.</p>
                </div>
            </div>
            )}
        </div>
    )
}