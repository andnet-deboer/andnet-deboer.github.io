// Asset type definitions
export type AssetType = 'gif' | 'jpg' | 'jpeg' | 'png' | 'svg' | 'webp';

// Asset configuration interface
export interface AssetConfig {
  src: string;
  alt: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
  type?: AssetType;
}

// Get file extension from asset path
export const getAssetType = (src: string): AssetType | null => {
  const extension = src.split('.').pop()?.toLowerCase();
  if (extension && ['gif', 'jpg', 'jpeg', 'png', 'svg', 'webp'].includes(extension)) {
    return extension as AssetType;
  }
  return null;
};

// Check if asset is a GIF
export const isGif = (src: string): boolean => {
  return getAssetType(src) === 'gif';
};

// Check if asset is an image (non-GIF)
export const isImage = (src: string): boolean => {
  const type = getAssetType(src);
  return type !== null && type !== 'gif';
};

// Validate asset URL
export const validateAssetUrl = (src: string): boolean => {
  try {
    new URL(src);
    return true;
  } catch {
    // If it's not a valid URL, it might be a relative path
    return src.startsWith('/') || src.startsWith('./') || src.startsWith('../');
  }
};

// Create asset configuration object
export const createAssetConfig = (
  src: string,
  alt: string,
  options: Partial<Omit<AssetConfig, 'src' | 'alt'>> = {}
): AssetConfig => {
  return {
    src,
    alt,
    fallbackSrc: options.fallbackSrc,
    loading: options.loading || 'lazy',
    type: options.type || getAssetType(src) || undefined,
  };
};

// Preload asset for better performance
export const preloadAsset = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to preload asset: ${src}`));
    img.src = src;
  });
};

// Batch preload multiple assets
export const preloadAssets = async (assets: string[]): Promise<void> => {
  const promises = assets.map(preloadAsset);
  await Promise.allSettled(promises);
};
