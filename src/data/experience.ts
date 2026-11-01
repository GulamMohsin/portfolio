import type { EducationItem, ExperienceItem } from '../types';

export const experience: ExperienceItem[] = [
  {
    id: 'bright-code',
    role: 'Digital Module and JavaScript Intern',
    company: 'Bright Code Software Pvt. Ltd.',
    location: 'Ranchi, India',
    period: 'June 2024 – July 2024',
    bullets: [
      'Developed interactive web modules using JavaScript.',
      'Worked on dynamic and interactive web application features.',
      'Applied JavaScript programming concepts to practical development tasks.',
      'Gained hands-on experience in software development and problem-solving.',
    ],
  },
];

/**
 * Education, newest first.

 */
export const educationHistory: EducationItem[] = [
  {
    id: 'btech',
    title: 'Bachelor of Technology – Computer Science and Engineering',
    institution: "Guru Gobind Singh Educational Society's Technical Campus",
    period: '2022 – 2026',
    location: 'Bokaro, Jharkhand, India',
    coursework: [
      'Object-Oriented Programming',
      'Data Structures and Algorithms',
      'Artificial Intelligence',
      'Operating Systems',
      'DBMS',
    ],
    focus: [
      'Software Quality Engineering and Test Automation',
      'JavaScript with Playwright',
      'API Testing and SQL',
    ],
  },
];
