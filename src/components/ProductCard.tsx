import React from 'react';
import { Product } from '../types/product';
import { StarIcon } from '@heroicons/react/24/solid';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(({ product }) => {
    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
            <StarIcon
                key={index}
                className={`h-5 w-5 ${
                    index < Math.round(rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                }`}
            />
        ));
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="relative pb-[100%]">
                <img
                    src={product.image}
                    alt={product.title}
                    className="absolute top-0 left-0 w-full h-full object-contain p-4"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 line-clamp-2">
                    {product.title}
                </h3>
                <div className="flex items-center mb-2">
                    <div className="flex">
                        {renderStars(product.rating.rate)}
                    </div>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                        ({product.rating.count})
                    </span>
                </div>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                    ${product.price.toFixed(2)}
                </p>
            </div>
        </div>
    );
});

ProductCard.displayName = 'ProductCard';
export default ProductCard;
