import { 
  BeadColorOption, 
  BeadStyleOption, 
  SilverJewelryModel, 
  SilverPendantShape,
  SilverCharmOption, 
  ChemiFlowerOption, 
  GiftOccasion, 
  CustomerStory 
} from '../types';

export const BEAD_COLORS: BeadColorOption[] = [
  { id: 'white', name: 'Pearl White', hex: '#FDFBF7', class: 'bg-stone-100 border-stone-300' },
  { id: 'maroon', name: 'CHEMI Maroon', hex: '#581C25', class: 'bg-[#581C25]' },
  { id: 'blue', name: 'Cerulean Mist', hex: '#8BA1B7', class: 'bg-[#8BA1B7]' },
  { id: 'pink', name: 'Blush Rose', hex: '#E8B4B8', class: 'bg-[#E8B4B8]' },
  { id: 'brown', name: 'Terracotta Warmth', hex: '#B87D65', class: 'bg-[#B87D65]' },
  { id: 'sage', name: 'Sage Garden', hex: '#A3B19B', class: 'bg-[#A3B19B]' },
  { id: 'lavender', name: 'Dusty Lavender', hex: '#B8A8C8', class: 'bg-[#B8A8C8]' },
  { id: 'black', name: 'Onyx Midnight', hex: '#262425', class: 'bg-stone-900' },
];

export const BEAD_STYLES: BeadStyleOption[] = [
  {
    id: 'pearl-crystal',
    name: 'Freshwater Pearl & Crystal',
    description: 'Natural baroque freshwater pearls paired with shimmering hand-cut glass crystals.',
    priceModifier: 0,
  },
  {
    id: 'pressed-floral',
    name: 'Preserved Floral Petal Cluster',
    description: 'Delicate mini floral beads embedded with dried organic petals.',
    priceModifier: 25000,
  },
  {
    id: 'gold-accented',
    name: 'Champagne Gold & Glass Bead',
    description: 'Warm 14K gold-filled accent beads woven between iridescent vintage beads.',
    priceModifier: 35000,
  },
  {
    id: 'minimalist-ceramic',
    name: 'Handcrafted Ceramic & Shell',
    description: 'Matte artisan ceramic beads with natural mother-of-pearl accents.',
    priceModifier: 15000,
  },
];

export const RESIN_PENDANT_SHAPES: SilverPendantShape[] = [
  {
    id: 'oval',
    name: '1. Oval Botanical Locket',
    description: 'Classic vintage oval silver bezel with filigree border. Perfect for vertical rose or lily petals.',
    priceModifier: 0,
    image: '/src/assets/images/silver_pendant_oval_1791364570015.jpg',
  },
  {
    id: 'heart',
    name: '2. Embraced Heart Keepsake',
    description: 'Romantic heart-shaped 925 sterling silver frame encapsulating cherished flower blossoms.',
    priceModifier: 20000,
    image: '/src/assets/images/silver_pendant_heart_1791364582838.jpg',
  },
  {
    id: 'round',
    name: '3. Classic Round Solitaire Bezel',
    description: 'Sleek, modern circular 925 sterling silver frame holding high-clarity crystal resin.',
    priceModifier: 10000,
    image: '/src/assets/images/silver_pendant_round_1791364592294.jpg',
  },
  {
    id: 'teardrop',
    name: '4. Teardrop Bloom Pendant',
    description: 'Graceful pear-shaped teardrop silver casing designed for long floral stem petals.',
    priceModifier: 25000,
    image: '/src/assets/images/silver_pendant_teardrop_1791364603340.jpg',
  },
];

export const SILVER_BRACELET_DESIGNS = [
  {
    id: 'cuff-wire',
    name: '1. Botanical Silver Cuff Bracelet',
    type: 'Adjustable 925 Wire Cuff',
    description: 'Sleek adjustable sterling silver wire cuff featuring twin resin flower charms at each end.',
    basePrice: 389000,
    image: '/src/assets/images/silver_bracelet_cuff_1791364614195.jpg',
  },
  {
    id: 'chain-link',
    name: '2. Delicate Silver Chain Bracelet',
    type: '925 Silver Link & Pearl Chain',
    description: 'Refined sterling silver link chain with center resin flower locket and baroque pearl accent.',
    basePrice: 369000,
    image: '/src/assets/images/silver_bracelet_chain_1791364623477.jpg',
  },
];

