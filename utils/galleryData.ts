import { Gallery, Painting } from '@/types';

export const realPaintings: Painting[] = [
  {
    id: 1,
    title: 'The Alley',
    imageUrl: '/images/alley.jpeg',
    altText: '1965',
    dimensions: { width: 45, height: 35, unit: 'cm' },
    medium: 'Oil on canvas',
    tags: []
  },
  {
    id: 2,
    title: 'Evening',
    year: 1968,
    imageUrl: '/images/evening.jpeg',
    altText: '1968',
    dimensions: { width: 50, height: 40, unit: 'cm' },
    medium: 'Oil on canvas',
    tags: []
  },
  {
    id: 3,
    title: 'Hope',
    year: 1970,
    imageUrl: '/images/hope.jpeg',
    altText: '1970',
    dimensions: { width: 55, height: 42, unit: 'cm' },
    medium: 'Oil on canvas',
    tags: []
  },
  {
    id: 4,
    title: 'Jaffa',
    year: 1963,
    imageUrl: '/images/jaffa.jpeg',
    altText: '1963',
    dimensions: { width: 48, height: 38, unit: 'cm' },
    medium: 'Oil on canvas',
    tags: []
  },
  {
    id: 5,
    title: 'Jerusalem',
    year: 1967,
    imageUrl: '/images/jerusalem.jpeg',
    altText: '1967',
    dimensions: { width: 52, height: 41, unit: 'cm' },
    medium: 'Oil on canvas',
    tags: []
  },
  {
    id: 6,
    title: 'Kurdish Heritage',
    year: 1969,
    imageUrl: '/images/kurdit.jpeg',
    altText: '1969',
    dimensions: { width: 46, height: 36, unit: 'cm' },
    medium: 'Oil on canvas',
    tags: []
  },
  {
    id: 7,
    title: 'The Market',
    year: 1964,
    imageUrl: '/images/market.jpeg',
    altText: '1964',
    dimensions: { width: 49, height: 39, unit: 'cm' },
    medium: 'Oil on canvas',
    tags: []
  },
  {
    id: 8,
    title: 'Remembrance',
    year: 1972,
    imageUrl: '/images/remembrence.jpeg',
    altText: '1972',
    dimensions: { width: 53, height: 43, unit: 'cm' },
    medium: 'Oil on canvas',
    tags: []
  },
  {
    id: 9,
    title: 'The Scholar',
    year: 1966,
    imageUrl: '/images/scholar.jpeg',
    altText: '1966',
    dimensions: { width: 44, height: 34, unit: 'cm' },
    medium: 'Oil on canvas',
    tags: []
  },
  {
    id: 10,
    title: 'Sunset',
    year: 1971,
    imageUrl: '/images/sunset.jpeg',
    altText: '1971',
    dimensions: { width: 47, height: 37, unit: 'cm' },
    medium: 'Oil on canvas',
    tags: []
  }
];

export const alterMetzgerGallery: Gallery = {
  title: 'The Paintings of Alter Metzger',
  subtitle: 'A Testament to Survival and Memory',
  description: `Alter Metzger (1912-1984) was a Holocaust survivor whose artistic journey began after liberation. Through his paintings, he documented not only the horrors he witnessed but also the resilience of the human spirit and the beauty he found in rebuilding life. This collection of 50 paintings spans over three decades of his work, offering a profound meditation on memory, survival, and hope.

Each painting serves as both historical document and artistic expression, created by someone who experienced one of humanity's darkest chapters and chose to respond with creativity and beauty. Metzger's work reminds us that art can emerge from the deepest suffering and serve as a bridge between past and present, ensuring that stories of both tragedy and triumph are preserved for future generations.`,
  artist: {
    name: 'Alter Metzger',
    biography: 'Born in Poland in 1912, Alter Metzger survived the Holocaust and immigrated to Israel in 1949. He began painting in his late thirties as a way to process his experiences and preserve the memory of those who perished. His work evolved from documentary realism to more abstract expressions of memory and emotion.',
    birthYear: 1912,
    deathYear: 1984,
    nationality: 'Polish-Israeli'
  },
  paintings: realPaintings
};

export const generateLoopedPaintings = (count: number): Painting[] => {
  const realPaintingsCount = realPaintings.length;
  
  return Array.from({ length: count }, (_, i) => {
    const realPaintingIndex = i % realPaintingsCount;
    const originalPainting = realPaintings[realPaintingIndex];
    const loopNumber = Math.floor(i / realPaintingsCount) + 1;
    
    return {
      ...originalPainting,
      id: 11 + i,
      title: loopNumber > 1 ? `${originalPainting.title} (${loopNumber})` : originalPainting.title
    };
  });
};