import React from "react";
import CustomisedTable from "./CustomisedTable";
import { Button } from "react-bootstrap";


const ViewHealthCard = () => {
    const columns = [
        {
            dataField: "medicinename",
            text: "Medicine Name",

        },
        {
            dataField: "quantity",
            text: "Quantity",
            sort: true
        },
        {
            dataField: "morning",
            text: "Morning",

        },
        {
            dataField: "remark",
            text: "Remark",
        },
        {
            dataField: "afternoon",
            text: "Afternoon",
        },
        {
            dataField: "remarkAfternoon",
            text: "Remark",
        },
        {
            dataField: "night",
            text: "Night",
        }, {
            dataField: "remarkNight",
            text: "Remark",
        },
    ];
    const products = [
        {
            medicinename: "apple",
            quantity: 100,
            morning: 10,
            remark: "japan",
            afternoon: "Yes",
            remarkAfternoon: "yes",
            night: "yes",
            remarkNight: "hello"
            // formatter: linkFollow
        },
    ];
    return <CustomisedTable products={products} columns={columns} isEditable={false} />
}

export default ViewHealthCard;