export interface Animal {
  id: number;
  name: string;
  nameBn?: string; // Bangla name for search
  breed: string;
  breedBn?: string; // Bangla breed for search
  age: string;
  gender: 'Male' | 'Female';
  description: string;
  imageUrl: string;
}

export interface ChatMessage {
    sender: 'user' | 'ai';
    text: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password?: string; // Only for registration, not stored in session
}

export interface Post {
  id: number;
  author: {
    id: number;
    name: string;
  };
  content: string;
  imageUrl?: string;
  timestamp: string; // ISO string
  likes: number;
  comments: { id: number, authorName: string; text: string; }[];
}

export interface Vet {
  id: number;
  name: string;
  specialization: string;
  imageUrl: string;
  isOnline: boolean;
}

export interface ImpactStats {
  rescuedThisYear: number;
  successfulAdoptions: number;
  mealsProvided: number;
  shelterFundGoal: number;
  shelterFundCurrent: number;
}

export interface HappyTail {
  id: number;
  animalName: string;
  adopterName: string;
  story: string;
  imageUrl: string;
}

export interface LocalVet {
  id: number;
  name: string;
  address: string;
  phone: string;
  district: string;
  googleMapsUrl: string;
  services?: string[];
  hours?: string;
}