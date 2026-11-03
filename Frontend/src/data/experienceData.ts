export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export const experienceData: Experience[] = [
  {
    id: 1,
    role: 'Administration Assistant',
    company: 'Biro Tata Pemerintahan Setda DIY',
    duration: 'Aug 2026 - Sep 2026',
    description:
      'Supported administrative and operational activities for government meetings and events, including attendance management, document preparation, logistics, refreshments, event preparation, meeting documentation, and post-meeting reporting. Also contributed to basic social media content editing and publication support.',
  },
  {
    id: 2,
    role: 'Dicoding — Data Scientist Learning Program',
    company: 'Dicoding Indonesia',
    duration: 'Jul 2023 - Dec 2023',
    description:
      'Participated in a structured Data Scientist learning program, completing several learning modules and gaining foundational exposure to data processing, data analysis, and machine learning concepts.'
  },
  {
    id:3,
    role: 'Member of Organization',
    company: 'Sejuta Cita — Impact Generation',
    duration: 'Jan 2023 - Present',
    description:
      'Participated in the Impact Generation program by Sejuta Cita, contributing to community and social-impact activities while collaborating with other participants in a remote working environment. Developed experience in teamwork, communication, coordination, and participation in social initiativees,'
  },
  {
    id: 4,
    role: 'Member of student personal development',
    company: 'Yogya Talent Scolarship',
    duration: 'Jan 2022 - Dec 2022',
    description:
    'Participated in the Yogya Talent Scholarship program, engaging in learning activities, personal development, and collaborative sessions with fellow participants. Strengthened communication, teamwork, networking, and self-development skills through the program.',
  },
];
