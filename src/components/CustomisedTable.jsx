import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import cellEditFactory from 'react-bootstrap-table2-editor';



const CustomisedTable = ({ products, columns, isEditable = true }) => {
    console.log(columns, "....seee....", products)

    return <BootstrapTable keyField='id' data={products} columns={columns}
        cellEdit={isEditable && cellEditFactory({ mode: 'click' })}
    />

}
export default CustomisedTable;