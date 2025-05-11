# Storefront

A modern e-commerce storefront built with Next.js 13+ and Tailwind CSS.

## Features

- 🛍️ Product catalog with grid layout
- 🔍 Product detail pages
- ⭐ Product ratings and reviews
- 🎨 Responsive design
- ⚡ Fast page loads with static generation
- 🔄 Incremental Static Regeneration (ISR)
- 🖼️ Optimized images with Next.js Image
- 🎯 SEO optimized with dynamic metadata

## Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS
- **API**: REST API (Fake Store API)
- **Type Safety**: TypeScript
- **Image Optimization**: Next.js Image
- **State Management**: React Hooks

## Project Structure

```
src/
├── app/                    # Next.js 13+ app directory
│   ├── product/           # Product routes
│   │   └── [id]/         # Dynamic product pages
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── ProductCard.tsx   # Product card component
│   └── ProductRating.tsx # Rating display component
├── services/             # API services
│   └── api.ts           # API client
└── types/               # TypeScript types
    └── product.ts      # Product type definitions
```

## Key Decisions

1. **App Router**: Using Next.js 13+ App Router for better performance and features
2. **Static Generation**: Implementing ISR for product pages with 1-hour revalidation
3. **Component Structure**: 
   - Separated product rating into its own component for reusability
   - Modular product card component
4. **Error Handling**:
   - Custom 404 page for not found products
   - Error boundaries for unexpected errors
   - Loading states for better UX
5. **SEO Optimization**:
   - Dynamic metadata for product pages
   - OpenGraph and Twitter card support

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   NEXT_PUBLIC_API_URL=https://fakestoreapi.com
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Future Improvements

1. **Features**:
   - Shopping cart functionality
   - User authentication
   - Product search and filtering
   - Category pages
   - Wishlist functionality
   - Product reviews submission

2. **Technical**:
   - Add unit and integration tests
   - Implement proper error tracking
   - Add analytics
   - Optimize bundle size
   - Add PWA support
   - Implement proper caching strategy

3. **UI/UX**:
   - Add dark mode support
   - Improve loading states
   - Add animations
   - Implement infinite scroll for product list
   - Add product image gallery
   - Improve mobile navigation

4. **Performance**:
   - Implement proper caching
   - Add performance monitoring
   - Optimize image loading
   - Add service worker for offline support

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT
