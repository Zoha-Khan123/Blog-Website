'use client';
import React, { useContext } from 'react';
import styles from './theme-toggle.module.css';
import Image from 'next/image';
import { ThemeContext } from '../context/theme-context';

const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeToggle must be used within a ThemeContextProvider');
  }

  const { theme, setTheme } = themeContext;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div
      className={styles.toggleContainer}
      onClick={toggleTheme}
      role="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div
        className={`${styles.toggleButton} ${
          theme === 'dark' ? styles.active : ''
        }`}
      >
        <div className={styles.icon}>
          {theme === 'dark' ? (
            <Image src="/moon.png" alt="Moon Icon" width={14} height={14} />
          ) : (
            <Image src="/sun.png" alt="Sun Icon" width={14} height={14} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
