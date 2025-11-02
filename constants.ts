import type { Animal, User, Post, Vet, ImpactStats, HappyTail, LocalVet } from './types';

export const MOCK_ANIMALS: Animal[] = [
  {
    id: 1,
    name: 'Simba',
    breed: 'Persian',
    age: '2 years',
    gender: 'Male',
    description: 'Simba is a majestic Persian with a calm and affectionate nature. He loves lounging in sunbeams and being gently brushed.',
    imageUrl: 'https://picsum.photos/seed/simba-cat/400/300',
  },
  {
    id: 2,
    name: 'Luna',
    breed: 'Siamese',
    age: '1 year',
    gender: 'Female',
    description: 'Luna is a vocal and intelligent Siamese who enjoys interactive toys and conversations. She is very social and loves being the center of attention.',
    imageUrl: 'https://picsum.photos/seed/luna-cat/400/300',
  },
  {
    id: 3,
    name: 'Oliver',
    breed: 'Local Crossbreed',
    age: '6 months',
    gender: 'Male',
    description: 'Oliver is a playful and curious kitten with a lot of love to give. He is a bundle of joy and gets along well with everyone.',
    imageUrl: 'https://picsum.photos/seed/oliver-cat/400/300',
  },
  {
    id: 4,
    name: 'Chloe',
    breed: 'Ragdoll',
    age: '3 years',
    gender: 'Female',
    description: 'Chloe is a gentle and sweet-natured Ragdoll. She enjoys quiet cuddles and will follow you from room to room. A perfect lap cat.',
    imageUrl: 'https://picsum.photos/seed/chloe-cat/400/300',
  },
  {
    id: 5,
    name: 'Leo',
    breed: 'Bengal',
    age: '1.5 years',
    gender: 'Male',
    description: 'Leo is an active and adventurous Bengal. He loves climbing cat trees and chasing laser pointers. He needs a stimulating environment.',
    imageUrl: 'https://picsum.photos/seed/leo-cat/400/300',
  },
  {
    id: 6,
    name: 'Nala',
    breed: 'Maine Coon',
    age: '4 years',
    gender: 'Female',
    description: 'Nala is a gentle giant with a loving personality. She is very patient and would make a wonderful family pet. She adores children.',
    imageUrl: 'https://picsum.photos/seed/nala-cat/400/300',
  },
];

export const MOCK_USERS: User[] = [
    { id: 1, name: "Aisha Rahman", email: "aisha@example.com", password: "password123" },
    { id: 2, name: "Jamal Khan", email: "jamal@example.com", password: "password123" },
    { id: 3, name: "Google User", email: "google@example.com", password: "googlepassword" },
];

