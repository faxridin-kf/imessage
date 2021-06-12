import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import chatReducer from '../features/chatSlice';
export const store = configureStore({
  reducer: {
    counter: userReducer,
    chat: chatReducer,
  },
});
