import React from 'react'
import { Outlet } from 'react-router-dom';

const Account = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Outlet />
            </header>
        </div>
    )
}

export default Account;