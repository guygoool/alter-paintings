import { Gallery, Painting } from '@/types';

export const realPaintings: Painting[] = [
  // Original paintings
  {
    id: 1,
    title: 'The Alley',
    imageUrl: '/images/alley.jpeg',
    altText: '1965',
    dimensions: { width: 513, height: 722, unit: 'px' },
    medium: 'Oil on canvas',
    tags: []
  },
  {
    id: 2,
    title: 'Evening',
    year: 1968,
    imageUrl: '/images/evening.jpeg',
    altText: '1968',
    dimensions: { width: 1037, height: 789, unit: 'px' },
    medium: 'Oil on canvas',
    tags: []
  },
  {
    id: 3,
    title: 'Hope',
    year: 1970,
    imageUrl: '/images/hope.jpeg',
    altText: '1970',
    dimensions: { width: 600, height: 754, unit: 'px' },
    medium: 'Oil on canvas',
    tags: []
  },
  {
    id: 4,
    title: 'Jaffa',
    year: 1963,
    imageUrl: '/images/jaffa.jpeg',
    altText: '1963',
    dimensions: { width: 1012, height: 820, unit: 'px' },
    medium: 'Oil on canvas',
    tags: []
  },
  {
    id: 5,
    title: 'Jerusalem',
    year: 1967,
    imageUrl: '/images/jerusalem.jpeg',
    altText: '1967',
    dimensions: { width: 1076, height: 856, unit: 'px' },
    medium: 'Oil on canvas',
    tags: []
  },
  {
    id: 6,
    title: 'Kurdish Heritage',
    year: 1969,
    imageUrl: '/images/kurdit.jpeg',
    altText: '1969',
    dimensions: { width: 667, height: 981, unit: 'px' },
    medium: 'Oil on canvas',
    tags: []
  },
  {
    id: 7,
    title: 'The Market',
    year: 1964,
    imageUrl: '/images/market.jpeg',
    altText: '1964',
    dimensions: { width: 698, height: 1009, unit: 'px' },
    medium: 'Oil on canvas',
    tags: []
  },
  {
    id: 8,
    title: 'Remembrance',
    year: 1972,
    imageUrl: '/images/remembrence.jpeg',
    altText: '1972',
    dimensions: { width: 813, height: 590, unit: 'px' },
    medium: 'Oil on canvas',
    tags: []
  },
  {
    id: 9,
    title: 'The Scholar',
    year: 1966,
    imageUrl: '/images/scholar.jpeg',
    altText: '1966',
    dimensions: { width: 768, height: 1000, unit: 'px' },
    medium: 'Oil on canvas',
    tags: []
  },
  {
    id: 10,
    title: 'Sunset',
    year: 1971,
    imageUrl: '/images/sunset.jpeg',
    altText: '1971',
    dimensions: { width: 780, height: 779, unit: 'px' },
    medium: 'Oil on canvas',
    tags: []
  },
  // New paintings
  {
    id: 11,
    title: 'City at Night',
    imageUrl: '/images/abstract-city-night.jpg',
    altText: 'Abstract cityscape with moon',
    dimensions: { width: 2047, height: 3310, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['cityscape', 'abstract']
  },
  {
    id: 12,
    title: 'Child with Bread',
    imageUrl: '/images/child-eating.jpg',
    altText: 'Portrait of child eating',
    dimensions: { width: 2197, height: 2902, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['portrait', 'child']
  },
  {
    id: 13,
    title: 'City at Dusk',
    imageUrl: '/images/city-at-dusk.jpg',
    altText: 'City at dusk with dramatic sky',
    dimensions: { width: 3357, height: 2485, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['cityscape']
  },
  {
    id: 14,
    title: 'City with Spire',
    imageUrl: '/images/city-with-spire.jpg',
    altText: 'European cityscape with church spire',
    dimensions: { width: 2884, height: 2398, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['cityscape']
  },
  {
    id: 15,
    title: 'The Drummer',
    imageUrl: '/images/drummer.jpg',
    altText: 'Man with fez holding drum',
    dimensions: { width: 1670, height: 2262, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['portrait', 'musician']
  },
  {
    id: 16,
    title: 'Girl Portrait',
    imageUrl: '/images/girl-portrait.jpg',
    altText: 'Portrait of young girl with dark hair',
    dimensions: { width: 1487, height: 1594, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['portrait', 'child']
  },
  {
    id: 17,
    title: 'Golden Hills',
    imageUrl: '/images/golden-hills.jpg',
    altText: 'Golden landscape with winding path',
    dimensions: { width: 3126, height: 2387, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['landscape']
  },
  {
    id: 18,
    title: 'Grandmother',
    imageUrl: '/images/grandmother.jpg',
    altText: 'Portrait of elderly woman with white headscarf',
    dimensions: { width: 2520, height: 2713, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['portrait', 'elder']
  },
  {
    id: 19,
    title: 'Harbor City',
    imageUrl: '/images/harbor-city.jpg',
    altText: 'Waterfront city with boats',
    dimensions: { width: 3193, height: 2569, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['cityscape', 'harbor']
  },
  {
    id: 20,
    title: 'Jaffa Harbor',
    imageUrl: '/images/jaffa-harbor.jpg',
    altText: 'Colorful harbor scene with boats',
    dimensions: { width: 2240, height: 1905, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['cityscape', 'harbor']
  },
  {
    id: 21,
    title: 'Jerusalem Panorama',
    imageUrl: '/images/jerusalem-panorama.jpg',
    altText: 'Wide view of Jerusalem cityscape',
    dimensions: { width: 3343, height: 2479, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['cityscape', 'jerusalem']
  },
  {
    id: 22,
    title: 'Kurdish Tea Ceremony',
    imageUrl: '/images/kurdish-tea-ceremony.jpg',
    altText: 'Woman in traditional dress with teapot',
    dimensions: { width: 2349, height: 3092, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['portrait', 'cultural']
  },
  {
    id: 23,
    title: 'Contemplation',
    imageUrl: '/images/man-contemplating.jpg',
    altText: 'Man seated in contemplative pose',
    dimensions: { width: 1923, height: 2315, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['portrait']
  },
  {
    id: 24,
    title: 'Man in Cap',
    imageUrl: '/images/man-in-cap.jpg',
    altText: 'Portrait of man with cap in sepia tones',
    dimensions: { width: 2495, height: 3415, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['portrait']
  },
  {
    id: 26,
    title: 'Man with Turban',
    imageUrl: '/images/man-with-turban.jpg',
    altText: 'Portrait of elderly man with turban',
    dimensions: { width: 2395, height: 3025, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['portrait', 'elder']
  },
  {
    id: 27,
    title: 'Market Crowd',
    imageUrl: '/images/market-crowd.jpg',
    altText: 'Busy market scene with many figures',
    dimensions: { width: 1829, height: 2567, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['market', 'figures']
  },
  {
    id: 28,
    title: 'Market Scene',
    imageUrl: '/images/market-scene.jpg',
    altText: 'Market with figures and stalls',
    dimensions: { width: 1318, height: 1631, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['market', 'figures']
  },
  {
    id: 29,
    title: 'Narrow Alley',
    imageUrl: '/images/narrow-alley.jpg',
    altText: 'Figure walking through narrow alley',
    dimensions: { width: 2546, height: 3338, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['cityscape', 'alley']
  },
  {
    id: 30,
    title: 'Old City Alley',
    imageUrl: '/images/old-city-alley.jpg',
    altText: 'Narrow alley with balconies',
    dimensions: { width: 2269, height: 3125, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['cityscape', 'alley']
  },
  {
    id: 31,
    title: 'Old Man with Cap',
    imageUrl: '/images/old-man-with-cap.jpg',
    altText: 'Portrait of elderly man wearing cap',
    dimensions: { width: 1373, height: 1520, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['portrait', 'elder']
  },
  {
    id: 32,
    title: 'Rabbi Reading',
    imageUrl: '/images/rabbi-reading.jpg',
    altText: 'Rabbi with fur hat reading book',
    dimensions: { width: 2402, height: 3023, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['portrait', 'religious']
  },
  {
    id: 33,
    title: 'Seated Elder',
    imageUrl: '/images/seated-elder.jpg',
    altText: 'Elderly man seated with book',
    dimensions: { width: 2243, height: 3246, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['portrait', 'elder']
  },
  {
    id: 34,
    title: 'Standing Boy',
    imageUrl: '/images/standing-boy.jpg',
    altText: 'Boy standing in landscape',
    dimensions: { width: 2281, height: 3110, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['portrait', 'child']
  },
  {
    id: 35,
    title: 'Sunset City',
    imageUrl: '/images/sunset-city.jpg',
    altText: 'Abstract cityscape with warm sunset colors',
    dimensions: { width: 3175, height: 2334, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['cityscape', 'abstract']
  },
  {
    id: 36,
    title: 'Woman in the Sky',
    imageUrl: '/images/surreal-sky-woman.jpg',
    altText: 'Surreal painting with woman face in clouds',
    dimensions: { width: 1675, height: 2278, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['surreal', 'portrait']
  },
  {
    id: 37,
    title: 'Two Scholars',
    imageUrl: '/images/two-scholars.jpg',
    altText: 'Two rabbis studying together',
    dimensions: { width: 2407, height: 2885, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['portrait', 'religious']
  },
  {
    id: 38,
    title: 'Village Bridge',
    imageUrl: '/images/village-bridge.jpg',
    altText: 'Village scene with bridge',
    dimensions: { width: 2311, height: 3078, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['cityscape', 'village']
  },
  {
    id: 39,
    title: 'Village Rooftops',
    imageUrl: '/images/village-rooftops.jpg',
    altText: 'Colorful village with rooftops',
    dimensions: { width: 3432, height: 2372, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['cityscape', 'village']
  },
  {
    id: 40,
    title: 'Water Carrier',
    imageUrl: '/images/water-carrier.jpg',
    altText: 'Figure carrying water on head',
    dimensions: { width: 1353, height: 1480, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['portrait', 'figures']
  },
  {
    id: 41,
    title: 'Woman Portrait',
    imageUrl: '/images/woman-portrait-pink.jpg',
    altText: 'Portrait of woman in pink tones',
    dimensions: { width: 1627, height: 1852, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['portrait']
  },
  {
    id: 42,
    title: 'Woman with Headdress',
    imageUrl: '/images/woman-with-headdress.jpg',
    altText: 'Portrait of woman with elaborate headdress',
    dimensions: { width: 2092, height: 2876, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['portrait', 'cultural']
  },
  {
    id: 43,
    title: 'Woman with Headscarf',
    imageUrl: '/images/woman-with-headscarf.jpg',
    altText: 'Profile portrait of woman with red headscarf',
    dimensions: { width: 1269, height: 1478, unit: 'px' },
    medium: 'Oil on canvas',
    tags: ['portrait']
  }
];

export const alterMetzgerGallery: Gallery = {
  title: 'The Paintings of Alter Metzger',
  subtitle: 'A Testament to Survival and Memory',
  description: `Alter Metzger (1912-1984) was a Holocaust survivor whose artistic journey began after liberation. Through his paintings, he documented not only the horrors he witnessed but also the resilience of the human spirit and the beauty he found in rebuilding life. This collection of paintings spans over three decades of his work, offering a profound meditation on memory, survival, and hope.

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
      id: realPaintingsCount + 1 + i,
      title: loopNumber > 1 ? `${originalPainting.title} (${loopNumber})` : originalPainting.title
    };
  });
};

export const shufflePaintings = (paintings: Painting[]): Painting[] => {
  const shuffled = [...paintings];

  // Fisher-Yates shuffle
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Ensure the first 3 paintings (hero section) have unique images
  const heroCount = 3;
  for (let i = 1; i < heroCount; i++) {
    const seenUrls = new Set(shuffled.slice(0, i).map(p => p.imageUrl));
    if (seenUrls.has(shuffled[i].imageUrl)) {
      // Find a painting with a unique image to swap
      for (let k = heroCount; k < shuffled.length; k++) {
        if (!seenUrls.has(shuffled[k].imageUrl)) {
          [shuffled[i], shuffled[k]] = [shuffled[k], shuffled[i]];
          break;
        }
      }
    }
  }

  // Ensure minimum spacing between paintings with the same image
  const minSpacing = Math.min(5, Math.floor(shuffled.length / realPaintings.length) - 1);

  for (let i = 0; i < shuffled.length; i++) {
    const currentUrl = shuffled[i].imageUrl;

    // Check if any painting within minSpacing has the same image
    for (let j = i + 1; j <= i + minSpacing && j < shuffled.length; j++) {
      if (shuffled[j].imageUrl === currentUrl) {
        // Find a suitable swap candidate further away
        let swapped = false;
        for (let k = j + minSpacing; k < shuffled.length && !swapped; k++) {
          // Check if swapping would not create a new conflict
          const candidateUrl = shuffled[k].imageUrl;
          let canSwap = true;

          // Check if candidate would conflict at position j
          for (let check = Math.max(0, j - minSpacing); check <= Math.min(shuffled.length - 1, j + minSpacing); check++) {
            if (check !== j && check !== k && shuffled[check].imageUrl === candidateUrl) {
              canSwap = false;
              break;
            }
          }

          if (canSwap) {
            [shuffled[j], shuffled[k]] = [shuffled[k], shuffled[j]];
            swapped = true;
          }
        }
      }
    }
  }

  return shuffled;
};
