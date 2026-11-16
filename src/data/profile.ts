export const profile = {
  name: 'Adrian Salinas',
  role: 'AI Engineer',
  location: 'Iloilo, Philippines',
  timezone: 'GMT+8',
  tagline: 'Building full-stack products and applied AI systems.',
  bio: 'I design and ship end-to-end software, from backends to front-ends. I run Cascade Development Group, an IT solutions startup in Iloilo, and focus on applied AI.',
  availability: 'Open to internships, part-time and remote roles.',
  photo: '/aj-hero.webp',
} as const

export const stats = [
  { value: '20+', label: 'Projects built' },
  { value: '2', label: 'National hackathon wins' },
  { value: '1+', label: 'Years shipping software' },
] as const

export interface Role {
  title: string
  org: string
  period: string
  points: string[]
}

export const experience: Role[] = [
  {
    title: 'Back-End AI Engineering Intern',
    org: 'FlyRank AI',
    period: 'Jul – Sep 2026 · 71 days',
    points: [
      'Capstone: LLM Usage Metering & Billing Service, accepted by the lead track mentor.',
      'Completed 7 assignments (5 required) across 61 assessed hours.',
      'Earned a Certificate of Completion and a written recommendation from FlyRank’s Founder & CEO.',
    ],
  },
  {
    title: 'Founder & AI Engineer',
    org: 'Cascade Development Group (CDG)',
    period: '2026 – present',
    points: [
      'Delivers web development, database architecture and technical consulting across the Visayas.',
      'Stack: Next.js, TypeScript, Supabase, Vercel.',
      'Runs sprint-based delivery with Notion and GitHub.',
    ],
  },
]

export interface Project {
  name: string
  context: string
  kind: 'Hackathon' | 'Internship' | 'Building'
  image?: string
  url?: string
}

export const projects: Project[] = [
  { name: 'Marine-AI', context: 'National AI Hackathon 2026', kind: 'Hackathon', image: '/projects/national-team.webp' },
  { name: 'Gilayon', context: 'Hack Iloilo 2026 Startup Hackathon, and Meta Global AI Developer Hackathon', kind: 'Hackathon', image: '/projects/gilayon.webp' },
  { name: 'Repo Autopsy', context: 'IBM Bob 2.0 Worldwide Hackathon', kind: 'Hackathon', image: '/projects/repo-autopsy.png', url: 'https://repo-autopsy.vercel.app' },
  { name: 'SplitRails', context: 'Stellar APAC Hackathon', kind: 'Hackathon', image: '/projects/splitrails.png', url: 'https://split-rails.vercel.app' },
  { name: 'Usage Metering & Billing Engine', context: 'FlyRank AI capstone', kind: 'Internship' },
  { name: 'ITSA Website', context: 'Project manager', kind: 'Building', url: 'https://itsa-website-psi.vercel.app' },
  { name: 'Famly', context: 'Solo developer', kind: 'Building', url: 'https://famly-app.vercel.app' },
  { name: 'Tuon', context: 'Solo developer', kind: 'Building', url: 'https://github.com/JustineSalinas/Tuon' },
  { name: 'Nan Builders', context: 'CDG full-stack developer', kind: 'Building' },
]

export const skills: Record<string, string[]> = {
  Frontend: ['HTML5', 'CSS3', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express', 'Python', 'Java'],
  Databases: ['Supabase', 'PostgreSQL', 'MySQL', 'Firebase'],
  'Auth & BaaS': ['Clerk', 'Supabase Auth'],
  'AI & Automation': ['Claude Code', 'Cursor IDE', 'Antigravity', 'Gemini / Claude API', 'Prompt engineering', 'RAG', 'ONNX', 'XGBoost'],
  Tools: ['Git', 'GitHub', 'Figma', 'Notion', 'Vercel'],
}

export const certificationCount = 16

export const contacts = [
  { label: 'Email', value: 'ajsalinas005@gmail.com', href: 'mailto:ajsalinas005@gmail.com', icon: 'mail' },
  { label: 'LinkedIn', value: 'adrian-justin-salinas', href: 'https://linkedin.com/in/adrian-justin-salinas-a4768b226/', icon: 'linkedin' },
  { label: 'GitHub', value: 'JustineSalinas', href: 'https://github.com/JustineSalinas', icon: 'github' },
  { label: 'Instagram', value: '@a.jsalinas', href: 'https://instagram.com/a.jsalinas', icon: 'instagram' },
  { label: 'Facebook', value: 'Adrian Salinas', href: 'https://facebook.com/profile.php?id=100067117067492', icon: 'facebook' },
] as const
