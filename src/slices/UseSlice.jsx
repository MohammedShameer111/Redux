// In UseSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userInfo',
  initialState: { users: [] },
  reducers: {
    setUsers: (state, action) => {
      state.users.push({ ...action.payload, id: Date.now() }); // Assign unique ID
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload); // Remove user by ID
    },
  },
});

export const { setUsers, deleteUser } = userSlice.actions;
export default userSlice.reducer;
