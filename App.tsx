import React from 'react';
import WidgetGrid from './components/WidgetGrid';
import { activeWidgets } from './config/widgetConfig';
import { SunIcon, MoonIcon } from './components/icons/ThemeIcons'; // Example icons

const App: React.FC = () => {
  // Basic theme toggle example, can be expanded
  const [isDarkMode, setIsDarkMode] = React.useState(true); 

  // In a real app, this would toggle Tailwind's dark class on <html> or <body>
  // For this example, we'll just conceptually toggle it.
  // Tailwind's dark mode is usually configured via tailwind.config.js and a class on the html tag.
  // Since we are using CDN, we rely on `media` strategy by default or need manual class toggling if `class` strategy is desired.
  // For simplicity, we'll assume dark theme is the default and primary style.

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gray-100'} text-gray-100 p-4 sm:p-6 lg:p-8 transition-colors duration-300`}>
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600">
          Daily Dashboard
        </h1>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-full hover:bg-slate-700 transition-colors"
          aria-label="Toggle theme"
        >
          {isDarkMode ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-slate-800" />}
        </button>
      </header>
      <WidgetGrid widgets={activeWidgets} />
      <footer className="mt-12 text-center text-sm text-slate-500">
        <p>Dashboard UI v1.0.0</p>
      </footer>
    </div>
  );
};

export default App;
