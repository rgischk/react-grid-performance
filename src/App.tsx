import React, {useState} from 'react';
import './App.css';
import DevExpressReactGrid from "./DevExpressReactGrid";
import MuiTable from "./MuiTable";
import {Button} from "@mui/material";

enum Options {
    MUI_WITH_MUI_COMPONENTS = "MUI with MUI Components",
    MUI_WITHOUT_MUI_COMPONENTS = "MUI without MUI Components",
    DEV_EXPRESS_WITH_MUI_COMPONENTS = "DevExpress with MUI Components",
    DEV_EXPRESS_WITHOUT_MUI_COMPONENTS = "DevExpress without MUI Components"
}

function App() {

    const [framework, setFramework] = useState<Options>(Options.MUI_WITH_MUI_COMPONENTS)

    return <>
        <Buttons onClick={setFramework}/>
        <Table option={framework}/>
    </>
}

export default App;

function Buttons({onClick}: {onClick: (option: Options) => void}) {
    return <>
        {Object.values(Options).map(option => {
            return <Button variant="outlined" onClick={() => onClick(option)}>{option}</Button>
        })}
    </>
}

function Table({option}: {option: Options}) {
    switch (option) {
        case Options.MUI_WITH_MUI_COMPONENTS:
            return <MuiTable withMuiComponents={true}/>
        case Options.MUI_WITHOUT_MUI_COMPONENTS:
            return <MuiTable withMuiComponents={false}/>
        case Options.DEV_EXPRESS_WITH_MUI_COMPONENTS:
            return <DevExpressReactGrid withMuiComponents={true}/>
        case Options.DEV_EXPRESS_WITHOUT_MUI_COMPONENTS:
            return <DevExpressReactGrid withMuiComponents={false}/>
    }
    return null
}