export interface Animal {
  id: number;
  name: string;
  breed: string;
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