export interface Skill {
  name: string;
  level: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Data Analysis',
    skills: [
      { name: 'Python', level: 'Advanced', icon: '🐍' },
      { name: 'SQL / MySQL', level: 'Intermediate', icon: '📊' },
      { name: 'Data Viz (Tableau/Power BI)', level: 'Intermediate', icon: '📈' },
      { name: 'Pandas & NumPy', level: 'Intermediate', icon: '🐼' },
    ],
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React / Next.js', level: 'Intermediate', icon: '⚛️' },
      { name: 'JavaScript (ES6+)', level: 'Intermediate', icon: '💛' },
      { name: 'HTML5 & CSS3', level: 'Advanced', icon: '🌐' },
      { name: 'Tailwind CSS', level: 'Intermediate', icon: '🎨' },
    ],
  },
  {
    category: 'Backend & Database',
    skills: [
      { name: 'Node.js', level: 'Learning', icon: '🟢' },
      { name: 'Express.js', level: 'Learning', icon: '🚀' },
      { name: 'MongoDB', level: 'Learning', icon: '🍃' },
    ],
  },
  {
    category: 'Tools & Workflow',
    skills: [
      { name: 'Git & GitHub', level: 'Intermediate', icon: '🐙' },
      { name: 'VS Code', level: 'Advanced', icon: '💻' },
    ],
  },
];