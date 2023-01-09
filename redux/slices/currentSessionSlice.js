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
            state.value = {
                id: action.payload,
                loggedIn: true
            }
        },
        clear: (state) => {
            state.value = initialState
        }
    }
})

export const { setId, clear } = currentSessionSlice.actions
export default currentSessionSlice.reducer
