import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types/general";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const getAllUsers = createAsyncThunk<
  User[],
  void,
  { rejectValue: string }
>("/users", async (_, thunkAPI) => {
  try {
    const res = await axios.get<User[]>("/users");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});
