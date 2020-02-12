import React, { useState } from "react";

import "./assets/css/scss/styles.css";
import InputPage from "./Pages/InputPage";
import ButtonPages from "./Pages/ButtonPages";
import TablePages from "./Pages/TablePages";
import OtherPages from "./Pages/OtherPages";
import Accordian from "./component/Accordian";
import LoaderPages from "./Pages/LoaderPages";
import { NumberField, PINCodeField } from "./component/Input";
import PatternField from "./component/Input/PatternField";
import { Email } from "./Pattern";
import { Tabs, Tab } from "./component/Tabs";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { ReactComponent as LeftIcon } from "./assets/angle-left.svg";

function App() {
  const saral = ` S S S    A    R R R     A    L\nS        A A   R    R   A A   L\nS        A A   R   R    A A   L\n  SS    A A A  RR R    A A A  L\n     S  A   A  R  R    A   A  L\n     S A     A R   R  A     A L\nS S S  A     A R    R A     A L L L L\n= = = = = = = = = = = = = = = = = = = = =>>`;
  console.log(saral);

  const [number, setNumber] = useState();
  return (
    <Router>
      <div style={{ width: "70%", margin: "50px auto" }}>
        <div>
          <PatternField
            placeholder="pattern field"
            pattern={Email.pattern}
            patternMsg={Email.patternMsg}
          />
          <div style={{ marginBottom: "20px" }}>
            <PINCodeField
              value={number}
              onChange={e => setNumber(e.target.value)}
            />
            <NumberField maxLength={3} />
            <NumberField maxLength={3} />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <Tabs>
              <Tab>
                <NavLink to="/myaccount">
                  <LeftIcon />
                  My Account
                </NavLink>
              </Tab>
              <Tab>
                <NavLink to="/myaccount3">
                  <LeftIcon />
                  My Account3
                </NavLink>
              </Tab>
              <Tab>
                <NavLink to="/myaccount2">
                  <LeftIcon />
                  My Account2
                </NavLink>
              </Tab>
            </Tabs>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <Accordian color="purple" header="Other Component">
              <OtherPages />
            </Accordian>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Accordian color="close" header="Button Component">
              <ButtonPages />
            </Accordian>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Accordian color="danger" header="Input Component">
              <InputPage />
            </Accordian>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Accordian color="secondary" header="Table Component">
              <TablePages />
            </Accordian>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Accordian header="Loader Component">
              <LoaderPages />
            </Accordian>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
