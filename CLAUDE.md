# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (optimized for faster builds)
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture Overview

This is a Next.js 15 application showcasing a memorial art gallery for Holocaust survivor Alter Metzger's paintings. The app uses the new App Router structure with client-side rendering for interactive gallery features.

### Core Architecture

**Component Structure:**
- `app/page.tsx` - Main page combining hero, gallery, and modal components
- `components/` - Reusable UI components with sophisticated animations
- `hooks/` - Custom hooks for gallery functionality and animations
- `types/` - TypeScript interfaces for paintings, galleries, and UI components
- `utils/galleryData.ts` - Static painting data and placeholder generation

**Key Design Patterns:**
- **Compound Component Pattern**: PaintingModal and PaintingFrame work together
- **Custom Hook Pattern**: useGallery manages complex state (filtering, sorting, selection)
- **Animation-First Design**: Extensive use of Framer Motion for museum-quality animations
- **Responsive Layout System**: Dynamic grid layouts with different painting sizes and positions

### Technology Stack

- **Next.js 15** with App Router and Turbopack
- **React 19** with client components for interactivity
- **Framer Motion 12** for sophisticated animations and parallax effects
- **Tailwind CSS 4** with extensive custom color palette and animations
- **TypeScript 5** for type safety

### Data Architecture

The gallery system is built around these core types:
- `Painting` - Individual artwork with metadata (id, title, year, imageUrl, dimensions, etc.)
- `Gallery` - Collection of paintings with artist information
- `Artist` - Biographical information and metadata

**Data Flow:**
1. Static painting data in `utils/galleryData.ts` includes 10 real paintings
2. Placeholder generation creates additional 40 paintings for demo purposes
3. `useGallery` hook provides filtering, sorting, and search functionality
4. Gallery displays paintings in sophisticated layout patterns (center/left/right, small/medium/large)

### Styling System

**Custom Color Palette:**
- `gallery.*` - Light gallery background colors
- `artist.*` - Warm earth tones (browns, sages, warm grays)
- `museum.*` - Premium colors (gold, bronze, cream, parchment)

**Animation Framework:**
- Custom Tailwind animations for gallery entrances
- Framer Motion variants for staggered painting reveals
- Parallax scrolling effects throughout
- Spring physics for smooth interactions

### Custom Hooks

- `useGallery` - Main gallery state management (search, sort, filter, selection)
- `useIntersectionObserver` - Trigger animations on scroll
- `usePaintingRotation` - Subtle rotation animations for paintings
- `useParallax` - Parallax scrolling effects
- `useScrollTrigger` - Advanced scroll-based animation triggers

### Performance Considerations

- Client-side rendering for interactive features
- Optimized image loading with Next.js Image component
- GPU-accelerated animations with Framer Motion
- Responsive image sizing based on painting dimensions
- Spring physics with restDelta optimization for smooth animations

### Known Issues & Fixes

**iOS Safari Invisible Images Bug (Recurring)**

**Symptom:** When scrolling past the first few images on iOS Safari, subsequent images are invisible but still clickable (tapping opens the modal correctly).

**Root Cause:** iOS Safari's `onLoad` event for images doesn't fire reliably, especially for images that scroll into view via intersection observer. The image visibility in `PaintingFrame.tsx` depends on `imageLoaded` state which is set via `onLoad`. When `onLoad` doesn't fire, `imageLoaded` stays `false` and the image remains at `opacity: 0`.

**Solution (in `PaintingFrame.tsx`):**
1. Add a `useEffect` that polls `img.complete && img.naturalWidth > 0` every 100ms
2. Check immediately on mount for cached images
3. Include a 5-second fallback timeout that forces `imageLoaded: true`

**Key code pattern:**
```tsx
useEffect(() => {
  if (imageLoaded || imageError) return;

  const checkImageComplete = () => {
    const img = imageRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setImageLoaded(true);
      return true;
    }
    return false;
  };

  if (checkImageComplete()) return;

  const pollInterval = setInterval(() => {
    if (checkImageComplete()) clearInterval(pollInterval);
  }, 100);

  const fallbackTimeout = setTimeout(() => {
    clearInterval(pollInterval);
    if (!imageLoaded && !imageError) setImageLoaded(true);
  }, 5000);

  return () => {
    clearInterval(pollInterval);
    clearTimeout(fallbackTimeout);
  };
}, [imageLoaded, imageError, isIntersecting]);
```

**If this bug reappears:** Check that the polling mechanism in `PaintingFrame.tsx` hasn't been removed or broken. The fix must remain in place for iOS Safari compatibility.

### Design Atmosphere & Philosophy

**Memorial Context:**
This application serves as a digital memorial for Holocaust survivor Alter Metzger (1912-1984). The design emphasizes reverence, dignity, and preservation of memory through sophisticated visual presentation. All UI decisions prioritize respectful commemoration while maintaining accessibility and user experience.

**Visual Atmosphere:**
- **Gallery Elegance**: Clean, museum-quality presentation with generous whitespace
- **Subtle Sophistication**: Muted color palette avoiding bright or jarring colors
- **Respectful Minimalism**: UI elements should never compete with the artwork
- **Warm Earth Tones**: Use `artist.*` colors (browns, sages, warm grays) for accents
- **Premium Touches**: `museum.*` colors (gold, bronze, cream) for highlights and special elements
- **Gentle Animations**: Smooth, graceful transitions that feel reverent rather than flashy

**Interaction Philosophy:**
- **Unobtrusive Controls**: Buttons and UI elements should blend seamlessly
- **Click-anywhere Patterns**: Natural, intuitive interactions without visible affordances
- **Escape Key Support**: Always provide keyboard accessibility for closing modals/overlays
- **Fade Transitions**: Prefer gentle fade-in/fade-out over abrupt state changes
- **Background Consistency**: Modal overlays should use `bg-gallery-50` to maintain atmosphere
- **Transparent Overlays**: Use 80-90% opacity to maintain visual connection to the gallery

**Content Presentation:**
- **Artwork First**: Photos should be displayed without distracting metadata or chrome
- **Full-screen Viewing**: Maximize image display area (95% viewport is ideal)
- **Contextual Information**: Metadata should be available but not dominant
- **Consistent Spacing**: Use the established grid and spacing patterns throughout