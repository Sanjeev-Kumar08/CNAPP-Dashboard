import { configureStore } from '@reduxjs/toolkit';
import widgetReducer from '../feature/slice';

const store = configureStore({
  reducer: {
    widget: widgetReducer, 
  },
});

export default store;
