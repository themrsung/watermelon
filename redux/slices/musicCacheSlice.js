import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    musics: []
}

export const musicCacheSlice = createSlice({
    name: "musicCache",
    initialState,
    reducers: {
        addToCache: (state, action) => {
            state.musics.push(action.payload)
        },
        clearCache: (state) => {
            state.musics = []
        }
    }
})

export const { addToCache, clearCache } = musicCacheSlice.actions
export default musicCacheSlice.reducer
