import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { checkCodes } from "../../store/features/code/codeSlice";
import "./style.css";

export const Securty = () => {
  const dispatch = useAppDispatch();
  const { codeA, codeB, isFull, isFail } = useAppSelector(({ code }) => code);
  const setActiveClass = (code: string): number => {
    return code.length;
  };
  useEffect(() => {
    if (isFull) dispatch(checkCodes());
  }, [isFull]);

  const spans = Array.from({ length: 4 });
  return (
    <div className={`Securty ${isFail ? "animation" : ""}`}>
      <div className="SecurtyCode">
        {spans.map((_, index: number) => (
          <span
            key={index}
            className={`${index + 1 <= setActiveClass(codeA) ? "active" : ""}`}
          ></span>
        ))}
      </div>
      <hr />
      <div className="SecurtyCode">
        {spans.map((_, index: number) => (
          <span
            key={index}
            className={`${index + 1 <= setActiveClass(codeB) ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};
