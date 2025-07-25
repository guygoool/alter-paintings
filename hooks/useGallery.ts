'use client';

import { useState, useMemo } from 'react';
import { Painting, FilterOptions, SortOption } from '@/types';

interface UseGalleryProps {
  paintings: Painting[];
}

export function useGallery({ paintings }: UseGalleryProps) {
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('chronological');
  const [filters, setFilters] = useState<FilterOptions>({});

  const filteredAndSortedPaintings = useMemo(() => {
    let result = [...paintings];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(painting => 
        painting.title.toLowerCase().includes(query) ||
        painting.description?.toLowerCase().includes(query) ||
        painting.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    if (filters.years && filters.years.length > 0) {
      result = result.filter(painting => 
        painting.year && filters.years!.includes(painting.year)
      );
    }

    if (filters.tags && filters.tags.length > 0) {
      result = result.filter(painting =>
        painting.tags?.some(tag => filters.tags!.includes(tag))
      );
    }

    if (filters.medium && filters.medium.length > 0) {
      result = result.filter(painting =>
        painting.medium && filters.medium!.includes(painting.medium)
      );
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case 'title':
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        case 'year':
        case 'chronological':
          return (a.year || 0) - (b.year || 0);
        default:
          return 0;
      }
    });

    return result;
  }, [paintings, searchQuery, sortBy, filters]);

  const openPainting = (painting: Painting) => {
    setSelectedPainting(painting);
  };

  const closePainting = () => {
    setSelectedPainting(null);
  };

  const nextPainting = () => {
    if (!selectedPainting) return;
    
    const currentIndex = filteredAndSortedPaintings.findIndex(
      p => p.id === selectedPainting.id
    );
    const nextIndex = (currentIndex + 1) % filteredAndSortedPaintings.length;
    setSelectedPainting(filteredAndSortedPaintings[nextIndex]);
  };

  const previousPainting = () => {
    if (!selectedPainting) return;
    
    const currentIndex = filteredAndSortedPaintings.findIndex(
      p => p.id === selectedPainting.id
    );
    const prevIndex = currentIndex === 0 
      ? filteredAndSortedPaintings.length - 1 
      : currentIndex - 1;
    setSelectedPainting(filteredAndSortedPaintings[prevIndex]);
  };

  const availableYears = useMemo(() => {
    const years = paintings
      .map(p => p.year)
      .filter((year): year is number => year !== undefined);
    return [...new Set(years)].sort();
  }, [paintings]);

  const availableTags = useMemo(() => {
    const tags = paintings
      .flatMap(p => p.tags || []);
    return [...new Set(tags)].sort();
  }, [paintings]);

  const availableMediums = useMemo(() => {
    const mediums = paintings
      .map(p => p.medium)
      .filter((medium): medium is string => medium !== undefined);
    return [...new Set(mediums)].sort();
  }, [paintings]);

  return {
    filteredAndSortedPaintings,
    selectedPainting,
    searchQuery,
    sortBy,
    filters,
    availableYears,
    availableTags,
    availableMediums,
    setSearchQuery,
    setSortBy,
    setFilters,
    openPainting,
    closePainting,
    nextPainting,
    previousPainting,
  };
}