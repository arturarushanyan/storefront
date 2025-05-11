export default function ProductLoading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image skeleton */}
        <div className="relative aspect-square bg-gray-200 animate-pulse rounded-lg" />
        
        {/* Content skeleton */}
        <div className="flex flex-col gap-4">
          {/* Title skeleton */}
          <div className="h-8 bg-gray-200 animate-pulse rounded w-3/4" />
          
          {/* Price skeleton */}
          <div className="h-6 bg-gray-200 animate-pulse rounded w-1/4" />
          
          {/* Rating skeleton */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-4 w-4 bg-gray-200 animate-pulse rounded" />
              ))}
            </div>
            <div className="h-4 w-16 bg-gray-200 animate-pulse rounded" />
          </div>
          
          {/* Description skeleton */}
          <div className="mt-4">
            <div className="h-6 bg-gray-200 animate-pulse rounded w-1/3 mb-2" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 animate-pulse rounded w-full" />
              <div className="h-4 bg-gray-200 animate-pulse rounded w-5/6" />
              <div className="h-4 bg-gray-200 animate-pulse rounded w-4/6" />
            </div>
          </div>
          
          {/* Category skeleton */}
          <div className="mt-4">
            <div className="h-6 bg-gray-200 animate-pulse rounded w-1/4 mb-2" />
            <div className="h-4 bg-gray-200 animate-pulse rounded w-1/3" />
          </div>
          
          {/* Button skeleton */}
          <div className="mt-8 h-12 bg-gray-200 animate-pulse rounded-lg w-full" />
        </div>
      </div>
    </main>
  );
} 