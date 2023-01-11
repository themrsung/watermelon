import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: "",
    isLoggedIn: false
}

export const currentSessionSlice = createSlice({
    name: "currentSession",
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id = action.payload
            state.isLoggedIn = true
        },
        clear: (state) => {
            state.id = ""
            state.isLoggedIn = false
        }
    }
})

export const { setId, clear } = currentSessionSlice.actions
export default currentSessionSlice.reducer
