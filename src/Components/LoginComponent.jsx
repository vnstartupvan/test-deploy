import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode'
import { handleLogin, handleLogout } from '../Redux/shopReducer';
import { useEffect } from 'react';

function LoginComponent() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.shop.user);

    useEffect(() => {
        const handleCredentialResponse = response => {
            const user = jwt_decode(response.credential)
            dispatch(handleLogin(user));
        };

        if (!user) {
            window.google.accounts.id.initialize({
                client_id: '658443136711-li4ip94et41bdj04vkuovqev658mpoeu.apps.googleusercontent.com',
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                document.querySelector('.gg-login-btn'),
                { type: '', theme: 'outline', size: '' }
            )
        }

    }, [])
    return (
        <div>
            <div className="gg-btn-wrapper">
                <div className="gg-login-btn"></div>
            </div>
        </div>

    )
}

export default LoginComponent