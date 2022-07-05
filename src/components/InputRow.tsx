import React, { useContext, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkWordle } from "../helpers/checkWords";
import WinStatus from "./modals/winStatus";
import { RootState } from "../store";
import { Attempt, setAttempt } from "../store/slices/wordSlice";
import { ModalContext } from "./ModalProvider";

const InputRow = () => {
  const { loadedWord, attempts, pattern } = useSelector(
    (state: RootState) => state.word
  );
  const { showModal } = useContext(ModalContext);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [editable, setEditable] = useState(true);
  const inputRef = useRef<any>();
  const regex = new RegExp(pattern);

  const keyUpHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input.length === loadedWord.length) {
      const attempt: Attempt = checkWordle(input, loadedWord);
      setInput("");
      if (attempt.isCorrect) {
        dispatch(setAttempt(attempt));
        const winStatus = <WinStatus win={true} />;
        showModal(winStatus);
        setEditable(false);
      } else {
        if (attempts.length === 5) {
          const winStatus = <WinStatus win={false} />;
          showModal(winStatus);
          setEditable(false);
        }
        dispatch(setAttempt(attempt));
      }
    }
  };
  const filterNonMatchingChars = (word: string) => {
    let output: string = "";
    for (let i = 0; i < word.length; i++) {
      if (regex.test(word[i])) {
        output += word[i];
      }
    }
    return output;
  };
  const carretIndex =
    (inputRef.current as HTMLInputElement)?.selectionStart ?? 0;
  const focusIndex =
    carretIndex < loadedWord.length ? carretIndex : loadedWord.length - 1;
  return (
    <div className="attempt-row">
      {editable && (
        <>
          <label className="attempt-label" htmlFor="input-field">
            {loadedWord.split("").map((_, index) => {
              const isCurrent: boolean = focusIndex !== index;
              return (
                <span
                  key={index}
                  className={`${isCurrent ? "" : "focused-cell"}`}
                >
                  {(input.charAt(index) ?? "").toUpperCase()}
                </span>
              );
            })}
          </label>

          <input
            type="text"
            id="input-field"
            ref={inputRef}
            value={input}
            autoFocus={true}
            maxLength={loadedWord.length}
            autoComplete="off"
            readOnly={!editable}
            onChange={(e) => {
              const filtered = filterNonMatchingChars(e.target.value);
              e.target.setSelectionRange(filtered.length, filtered.length);
              setInput(filtered);
            }}
            onKeyUp={keyUpHandler}
          />
        </>
      )}
    </div>
  );
};

export default InputRow;

/*import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { spliceSplit } from "../helpers/replaceCharacter";
import { RootState } from "../store";
import { Attempt, setAttempt } from "../store/slices/wordSlice";

const InputRow = () => {
  const { loadedWord, pattern, position } = useSelector(
    (state: RootState) => state.word
  );
  const dispatch = useDispatch();
  const regex = new RegExp(pattern);
  const [input, setInput] = useState("");
  const a = useRef<NodeListOf<any> | null>();
  useEffect(() => {
    a.current = document.querySelectorAll(".tile > input");
    return () => {
      a.current = null;
    };
  }, []);
  const updateState = (e: React.FormEvent<HTMLInputElement>) => {
    let string = "";
    if (a.current != null) {
      for (let input of a.current) {
        string += input.value;
      }
      console.log(string);
      setInput(string);
      a.current[
        string.length < loadedWord.length ? string.length : loadedWord.length
      ]?.focus();
    }
  };
  const updatePosition = (e: React.KeyboardEvent) => {
    const currentFocusedId: number = parseInt(
      e.currentTarget.id?.split("-")[1]
    );

    if (
      e.key === "Backspace" &&
      (e.currentTarget as HTMLInputElement).value === ""
    ) {
      if (a.current) {
        for (let input of a.current) {
          if (
            input.id ===
            `char_${currentFocusedId > 0 ? currentFocusedId - 1 : 0}`
          ) {
            input.focus();
            break;
          }
          input.value = "";
        }
      }
    }
  };

  return (
    <div className="attempt-row">
      {loadedWord.split("").map((_, index: number) => {
        const id = `char_${index}`;
        return (
          <div key={index}>
            <label className="tile" htmlFor={id}>
              <input
                id={id}
                type="text"
                maxLength={1}
                onChange={updateState}
                onKeyDown={updatePosition}
                value={input[index] ?? ""}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default InputRow;
 */
