import React from "react";
import CustomisedTable from "./CustomisedTable";
import { Button } from "react-bootstrap";

const ViewMedicine = () => {
    const linkFollow = (cell, row, rowIndex, formatExtraData) => {
        return (
            <Button
                onClick={() => {
                    // this.onFollowChanged(row);
                }}
            >
                View
            </Button>
        );
    };
    const columns = [
        {
            dataField: "date",
            text: "Date",

        },
        {
            dataField: "medicine",
            text: "Medicine",
            formatter: linkFollow

        },
        {
            dataField: "description",
            text: "Description",

        },
        {
            dataField: "remark",
            text: "Remark",
        },
        {
            dataField: "allergy",
            text: "Allergy",
        },
    ];
    const products = [
        {
            date: "apple",
            medicine: 100,
            description: 10,
            remark: "japan",
            allergy: "Yes",
        },
    ];

    return <CustomisedTable isEditable={false} columns={columns} products={products} />
}

export default ViewMedicine;