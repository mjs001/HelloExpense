import { createSlice } from "@reduxjs/toolkit";
export const utilitiesSlice = createSlice({
  name: "utilities",
  initialState: {
    isEditing: false,
  },
  reducers: {
    isEditing: (state, action) => {
      return { ...state, isEditing: [action.payload] };
    },
  },
});

export const { isEditing } = utilitiesSlice.actions;
export default utilitiesSlice.reducer;
