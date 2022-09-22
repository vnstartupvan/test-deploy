import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    user: JSON.parse(localStorage.getItem('account')),
}

export const shopReducer = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        handleLogin: (state, action) => {
            localStorage.setItem('account', JSON.stringify(action.payload));
            state.user = action.payload;
        },
        handleLogout: (state, action) => {
            localStorage.removeItem("account");
            state.user = '';
        }
    }
});

export const { handleLogin, handleLogout } = shopReducer.actions;
export default shopReducer.reducer