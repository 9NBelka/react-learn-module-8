import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/operations";
import { fetchTasks, addTask, deleteTask } from "./operations";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchTasks.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchTasks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.item = action.payload;
    })
    .addCase(fetchTasks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(addTask.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(addTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    })
    .addCase(addTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .deleteCase(deleteTask.pending, (state) => {
      state.isLoading = true;
    })
    .deleteCase(deleteTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (task) => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    })
    .deleteCase(deleteTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(logOut.fulfilled, (state) => {
      state.item = [];
      state.error = null;
      state.isLoading = false;
    });
  },
});