import { Fragment } from "react";
import { SampleContext } from "./contexts/SampleContext";
import { GlobalStyle } from "./globalStyles";
import { Navigation } from "./Navigation";

export const App = () => (
    <Fragment>
        <SampleContext.Provider value={'Juan'}>
            <GlobalStyle />
            <Navigation />
        </SampleContext.Provider>
    </Fragment>
)