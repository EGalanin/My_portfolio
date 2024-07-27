import React, {createContext, ReactNode, useEffect, useState} from 'react';

export const ThemeContext = createContext('light');



type ThemeProviderProps={
    children:ReactNode
}

export  const ThemeProvider = ({children}:ThemeProviderProps) => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        if (theme === 'light') document.body.classList.add('light')
        else document.body.classList.remove('light');

    }, [theme]);
    return (
        <ThemeContext.Provider value={[theme, setTheme] as any}>
            {children}
        </ThemeContext.Provider>
    );
};

