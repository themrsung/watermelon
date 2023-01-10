import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: "",
    loggedIn: false
}

export const currentSessionSlice = createSlice({
    name: "currentSession",
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id = action.payload
            state.loggedIn = true
        },
        clear: (state) => {
            state.id = ""
            state.loggedIn = false
        }
    }
})

export const { setId, clear } = currentSessionSlice.actions
export default currentSessionSlice.reducer
