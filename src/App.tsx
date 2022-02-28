import React, { useState, useEffect } from "react";
import Global from "./Styles/global";
import Home from "./Pages/Home";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./redux/dataSlice";

function App() {
  const [cashedWordList, setCashedWordList] = useState([
    {
      name: "Klatskin's tumor",
      id: 125,
    },
  ]);
  const [autoCompleteInput, setAutoCompleteInput] = useState("");

  const dispatch = useDispatch();
  // @ts-ignore
  const { datas, loading, error } = useSelector((state) => state.datas);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (loading) {
      console.log("loading");
    }
    dispatch(fetchData(autoCompleteInput));
    setCashedWordList(datas);
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
