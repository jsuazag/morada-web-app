import { Fragment } from "react";
import { SampleContext } from "./contexts/SampleContext";
import { UserContextStore } from "./contexts/UserContext";
import { GlobalStyle } from "./globalStyles";
import { Navigation } from "./Navigation";

export const App = () => (
  <Fragment>
    <SampleContext.Provider value={"Juan"}>
      <UserContextStore>
        <GlobalStyle />
        <Navigation />
      </UserContextStore>
    </SampleContext.Provider>
  </Fragment>
);
