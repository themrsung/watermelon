import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    playlist: "1"
}

export const currentPlaylistSlice = createSlice({
    name: "currentPlaylist",
    initialState,
    reducers: {
        setPlaylist: (state, action) => {
            state.playlist = action.payload
        }
    }
})

export const { setPlaylist } = currentPlaylistSlice.actions
export default currentPlaylistSlice.reducer
