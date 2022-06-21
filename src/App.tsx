import React, {useState} from 'react';
import {Button, ButtonGroup, FormControlLabel, FormGroup, Switch} from "@mui/material";
// @ts-ignore
import FPSStats from "react-fps-stats";


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';
import {MuiXDataGrid} from "./tables/MuiXDataGrid";
import {DevExtremeReactiveGrid} from "./tables/DevExtremeReactiveGrid";
import {DevExtremeXDataGrid} from "./tables/DevExtremeXDataGrid";
import {ReactTableVirtuoso} from "./tables/ReactTableVirtuoso";
import {AgGrid} from "./tables/AgGrid";

export const TABLE_HEIGHT = 800

enum Options {
    MUI_X_DATA_GRID = "MUI X Data Grid",
    DEV_EXTREME_REACTIVE_GRID = "DevExtreme Reactive Grid",
    DEV_EXTREME_X_DATA_GRID = "DevExtreme X Data Grid",
    REACT_TABLE_VIRTUOSO = "React Table with Virtuoso",
    AG_GRID = "AG Grid",
}

function App() {

    const [mui, setMui] = useState(true)
    const [virtualization, setVirtualization] = useState(true)
    const [framework, setFramework] = useState<Options>(Options.MUI_X_DATA_GRID)

    return <>
        <FPSStats left="auto" right={0} />
        <Controls framework={framework} setFramework={setFramework} virtualization={virtualization} setVirtualization={setVirtualization} mui={mui} setMui={setMui}/>
        <br />
        <Tables option={framework} mui={mui} virtualization={virtualization}/>
    </>
}

export default App;

function Controls({framework, setFramework, virtualization, setVirtualization, mui, setMui}: { framework: Options, setFramework: (option: Options) => void, virtualization: boolean, setVirtualization: (virtualization: boolean) => void, mui: boolean, setMui: (mui: boolean) => void }) {
    return <>
        <FormGroup>
            <FormControlLabel control={<Switch defaultChecked={mui} onClick={() => setMui(!mui)}/>} label="Use MUI components"/>
            <FormControlLabel control={<Switch defaultChecked={mui} onClick={() => setVirtualization(!virtualization)}/>} label="Use Virtualization"/>
            <ButtonGroup>
                {Object.values(Options).map(option => {
                    return <Button variant={framework === option ? "contained" : "outlined"} onClick={() => setFramework(option)}>{option}</Button>
                })}
            </ButtonGroup>
        </FormGroup>
    </>
}

function Tables({option, virtualization, mui}: { option: Options, virtualization: boolean, mui: boolean }) {
    switch (option) {
        case Options.MUI_X_DATA_GRID:
            return <MuiXDataGrid withMuiComponents={mui} withVirtualization={virtualization}/>
        case Options.DEV_EXTREME_REACTIVE_GRID:
            return <DevExtremeReactiveGrid withMuiComponents={mui} withVirtualization={virtualization}/>
        case Options.DEV_EXTREME_X_DATA_GRID:
            return <DevExtremeXDataGrid withMuiComponents={mui} withVirtualization={virtualization}/>
        case Options.REACT_TABLE_VIRTUOSO:
            return <ReactTableVirtuoso withMuiComponents={mui} withVirtualization={virtualization}/>
        case Options.AG_GRID:
            return <AgGrid withMuiComponents={mui} withVirtualization={virtualization}/>
    }
    return null
}