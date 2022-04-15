import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./baseUrl";

export const getEmailList = createAsyncThunk(
  "email/getEmailList",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}`);
      return data;
    } catch (error) {
      return rejectWithValue(`Oops some error occured -> ${error}`);
    }
  }
);

export const getEmailBody = createAsyncThunk(
  "email/getEmailBody",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/?id=${payload.id}`);
      return data;
    } catch (error) {
      return rejectWithValue(`Oops some error occured -> ${error}`);
    }
  }
);
