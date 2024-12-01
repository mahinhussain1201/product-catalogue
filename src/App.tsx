import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import SearchBar from './components/SearchBar';
import ProductGrid from './components/ProductGrid';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Provider store={store}>
      <div className="w-screen h-screen overflow-x-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-black">
        <div className="max-w-[2000px] mx-auto p-4 md:p-8">
          <div className="flex justify-between items-center mb-8 bg-white/90 dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Product Catalog
            </h1>
            <button
              onClick={toggleDarkMode}
              className="p-2 md:p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 shadow-md"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5 md:h-6 md:w-6 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
              )}
            </button>
          </div>
          <SearchBar />
          <div className="h-[calc(100vh-200px)] overflow-y-auto">
            <ProductGrid />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
