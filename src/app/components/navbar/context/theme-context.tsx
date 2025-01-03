'use client';
import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface Props {
  children?: ReactNode;
}

interface ThemeContextType {
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null); // Initialize as null to ensure no mismatch

  useEffect(() => {
    // Synchronize theme after the component mounts
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    setTheme(savedTheme || 'light');
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  if (theme === null) {
    // While waiting for the theme to sync, avoid rendering mismatched content
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

















































// 'use client';
// import React, { createContext, useState, ReactNode, useEffect } from 'react';

// interface Props {
//   children?: ReactNode;
// }

// interface ThemeContextType {
//   theme: 'light' | 'dark';
//   setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
// }

// export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const ThemeContextProvider: React.FC<Props> = ({ children }) => {
//   const [theme, setTheme] = useState<'light' | 'dark'>(() => {
//     if (typeof window !== 'undefined') {
//       return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
//     }
//     return 'light';
//   });

//   // Persist theme in localStorage
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('theme', theme);
//     }
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeContextProvider;
