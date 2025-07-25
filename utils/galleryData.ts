import { Gallery, Painting } from '@/types';

export const realPaintings: Painting[] = [
  {
    id: 1,
    title: 'The Alley',
    year: 1965,
    imageUrl: '/images/alley.jpeg',
    altText: 'A painting of a narrow alley with architectural details and human presence',
    description: 'A narrow passage between buildings, capturing the intimate spaces of urban life where community and solitude intersect.',
    dimensions: { width: 45, height: 35, unit: 'cm' },
    medium: 'Oil on canvas',
    tags: ['urban', 'architecture', 'community', 'solitude']
  },
  {
    id: 2,
    title: 'Evening',
    year: 1968,
    imageUrl: '/images/evening.jpeg',
    altText: 'An evening scene with soft lighting and contemplative atmosphere',
    description: 'The quiet contemplation of dusk, when day transitions to night and memories surface in the gentle light.',
    dimensions: { width: 50, height: 40, unit: 'cm' },
    medium: 'Oil on canvas',
    tags: ['evening', 'contemplation', 'light', 'memory']
  },
  {
    id: 3,
    title: 'Hope',
    year: 1970,
    imageUrl: '/images/hope.jpeg',
    altText: 'A painting expressing hope through color and composition',
    description: 'A testament to the resilience of the human spirit, painted with uplifting colors that speak to renewal and possibility.',
    dimensions: { width: 55, height: 42, unit: 'cm' },
    medium: 'Oil on canvas',
    tags: ['hope', 'resilience', 'renewal', 'spirit']
  },
  {
    id: 4,
    title: 'Jaffa',
    year: 1963,
    imageUrl: '/images/jaffa.jpeg',
    altText: 'A view of Jaffa showing the historic port city with its distinctive architecture',
    description: 'The ancient port city of Jaffa, where old and new worlds meet, captured with the artist\'s keen eye for cultural intersection.',
    dimensions: { width: 48, height: 38, unit: 'cm' },
    medium: 'Oil on canvas',
    tags: ['jaffa', 'port', 'history', 'culture', 'israel']
  },
  {
    id: 5,
    title: 'Jerusalem',
    year: 1967,
    imageUrl: '/images/jerusalem.jpeg',
    altText: 'A painting of Jerusalem showing the city\'s sacred and historical character',
    description: 'The eternal city painted with reverence and depth, capturing both its spiritual significance and lived reality.',
    dimensions: { width: 52, height: 41, unit: 'cm' },
    medium: 'Oil on canvas',
    tags: ['jerusalem', 'sacred', 'history', 'spirituality', 'israel']
  },
  {
    id: 6,
    title: 'Kurdish Heritage',
    year: 1969,
    imageUrl: '/images/kurdit.jpeg',
    altText: 'A painting depicting Kurdish cultural elements and heritage',
    description: 'A celebration of Kurdish culture and traditions, painted with respect for the rich heritage of this ancient people.',
    dimensions: { width: 46, height: 36, unit: 'cm' },
    medium: 'Oil on canvas',
    tags: ['kurdish', 'heritage', 'culture', 'tradition']
  },
  {
    id: 7,
    title: 'The Market',
    year: 1964,
    imageUrl: '/images/market.jpeg',
    altText: 'A bustling market scene with people and goods',
    description: 'The vibrant life of the marketplace, where community gathers and stories are shared over commerce and conversation.',
    dimensions: { width: 49, height: 39, unit: 'cm' },
    medium: 'Oil on canvas',
    tags: ['market', 'community', 'commerce', 'social']
  },
  {
    id: 8,
    title: 'Remembrance',
    year: 1972,
    imageUrl: '/images/remembrence.jpeg',
    altText: 'A contemplative painting about memory and remembrance',
    description: 'A deeply personal work of memory and mourning, honoring those who were lost while affirming the importance of remembering.',
    dimensions: { width: 53, height: 43, unit: 'cm' },
    medium: 'Oil on canvas',
    tags: ['remembrance', 'memory', 'mourning', 'honor']
  },
  {
    id: 9,
    title: 'The Scholar',
    year: 1966,
    imageUrl: '/images/scholar.jpeg',
    altText: 'A painting of a scholarly figure engaged in study or contemplation',
    description: 'A portrait of learning and wisdom, celebrating the pursuit of knowledge that sustained so many through dark times.',
    dimensions: { width: 44, height: 34, unit: 'cm' },
    medium: 'Oil on canvas',
    tags: ['scholar', 'learning', 'wisdom', 'knowledge']
  },
  {
    id: 10,
    title: 'Sunset',
    year: 1971,
    imageUrl: '/images/sunset.jpeg',
    altText: 'A sunset scene with warm colors and peaceful atmosphere',
    description: 'The day\'s end painted with warmth and reflection, a moment of peace and beauty that speaks to life\'s enduring grace.',
    dimensions: { width: 47, height: 37, unit: 'cm' },
    medium: 'Oil on canvas',
    tags: ['sunset', 'peace', 'reflection', 'beauty']
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

export const generatePlaceholderPaintings = (count: number): Painting[] => {
  const themes = [
    'Childhood Memories', 'The Journey', 'New Beginnings', 'Fragments of Time',
    'Silence and Sound', 'Colors of Hope', 'Shadows and Light', 'Letters Never Sent',
    'The Garden', 'Faces Remembered', 'Morning Prayer', 'Evening Reflections',
    'Warsaw Streets', 'Liberation', 'Rebuilding', 'Family Portrait', 'Sacred Rituals',
    'Village Life', 'Survivors', 'Testament', 'Resilience', 'Tomorrow', 'Heritage',
    'Dignity', 'Community', 'Wisdom', 'Faith', 'Courage', 'Unity', 'Reflection'
  ];
  
  const mediums = ['Oil on canvas', 'Watercolor', 'Mixed media', 'Acrylic on board'];
  const tags = ['memory', 'hope', 'community', 'family', 'nature', 'spirituality', 'resilience', 'history', 'survival', 'renewal'];

  return Array.from({ length: count }, (_, i) => {
    const themeIndex = i % themes.length;
    const seriesNumber = Math.floor(i / themes.length) + 1;
    const baseYear = 1950;
    const yearRange = 30;
    
    return {
      id: 11 + i,
      title: themes[themeIndex] + (seriesNumber > 1 ? ` ${seriesNumber}` : ''),
      year: baseYear + Math.floor((i / count) * yearRange),
      imageUrl: `/images/placeholder-${(i % 10) + 1}.jpg`,
      altText: `Painting titled ${themes[themeIndex]} expressing artistic interpretation of human experience and memory`,
      description: `A profound work exploring themes of ${themes[themeIndex].toLowerCase()}, painted with the deep understanding that comes from lived experience.`,
      dimensions: {
        width: 35 + Math.floor(Math.random() * 25),
        height: 28 + Math.floor(Math.random() * 22),
        unit: 'cm' as const
      },
      medium: mediums[i % mediums.length],
      tags: tags.slice(Math.floor(i / 5) % 3, (Math.floor(i / 5) % 3) + 3 + Math.floor(Math.random() * 2))
    };
  });
};