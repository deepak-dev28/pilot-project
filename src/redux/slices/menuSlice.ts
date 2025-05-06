// src/features/menu/menuSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const loadFromStorage = (): MenuItem[] => {
  const data = localStorage.getItem('menu');
  return data ? JSON.parse(data) : [];
};

const saveToStorage = (items: MenuItem[]) => {
  localStorage.setItem('menu', JSON.stringify(items));
};

const menuSlice = createSlice({
  name: 'menu',
  initialState: loadFromStorage(),
  reducers: {
    addItem(state, action: PayloadAction<Omit<MenuItem, 'id'>>) {
      const newItem = { id: uuidv4(), ...action.payload };
      state.push(newItem);
      saveToStorage(state);
    },
    updateItem(state, action: PayloadAction<MenuItem>) {
      const idx = state.findIndex((i) => i.id === action.payload.id);
      if (idx !== -1) {
        state[idx] = action.payload;
        saveToStorage(state);
      }
    },
    deleteItem(state, action: PayloadAction<string>) {
      const filtered = state.filter((i) => i.id !== action.payload);
      saveToStorage(filtered);
      return filtered;
    },
  },
});

export const { addItem, updateItem, deleteItem } = menuSlice.actions;
export default menuSlice.reducer;
