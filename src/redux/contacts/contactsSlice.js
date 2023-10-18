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
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
                })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.error = null;
                    state.items = state.items.filter(contact => contact.id !== action.payload)
            })
            .addCase(deleteContact.rejected, handleRejected)
            .addCase(editContact.pending, handlePending)
        
        .addCase(editContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const existingContactIndex = state.items.findIndex(
                (contact) => contact.id === action.payload.id
            );
            if (existingContactIndex !== -1) {
                state.items[existingContactIndex] = action.payload;
            }
        })
        .addCase(editContact.rejected, handleRejected)
    }
})


export const contactsReducer = contactsSlice.reducer
