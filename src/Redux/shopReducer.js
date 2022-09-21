import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    user: '',
}

export const shopReducer = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        handleLogin: (state, action) => {
            const userInfo = action.payload;
            state.user = userInfo;
        },
        handleLogout: (state, action) => {
            state.user = '';
        }
    }
});

export const { handleLogin, handleLogout } = shopReducer.actions;
export default shopReducer.reducer