import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ✅ Твій коректний базовий URL
axios.defaults.baseURL = 'https://684983b245f4c0f5ee71c970.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/contacts'); // ✅ endpoint
    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const res = await axios.post('/contacts', contact);
    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    const res = await axios.delete(`/contacts/${id}`);
    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
