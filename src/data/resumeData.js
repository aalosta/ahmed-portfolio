// src/data/resumeData.js
// As a senior developer, I'm separating data from presentation for maintainability
export const resumeData = {
  personalInfo: {
    name: "Ahmed Alosta",
    title: "Embedded systems engineer",
    description: "Self-motivated graduate with proven skills, Highly independent and capable of excelling in any given role.",
    email: "ahmed.alosta1@gmail.com",
    location: "Best, Netherlands",
    linkedin: "linkedin.com/in/ahmed-alosta-064143175",
    nationality: "Syrian/Dutch",
    languages: [
      { language: "Arabic", proficiency: "Native or Bilingual Proficiency" },
      { language: "English", proficiency: "Full Professional Proficiency" },
      { language: "Dutch", proficiency: "Professional Working Proficiency" },
      { language: "Turkish", proficiency: "Limited Working Proficiency" }
    ]
  },
  
  education: [
    {
      institution: "Fontys University of Applied Science",
      degree: "ICT and technology(HBO)",
      period: "08/2017- 07/2021",
      location: "The Netherlands- Eindhoven"
    }
  ],
  
  experience: [
    {
      company: "UPS",
      title: "Information Technology Engineering Specialist",
      period: "08/2021- Present",
      location: "The Netherlands- Eindhoven",
      description: "As an IT engineer, I managed network infrastructure, provided user support, and strengthened cybersecurity. Conducting security audits, implementing policies, and delivering user training, I reduced security incidents and enhanced industry compliance. Successfully integrated a new project into our facility, optimizing operational efficiency."
    },
    {
      company: "Connectives Floor",
      title: "Intern embedded systems engineer",
      period: "02/2021- 07/2021",
      location: "The Netherlands- Eindhoven",
      description: "As a firmware developer, I developed and tested step detection algorithms and created benchmarking tools to analyze their performance. My work resulted in significant improvements in accuracy and established a standard for future algorithms."
    },
    {
      company: "Jansen en De Bont",
      title: "Intern embedded systems engineer",
      period: "08/2020- 02/2021",
      location: "The Netherlands- Eindhoven",
      description: "As a firmware developer at JDB, I researched and developed an OTA firmware update, cloud communication protocol, and Wi-Fi smartconfig connection. My work resulted in seamless firmware updates for customers and improved operational efficiency through remote device management."
    },
    {
      company: "Private Companies",
      title: "IT support",
      period: "07/2007- 08/2015",
      location: "Hama- Istanbul",
      description: "Throughout my career, I have gained expertise in troubleshooting and problem-solving for both software and hardware issues. I have a proven track record of quickly identifying issues and implementing effective solutions."
    }
  ],
  
  skills: {
    technical: [
      "Azure", "COMPATIA A+", "Active Directory", "Service Now", "ITIL", "VEEAM", 
      "Citrix", "Networking", "Cyber security", "Scrum", "VmWare", "Windows Server",
      "C", "C++", "C#", "Embedded systems", "Python", "Linux", "Git", "Unit test",
      "IT Technical support", "Agile", "Hardware testing", "IOT"
    ],
    soft: ["Hard worker", "Fast learner", "Creativity", "Flexibility", "Patience"]
  },
  
  training: [
    "CompTIA A+ Operating System& Network Management",
    "VMware VCP-DCV Vsphere 7",
    "Microsoft Azure Cloud Computing AZ-900",
    "GTSG Global Technical Support Group, UPS Standard",
    "IT essentials: networking operation system(N+)",
    "Computer maintenance& troubleshooting(A+)"
  ],
  
  interests: [
    "3D Modeling", "Animals", "Series", "Technology", 
    "Sport", "Movies", "Cycling", "Photography"
  ]
};