import React from 'react';
import {DataGridPro, GRID_TREE_DATA_GROUPING_FIELD, GridColDef, GridRenderCellParams} from '@mui/x-data-grid-pro';
import {Button, Checkbox, Chip} from "@mui/material";

import {columns, rows} from "../data";
import {TABLE_HEIGHT} from "../App"
import {TableProps} from "./TableProps";

const muiRows: any[] = flattenTree(rows, [])

const columnsWithoutId = columns.slice(1)

const handleClick = () => {
    console.info('You clicked the Chip.');
}

const leftColumns = [GRID_TREE_DATA_GROUPING_FIELD, ...columnsWithoutId.map(column => column.name).slice(0, 1)]

export function MuiXDataGrid({withMuiComponents}: TableProps) {
    const muiColumns: GridColDef[] = columnsWithoutId.map((column, index) => {
        const muiColumn: GridColDef = {
            field: column.name,
            headerName: column.title,
            width: 180
        }
        if (withMuiComponents) {
            if (index >= 0 && index <= 5) {
                muiColumn.renderCell = (params: GridRenderCellParams) => (
                    <Chip
                        label={params.value}
                        onClick={handleClick}
                    />
                )
            }
            if (index >= 6 && index <= 11) {
                muiColumn.renderCell = (params: GridRenderCellParams) => (
                    <Button variant="outlined" onClick={handleClick}>
                        {params.value}
                    </Button>
                )
            }
            if (column.name === "confirmed") {
                muiColumn.renderCell = (params: GridRenderCellParams) => (
                    <Checkbox defaultChecked={params.value === "Yes"} onClick={handleClick}/>
                )
            }
        } else {
            muiColumn.renderCell = undefined
        }
        return muiColumn
    })

    return (
        <div style={{height: TABLE_HEIGHT, width: '100%'}}>
            <DataGridPro
                density="comfortable"
                treeData
                getTreeDataPath={(row) => row.path}
                groupingColDef={{headerName: "ID"}}
                rows={muiRows}
                columns={muiColumns}
                initialState={{pinnedColumns: {left: leftColumns}}}
                hideFooter={true}
            />
        </div>
    )
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