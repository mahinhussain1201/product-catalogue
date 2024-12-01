# Product Catalog

A modern e-commerce product catalog built with Vite, React, TypeScript, and Tailwind CSS.

## Features

- Responsive design (desktop grid, mobile single-column)
- Live search functionality
- Sort by price and rating
- Dark mode support
- Product details display (name, price, image, rating)
- Redux state management
- TypeScript type safety

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd vite-product-catalog
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

## Technology Stack

- Vite
- React
- TypeScript
- Redux Toolkit
- Tailwind CSS
- Axios
- Hero Icons

## Features Implementation

- **Live Search**: Type in the search bar to filter products in real-time
- **Sorting**: Use the dropdown menus to sort products by price or rating
- **Dark Mode**: Toggle between light and dark themes using the sun/moon icon
- **Responsive Design**: Automatically adjusts layout based on screen size
- **Loading States**: Shows loading spinner while fetching data
- **Error Handling**: Displays error messages if API requests fail

## API Integration

The application uses the Fake Store API (`https://fakestoreapi.com/products`) to fetch product data.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
