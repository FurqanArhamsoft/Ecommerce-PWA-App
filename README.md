# E-commerce Store PWA

A modern, responsive e-commerce Progressive Web Application built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- **Modern UI/UX**: Beautiful gradient-based design with smooth animations
- **Responsive Design**: Fully responsive across all devices
- **Product Catalog**: Browse products by category
- **Shopping Cart**: Add items to cart and manage quantities
- **Wishlist**: Save favorite products
- **Search Functionality**: Quick product search
- **Animations**: Smooth scroll animations using AOS
- **PWA Ready**: Progressive Web App capabilities

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: AOS (Animate On Scroll)
- **Fonts**: Google Fonts (Inter, Playfair Display)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── assets/images/       # Product images
├── components/         # Reusable components
├── context/            # React Context providers
├── about/              # About page
├── cart/               # Shopping cart page
├── checkout/           # Checkout page
├── contact/            # Contact page
├── hero/               # Hero section
├── products/           # Products listing
├── profile/            # User profile
├── wishlist/           # Wishlist page
├── layout.tsx          # Root layout
├── page.tsx            # Home page
└── globals.css         # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Key Components

- **Header**: Navigation with cart and wishlist icons
- **Footer**: Site footer with links
- **ProductCard**: Product display component
- **AnimatedSection**: Scroll animation wrapper
- **SearchModal**: Product search modal
- **CartContext**: Shopping cart state management
- **WishlistContext**: Wishlist state management

## Customization

### Colors

The theme uses amber/gold as the primary color. You can customize colors in `app/globals.css` under the `:root` selector.

### Fonts

The project uses Inter for body text and Playfair Display for headings. These can be changed in `app/layout.tsx`.

## License

MIT
