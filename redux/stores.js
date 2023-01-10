import { configureStore } from "@reduxjs/toolkit"
import currentSessionReducer from "./slices/currentSessionSlice"
import currentPlaylistReducer from "./slices/currentPlaylistSlice"

export const store = configureStore({
    reducer: {
        currentSession: currentSessionReducer,
        currentPlaylist: currentPlaylistReducer
    }
})

// 가져오기
// const currentSession = useSelector((state) => state.currentSession.value)

// set하기
// const dispatch = useDispatch()
// dispatch(setId("userId"))
// ))
