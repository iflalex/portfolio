import { configureStore } from '@reduxjs/toolkit'
//Reducer
import LinkReducer from './features/LinkSlice';
import CarousselReducer from './features/CarousselSlice';
import TransitionSlice from './features/TransitionSlice';

export const store = configureStore({
  reducer: {
    //Data Accès
    linkSlice: LinkReducer,
    carousselSlice: CarousselReducer,
    transitionSlice: TransitionSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch