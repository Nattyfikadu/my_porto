export const profile = {
  name: 'Natnael Fekadu Hunde',
  shortName: 'Natnael Fekadu',
  title: 'Full-Stack Developer',
  tagline:
    'I build full-stack web and mobile products — from database schema to deployed interface.',
  roles: [
    'Full-Stack Developer',
    'Software Engineer',
    'Mobile & Web Developer',
    'Web Designer',
    'Project Manager',
  ],
  email: 'natnaelfk@gmail.com',
  stats: [
    { value: '3+', label: 'Years Building' },
    { value: '5+', label: 'Projects Shipped' },
  ],
}

export const social = {
  github: 'https://github.com/Nattyfikadu/',
  linkedin: 'https://www.linkedin.com/in/natnael-fekadu-aa59b4213/',
  telegram: 'https://t.me/Natnael_Fekadu_H',
  email: 'mailto:natnaelfk@gmail.com',
}

export const skills = [
  'MERN Stack',
  'React Native',
  'Node.js',
  'Express',
  'MySQL',
  'MongoDB',
  'NoSQL',
  'MongoDB Atlas',
  'Supabase',
  'Java',
  'TypeScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'REST APIs',
  'Git',
  'Vite',
  'Expo',
]

export const projects = [
  {
    title: "Ge'ez Verb Derivation Tool",
    subtitle: 'Internship Project · Rule-based linguistic processing platform',
    tags: ['React', 'TypeScript', 'Vite', 'NLP', 'HTML5', 'CSS3'],
    role: 'Lead Frontend Developer',
    desc: "Internship project — a digital platform for deriving and analysing Ge'ez (Ethiopic) verb forms using rule-based linguistic processing. Helps researchers and students explore classical Ge'ez morphology interactively.",
    imageKey: 'geez' as const,
    liveUrl: 'https://geez-verb-derivation.vercel.app/',
    sourceUrl: 'https://github.com/Nattyfikazu',
    year: '2026',
  },
  {
    title: 'Campus Complaint Management System',
    subtitle: 'Role-based complaint management platform',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'React Native', 'REST API'],
    role: 'Full-Stack Developer',
    desc: 'A full-stack MERN platform where students submit campus complaints, staff track resolutions, and admins manage the entire workflow — role-based access, real-time status updates, and a React Native mobile companion app.',
    imageKey: 'cscms' as const,
    liveUrl: 'https://campus-compliant-system-cscms.vercel.app/',
    sourceUrl: 'https://github.com/Nattyfikazu',
    year: '2025',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
