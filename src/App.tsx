import React from 'react';
import './App.css';
import {GoogleLogin} from '@react-oauth/google';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <GoogleLogin
                    onSuccess={(response: unknown) => {
                        console.log('Logged in successfully:', response);
                    }}
                    useOneTap
                />
            </header>
        </div>
    );
}

export default App;