export const SILVER_MODELS: SilverJewelryModel[] = [
  {
    id: 'silver-bracelet',
    name: 'Sakura Petal Silver Cuff Bracelet',
    subtitle: 'CHEMI Silver Flower Bracelet',
    basePrice: 389000,
    description: 'Delicate 925 Sterling Silver wire cuff bracelet featuring pink cherry blossom petals and zircon crystal center.',
    image: 'https://images.unsplash.com/photo-1611591475193-47a61d120d36?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'silver-necklace',
    name: 'White Flower Delicate Silver Pendant',
    subtitle: 'CHEMI Silver Flower Necklace',
    basePrice: 429000,
    description: 'Pure white lily flower pendant crafted in 925 Sterling Silver with preserved petal lens and matching silver chain.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'silver-brooch',
    name: 'Forget-Me-Not Blue Flower Silver Ring & Pin',
    subtitle: 'CHEMI Silver Ring & Brooch',
    basePrice: 349000,
    description: 'Delicate sterling silver band ring set with sky-blue forget-me-not flower petals and crystal resin encapsulation.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop',
  },
];

export const SILVER_CHARMS: SilverCharmOption[] = [
  {
    id: 'flower',
    name: 'Botanical Bloom Charm',
    description: 'Framed floral motif accent in solid 925 silver',
    priceModifier: 0,
    iconName: 'Flower2',
  },
  {
    id: 'heart',
    name: 'Embraced Heart Charm',
    description: 'Smooth polished heart silhouette celebrating love and connections',
    priceModifier: 20000,
    iconName: 'Heart',
  },
  {
    id: 'star',
    name: 'North Star Charm',
    description: 'Engraved guiding star setting with tiny zirconia accent',
    priceModifier: 25000,
    iconName: 'Sparkles',
  },
  {
    id: 'circle',
    name: 'Eternal Circle Locket',
    description: 'Classic minimalist bezel ring around the flower memory',
    priceModifier: 15000,
    iconName: 'CircleDot',
  },
  {
    id: 'moon',
    name: 'Crescent Moon Charm',
    description: 'Soft lunar arch holding the botanical keepsake',
    priceModifier: 20000,
    iconName: 'Moon',
  },
];

export const CHEMI_FLOWERS: ChemiFlowerOption[] = [
  {
    id: 'rose',
    name: 'Pure White & Crimson Rose',
    symbolism: 'Timeless affection, reverence, and enduring devotion',
    color: 'Crimson & Ivory',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'daisy',
    name: 'Sunlit Wild Daisy',
    symbolism: 'Innocence, fresh hope, and joyful new beginnings',
    color: 'Buttercup Yellow & White',
    image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'lily',
    name: 'Stargazer White Lily',
    symbolism: 'Purity of commitment, honor, and noble warmth',
    color: 'Pure Silk White',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'carnation',
    name: 'Blush Pink Carnation',
    symbolism: 'Unconditional love, gratitude, and maternal warmth',
    color: 'Blush Petal Pink',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'chrysanthemum',
    name: 'Golden Chrysanthemum',
    symbolism: 'Longevity, optimism, joy, and deep friendship',
    color: 'Warm Amber Gold',
    image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'babys-breath',
    name: 'Gypsophila (Baby’s Breath)',
    symbolism: 'Everlasting gratitude, sincerity, and gentle support',
    color: 'Soft Cloud White',
    image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=600&auto=format&fit=crop',
  },
];

