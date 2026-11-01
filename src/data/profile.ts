import type { Profile } from '../types';
import { asset } from '../utils/asset';

/**
 * EDIT THIS FILE to personalise the site.
 *
 * Rules followed by this portfolio:
 *  - Empty strings mean "not provided yet". The UI shows a clear
 *    "not configured" state instead of a fake link or address.
 *  - Nothing here is invented. Add real values only.
 */
export const profile: Profile = {
  name: 'Gulam Mohsin',
  role: 'QA Automation Engineer',
  identities: ['QA Automation Engineer', 'Software Quality Engineer', 'SDET Aspirant'],
  tagline:
    'Engineering software quality through intelligent automation, reliable testing and modern engineering practices.',
  location: 'Bengaluru, Karnataka, India',
  hometown: 'Bokaro, Jharkhand, India',

  email: 'gulammohsin01@gmail.com',
  github: 'https://github.com/GulamMohsin',
  linkedin: 'https://www.linkedin.com/in/gulam-mohsin',
  instagram: 'https://www.instagram.com/ftmohsin_',
  photo: asset('/images/profile.jpg'),

  resume: {
    file: asset('/resume/Gulam_Mohsin_Resume.pdf'), // place the PDF in public/resume/
    available: false, // change to true once the PDF is in place
  },

  intro: [
    'I am a Computer Science Engineering graduate interested in Software Quality Engineering, Manual Testing, Test Automation and Software Development.',
    'I am building my expertise in JavaScript with Playwright, API Testing, SQL and automation framework development.',
    'I enjoy understanding application behaviour, identifying defects, writing automated test scripts and improving software quality through structured testing approaches.',
    'My professional goal is to develop reliable, maintainable and scalable automation frameworks and contribute to delivering high-quality software products.',
  ],
};

/** Extracts "username" from a GitHub profile URL, or returns an empty string. */
export function githubUsername(): string {
  const match = profile.github.match(/github\.com\/([^/?#]+)/i);
  return match ? match[1] : '';
}
