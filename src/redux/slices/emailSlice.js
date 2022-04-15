import { createSlice } from "@reduxjs/toolkit";
import { getEmailBody, getEmailList } from "../../services/apiCalls";

const favInitialState = localStorage.getItem("favEmails")
  ? JSON.parse(localStorage.getItem("favEmails"))
  : [];

export const emailSlice = createSlice({
  name: "email",
  initialState: {
    loading: false,
    emails: [],
    emailBodyPending: false,
    emailBody: {},
    favourite: favInitialState,
  },
  reducers: {
    // add an email to fav
    addToFav: (state, action) => {
      const favEmail = state.emails.find(
        (email) => email.id === action.payload.id
      );
      state.favourite.push(favEmail);
      localStorage.setItem("favEmails", JSON.stringify(state.favourite));
    },

    // remove an email from fav
    removeFromFav: (state, action) => {
      const remainingEmails = state.favourite.filter(
        (email) => email.id !== action.payload.id
      );
      state.favourite = remainingEmails;
      localStorage.setItem("favEmails", JSON.stringify(state.favourite));
    },
  },
  extraReducers: {
    // get all emails list
    [getEmailList.pending]: (state, action) => {
      state.loading = true;
    },
    [getEmailList.fulfilled]: (state, action) => {
      state.loading = false;
      state.emails = action.payload.list;
    },
    [getEmailList.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },

    // get email body
    [getEmailBody.pending]: (state, action) => {
      state.emailBodyPending = true;
    },
    [getEmailBody.fulfilled]: (state, action) => {
      state.emailBodyPending = false;
      state.emailBody = action.payload;
    },
    [getEmailBody.rejected]: (state, action) => {
      state.emailBodyPending = false;
      console.log(action.payload);
    },
  },
});

export const { addToFav, removeFromFav } = emailSlice.actions;

export default emailSlice.reducer;
