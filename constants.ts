import type { Animal, User, Post, Vet } from './types';

export const MOCK_ANIMALS: Animal[] = [
  {
    id: 1,
    name: 'Whiskers',
    breed: 'Siamese',
    age: '1 year',
    gender: 'Male',
    description: 'Whiskers is a chatty and intelligent Siamese who loves to follow his humans around and "talk" about his day. He enjoys puzzle toys.',
    imageUrl: 'https://picsum.photos/seed/whiskers/400/300',
  },
  {
    id: 2,
    name: 'Luna',
    breed: 'Domestic Shorthair',
    age: '2 years',
    gender: 'Female',
    description: 'Luna is a sleek black cat with a heart of gold. She is a bit shy at first but turns into a purr machine once she trusts you.',
    imageUrl: 'https://picsum.photos/seed/luna-cat/400/300',
  },
  {
    id: 3,
    name: 'Simba',
    breed: 'Maine Coon',
    age: '3 years',
    gender: 'Male',
    description: 'Simba is a gentle giant with a magnificent coat. He loves to cuddle and is surprisingly playful for his size.',
    imageUrl: 'https://picsum.photos/seed/simba/400/300',
  },
  {
    id: 4,
    name: 'Cleo',
    breed: 'Bengal',
    age: '10 months',
    gender: 'Female',
    description: 'Cleo is an energetic and curious Bengal kitten. She has stunning leopard-like spots and loves to climb and explore.',
    imageUrl: 'https://picsum.photos/seed/cleo/400/300',
  },
  {
    id: 5,
    name: 'Oliver',
    breed: 'Persian',
    age: '4 years',
    gender: 'Male',
    description: 'Oliver is a calm and dignified Persian who enjoys quiet laps and gentle brushing. He is the epitome of a lap cat.',
    imageUrl: 'https://picsum.photos/seed/oliver-cat/400/300',
  },
  {
    id: 6,
    name: 'Nala',
    breed: 'Ragdoll',
    age: '2 years',
    gender: 'Female',
    description: 'Nala is a sweet-natured Ragdoll who goes limp with joy when picked up. She is great with kids and other pets.',
    imageUrl: 'https://picsum.photos/seed/nala/400/300',
  },
];

export const MOCK_USERS: User[] = [
    { id: 1, name: "Aisha Rahman", email: "aisha@example.com", password: "password123" },
    { id: 2, name: "Jamal Khan", email: "jamal@example.com", password: "password123" },
];

export const MOCK_POSTS: Post[] = [
    {
        id: 1,
        author: { id: 1, name: "Aisha Rahman" },
        content: "Found this little one near Dhanmondi Lake. Keeping him safe for now. Does anyone know of a good vet nearby?",
        imageUrl: "https://picsum.photos/seed/post1/600/400",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
        likes: 15,
        comments: [
            { id: 1, authorName: "Jamal Khan", text: "So adorable! Try Dr. Alam's clinic." }
        ],
    },
    {
        id: 2,
        author: { id: 2, name: "Jamal Khan" },
        content: "Just adopted Luna from CATWAALA last week! She's settling in so well. Thank you to the team for making the process so smooth. Here she is enjoying her new favorite spot.",
        imageUrl: "https://picsum.photos/seed/post2/600/400",
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
        likes: 42,
        comments: [
            { id: 1, authorName: "Aisha Rahman", text: "That's wonderful news! Congratulations!" },
            { id: 2, authorName: "Admin", text: "We're so happy for you and Luna!" }
        ],
    }
];

export const MOCK_VETS: Vet[] = [
    {
        id: 1,
        name: 'Dr. Fatima Ahmed',
        specialization: 'General Pet Health',
        imageUrl: 'https://picsum.photos/seed/vet1/200/200',
        isOnline: true,
    },
    {
        id: 2,
        name: 'Dr. Kabir Hossain',
        specialization: 'Veterinary Surgeon',
        imageUrl: 'https://picsum.photos/seed/vet2/200/200',
        isOnline: true,
    },
    {
        id: 3,
        name: 'Dr. Nazia Islam',
        specialization: 'Feline Health & Nutrition',
        imageUrl: 'https://picsum.photos/seed/vet3/200/200',
        isOnline: false,
    },
    {
        id: 4,
        name: 'Dr. Rohan Chowdhury',
        specialization: 'Exotic Animals & Birds',
        imageUrl: 'https://picsum.photos/seed/vet4/200/200',
        isOnline: true,
    },
];
