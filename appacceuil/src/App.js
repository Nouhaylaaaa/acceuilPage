import React from 'react';
import './App.css';
import HeaderAcceuil from './acceuilComponents/HeaderAcceuil';
import Acceuil from './acceuilComponents/acceuil';

function App() {
    return ( <
        div className = "App" >
        <
        HeaderAcceuil / >
        <
        Acceuil / > { /* Include the Acceuil component */ } <
        /div>
    );
}

export default App;