import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    authenticated: false,
    access_token: null,
    refresh_token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.authenticated = true;
            state.access_token = action.payload.access_token;
            state.refresh_token = action.payload.refresh_token;
            document.cookie = `access_token_next_fit=${action.payload.access_token}; path=/;`;
            document.cookie = `refresh_token_next_fit=${action.payload.refresh_token}; path=/;`;
        },
        logout: state => {
            state.authenticated = false;
            state.access_token = null;
            state.refresh_token = null;
        },
        setauthenticated: (state, action) => {
            state.authenticated = action.payload;
        },
        setTokens: (state, action) => {
            state.access_token = action.payload.access_token;
            state.refresh_token = action.payload.refresh_token;
        },
    },
});

export const { setauthenticated, setTokens, loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
