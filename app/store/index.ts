import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import {productsAPI} from "../api/test";

const store =   configureStore({
  reducer: {
    counter: counterSlice,
    [productsAPI.reducerPath]: productsAPI.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPI.middleware)
    
});
// setupListeners(store.dispatch);


export default store

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch