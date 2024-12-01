import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { fetchProducts, sortByPrice, sortByRating } from '../store/productSlice';
import ProductCard from './ProductCard';
import { AppDispatch } from '../store/store';
import { 
    CurrencyDollarIcon, 
    StarIcon,
    ArrowsUpDownIcon
} from '@heroicons/react/24/outline';

const ProductGrid: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { filteredProducts, loading, error } = useSelector(
        (state: RootState) => state.products
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleSort = (type: string, direction: 'asc' | 'desc') => {
        if (type === 'price') {
            dispatch(sortByPrice(direction));
        } else if (type === 'rating') {
            dispatch(sortByRating(direction));
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 p-4 bg-red-100 rounded-lg">
                Error: {error}
            </div>
        );
    }

    return (
        <div>
            <div className="mb-6 flex flex-wrap gap-4 justify-end">
                <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <CurrencyDollarIcon className="h-5 w-5 text-gray-600" />
                    </div>
                    <select
                        onChange={(e) => handleSort('price', e.target.value as 'asc' | 'desc')}
                        className="pl-10 pr-10 py-2 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 shadow-sm hover:border-blue-500 transition-colors duration-200 appearance-none text-gray-800 dark:text-white font-medium"
                    >
                        <option value="">Sort by Price</option>
                        <option value="asc">Price: Low to High</option>
                        <option value="desc">Price: High to Low</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <ArrowsUpDownIcon className="h-5 w-5 text-gray-600" />
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <StarIcon className="h-5 w-5 text-gray-600" />
                    </div>
                    <select
                        onChange={(e) => handleSort('rating', e.target.value as 'asc' | 'desc')}
                        className="pl-10 pr-10 py-2 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 shadow-sm hover:border-blue-500 transition-colors duration-200 appearance-none text-gray-800 dark:text-white font-medium"
                    >
                        <option value="">Sort by Rating</option>
                        <option value="desc">Rating: High to Low</option>
                        <option value="asc">Rating: Low to High</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <ArrowsUpDownIcon className="h-5 w-5 text-gray-600" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
