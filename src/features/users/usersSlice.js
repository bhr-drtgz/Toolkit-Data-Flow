import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "0", name: "Bahri Dörtgöz" },
    { id: "1", name: "Hakan Kaya" },
    { id: "2", name: "Ali Yılmaz" }
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: { }
})

export const selectAllusers = (state) => state.users;

export default usersSlice.reducer