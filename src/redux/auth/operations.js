import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://goit-task-manager.herokuapp.com/";

export  const register = createAsyncThunk("auth/register", 
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", userInfo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export  const logIn = createAsyncThunk("auth/login", async (userInfo, thunkAPI) => {
  try {
    const response = await axios.post("/users/login", userInfo);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export  const logOut = createAsyncThunk("auth/logout", async () => {});
