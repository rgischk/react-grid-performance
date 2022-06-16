import React from 'react';
import {Button, Checkbox, Chip} from "@mui/material";

import "devextreme/dist/css/dx.material.blue.light.css"

import {columns, rows} from "../data";
import {TABLE_HEIGHT} from "../App"

import DataGrid, {
    Column, IColumnProps
} from 'devextreme-react/data-grid';
import {TableProps} from "./TableProps";

const handleClick = () => {
    console.info('You clicked the Chip.');
}

export function DevExtremeXDataGrid({withMuiComponents}: TableProps) {

    const columnProps: IColumnProps[] = columns.map((column, index) => {
        const dataGridColumn: IColumnProps = {
            dataField: column.name,
            width: 180,
            fixed: index <= 1,
        }

        if (withMuiComponents) {
            if (index >= 1 && index <= 6) {
                dataGridColumn.cellRender = (params) => (
                    <Chip
                        label={params.text}
                        onClick={handleClick}
                    />
                )
            }
            if (index >= 7 && index <= 12) {
                dataGridColumn.cellRender = (params) => (
                    <Button variant="outlined" onClick={handleClick}>
                        {params.text}
                    </Button>
                )
            }
            if (column.name === "confirmed") {
                dataGridColumn.cellRender = (params) => (
                    <Checkbox defaultChecked={params.text === "Yes"} onClick={handleClick}/>
                )
            }
        }

        return dataGridColumn
    })

    return <DataGrid id="dataGrid"
                     height={TABLE_HEIGHT}
                     dataSource={rows}
                     allowColumnReordering={true}
                     allowColumnResizing={true}
                     paging={{enabled: false}}
                     scrolling={{rowRenderingMode: "virtual", useNative: true}}
                     repaintChangesOnly={true}
                     renderAsync={true}
                     children={columnProps.map(props => <Column {...props}/>)}
    />
}