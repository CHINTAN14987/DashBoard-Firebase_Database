import { createSlice } from "@reduxjs/toolkit";

const initialState = { item: [] };
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    taskCreation: (state, action) => {
      state.item.push({
        id: action.payload.id,
        newtask: action.payload.newtask,
        aissgnedTo: action.payload.aissgnedTo,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        remindDate: action.payload.remindDate,
        body: action.payload.body,
        subject: action.payload.subject,
      });
    },
  },
});

export const taskactions = taskSlice.actions;
export default taskSlice.reducer;
