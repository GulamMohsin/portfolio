import type { Certification } from '../types';

/**
 * Add real certificates here. Leave the array EMPTY until you have them: the
 * website then shows clearly labelled placeholders. Never add made-up
 * certificates or credential IDs.
 *
 * Example entry (copy, uncomment and replace with real values):
 *
 * {
 *   id: 'my-real-certificate',
 *   title: 'Certificate title exactly as issued',
 *   issuer: 'Issuing organisation',
 *   issueDate: 'Month YYYY',
 *   credentialUrl: 'https://verification-link-from-issuer',   // optional
 *   file: '/certificates/my-certificate.pdf',                   // optional, in public/certificates/
 *   image: '/certificates/my-certificate.png',                  // optional, in public/certificates/
 * },
 */
export const certifications: Certification[] = [];
