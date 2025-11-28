
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
    // Dhaka
    { id: 1, name: 'Central Veterinary Hospital', address: '48, Kazi Alauddin Road, Dhaka-1000', phone: '02-9563588', district: 'Dhaka', googleMapsUrl: 'https://maps.google.com/?q=Central+Veterinary+Hospital,Dhaka' },
    { id: 2, name: 'PAW Life Care', address: 'House-20, Road-1, Block-A, Niketon, Gulshan-1, Dhaka', phone: '01626-612042', district: 'Dhaka', googleMapsUrl: 'https://maps.google.com/?q=PAW+Life+Care,Dhaka' },
    { id: 3, name: 'Care for Paws (C4P)', address: 'House 39, Road 15, Block D, Banani, Dhaka', phone: '01711-223344', district: 'Dhaka', googleMapsUrl: 'https://maps.google.com/?q=Care+for+Paws,Banani' },
    { id: 4, name: 'Gulshan Pet Clinic', address: 'House 10, Road 113, Gulshan-2, Dhaka', phone: '01819-123456', district: 'Dhaka', googleMapsUrl: 'https://maps.google.com/?q=Gulshan+Pet+Clinic' },
    { id: 5, name: 'Uttara Vet Care', address: 'Sector 7, Road 18, House 5, Uttara, Dhaka', phone: '01912-345678', district: 'Dhaka', googleMapsUrl: 'https://maps.google.com/?q=Uttara+Vet+Care' },
    { id: 6, name: 'Dhanmondi Vet Clinic', address: 'Road 27, House 42, Dhanmondi, Dhaka', phone: '01678-901234', district: 'Dhaka', googleMapsUrl: 'https://maps.google.com/?q=Dhanmondi+Vet+Clinic' },
    
    // Chattogram
    { id: 7, name: 'Chattogram Veterinary and Animal Sciences University Hospital', address: 'Khulshi, Chattogram', phone: '031-659093', district: 'Chattogram', googleMapsUrl: 'https://maps.google.com/?q=CVASU+Hospital,Chattogram' },
    { id: 8, name: 'The Pet Vet', address: '14/A, M. M. Ali Road, Chattogram', phone: '01711-123456', district: 'Chattogram', googleMapsUrl: 'https://maps.google.com/?q=The+Pet+Vet,Chattogram' },
    { id: 9, name: 'Paws & Claws Vet Clinic', address: 'GEC Circle, Chattogram', phone: '01811-223344', district: 'Chattogram', googleMapsUrl: 'https://maps.google.com/?q=Paws+Claws+Chattogram' },
    { id: 10, name: 'Chittagong Pet Care', address: 'Halishahar, Block B, Chattogram', phone: '01911-223344', district: 'Chattogram', googleMapsUrl: 'https://maps.google.com/?q=Chittagong+Pet+Care' },

    // Sylhet
    { id: 11, name: 'Sylhet Animal Aid', address: 'House 5, Road 8, Block B, Shahjalal Uposhohor, Sylhet', phone: '01712-987654', district: 'Sylhet', googleMapsUrl: 'https://maps.google.com/?q=Sylhet+Animal+Aid' },
    { id: 12, name: 'Sylhet Vet Clinic', address: 'Zindabazar, Sylhet', phone: '01812-345678', district: 'Sylhet', googleMapsUrl: 'https://maps.google.com/?q=Sylhet+Vet+Clinic' },
    { id: 13, name: 'Pet Lovers Sylhet', address: 'Amborkhana, Sylhet', phone: '01611-223344', district: 'Sylhet', googleMapsUrl: 'https://maps.google.com/?q=Pet+Lovers+Sylhet' },

    // Khulna
    { id: 14, name: 'Khulna Pet Clinic', address: '55, Khan Jahan Ali Road, Khulna', phone: '01911-555666', district: 'Khulna', googleMapsUrl: 'https://maps.google.com/?q=Khulna+Pet+Clinic' },
    { id: 15, name: 'Khulna Sadar Vet Hospital', address: 'Sher-e-Bangla Road, Khulna', phone: '041-720123', district: 'Khulna', googleMapsUrl: 'https://maps.google.com/?q=Khulna+Sadar+Vet+Hospital' },
    { id: 16, name: 'Animal Care Khulna', address: 'Sonadanga, Khulna', phone: '01712-345678', district: 'Khulna', googleMapsUrl: 'https://maps.google.com/?q=Animal+Care+Khulna' },

    // Rajshahi
    { id: 17, name: 'Rajshahi Pet Care', address: 'Ranibazar, Rajshahi', phone: '01715-112233', district: 'Rajshahi', googleMapsUrl: 'https://maps.google.com/?q=Rajshahi+Pet+Care' },
    { id: 18, name: 'Rajshahi University Vet Clinic', address: 'Rajshahi University Campus, Rajshahi', phone: '0721-750041', district: 'Rajshahi', googleMapsUrl: 'https://maps.google.com/?q=Rajshahi+University+Vet' },
    { id: 19, name: 'Padma Vet Service', address: 'Shaheb Bazar, Rajshahi', phone: '01911-223344', district: 'Rajshahi', googleMapsUrl: 'https://maps.google.com/?q=Padma+Vet+Service' },

    // Barishal
    { id: 20, name: 'Barishal Pet Hospital', address: 'Sadar Road, Barishal', phone: '01819-444555', district: 'Barishal', googleMapsUrl: 'https://maps.google.com/?q=Barishal+Pet+Hospital' },
    { id: 21, name: 'Kirtankhola Vet Service', address: 'Nathullabad, Barishal', phone: '01711-556677', district: 'Barishal', googleMapsUrl: 'https://maps.google.com/?q=Kirtankhola+Vet' },

    // Rangpur
    { id: 22, name: 'Rangpur Pet Zone', address: 'Dhap, Rangpur', phone: '01556-778899', district: 'Rangpur', googleMapsUrl: 'https://maps.google.com/?q=Rangpur+Pet+Zone' },
    { id: 23, name: 'Rangpur Sadar Vet Hospital', address: 'Medical Moor, Rangpur', phone: '0521-62345', district: 'Rangpur', googleMapsUrl: 'https://maps.google.com/?q=Rangpur+Sadar+Vet' },

    // Mymensingh
    { id: 24, name: 'Mymensingh Animal Clinic', address: 'Charpara, Mymensingh', phone: '01678-102030', district: 'Mymensingh', googleMapsUrl: 'https://maps.google.com/?q=Mymensingh+Animal+Clinic' },
    { id: 25, name: 'BAU Veterinary Teaching Hospital', address: 'Bangladesh Agricultural University, Mymensingh', phone: '091-55695', district: 'Mymensingh', googleMapsUrl: 'https://maps.google.com/?q=BAU+Vet+Teaching+Hospital' },

    // Cumilla
    { id: 26, name: 'Cumilla Pet Care Center', address: 'Kandirpar, Cumilla', phone: '01819-223344', district: 'Cumilla', googleMapsUrl: 'https://maps.google.com/?q=Cumilla+Pet+Care' },
    { id: 27, name: 'Gomati Vet Services', address: 'Police Line, Cumilla', phone: '01712-334455', district: 'Cumilla', googleMapsUrl: 'https://maps.google.com/?q=Gomati+Vet+Services' },

    // Gazipur
    { id: 28, name: 'Gazipur Vet Station', address: 'Joydebpur, Gazipur', phone: '01911-889900', district: 'Gazipur', googleMapsUrl: 'https://maps.google.com/?q=Gazipur+Vet+Station' },
    { id: 29, name: 'Tongi Pet Clinic', address: 'Cherag Ali Market, Tongi, Gazipur', phone: '01611-223344', district: 'Gazipur', googleMapsUrl: 'https://maps.google.com/?q=Tongi+Pet+Clinic' },

    // Narayanganj
    { id: 30, name: 'Narayanganj Animal Hospital', address: 'Chashara, Narayanganj', phone: '01711-998877', district: 'Narayanganj', googleMapsUrl: 'https://maps.google.com/?q=Narayanganj+Animal+Hospital' },
    { id: 31, name: 'Shitalakhya Vet Care', address: '2 No. Rail Gate, Narayanganj', phone: '01812-334455', district: 'Narayanganj', googleMapsUrl: 'https://maps.google.com/?q=Shitalakhya+Vet' },

    // Bogura
    { id: 32, name: 'Bogura Pet Lovers', address: 'Shatmatha, Bogura', phone: '01715-667788', district: 'Bogura', googleMapsUrl: 'https://maps.google.com/?q=Bogura+Pet+Lovers' },
    { id: 33, name: 'North Bengal Vet Clinic', address: 'Sherpur Road, Bogura', phone: '01913-445566', district: 'Bogura', googleMapsUrl: 'https://maps.google.com/?q=North+Bengal+Vet' },

    // Cox's Bazar
    { id: 34, name: 'Cox\'s Bazar Vet Service', address: 'Hotel Motel Zone, Cox\'s Bazar', phone: '01818-112233', district: 'Cox\'s Bazar', googleMapsUrl: 'https://maps.google.com/?q=Coxs+Bazar+Vet' },

    // Jashore
    { id: 35, name: 'Jashore Pet Clinic', address: 'Doratana, Jashore', phone: '01716-223344', district: 'Jashore', googleMapsUrl: 'https://maps.google.com/?q=Jashore+Pet+Clinic' },
    
    // Pabna
    { id: 36, name: 'Pabna Animal Welfare', address: 'Abdul Hamid Road, Pabna', phone: '01717-334455', district: 'Pabna', googleMapsUrl: 'https://maps.google.com/?q=Pabna+Animal+Welfare' },

    // Dinajpur
    { id: 37, name: 'Dinajpur Vet Care', address: 'Station Road, Dinajpur', phone: '01718-445566', district: 'Dinajpur', googleMapsUrl: 'https://maps.google.com/?q=Dinajpur+Vet+Care' },

    // Tangail
    { id: 38, name: 'Tangail Pet Hospital', address: 'Nirala Mor, Tangail', phone: '01719-556677', district: 'Tangail', googleMapsUrl: 'https://maps.google.com/?q=Tangail+Pet+Hospital' },

    // Faridpur
    { id: 39, name: 'Faridpur Vet Clinic', address: 'Mujib Sarak, Faridpur', phone: '01720-667788', district: 'Faridpur', googleMapsUrl: 'https://maps.google.com/?q=Faridpur+Vet+Clinic' },

    // Noakhali
    { id: 40, name: 'Noakhali Animal Care', address: 'Maijdee Court, Noakhali', phone: '01821-778899', district: 'Noakhali', googleMapsUrl: 'https://maps.google.com/?q=Noakhali+Animal+Care' },
    
    // Kushtia
    { id: 41, name: 'Kushtia Vet Services', address: 'Mazampur, Kushtia', phone: '01722-889900', district: 'Kushtia', googleMapsUrl: 'https://maps.google.com/?q=Kushtia+Vet+Services' },
];
