import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    music: "10"
}

export const currentMusicSlice = createSlice({
    name: "currentMusic",
    initialState,
    reducers: {
        setMusic: (state, action) => {
            state.music = action.payload
        }
    }
})

export const { setMusic } = currentMusicSlice.actions
export default currentMusicSlice.reducer
