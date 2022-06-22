import React, {useRef, useState} from 'react';
import {Button, Checkbox, Chip, FormControlLabel, Switch} from "@mui/material";

import "devextreme/dist/css/dx.material.blue.light.css"
import "./DevExtremeXTreeList.css"

import {columns, rows} from "../data";
import {TABLE_HEIGHT} from "../App"

import {TreeList, Column, IColumnProps} from 'devextreme-react/tree-list';
import {TableProps} from "./TableProps";

const handleClick = () => {
    console.info('You clicked.');
}

export function DevExtremeXTreeList({withMuiComponents, withVirtualization}: TableProps) {

    const columnProps: IColumnProps[] = columns.map((column, index) => {
        const dataGridColumn: IColumnProps = {
            dataField: column.name,
            width: 180,
            fixed: index <= 1,
            caption: column.title,
        }

        if (withMuiComponents) {
            if (index >= 1 && index <= 6) {
                dataGridColumn.cellRender = (params) => (
                    <Chip
                        size="small"
                        label={params.text}
                        onClick={handleClick}
                    />
                )
            }
            if (index >= 7 && index <= 12) {
                dataGridColumn.cellRender = (params) => (
                    <Button size="small" variant="outlined" onClick={handleClick}>
                        {params.text}
                    </Button>
                )
            }
            if (column.name === "confirmed") {
                dataGridColumn.cellRender = (params) => (
                    <Checkbox defaultChecked={params.text === "Yes"} onClick={handleClick} sx={{padding: 0}}/>
                )
            }
        }

        return dataGridColumn
    })

    const treeList = useRef<TreeList>(null)

    function expandAll() {
        rows.forEach((row: any) => treeList.current?.instance.expandRow(row.id))
    }

    const [useNative, setUseNative] = useState(true)
    const [preloadEnabled, setPreloadEnabled] = useState(true)
    const [renderAsync, setRenderAsync] = useState(false)

    const key = "DevExtremeXTreeList"
        + (withVirtualization ? "virtual" : "standard")
        + (useNative ? "native" : "simulated")
        + (preloadEnabled ? +"preloadEnabled" : "nonPreloadEnabled")
        + (renderAsync ? "renderAsync" : "nonRenderAsync")

    return <>
        <Button onClick={() => expandAll()}>Expand all rows</Button>
        <FormControlLabel control={
            <Switch checked={useNative}
                    onChange={(event) => setUseNative(event.target.checked)}/>
        } label="Use Native"/>
        <FormControlLabel control={
            <Switch disabled={!withVirtualization}
                    checked={preloadEnabled && withVirtualization}
                    onChange={(event) => setPreloadEnabled(event.target.checked)}/>
        } label="Preload Enabled"/>
        <FormControlLabel control={
            <Switch disabled={!withVirtualization}
                    checked={renderAsync && withVirtualization}
                    onChange={(event) => setRenderAsync(event.target.checked)}/>
        } label="Render Async"/>
        <TreeList id="treeList"
                  ref={treeList}
                  height={TABLE_HEIGHT}
                  dataSource={rows}
                  itemsExpr={"children"}
                  dataStructure="tree"
                  allowColumnReordering={true}
                  allowColumnResizing={true}
                  columnResizingMode={"widget"}
                  columnFixing={{enabled: true}}
                  columnChooser={{enabled: true, mode: "select"}}
                  selection={{mode: "multiple", allowSelectAll: true, recursive: true}}
                  sorting={{mode: "none"}}
                  scrolling={{mode: withVirtualization ? "virtual" : "standard", useNative, preloadEnabled, renderAsync}}
                  key={key}
                  children={columnProps.map(props => <Column {...props}/>)}
        />
    </>
}