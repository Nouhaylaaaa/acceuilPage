import React from 'react';

const HeaderAcceuil = () => {
    const headerStyle = {
        width: '100%',
        height: '100%',
        position: 'relative',
    };

    const whiteBarStyle = {
        width: 1440,
        height: 80,
        left: 0,
        top: 0,
        position: 'absolute',
        background: 'white',
    };

    const loginButtonStyle = {
        width: 150,
        height: 50,
        left: 893,
        top: 20,
        position: 'absolute',
        background: '#C266D6',
        borderRadius: 20,
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontFamily: 'Inter',
        fontWeight: 400,
        wordWrap: 'break-word',
        cursor: 'pointer',
    };

    const signUpButtonStyle = {
        width: 150,
        height: 50,
        left: 1175,
        top: 20,
        position: 'absolute',
        background: '#C266D6',
        borderRadius: 20,
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontFamily: 'Inter',
        fontWeight: 400,
        wordWrap: 'break-word',
        cursor: 'pointer',
    };

    const handleLogin = () => {
        // Handle login functionality here
    };

    const handleSignUp = () => {
        // Handle sign-up functionality here
    };

    return (
        <div style={headerStyle}>
            <div style={whiteBarStyle} />
            <button style={loginButtonStyle} onClick={handleLogin}>LOG IN</button>
            <button style={signUpButtonStyle} onClick={handleSignUp}>SIGN UP</button>
        </div>
    );
};

export default HeaderAcceuil;
