import { configureStore } from '@reduxjs/toolkit'
//Reducer
import LinkReducer from './features/LinkSlice';
import ProjectsReducer from './features/ProjectsSlice';
import TransitionSlice from './features/TransitionSlice';
import ContactSlice from './features/ContactSlice';

export const store = configureStore({
  reducer: {
    //Data Accès
    linkSlice: LinkReducer,
    projectsSlice: ProjectsReducer,
    transitionSlice: TransitionSlice,
    contactSlice: ContactSlice,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch