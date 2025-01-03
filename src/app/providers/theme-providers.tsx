'use client'
import React, { useContext, ReactNode } from 'react'
import { ThemeContext } from '../components/navbar/context/theme-context';

interface Props {
  children?: ReactNode;
}

const ThemeProviders: React.FC<Props> = ({ children }) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeProviders must be used within a ThemeContextProvider');
  }

  const { theme } = themeContext;

  return (
    <div className={theme}>{children}</div>
  )
}

export default ThemeProviders;