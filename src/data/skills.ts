import type { Skill, SkillCategory, SkillLevel } from '../types';

/**
 * A short, honest skill list: only things that are easy to explain in an interview.
 *
 * Levels are conservative starting points. Review each one and move a skill up or
 * down only when you can back the change with real work. No percentages are used.
 */
const s = (name: string, level: SkillLevel, note?: string): Skill => ({ name, level, note });

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming and Web',
    icon: 'code',
    blurb: 'JavaScript is my main language for test automation.',
    skills: [
      s('JavaScript', 'practical', 'Main automation language. Used during my internship and in academic projects.'),
      s('HTML', 'practical'),
      s('CSS', 'practical'),
      s('React.js', 'practical', 'Used in the Automatic Timetable Management System project.'),
      s('Node.js', 'practical', 'Used in the Automatic Timetable Management System project.'),
      s('Python', 'practical', 'Used in two academic data and ML projects.'),
      s('SQL', 'learning'),
    ],
  },
  {
    id: 'manual',
    title: 'Manual Testing',
    icon: 'bug',
    blurb: 'The testing basics that good automation is built on.',
    skills: [
      s('Testing Fundamentals', 'learning'),
      s('SDLC and STLC', 'learning'),
      s('Test Case Design', 'learning'),
      s('Bug Reporting and Defect Life Cycle', 'learning'),
      s('Severity vs Priority', 'learning'),
      s('Smoke, Sanity and Regression Testing', 'learning'),
      s('Functional Testing', 'learning'),
      s('Black Box Testing', 'learning'),
      s('Agile and Scrum Basics', 'basic'),
      s('Jira Basics', 'basic'),
    ],
  },
  {
    id: 'automation',
    title: 'Automation with Playwright',
    icon: 'flask',
    blurb: 'JavaScript with Playwright is my automation focus.',
    skills: [
      s('Playwright', 'learning', 'Main automation tool I am learning.'),
      s('Locators and Assertions', 'learning'),
      s('Page Object Model', 'learning'),
      s('Data-driven Testing', 'learning'),
      s('Screenshots, Videos and Trace Viewer', 'learning'),
      s('HTML Reports', 'learning'),
      s('Cross-browser Testing', 'learning'),
    ],
  },
  {
    id: 'api',
    title: 'API Testing',
    icon: 'network',
    blurb: 'Checking requests and responses behind the screen.',
    skills: [
      s('Postman', 'learning'),
      s('REST API', 'learning'),
      s('HTTP Methods and Status Codes', 'learning'),
      s('JSON', 'learning'),
      s('API Assertions', 'learning'),
      s('Playwright API Testing', 'learning'),
    ],
  },
  {
    id: 'database',
    title: 'Database Testing',
    icon: 'database',
    blurb: 'Using SQL to check that stored data is correct.',
    skills: [
      s('SQL', 'learning'),
      s('MySQL', 'learning'),
      s('CRUD Operations', 'learning'),
      s('Joins', 'learning'),
      s('Primary Key and Foreign Key', 'learning'),
      s('Data Validation', 'learning'),
    ],
  },
  {
    id: 'next',
    title: 'Learning Next',
    icon: 'book',
    blurb: 'Topics I plan to study after Playwright. Not yet used in any project.',
    skills: [
      s('TypeScript', 'learning'),
      s('Core Java', 'learning', 'Studied in coursework and used in an academic project; deepening it.'),
      s('Selenium WebDriver', 'learning', 'Planned after Playwright, since many companies use it.'),
      s('Docker Basics', 'basic', 'Used in the timetable project.'),
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'wrench',
    blurb: 'Everyday tools for working with code and teams.',
    skills: [
      s('Git', 'practical'),
      s('GitHub', 'practical'),
      s('GitHub Actions', 'learning'),
      s('VS Code', 'practical'),
      s('npm', 'practical'),
      s('Chrome DevTools', 'basic'),
    ],
  },
];
