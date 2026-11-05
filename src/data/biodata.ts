export interface FamilyMember {
  id: string;
  role: 'Brother' | 'Sister';
  name: string;
  title?: string;
  education: string;
  occupation: string;
  location?: string;
  maritalStatus: 'Married' | 'Unmarried';
  details?: string;
}

export interface BiodataData {
  name: string;
  salutation: string;
  designation: string;
  shortBio: string;
  arabicBismillah: string;
  bismillahTranslation: string;
  quranVerseArabic: string;
  quranVerseTranslation: string;
  personal: {
    dob: string;
    birthYear: number;
    age: number;
    height: string;
    complexion: string;
    religion: string;
    sect: string;
    maritalStatus: string;
    motherTongue: string;
    languagesKnown: string[];
    bloodGroup?: string;
    hobbies: string[];
    nativePlace: {
      village: string;
      post: string;
      policeStation: string;
      district: string;
      state: string;
      pincode: string;
    };
  };
  educationAndCareer: {
    degree: string;
    stream: string;
    university: string;
    yearOfPassing: string;
    currentDesignation: string;
    company: string;
    workLocation: string;
    experienceSummary: string;
  };
  family: {
    summary: string;
    father: {
      name: string;
      status: string;
      occupation: string;
      details: string;
    };
    mother: {
      name: string;
      occupation: string;
      details: string;
    };
    brothers: FamilyMember[];
    sisters: FamilyMember[];
  };
  preferences: {
    general: string;
    education: string;
    familyBackground: string;
    values: string[];
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    email: string;
    whatsappUrl: string;
    address: string;
  };
}

