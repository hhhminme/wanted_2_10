import { Dispatch, KeyboardEvent, SetStateAction } from "react";
import { matchedType } from "./Home";

export const createMatchedData = (
  cashedWordList: {
    name: string;
    id: number;
  }[],
  inputValue: string
): matchedType =>
  cashedWordList
    .filter((cash) => {
      return cash.name.includes(inputValue);
    })
    .map(({ name, id }) => ({ word: name, isSelected: false }));

export const useUpdateInputAndCloseMated = (
  word: string,
  cashedWordList: {
    name: string;
    id: number;
  }[],
  setShowMatched: Dispatch<SetStateAction<boolean>>,
  setAutoCompleteInput: Dispatch<SetStateAction<string>>,
  setDropdownList: Dispatch<SetStateAction<matchedType>>,
  handleSubmit: () => void
) => {
  setShowMatched(false);
  setAutoCompleteInput(word);
  const filteredCashes = createMatchedData(cashedWordList, word).slice(0, 10);
  setDropdownList(filteredCashes);
  handleSubmit();
};

export const findMatchedDataAndDefineModalIsOpenable = (
  cashedWordList: {
    name: string;
    id: number;
  }[],
  inputValue: string,
  setDropdownList: Dispatch<SetStateAction<matchedType>>,
  setShowMatched: Dispatch<SetStateAction<boolean>>
) => {
  const filteredCashes = createMatchedData(cashedWordList, inputValue).slice(
    0,
    5
  );
  setDropdownList(filteredCashes);
  filteredCashes.length ? setShowMatched(true) : setShowMatched(false);
};

export const defineNextDropdownIdx = (
  keyboardEvent: "ArrowDown" | "ArrowUp",
  curDropdownIdx: number,
  matched: matchedType
) => {
  if (keyboardEvent === "ArrowDown") {
    return curDropdownIdx === -1 || curDropdownIdx === matched.length - 1
      ? 0
      : curDropdownIdx + 1;
  }
  return curDropdownIdx === -1 || curDropdownIdx === 0
    ? matched.length - 1
    : curDropdownIdx - 1;
};

export const findCurrentInputWord = (
  dropdownList: matchedType,
  inputValue: string
): [number, string] => {
  const idx = dropdownList.findIndex(
    ({ word, isSelected }) => isSelected === true
  );
  const word = idx === -1 ? inputValue : dropdownList[idx].word;
  return [idx, word];
};
