import "./styles.css";
import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { removeCode, setCode } from "../../store/features/code/codeSlice";
const pattern = /\d/;
export const Numbers = () => {
  const dispatch = useAppDispatch();
  const setNumber = (e: KeyboardEvent) => {
    if (pattern.test(e.key)) dispatch(setCode(e.key));
    if (e.key === "Backspace") dispatch(removeCode());
  };

  useEffect(() => {
    window.addEventListener("keyup", setNumber);
    return () => window.removeEventListener("keyup", setNumber);
  }, []);

  return (
    <div className="Numbers">
      <button onClick={() => dispatch(setCode("1"))}>1</button>
      <button onClick={() => dispatch(setCode("2"))}>2</button>
      <button onClick={() => dispatch(setCode("3"))}>3</button>
      <button onClick={() => dispatch(setCode("4"))}>4</button>
      <button onClick={() => dispatch(setCode("5"))}>5</button>
      <button onClick={() => dispatch(setCode("6"))}>6</button>
      <button onClick={() => dispatch(setCode("7"))}>7</button>
      <button onClick={() => dispatch(setCode("8"))}>8</button>
      <button onClick={() => dispatch(setCode("9"))}>9</button>
      <button onClick={() => dispatch(setCode("0"))}>0</button>
      <button onClick={() => dispatch(removeCode())}>&#171;</button>
    </div>
  );
};
