export type IconName =
  | 'code'
  | 'bug'
  | 'database'
  | 'server'
  | 'workflow'
  | 'git'
  | 'cloud'
  | 'terminal'
  | 'layers'
  | 'shield'
  | 'file'
  | 'graduation'
  | 'briefcase'
  | 'award'
  | 'user'
  | 'mail'
  | 'map'
  | 'download'
  | 'flask'
  | 'cpu'
  | 'globe'
  | 'book'
  | 'boxes'
  | 'folder'
  | 'list'
  | 'target'
  | 'repeat'
  | 'braces'
  | 'table'
  | 'network'
  | 'wrench'
  | 'play'
  | 'clock';

/** How a skill is honestly positioned. There are no percentages anywhere in this site. */
export type SkillLevel = 'learning' | 'basic' | 'practical' | 'proficient';

export interface Skill {
  name: string;
  level: SkillLevel;
  /** Short context shown as a tooltip, e.g. where the skill was used. */
  note?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: IconName;
  blurb: string;
  skills: Skill[];
}

export type ProjectStatus = 'planned' | 'in-progress' | 'completed' | 'academic';
export type ProjectCategory = 'ui' | 'api' | 'database' | 'cicd' | 'web' | 'ml' | 'data';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  /** Highest-priority project is highlighted. */
  priority?: boolean;
  summary: string;
  tech: string[];
  features: string[];
  /** Planned folder layout, shown as a code block in the project dialog. */
  folderStructure?: string;
  install?: string[];
  commands?: string[];
  /** Fill these in only when the repository / report really exist. */
  repoUrl?: string;
  reportUrl?: string;
  liveUrl?: string;
  note?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  /** Degree or qualification name, e.g. "Intermediate (Class 12)". */
  title: string;
  /** Leave empty until you provide the real value; the site shows "not added yet". */
  institution: string;
  board?: string;
  stream?: string;
  period?: string;
  location?: string;
  /** Percentage, CGPA or grade exactly as on the marksheet. */
  score?: string;
  focus?: string[];
  coursework?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  /** Path under /public, e.g. /certificates/my-cert.pdf */
  file?: string;
  /** Path under /public, e.g. /certificates/my-cert.png */
  image?: string;
}

export interface FlowStep {
  title: string;
  description: string;
}

export interface TopicGroup {
  title: string;
  icon: IconName;
  description?: string;
  items: string[];
}

export interface Profile {
  name: string;
  role: string;
  identities: string[];
  tagline: string;
  location: string;
  /** Leave empty until you provide the real value. */
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  /** Permanent hometown, shown as secondary location text. */
  hometown: string;
  /** Path under /public, e.g. /images/profile.jpg. Empty shows a placeholder. */
  photo: string;
  resume: { file: string; available: boolean };
  intro: string[];
}
