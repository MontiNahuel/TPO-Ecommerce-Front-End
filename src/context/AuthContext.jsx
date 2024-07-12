import React from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    const handleLogin = (username, password) => {
        if (username === 'admin' && password === 'admin') {
            setUsername(username);
            setPassword(password);
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUsername('');
        setPassword('');
    }

    return (
        <AuthContext.Provider value={{username, setUsername, password, setPassword, isAuthenticated, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    );
}