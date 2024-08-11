import React from "react";
import CustomisedTable from "./CustomisedTable";
import { Button, Container } from "react-bootstrap";


const EditHealthCard = () => {
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
    return <div>
        <Container className="d-flex justify-content-around">
            <Button>Description</Button>
            <Button>Remark</Button>
            <Button>Allergy</Button>

        </Container>
        <CustomisedTable products={products} columns={columns} /></div>
}

export default EditHealthCard;