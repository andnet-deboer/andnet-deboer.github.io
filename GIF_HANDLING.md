# GIF Handling in React/TypeScript Project

This document explains how GIFs are properly handled in this React/TypeScript project.

## Overview

The project now includes proper TypeScript support and optimized handling for GIF files, including:
- Type declarations for asset imports
- Optimized GIF component with loading states
- Utility functions for asset management
- Performance optimizations

## Type Declarations

GIF imports are now properly typed in `src/vite-env.d.ts`:

```typescript
declare module "*.gif" {
  const src: string;
  export default src;
}
```

This allows TypeScript to understand GIF imports and provide proper type checking.

## GifImage Component

A specialized `GifImage` component (`src/components/ui/gif-image.tsx`) provides:

### Features
- **Lazy Loading**: Images only load when they come into view
- **Loading States**: Shows a spinner while the GIF is loading
- **Error Handling**: Falls back to a placeholder image if loading fails
- **Performance**: Uses Intersection Observer for efficient loading
- **Accessibility**: Proper alt text and loading attributes

### Usage

```tsx
import GifImage from '@/components/ui/gif-image';
import myGif from '@/assets/my-gif.gif';

<GifImage
  src={myGif}
  alt="Description of the GIF"
  className="w-full h-full"
  fallbackSrc="/placeholder.jpg"
  loading="lazy"
/>
```

## Asset Utilities

Utility functions in `src/lib/assets.ts` provide:

### Functions
- `isGif(src: string)`: Check if an asset is a GIF
- `isImage(src: string)`: Check if an asset is a regular image
- `getAssetType(src: string)`: Get the file type from a path
- `validateAssetUrl(src: string)`: Validate asset URLs
- `preloadAsset(src: string)`: Preload assets for better performance
- `preloadAssets(assets: string[])`: Batch preload multiple assets

### Usage

```tsx
import { isGif, preloadAssets } from '@/lib/assets';

// Check if asset is a GIF
if (isGif(project.image)) {
  // Use GifImage component
}

// Preload assets
await preloadAssets([gif1, gif2, image1]);
```

## Implementation in PortfolioSection

The PortfolioSection now automatically detects GIF files and uses the appropriate component:

```tsx
{project.image && (
  <div className="aspect-video overflow-hidden">
    {isGif(project.image) ? (
      <GifImage
        src={project.image}
        alt={project.title}
        className="w-full h-full group-hover:scale-105 transition-transform duration-500"
        fallbackSrc={bassGuitarImage}
      />
    ) : (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    )}
  </div>
)}
```

## Best Practices

1. **Always provide alt text** for accessibility
2. **Use fallback images** for better user experience
3. **Implement lazy loading** for performance
4. **Preload critical GIFs** that are above the fold
5. **Optimize GIF file sizes** before importing
6. **Use the GifImage component** for all GIF files

## Performance Considerations

- GIFs are loaded only when they come into view (lazy loading)
- Loading states provide visual feedback
- Error handling prevents broken images
- Intersection Observer is used for efficient viewport detection

## File Structure

```
src/
├── components/ui/
│   └── gif-image.tsx          # Specialized GIF component
├── lib/
│   └── assets.ts              # Asset utility functions
└── vite-env.d.ts              # Type declarations for assets
```

## Troubleshooting

### TypeScript Errors
If you see TypeScript errors when importing GIFs, ensure:
1. The type declarations are in `src/vite-env.d.ts`
2. The file is properly referenced in your `tsconfig.json`

### Loading Issues
If GIFs don't load properly:
1. Check the file path is correct
2. Ensure the GIF file exists in the assets folder
3. Verify the import statement is correct
4. Check browser console for errors

### Performance Issues
For large GIFs:
1. Consider optimizing the GIF file size
2. Use the preload utilities for critical GIFs
3. Implement proper lazy loading
4. Consider converting to video format for very large files
