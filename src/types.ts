export type NavigationTab = 
  | 'home'
  | 'collections'
  | 'workshops'
  | 'our-story'
  | 'beads-customizer'
  | 'silver-customizer'
  | 'flower-guide'
  | 'gift-guide'
  | 'stories-gallery';

export type BeadJewelryType = 'bracelet' | 'necklace' | 'brooch';

export interface BeadColorOption {
  id: string;
  name: string;
  hex: string;
  secondaryHex?: string;
  class: string;
}

export interface BeadStyleOption {
  id: string;
  name: string;
  description: string;
  priceModifier: number;
  previewUrl?: string;
}

export interface BeadCustomizationState {
  jewelryType: BeadJewelryType;
  primaryColor: BeadColorOption;
  secondaryColor?: BeadColorOption;
  beadStyle: BeadStyleOption;
  flowerCount: number;
  recipientName?: string;
  personalNote?: string;
}

export interface SilverPendantShape {
  id: 'oval' | 'heart' | 'round' | 'teardrop';
  name: string;
  description: string;
  priceModifier: number;
  image: string;
}

export interface StrandBeadItem {
  id: string;
  type: 'bead' | 'flower' | 'pearl';
  colorName: string;
  hex: string;
  size: number; // e.g. 8, 10, 12, 16
}

export type SilverJewelryModel = {
  id: 'silver-bracelet' | 'silver-necklace' | 'silver-brooch';
  name: string;
  subtitle: string;
  basePrice: number;
  description: string;
  image: string;
};

export type SilverCharmOption = {
  id: string;
  name: string;
  description: string;
  priceModifier: number;
  iconName: string;
};

export type FlowerSourceType = 'own' | 'chemi';

export interface ChemiFlowerOption {
  id: string;
  name: string;
  symbolism: string;
  color: string;
  image: string;
}

export interface SilverCustomizationState {
  model: SilverJewelryModel;
  charm: SilverCharmOption;
  flowerSource: FlowerSourceType;
  selectedChemiFlower?: ChemiFlowerOption;
  ownFlowerDetails?: {
    flowerType: string;
    occasion: string;
    dateOfEvent: string;
    specialNotes: string;
    photoPreviewUrl?: string;
  };
}

export interface CartItem {
  id: string;
  type: 'beads' | 'silver';
  title: string;
  subtitle: string;
  price: number;
  image: string;
  details: {
    jewelryType: string;
    colorsOrModel: string;
    beadsOrCharm: string;
    flowerSource?: string;
    requiresFlowerSubmission?: boolean;
    giftNote?: string;
  };
  quantity: number;
}

export interface GiftOccasion {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  recommendedCategory: 'beads' | 'silver';
  storySnippet: string;
}

export interface CustomerStory {
  id: string;
  customerName: string;
  occasion: string;
  date: string;
  quote: string;
  originalMomentImage: string;
  flowerImage: string;
  jewelryImage: string;
  productType: string;
}
