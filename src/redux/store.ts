import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";

export default configureStore({
  reducer: {
    datas: dataReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof configureStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof configureStore.dispatch;