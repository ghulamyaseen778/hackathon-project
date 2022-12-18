import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../config/firbase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

export const Fetchdata = createAsyncThunk("Data/fetch", async () => {
  const Ref = collection(db, "Data");
  let arr = []
  const querySnapshot = await getDocs(Ref);
  querySnapshot.forEach((doc) => {
    arr.push(doc.data())
  });
  return { arr, bool: true };
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  //   return arr;
  // // }
});

const DataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    bool: false,
    status: STATUSES,
  },
  extraReducers: (builder) => {
    builder.addCase(Fetchdata.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(Fetchdata.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload.arr;
      state.bool = action.payload.bool;

    });
    builder.addCase(Fetchdata, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

const { reducer } = DataSlice;
export default reducer;
