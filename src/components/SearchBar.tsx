import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/productSlice';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar: React.FC = () => {
    const dispatch = useDispatch();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchTerm(e.target.value));
    };

    return (
        <div className="relative w-full max-w-xl mx-auto mb-8">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search products..."
                    onChange={handleSearch}
                    className="w-full px-4 py-2 pl-10 pr-4 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
        </div>
    );
};

export default SearchBar;
