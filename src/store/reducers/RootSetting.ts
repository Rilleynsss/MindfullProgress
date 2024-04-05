import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IRootSetting {
  modal: {
    isActive: boolean;
    text?: string;
  };
  profile: {
    username: string;
    lvl: number;
  };
}
const initialState: IRootSetting = {
  modal: {
    isActive: false,
  },
  profile: {
    username: "Викуля",
    lvl: 5,
  },
};

export const RootSetting = createSlice({
  name: "root",
  initialState,
  reducers: {
    swipeModalActivity(state, payload: PayloadAction<[boolean, string]>) {
      state.modal.isActive = payload.payload[0];
      if (payload.payload[1]) {
        state.modal.text = payload.payload[1];
      }
    },
  },
});

export default RootSetting.reducer;
