import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IRootSetting {
  modal: {
    isActive: boolean;
    text?: string;
  };
  profile: {
    username: string | null;
    lvl: number;
    exp: number;
    maxExp: number;
  };
}
const initialState: IRootSetting = {
  modal: {
    isActive: false,
  },
  profile: {
    username: localStorage.getItem("profile")
      ? JSON.parse(localStorage["profile"]).username
      : null,
    lvl: localStorage.getItem("profile")
      ? JSON.parse(localStorage["profile"]).lvl
      : 1,
    exp: localStorage.getItem("profile")
      ? JSON.parse(localStorage["profile"]).exp
      : 0,
    maxExp: 500,
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
    addUserName(state, payload: PayloadAction<string>) {
      if (payload.payload.length !== 0) {
        state.profile.username = payload.payload;
      }
    },
    updateLocalStorage({ profile }) {
      const data = {
        username: profile.username,
        lvl: profile.lvl,
        exp: profile.exp,
      };
      localStorage.setItem("profile", JSON.stringify(data));
    },
    addExp(state, payload: PayloadAction<number>) {
      state.profile.exp = state.profile.exp + payload.payload;
      if (state.profile.exp >= state.profile.maxExp) {
        state.profile.lvl = state.profile.lvl + 1;
        state.profile.exp = state.profile.exp % state.profile.maxExp;
      }
    },
  },
});

export default RootSetting.reducer;