export const MOCK_POSTS: Post[] = [
    {
        id: 1,
        author: { id: 1, name: "Aisha Rahman" },
        content: "Found this sweet little kitten near Dhanmondi Lake. Keeping her safe for now. Does anyone know of a good vet nearby?",
        imageUrl: "https://picsum.photos/seed/post1-cat/600/400",
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
        imageUrl: "https://picsum.photos/seed/post2-cat/600/400",
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

export const MOCK_IMPACT_STATS: ImpactStats = {
    rescuedThisYear: 127,
    successfulAdoptions: 92,
    mealsProvided: 4580,
    shelterFundGoal: 50000,
    shelterFundCurrent: 31250,
};

export const MOCK_HAPPY_TAILS: HappyTail[] = [
  {
    id: 1,
    animalName: 'Simba',
    adopterName: 'The Rahman Family',
    story: "Simba settled in immediately and is now the official ruler of the house. His favorite activities include napping in sunbeams and demanding treats at 3 AM. We wouldn't have it any other way!",
    imageUrl: 'https://picsum.photos/seed/happy-simba/400/550',
  },
  {
    id: 2,
    animalName: 'Luna',
    adopterName: 'Sadia',
    story: "I was looking for a chatty companion, and Luna is just perfect. She was very shy at the shelter, but now she's a confident girl who follows me everywhere. Adopting her was the best decision.",
    imageUrl: 'https://picsum.photos/seed/happy-luna/400/500',
  },
  {
    id: 3,
    animalName: 'Oliver',
    adopterName: 'The Khans',
    story: "Our kids call him the 'little prince' of our home. Oliver is the most gentle and patient cat, and he absolutely adores the children. He has completed our family.",
    imageUrl: 'https://picsum.photos/seed/happy-oliver/400/600',
  },
  {
    id: 4,
    animalName: 'Chloe',
    adopterName: 'Jamal',
    story: "Chloe is a ball of fluff and purrs! She keeps me on my toes and makes me laugh every single day with her antics. She's incredibly smart and has learned so many tricks. So glad I could give her the peaceful home she needed.",
    imageUrl: 'https://picsum.photos/seed/happy-chloe/400/520',
  },
];

export const BANGLADESH_DISTRICTS = [
    'Bagerhat', 'Bandarban', 'Barguna', 'Barishal', 'Bhola', 'Bogura', 'Brahmanbaria', 'Chandpur', 'Chapainawabganj', 'Chattogram', 'Chuadanga', 'Cox\'s Bazar', 'Cumilla', 'Dhaka', 'Dinajpur', 'Faridpur', 'Feni', 'Gaibandha', 'Gazipur', 'Gopalganj', 'Habiganj', 'Jamalpur', 'Jashore', 'Jhalokati', 'Jhenaidah', 'Joypurhat', 'Khagrachari', 'Khulna', 'Kishoreganj', 'Kurigram', 'Kushtia', 'Lakshmipur', 'Lalmonirhat', 'Madaripur', 'Magura', 'Manikganj', 'Meherpur', 'Moulvibazar', 'Munshiganj', 'Mymensingh', 'Naogaon', 'Narail', 'Narayanganj', 'Narsingdi', 'Natore', 'Netrokona', 'Nilphamari', 'Noakhali', 'Pabna', 'Panchagarh', 'Patuakhali', 'Pirojpur', 'Rajbari', 'Rajshahi', 'Rangamati', 'Rangpur', 'Satkhira', 'Shariatpur', 'Sherpur', 'Sirajganj', 'Sunamganj', 'Sylhet', 'Tangail', 'Thakurgaon'
];

export const MOCK_LOCAL_VETS: LocalVet[] = [
    { id: 1, name: 'Central Veterinary Hospital', address: '48, Kazi Alauddin Road, Dhaka-1000', phone: '02-9563588', district: 'Dhaka', googleMapsUrl: 'https://maps.google.com/?q=Central+Veterinary+Hospital,Dhaka' },
    { id: 2, name: 'PAW Life Care', address: 'House-20, Road-1, Block-A, Niketon, Gulshan-1, Dhaka', phone: '01626-612042', district: 'Dhaka', googleMapsUrl: 'https://maps.google.com/?q=PAW+Life+Care,Dhaka' },
    { id: 3, name: 'Chattogram Veterinary and Animal Sciences University Hospital', address: 'Khulshi, Chattogram', phone: '031-659093', district: 'Chattogram', googleMapsUrl: 'https://maps.google.com/?q=CVASU+Hospital,Chattogram' },
    { id: 4, name: 'The Pet Vet', address: '14/A, M. M. Ali Road, Chattogram', phone: '01711-123456', district: 'Chattogram', googleMapsUrl: 'https://maps.google.com/?q=The+Pet+Vet,Chattogram' },
    { id: 5, name: 'Sylhet Animal Aid', address: 'House 5, Road 8, Block B, Shahjalal Uposhohor, Sylhet', phone: '01712-987654', district: 'Sylhet', googleMapsUrl: 'https://maps.google.com/?q=Sylhet+Animal+Aid' },
    { id: 6, name: 'Khulna Pet Clinic', address: '55, Khan Jahan Ali Road, Khulna', phone: '01911-555666', district: 'Khulna', googleMapsUrl: 'https://maps.google.com/?q=Khulna+Pet+Clinic' },
    { id: 7, name: 'Rajshahi Pet Care', address: 'Ranibazar, Rajshahi', phone: '01715-112233', district: 'Rajshahi', googleMapsUrl: 'https://maps.google.com/?q=Rajshahi+Pet+Care' },
    { id: 8, name: 'Barishal Pet Hospital', address: 'Sadar Road, Barishal', phone: '01819-444555', district: 'Barishal', googleMapsUrl: 'https://maps.google.com/?q=Barishal+Pet+Hospital' },
    { id: 9, name: 'Rangpur Pet Zone', address: 'Dhap, Rangpur', phone: '01556-778899', district: 'Rangpur', googleMapsUrl: 'https://maps.google.com/?q=Rangpur+Pet+Zone' },
    { id: 10, name: 'Mymensingh Animal Clinic', address: 'Charpara, Mymensingh', phone: '01678-102030', district: 'Mymensingh', googleMapsUrl: 'https://maps.google.com/?q=Mymensingh+Animal+Clinic' },
];