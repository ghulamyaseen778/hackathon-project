import { configureStore } from '@reduxjs/toolkit'
import UserRegistration from '../features/registrationSlice'
import UserReducer from '../features/UsersSlice'
import Datareducer from '../features/Tarnsport'

export const store = configureStore({
    reducer: {
        Registration: UserRegistration,
        UserInfo: UserReducer,
        Data: Datareducer
    }
})