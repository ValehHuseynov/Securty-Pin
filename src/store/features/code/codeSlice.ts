import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./data";

export const codeSlice = createSlice({
  name: "code",
  initialState,
  reducers: {
    setCode: (state, action: PayloadAction<string>) => {
      let codeA = state.codeA;
      let codeB = state.codeB;
      const codeALength = codeA.length;
      const codeBLength = codeB.length;
      const hasCodeA = codeALength < 4;

      if (codeALength === 4 && codeBLength === 4) {
        state.isFull = true;
        return state;
      }
      if (hasCodeA) codeA += action.payload;
      if (!hasCodeA) codeB += action.payload;

      return {
        ...state,
        codeA,
        codeB,
        isFull: codeBLength + 1 === 4,
        isSuccess: false,
        isFail: false,
      };
    },
    removeCode: (state) => {
      let codeA = state.codeA;
      let codeB = state.codeB;
      if (!codeB) codeA = state.codeA.slice(0, -1);
      if (codeB) codeB = state.codeB.slice(0, -1);
      return {
        ...state,
        codeA,
        codeB,
        isFull: false,
        isSuccess: false,
        isFail: false,
      };
    },
    checkCodes: (state) => {
      const codeA = state.codeA;
      const codeB = state.codeB;

      if (codeA === codeB) return { ...state, isSuccess: true };
      if (codeA !== codeB) return { ...initialState, isFail: true };
    },
    reset: () => ({ ...initialState }),
  },
});

export const { setCode, removeCode, checkCodes, reset } = codeSlice.actions;

export default codeSlice.reducer;
