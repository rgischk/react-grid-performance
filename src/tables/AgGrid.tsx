import {AgGridReact} from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-material.css'; // Core grid CSS, always needed
import 'ag-grid-enterprise'; // Adds enterprise features

import {TableProps} from "./TableProps";
import {TABLE_HEIGHT} from "../App";
import {columns, rows} from "../data";
import {Button, Checkbox, Chip} from "@mui/material";
import React from "react";
import {ICellRendererParams} from "ag-grid-community";


const flatRows: any[] = flattenTree(rows, [])
const sumRow: any = {
    id: "Summe",
    firstname: undefined,
    middlename: undefined,
    lastname: undefined,
    weight: 12345,
}

const handleClick = () => {
    console.info('Clicked.');
}

function ChipCellRenderer(props: ICellRendererParams) {
    return <Chip
        label={props.valueFormatted ? props.valueFormatted : props.value}
        onClick={handleClick}
    />
}

function ButtonCellRenderer(props: ICellRendererParams) {
    return <Button variant="outlined" onClick={handleClick}>
        {props.valueFormatted ? props.valueFormatted : props.value}
    </Button>
}

function CheckBoxCellRenderer(props: ICellRendererParams) {
    return <Checkbox defaultChecked={props.value === "Yes"} onClick={handleClick}/>
}

export function AgGrid({withMuiComponents}: TableProps) {

    const agColumns = columns.map((column, index) => {
        const agColumn: any = {
            field: column.name,
            headerName: column.title,
            pinned: index <= 1,
            initialWidth: 180,
            resizable: true,
        }
        if (index === 0) {
            agColumn.cellRenderer = "agGroupCellRenderer"
            agColumn.cellRendererParams = {
                suppressCount: true
            }
        }
        if (withMuiComponents) {
            if (index >= 1 && index <= 6) {
                agColumn.cellRenderer = "chipCellRenderer"
            }
            if (index >= 7 && index <= 12) {
                agColumn.cellRenderer = "buttonCellRenderer"
            }
            if (column.name === "confirmed") {
                agColumn.cellRenderer = "checkBoxCellRenderer"
            }
        }
        return agColumn
    })

    // On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size
    return <div className="ag-theme-material" style={{width: "100%", height: TABLE_HEIGHT}}>

        <AgGridReact
            rowData={flatRows} // Row Data for Rows
            columnDefs={agColumns} // Column Defs for Columns
            getRowId={(params) => params.data.id}
            suppressFieldDotNotation={true}
            components={{
                chipCellRenderer: ChipCellRenderer,
                buttonCellRenderer: ButtonCellRenderer,
                checkBoxCellRenderer: CheckBoxCellRenderer,
            }}
            treeData={true}
            getDataPath={data => data.path}
            groupDisplayType={"custom"}
            pinnedBottomRowData={[sumRow]}
        />
    </div>
}

function flattenTree(tree: any[], path: any[]): any[] {
    const flattened: any[] = []
    tree.forEach(row => {
        const rowWithPath = row
        const thisPath = path.concat([row.id])
        rowWithPath.path = thisPath
        flattened.push(rowWithPath)

        if (row.children) {
            flattened.push(...flattenTree(row.children, thisPath))
        }
    })
    return flattened
}