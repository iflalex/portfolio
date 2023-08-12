import { configureStore } from '@reduxjs/toolkit'
//Reducer
import linksNameReducer from './features/LinksName';

export const store = configureStore({
  reducer: {
    //Data Accès
    linksName: linksNameReducer
    
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch