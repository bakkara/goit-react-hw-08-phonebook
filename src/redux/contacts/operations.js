import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-hot-toast';

  export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
        const {data} = await axios.get("/contacts");
      return data;
    } catch (error) {
      toast.error('Oops. Something is wrong. Please try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({name,number}, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", { name, number });
       toast.success(`Contact ${name} with number ${number} is added to the phonebook!`);
      return data;
    } catch (e) {
       toast.error('Oops. Something is wrong. Please try again!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (id, thunkAPI) => {
    try {
      const {data} = await axios.delete(`/contacts/${id}`);
      toast.success(`Contact was deleted from the phonebook!`);
      return data.id;
    } catch (e) {
       toast.error('Oops. Something is wrong. Please try again!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContacts",
  async ({id, name, number}, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, {name, number}); 
      toast.success(`Contact ${name} with number ${number} was succesfully edited`);
      return data;
    } catch (e) {
       toast.error('Oops. Something is wrong. Please try again!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);