import React from "react";
import "./App.css";
import AlignAction from "./components/alignTextActions";
import FontsActions from "./components/fontsActions";
import WeightActions from "./components/weightActions";
import { handleWeight } from "./utils/handleWeight";
import { handleJustify } from "./utils/handleJustify";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-12">
            <div className="title">
              <h1>Text Editor</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <div className="mb-3">
                <FontsActions />
              </div>
              <div className="mb-3">
                <WeightActions handleWeight={handleWeight} />
              </div>
              <div className="mb-3">
                <AlignAction handleJustify={handleJustify} />
              </div>
            </div>
            <div
              id="textarea"
              className="text-start ps-1"
              contentEditable
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
