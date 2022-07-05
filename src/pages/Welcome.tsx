import { useState } from "react";
import { useDispatch } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import EasyPanel from "../components/welcome-panels/EasyPanel";
import HardPanel from "../components/welcome-panels/HardPanel";
import MediumPanel from "../components/welcome-panels/MediumPanel";
import { clearWord } from "../store/slices/wordSlice";

export default function Welcome() {
  const [tab, selectTab] = useState<number>(0);
  const getUnderlineColor = () => {
    switch (tab) {
      case 0:
        return "var(--mainGreen)";
      case 1:
        return "var(--mainYellow)";
      case 2:
        return "var(--mainRed)";
      default:
        return "var(--mainGreen)";
    }
  };
  const dispatch = useDispatch();
  dispatch(clearWord());
  return (
    <div className="game-container">
      <div className="d-flex flex-column">
        <div className="col-12 text-center mt-5 mb-3">
          <h1 className="green-text fw-bolder">Wordle</h1>
          <p className="fw-semibold">A simple wordle game.</p>
        </div>
        <Tabs onSelect={(index) => selectTab(index)}>
          <TabList style={{ borderBottomColor: getUnderlineColor() }}>
            <Tab
              style={
                tab !== 0
                  ? undefined
                  : {
                      borderColor: "var(--mainGreen)",
                      color: "var(--mainGreen)",
                    }
              }
            >
              Easy
            </Tab>
            <Tab
              style={
                tab !== 1
                  ? undefined
                  : {
                      borderColor: "var(--mainYellow)",
                      color: "var(--mainYellow)",
                    }
              }
            >
              Medium
            </Tab>
            <Tab
              style={
                tab !== 2
                  ? undefined
                  : { borderColor: "var(--mainRed)", color: "var(--mainRed)" }
              }
            >
              Hard
            </Tab>
          </TabList>

          <TabPanel>
            <EasyPanel />
          </TabPanel>
          <TabPanel>
            <MediumPanel />
          </TabPanel>
          <TabPanel>
            <HardPanel />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
