import React,{Fragment} from 'react';
import Input from './component/Input.Component.js';
import Home from './component/Home.Component.js';
import {ErrorBoundary} from './ErrorBoundary';

const App=(props)=>{
    return (
        <Fragment>
            <ErrorBoundary>
                <Input/>
            </ErrorBoundary>
            <ErrorBoundary>
                <Home/>
            </ErrorBoundary>
        </Fragment>
    )
}

export default App;