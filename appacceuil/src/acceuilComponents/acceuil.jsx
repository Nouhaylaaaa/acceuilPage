import React from 'react';
import purpleImage from './image/purple.jpg'; // Importing the image
import { AiOutlineEnvironment, AiOutlineCalendar, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'; // Importing icons from react-icons

function Acceuil() {
    const inputRowStyle = {
        display: 'flex',
       
        alignItems: 'center',
        width: '100%',
        marginTop: '20px',
    };

    const inputLabelStyle = {
        position: 'relative',
        width: 400,
        height: 30,
        background: 'white',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.50)',
        borderRadius: 10,
        textAlign: 'center',
        color: '#000',
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: '400',
        wordWrap: 'break-word',
        margin: '0 5px',
    };

    const iconStyle = {
        position: 'absolute',
        width: '20px',
        height: '20px',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
    };

    const searchButtonStyle = {
        width: 60,
        height: 40,
        background: 'gray',
        borderRadius: '50%',
        cursor: 'pointer',
    };

    const handleSearch = () => {
        // Handle search functionality
    };

    return (
        <div>
            <img
                style={{ width: '105%', height: 350 }}
                src={purpleImage}
                alt="Purple Image"
            />
            <div style={inputRowStyle}>
                <div style={inputLabelStyle}>
                    <AiOutlineEnvironment style={iconStyle} />
                    <input
                        type="text"
                        style={{
                            width: '80%',
                            border: 'none',
                            background: 'transparent',
                            outline: 'none',
                            textAlign: 'center',
                        }}
                        placeholder="Destination"
                    />
                </div>
                <div style={inputLabelStyle}>
                    <AiOutlineCalendar style={iconStyle} />
                    <input
                        type="text"
                        style={{
                            width: '80%',
                            border: 'none',
                            background: 'transparent',
                            outline: 'none',
                            textAlign: 'center',
                        }}
                        placeholder="Date"
                    />
                </div>
                <div style={inputLabelStyle}>
                    <AiOutlineUser style={iconStyle} />
                    <input
                        type="text"
                        style={{
                            width: '80%',
                            border: 'none',
                            background: 'transparent',
                            outline: 'none',
                            textAlign: 'center',
                        }}
                        placeholder="numer of Person"
                    />
                </div>
                <div style={searchButtonStyle} onClick={handleSearch}>
                    <AiOutlineSearch style={{ width: '70%', height: '70%' }} />
                </div>
            </div>
        </div>
    );
}

export default Acceuil;
