import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface authState {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user?: any,
}

const initialState: authState = {
}

export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer