import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product, ProductState } from '../types/product';

const initialState: ProductState = {
    products: [],
    filteredProducts: [],
    searchTerm: '',
    loading: false,
    error: null,
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
            state.filteredProducts = state.products.filter(product =>
                product.title.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
        sortByPrice: (state, action: PayloadAction<'asc' | 'desc'>) => {
            state.filteredProducts = [...state.filteredProducts].sort((a, b) => {
                return action.payload === 'asc' ? a.price - b.price : b.price - a.price;
            });
        },
        sortByRating: (state, action: PayloadAction<'asc' | 'desc'>) => {
            state.filteredProducts = [...state.filteredProducts].sort((a, b) => {
                return action.payload === 'asc' 
                    ? a.rating.rate - b.rating.rate 
                    : b.rating.rate - a.rating.rate;
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.loading = false;
                state.products = action.payload;
                state.filteredProducts = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch products';
            });
    },
});

export const { setSearchTerm, sortByPrice, sortByRating } = productSlice.actions;
export default productSlice.reducer;
