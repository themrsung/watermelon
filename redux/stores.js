import { configureStore } from "@reduxjs/toolkit"
import currentSessionReducer from "./slices/currentSessionSlice"

export const store = configureStore({
    reducer: {
        currentSession: currentSessionReducer
    }
})

// 가져오기
// const currentSession = useSelector((state) => state.currentSession.value)

// set하기
// const dispatch = useDispatch()
// dispatch(setId("userId"))
// ))
