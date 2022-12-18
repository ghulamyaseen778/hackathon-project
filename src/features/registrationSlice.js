import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Loginerror: false,
    statement: [],
    IfModal: false,
    UserSelection: "User"
}

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        LoginError: (state, action) => {
            const Error = action.payload;
            state.Loginerror = Error.bool;
            state.statement = Error.statement;
        },
        ModalOpen: (state, action) => {
            const ModalOpen = action.payload;
            state.IfModal = ModalOpen
        },
        UserSelecter: (state, action) => {
            const User = action.payload;
            state.UserSelection = User
        }
    }
})

export const { LoginError, ModalOpen, UserSelecter } = registrationSlice.actions;
export default registrationSlice.reducer