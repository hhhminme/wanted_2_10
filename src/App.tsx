import React, { useState } from "react";
import Global from "./Styles/global";
import Home from "./Pages/Home";

import { country } from "./Pages/Home/constant";

function App() {
  const [cashedWordList, setCashedWordList] = useState(country);
  const [autoCompleteInput, setAutoCompleteInput] = useState("");
  return (
    <>
      <Global />
      <Home
        cashedWordList={cashedWordList}
        setAutoCompleteInput={setAutoCompleteInput}
        autoCompleteInput={autoCompleteInput}
        handleSubmit={() => console.log("AutoComplete Enter pushed!")}
      />
    </>
  );
}

export default App;
