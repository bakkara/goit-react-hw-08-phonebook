import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
        const {data} = await axios.post("/contacts", contact);
      return data;
    } catch (e) {
      console.log(e.message)
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
  async ({id, name, number}, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, {name, number}); 
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);