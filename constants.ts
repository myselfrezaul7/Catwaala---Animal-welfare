import type { Animal, User, Post, Vet, ImpactStats, HappyTail, LocalVet } from './types';

export const MOCK_ANIMALS: Animal[] = [
  {
    id: 1,
    name: 'Simba',
    nameBn: 'সিম্বা',
    breed: 'Persian',
    breedBn: 'পার্সিয়ান',
    age: '2 years',
    gender: 'Male',
    description: 'Simba is a majestic Persian with a calm and affectionate nature. He loves lounging in sunbeams and being gently brushed.',
    imageUrl: 'https://picsum.photos/seed/simba-cat/400/300',
  },
  {
    id: 2,
    name: 'Luna',
    nameBn: 'লুনা',
    breed: 'Siamese',
    breedBn: 'সিয়ামিজ',
    age: '1 year',
    gender: 'Female',
    description: 'Luna is a vocal and intelligent Siamese. She is very playful and enjoys interactive toys and conversations with her humans.',
    imageUrl: 'https://picsum.photos/seed/luna-cat/400/300',
  },
  {
    id: 3,
    name: 'Leo',
    nameBn: 'লিও',
    breed: 'Local Crossbreed',
    breedBn: 'দেশি বিড়াল',
    age: '6 months',
    gender: 'Male',
    description: 'Leo is a curious and adventurous kitten with a lot of love to give. He gets along well with other cats and is very playful.',
    imageUrl: 'https://picsum.photos/seed/leo-cat/400/300',
  },
  {
    id: 4,
    name: 'Nala',
    nameBn: 'নালা',
    breed: 'Bengal',
    breedBn: 'বেঙ্গল',
    age: '3 years',
    gender: 'Female',
    description: 'Nala is a stunning Bengal with a wild look but a sweet heart. She is active, loves to climb, and needs a stimulating environment.',
    imageUrl: 'https://picsum.photos/seed/nala-cat/400/300',
  },
  {
    id: 5,
    name: 'Milo',
    nameBn: 'মাইলো',
    breed: 'British Shorthair',
    breedBn: 'ব্রিটিশ শর্টহেয়ার',
    age: '1.5 years',
    gender: 'Male',
    description: 'Milo is a chill and easygoing British Shorthair. He is a gentle giant who enjoys a good nap and quiet companionship.',
    imageUrl: 'https://picsum.photos/seed/milo-cat/400/300',
  },
  {
    id: 6,
    name: 'Cleo',
    nameBn: 'ক্লিও',
    breed: 'Sphynx',
    breedBn: 'স্ফিংক্স',
    age: '4 years',
    gender: 'Female',
    description: 'Cleo is a unique and loving Sphynx. She craves attention and warmth, often seeking out laps and cozy blankets.',
    imageUrl: 'https://picsum.photos/seed/cleo-cat/400/300',
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
    story: "Simba settled in immediately and is now the official ruler of the house. His favorite activities include napping in sunbeams and demanding chin scratches. We wouldn't have it any other way!",
    imageUrl: 'https://picsum.photos/seed/happy-simba/400/550',
  },
  {
    id: 2,
    animalName: 'Luna',
    adopterName: 'Sadia',
    story: "I was looking for a chatty companion, and Luna is just perfect. She was very shy at the shelter, but now she follows me everywhere, telling me about her day. Adopting her was the best decision.",
    imageUrl: 'https://picsum.photos/seed/happy-luna/400/500',
  },
  {
    id: 3,
    animalName: 'Leo',
    adopterName: 'The Khans',
    story: "Our kids call him the 'little prince' of our home. Leo is the most gentle and patient cat, and he absolutely adores the children. He has completed our family.",
    imageUrl: 'https://picsum.photos/seed/happy-leo/400/600',
  },
  {
    id: 4,
    animalName: 'Nala',
    adopterName: 'Jamal',
    story: "Nala is a ball of energy and happy chirps! She keeps me on my toes and makes me laugh every single day with her antics. She's incredibly smart and has learned to play fetch. So glad I could give her the active home she needed.",
    imageUrl: 'https://picsum.photos/seed/happy-nala/400/520',
  },
];

