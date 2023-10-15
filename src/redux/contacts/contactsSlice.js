import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, editContact } from "./operations";


  
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addContact.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = state.items.filter(contact => contact.id !== action.payload)
        },
        [deleteContact.rejected]: handleRejected,
        [editContact.pending]: handlePending,
        [editContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const existingContactIndex = state.items.findIndex(
                (contact) => contact.id === action.payload.id
            );
            if (existingContactIndex !== -1) {
                state.items[existingContactIndex] = action.payload;
            }
        },
        [editContact.rejected]: handleRejected,
    }
})


export const contactsReducer = contactsSlice.reducer