export const biodata: BiodataData = {
  name: "Er. Shadab Anwar",
  salutation: "Er.",
  designation: "Mechanical Design Engineer",
  shortBio: "B.Tech in Mechanical Engineering with professional expertise as a Design Engineer at YAMAN Industry Pvt. Ltd., hailing from a respected and educated family in Samastipur, Bihar.",
  arabicBismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  bismillahTranslation: "In the name of Allah, the Most Gracious, the Most Merciful",
  quranVerseArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنْفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
  quranVerseTranslation: "And among His signs is that He created for you spouses from among yourselves that you may find tranquility in them, and He placed between you affection and mercy. (Surah Ar-Rum: 21)",
  personal: {
    dob: "25 April 1997",
    birthYear: 1997,
    age: 29,
    height: "5 Feet 5 Inches (165 cm)",
    complexion: "Fair",
    religion: "Islam",
    sect: "Sunni",
    maritalStatus: "Never Married",
    motherTongue: "Urdu / Hindi",
    languagesKnown: ["Urdu", "Hindi", "English"],
    bloodGroup: "B+",
    hobbies: ["Engineering CAD/CAM", "Product Design", "Reading", "Travel", "Fitness"],
    nativePlace: {
      village: "Chirotna",
      post: "Salha Buzurg",
      policeStation: "Larjha Ghat",
      district: "Samastipur",
      state: "Bihar",
      pincode: "848207"
    }
  },
  educationAndCareer: {
    degree: "B.Tech in Mechanical Engineering",
    stream: "Mechanical Engineering",
    university: "MRSPT University, Punjab",
    yearOfPassing: "2020",
    currentDesignation: "Design Engineer",
    company: "YAMAN Industry Pvt. Ltd.",
    workLocation: "Faridabad, Haryana",
    experienceSummary: "Skilled in industrial product designing, mechanical systems drafting, CAD modeling, and manufacturing process optimization."
  },
  family: {
    summary: "A highly educated, respectable, and traditional family with doctors, teachers, engineers, and healthcare professionals.",
    father: {
      name: "Shami Ahmad",
      status: "Retired",
      occupation: "Retired Government School Teacher",
      details: "Respected educator in the region who dedicated his life to education and family upbringing."
    },
    mother: {
      name: "Shamima Khatun",
      occupation: "Homemaker",
      details: "Loving homemaker providing strong Islamic values and moral grounding for the entire family."
    },
    brothers: [
      {
        id: "b1",
        role: "Brother",
        name: "Dr. Khurshid Anwar",
        title: "Eldest Brother",
        education: "MBBS, MD",
        occupation: "Medical Doctor / Specialist",
        location: "Working in Kuwait",
        maritalStatus: "Married",
        details: "Senior medical practitioner serving internationally in Kuwait with high professional standing."
      },
      {
        id: "b2",
        role: "Brother",
        name: "Maulana Meraj Anwar",
        title: "Second Brother",
        education: "Islamic Theology & Scholar",
        occupation: "Teacher",
        location: "Madrasa Islamia, Shakarpur Bharwara, Darbhanga",
        maritalStatus: "Married",
        details: "Distinguished educator teaching Islamic studies and community leadership in Darbhanga."
      },
      {
        id: "b3",
        role: "Brother",
        name: "Er. Firdaus Anwar",
        title: "Third Brother",
        education: "B.Tech Civil Engineering",
        occupation: "Civil Engineer",
        location: "Akshay Infra Project, Rajasthan",
        maritalStatus: "Married",
        details: "Experienced civil engineering professional overseeing infrastructure projects."
      },
      {
        id: "b4",
        role: "Brother",
        name: "Siraj Anwar",
        title: "Fourth Brother",
        education: "Bachelor of Physiotherapy (BPT)",
        occupation: "Healthcare Professional (Pursuing BPT)",
        location: "India",
        maritalStatus: "Married",
        details: "Specializing in physical rehabilitation and clinical physiotherapy."
      },
      {
        id: "b5",
        role: "Brother",
        name: "Dr. Minhaj Anwar",
        title: "Fifth Brother",
        education: "BPT, Pursuing MPT (Master of Physiotherapy)",
        occupation: "Physiotherapist & PG Scholar",
        location: "India",
        maritalStatus: "Unmarried",
        details: "Advanced healthcare scholar expanding his specialization in neurological/orthopedic rehabilitation."
      }
    ],
    sisters: [
      {
        id: "s1",
        role: "Sister",
        name: "Kausar Parween",
        title: "Elder Sister",
        education: "Graduate",
        occupation: "Homemaker",
        maritalStatus: "Married",
        details: "Happily settled with family, cultivating strong home values."
      },
      {
        id: "s2",
        role: "Sister",
        name: "Nagma Parween",
        title: "Sister",
        education: "Graduate",
        occupation: "Homemaker",
        maritalStatus: "Married",
        details: "Happily settled with family and children in an educated household."
      }
    ]
  },
  preferences: {
    general: "Looking for an educated, pious, and family-oriented partner with good Islamic moral values and respectful disposition.",
    education: "Graduate / Post Graduate in any professional or academic stream (e.g., Engineering, Medicine, Teaching, Science, Arts, or Commerce).",
    familyBackground: "Cultured and respectable Sunni Muslim family that values education, faith, and mutual respect.",
    values: [
      "Religious & Moral Values: Regular in prayers with respect for Islamic traditions",
      "Family-Oriented: Caring nature with deep respect for elders and family bonding",
      "Understanding & Compatibility: Broad-minded, supportive, and balanced outlook on life",
      "Education: Educated partner capable of fostering an intellectual and loving household"
    ]
  },
  contact: {
    phone: "+916201433381",
    phoneFormatted: "+91 6201433381",
    email: "shadabanwa889@gmail.com",
    whatsappUrl: "https://wa.me/916201433381?text=Assalamu%20Alaikum,%20regarding%20Er.%20Shadab%20Anwar's%20marriage%20profile",
    address: "Village – Chirotna, Post – Salha Buzurg, P.S. – Larjha Ghat, District – Samastipur, Bihar – 848207"
  }
};
