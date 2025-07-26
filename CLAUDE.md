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