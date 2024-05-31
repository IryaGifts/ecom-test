import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center space-x-4">
      <IconButton onClick={toggleTheme}>
        {theme === 'light' ? <LightMode /> : <DarkMode />}
      </IconButton>
    </div>
  );
};

export default ThemeToggle;
