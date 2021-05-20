import { configureStore } from "@reduxjs/toolkit";
import attractionsReducer from "./reducers/attractionsSlice";
import firebase from '../firebase/firebase';
import { reduxFirestore, getFirestore, firestoreReducer } from 'redux-firestore'

export default configureStore({
  reducer: {
    attractions: attractionsReducer,
    firestoreReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: [{ getFirestore },
        reduxFirestore(firebase)
        ]
      }
    })
})