const BANGLADESH_DISTRICTS_EN = [
    'Bagerhat', 'Bandarban', 'Barguna', 'Barishal', 'Bhola', 'Bogura', 'Brahmanbaria', 'Chandpur', 'Chapainawabganj', 'Chattogram', 'Chuadanga', 'Cox\'s Bazar', 'Cumilla', 'Dhaka', 'Dinajpur', 'Faridpur', 'Feni', 'Gaibandha', 'Gazipur', 'Gopalganj', 'Habiganj', 'Jamalpur', 'Jashore', 'Jhalokati', 'Jhenaidah', 'Joypurhat', 'Khagrachari', 'Khulna', 'Kishoreganj', 'Kurigram', 'Kushtia', 'Lakshmipur', 'Lalmonirhat', 'Madaripur', 'Magura', 'Manikganj', 'Meherpur', 'Moulvibazar', 'Munshganj', 'Mymensingh', 'Naogaon', 'Narail', 'Narayanganj', 'Narsingdi', 'Natore', 'Netrokona', 'Nilphamari', 'Noakhali', 'Pabna', 'Panchagarh', 'Patuakhali', 'Pirojpur', 'Rajbari', 'Rajshahi', 'Rangamati', 'Rangpur', 'Satkhira', 'Shariatpur', 'Sherpur', 'Sirajganj', 'Sunamganj', 'Sylhet', 'Tangail', 'Thakurgaon'
].sort();

const BANGLADESH_DISTRICTS_BN = [
    'বাগেরহাট', 'বান্দরবান', 'বরগুনা', 'বরিশাল', 'ভোলা', 'বগুড়া', 'ব্রাহ্মণবাড়িয়া', 'চাঁদপুর', 'চাপাইনবাবগঞ্জ', 'চট্টগ্রাম', 'চুয়াডাঙ্গা', 'কক্সবাজার', 'কুমিল্লা', 'ঢাকা', 'দিনাজপুর', 'ফরিদপুর', 'ফেনী', 'গাইবান্ধা', 'গাজীপুর', 'গোপালগঞ্জ', 'হবিগঞ্জ', 'জামালপুর', 'যশোর', 'ঝালকাঠি', 'ঝিনাইদহ', 'জয়পুরহাট', 'খাগড়াছড়ি', 'খুলনা', 'কিশোরগঞ্জ', 'কুড়িগ্রাম', 'কুষ্টিয়া', 'লক্ষ্মীপুর', 'লালমনিরহাট', 'মাদারীপুর', 'মাগুরা', 'মানিকগঞ্জ', 'মেহেরপুর', 'মৌলভীবাজার', 'মুন্সিগঞ্জ', 'ময়মনসিংহ', 'নওগাঁ', 'নড়াইল', 'নারায়ণগঞ্জ', 'নরসিংদী', 'নাটোর', 'নেত্রকোনা', 'নীলফামারী', 'নোয়াখালী', 'পাবনা', 'পঞ্চগড়', 'পটুয়াখালী', 'পিরোজপুর', 'রাজবাড়ী', 'রাজশাহী', 'রাঙ্গামাটি', 'রংপুর', 'সাতক্ষীরা', 'শরীয়তপুর', 'শেরপুর', 'সিরাজগঞ্জ', 'সুনামগঞ্জ', 'সিলেট', 'টাঙ্গাইল', 'ঠাকুরগাঁও'
].sort((a, b) => a.localeCompare(b, 'bn'));

export const getDistricts = (lang: 'en' | 'bn') => {
    return lang === 'bn' ? BANGLADESH_DISTRICTS_BN : BANGLADESH_DISTRICTS_EN;
};


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