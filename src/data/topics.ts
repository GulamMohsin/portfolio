import type { FlowStep, TopicGroup } from '../types';

export const manualGroups: TopicGroup[] = [
  {
    title: 'Foundations',
    icon: 'book',
    description: 'The process and vocabulary every test effort builds on.',
    items: ['Software Testing Fundamentals', 'SDLC and STLC', 'Agile and Scrum', 'Jira Fundamentals'],
  },
  {
    title: 'Test Design',
    icon: 'list',
    description: 'Turning requirements into clear, repeatable checks.',
    items: [
      'Test Plan and Test Strategy',
      'Test Scenario Design',
      'Test Case Design and Execution',
      'Test Data Preparation',
    ],
  },
  {
    title: 'Defect Management',
    icon: 'bug',
    description: 'Reporting problems so developers can reproduce and fix them.',
    items: ['Bug Reporting and Defect Life Cycle', 'Severity vs Priority', 'Retesting'],
  },
  {
    title: 'Testing Types',
    icon: 'target',
    description: 'Choosing the right kind of test for the risk.',
    items: [
      'Smoke Testing',
      'Sanity Testing',
      'Regression Testing',
      'Functional Testing',
      'Non-functional Testing',
      'Black Box Testing',
      'White Box Testing Fundamentals',
      'Integration Testing',
      'System Testing',
      'User Acceptance Testing',
    ],
  },
];

export const defectLifecycle = ['New', 'Assigned', 'Open', 'Fixed', 'Retest', 'Verified', 'Closed'];

export const bugReportFields: { field: string; purpose: string }[] = [
  { field: 'Title', purpose: 'One line that states the problem and where it happens.' },
  { field: 'Environment', purpose: 'Build, browser, OS and test data used.' },
  { field: 'Steps to reproduce', purpose: 'Numbered, minimal and repeatable.' },
  { field: 'Expected result', purpose: 'What the requirement says should happen.' },
  { field: 'Actual result', purpose: 'What really happened.' },
  { field: 'Severity and priority', purpose: 'Technical impact versus business urgency.' },
  { field: 'Evidence', purpose: 'Screenshot, video, logs or trace.' },
];

export const automationGroups: TopicGroup[] = [
  {
    title: 'Core Playwright',
    icon: 'play',
    description: 'The building blocks of a Playwright test.',
    items: [
      'Playwright Test Runner',
      'Browser Automation',
      'Locators and Selectors',
      'Assertions',
      'Auto-waiting',
    ],
  },
  {
    title: 'Structure and Design',
    icon: 'layers',
    description: 'Keeping suites readable and easy to maintain.',
    items: ['Page Object Model', 'Fixtures', 'Data-driven Testing', 'Environment Configuration'],
  },
  {
    title: 'Debugging and Reporting',
    icon: 'bug',
    description: 'Making failures easy to understand.',
    items: ['Screenshots and Videos', 'Trace Viewer', 'HTML Reports'],
  },
  {
    title: 'Speed and Delivery',
    icon: 'git',
    description: 'Running tests quickly and automatically.',
    items: ['Parallel Execution', 'Cross-browser Testing', 'GitHub Actions'],
  },
];

export const workflowSteps: FlowStep[] = [
  {
    title: 'Requirements Analysis',
    description:
      'Read specifications and user stories, identify testable requirements and acceptance criteria, and raise ambiguities before any test is written.',
  },
  {
    title: 'Test Planning',
    description:
      'Define scope, approach, environments, entry and exit criteria, and the main risks to cover.',
  },
  {
    title: 'Test Scenarios',
    description:
      'Derive high-level scenarios covering main flows, edge cases and negative paths.',
  },
  {
    title: 'Test Case Design',
    description:
      'Write detailed cases with preconditions, steps, test data and expected results, using techniques such as boundary value analysis and equivalence partitioning.',
  },
  {
    title: 'Automation Framework',
    description:
      'Select stable, repeatable cases and implement them with a Page Object Model, fixtures and environment configuration.',
  },
  {
    title: 'Test Execution',
    description:
      'Run manual and automated suites across browsers and environments, capturing screenshots, videos and traces as evidence.',
  },
  {
    title: 'Defect Reporting',
    description:
      'Log reproducible defects with steps, expected versus actual results, severity and priority.',
  },
  {
    title: 'Regression Testing',
    description:
      'Re-run suites after fixes or changes to confirm that existing behaviour still works.',
  },
  {
    title: 'Test Reports',
    description:
      'Summarise coverage, pass and fail results and defect trends so the team can make release decisions.',
  },
];

export const playwrightArchitecture: FlowStep[] = [
  {
    title: 'Test Specifications',
    description: 'Spec files describe behaviour with test() and describe() blocks, written in plain JavaScript.',
  },
  {
    title: 'Playwright Test Runner',
    description: 'Discovers tests, applies configuration (projects, retries, workers) and runs them in parallel.',
  },
  {
    title: 'Page Object Model',
    description: 'Page classes hold locators and actions, so specs read like user behaviour rather than selectors.',
  },
  {
    title: 'Browser Context',
    description: 'An isolated context per test, with its own cookies and storage, created through fixtures.',
  },
  {
    title: 'Browser',
    description: 'Chromium, Firefox or WebKit, driven through Playwright.',
  },
  {
    title: 'Assertions and Validation',
    description: 'Web-first assertions retry automatically until the expected state is reached or the timeout ends.',
  },
  {
    title: 'HTML Reports',
    description: 'HTML report with traces, screenshots and videos that make failures quick to analyse.',
  },
];

export const playwrightFolderStructure = `tests/
  specs/        test specifications
  data/         data-driven inputs
pages/          Page Object classes
fixtures/       custom fixtures
utils/          reusable helpers
config/         environment settings
playwright.config.js`;

export const apiGroups: TopicGroup[] = [
  {
    title: 'REST Fundamentals',
    icon: 'network',
    description: 'How clients and servers talk over HTTP.',
    items: [
      'REST API',
      'HTTP Methods',
      'GET, POST, PUT, PATCH and DELETE',
      'HTTP Status Codes',
      'Headers and Parameters',
      'JSON Request and Response',
      'Authentication',
    ],
  },
  {
    title: 'Tools and Automation',
    icon: 'wrench',
    description: 'Exploring, asserting and automating API checks.',
    items: ['Postman', 'API Assertions', 'API Test Collections', 'Playwright API Testing'],
  },
];

export const apiChecklist = [
  'Status code matches the contract',
  'Response headers are correct',
  'Response body fields and types are correct',
  'Authentication and authorisation rules are enforced',
  'Negative cases return clear error responses',
  'Data written by the API is stored correctly',
];


export const databaseGroups: TopicGroup[] = [
  {
    title: 'SQL Essentials',
    icon: 'table',
    description: 'Reading and changing data accurately.',
    items: [
      'SQL',
      'SELECT, INSERT, UPDATE and DELETE',
      'WHERE, GROUP BY and ORDER BY',
      'Joins',
      'Aggregate Functions',
    ],
  },
  {
    title: 'Integrity and Validation',
    icon: 'shield',
    description: 'Checking that stored data is correct and consistent.',
    items: [
      'CRUD Operations',
      'Constraints',
      'Primary Key and Foreign Key',
      'Data Integrity',
      'Backend Data Validation',
    ],
  },
];


