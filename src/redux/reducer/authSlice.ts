import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  data: string;
}

const initialState: AuthState = {
  data: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
});

export const {  } = authSlice.actions;

export default authSlice.reducer;
