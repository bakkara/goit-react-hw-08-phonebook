import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://651bdb34194f77f2a5aef818.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
        const {data} = await axios.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async (contact, thunkAPI) => {
    try {
        const {data} = await axios.post("/contacts", contact);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (id, thunkAPI) => {
    try {
      const {data} = await axios.delete(`/contacts/${id}`);
      return data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContacts",
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.put(`/contacts/${contact.id}`, contact); 
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);