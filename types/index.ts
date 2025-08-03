export interface Painting {
  id: number;
  title: string;
  year?: number;
  imageUrl: string;
  altText: string;
  description?: string;
  dimensions?: {
    width: number;
    height: number;
    unit: 'cm' | 'in';
  };
  medium?: string;
  tags?: string[];
}

export interface PaintingFrameProps {
  painting: Painting;
  index: number;
  layout?: 'left' | 'right' | 'center';
  size?: 'small' | 'medium' | 'large';
  onSelect: (painting: Painting) => void;
}

export interface ScrollTriggerOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

export interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  disabled?: boolean;
}

export interface Artist {
  name: string;
  biography: string;
  birthYear?: number;
  deathYear?: number;
  nationality?: string;
}

export interface Gallery {
  title: string;
  subtitle?: string;
  description: string;
  artist: Artist;
  paintings: Painting[];
}

export interface GallerySettings {
  paintingsPerPage: number;
  showTitles: boolean;
  showYears: boolean;
  enableSearch: boolean;
  enableFiltering: boolean;
}

export type ViewMode = 'grid' | 'masonry' | 'slideshow';

export type SortOption = 'title' | 'year' | 'chronological' | 'alphabetical';

export interface FilterOptions {
  years?: number[];
  tags?: string[];
  medium?: string[];
}