export const GIFT_OCCASIONS: GiftOccasion[] = [
  {
    id: 'graduation',
    title: 'Graduation',
    tagline: 'For everything you’ve worked for.',
    description: 'Preserve petals from your graduation bouquet or create a celebratory custom beads piece to honor years of dedication.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
    recommendedCategory: 'silver',
    storySnippet: '“The petals from her degree ceremony now sit safely inside a silver pendant she wears every day.”',
  },
  {
    id: 'wedding',
    title: 'Wedding',
    tagline: 'For the flowers from your forever day.',
    description: 'Transform wedding bouquet petals into a heirloom silver bracelet or necklace for the bride, groom’s mother, or bridesmaids.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    recommendedCategory: 'silver',
    storySnippet: '“She carried those white peonies down the aisle. Now they stay with her as a timeless silver ring.”',
  },
  {
    id: 'birthday',
    title: 'Birthday',
    tagline: 'For someone worth celebrating.',
    description: 'Design a personalized CHEMI Beads accessory using their favorite color palette and flower details for a touchingly thoughtful gift.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop',
    recommendedCategory: 'beads',
    storySnippet: '“I picked her two favorite pastel colors and pearl beads. She cried when she opened the maroon CHEMI box!”',
  },
  {
    id: 'friendship',
    title: 'Friendship',
    tagline: 'For the person who’s always there.',
    description: 'Matching or complementary bead bracelets made to celebrate shared laughter, late-night talks, and unspoken bonds.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
    recommendedCategory: 'beads',
    storySnippet: '“We made twin bracelets with blue and ivory beads before moving to different cities.”',
  },
  {
    id: 'partner',
    title: 'Partner & Anniversary',
    tagline: 'For a moment that’s yours.',
    description: 'Commemorate the first bouquet he gave you or create a wearable symbol of your journey together.',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop',
    recommendedCategory: 'silver',
    storySnippet: '“On our 3rd anniversary, he secretly collected dried roses from our first date flowers.”',
  },
  {
    id: 'self-gift',
    title: 'Self Gift & Milestones',
    tagline: 'Because some milestones deserve something to keep.',
    description: 'Promotions, personal healing, new chapters, or simply honoring your own growth with a piece made just for you.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
    recommendedCategory: 'beads',
    storySnippet: '“I bought this to mark finishing my thesis. Every time I touch the beads, I remember my strength.”',
  },
];

export const CUSTOMER_STORIES: CustomerStory[] = [
  {
    id: 'story-1',
    customerName: 'Nadia R.',
    occasion: 'University Graduation',
    date: 'June 2026',
    quote: 'Sending the flowers from my graduation bouquet was so simple. When the CHEMI Silver necklace arrived in the maroon box, seeing those exact red rose petals crystallized in silver made me tear up.',
    originalMomentImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop',
    flowerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop',
    jewelryImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop',
    productType: 'CHEMI Silver Necklace • Memory Pendant',
  },
  {
    id: 'story-2',
    customerName: 'Maya & Sarah',
    occasion: 'Best Friends Birthday Gift',
    date: 'August 2026',
    quote: 'I customized a CHEMI Beads bracelet in her signature sage green and pearl white. The option to write a personalized story card made it the most meaningful gift at her birthday dinner.',
    originalMomentImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop',
    flowerImage: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=600&auto=format&fit=crop',
    jewelryImage: 'https://images.unsplash.com/photo-1611591475193-47a61d120d36?q=80&w=600&auto=format&fit=crop',
    productType: 'CHEMI Beads Bracelet • Sage & Pearl',
  },
  {
    id: 'story-3',
    customerName: 'Clarissa W.',
    occasion: 'Bali Wedding Day',
    date: 'May 2026',
    quote: 'Instead of letting my wedding bouquet wither away in a vase, CHEMI turned my white orchids into 3 silver keepsakes for me and my mom. It feels like wearing our happiest day.',
    originalMomentImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop',
    flowerImage: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=600&auto=format&fit=crop',
    jewelryImage: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600&auto=format&fit=crop',
    productType: 'CHEMI Silver Heirloom Pins',
  },
];
