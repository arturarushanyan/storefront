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

1. Using Next.js 13+ App Router for better performance and features
2. Implementing ISR for product pages with 1-hour revalidation
3. Tailwind CSS is used as it's just faster to work with consderin the limited time I had
4. Error Handling:
   - Custom 404 page for not found products
   - Error boundaries for unexpected errors
   - Loading states for better UX
5. SEO Optimization:
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
   or add ```env.local``` file. see the example for env
4. Run the development server:
   ```bash
   npm run dev
   ```
## Some caveats and missing functionality
 - The build fails as of now. Some typescript error that I found myself spending too much time on to fix. It is some v15 issue that I need to investigate more.
 - Unfortuanately I did not had time to fully test the OG functinality
 - I would probably split the componnts more. Maybe add a title/price component or description separately to reuse them. Or maybe have a product component that would have 2 display states. One for grid and other for details page.
 - I have not used getStaticProps as it's no longer used from v13+. I went with generateStaticParams instead. Also added revalidate for ISR functionality


## Future Improvements

- Header component with proper navigation
- Masonry grid functionality. Right now the grid looks not so good to say the least
- Shopping cart

## License

MIT
