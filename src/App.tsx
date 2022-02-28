import React, { useState, useEffect } from "react";
import Global from "./Styles/global";
import Home from "./Pages/Home";
import axios from "axios";

function App() {
  const [cashedWordList, setCashedWordList] = useState([
    {
      name: "Klatskin's tumor",
      id: 125,
    },
  ]);
  const [autoCompleteInput, setAutoCompleteInput] = useState("");

  const getList = async (autoCompleteInput: any) => {
    try {
      const response = await axios.get(
        "https://api.clinicaltrialskorea.com/api/v1/search-conditions/",
        {
          params: {
            name: autoCompleteInput,
          },
        }
      );
      setCashedWordList(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getList(autoCompleteInput);
    console.log(cashedWordList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoCompleteInput]);

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
