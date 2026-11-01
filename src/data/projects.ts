import type { Project } from '../types';

/**
 * AUTOMATION ENGINEERING PROJECTS
 *
 * Every project here is "planned". No code, test run or report exists yet, so no
 * results are shown. When a project is real:
 *   1. change `status` to 'in-progress' or 'completed'
 *   2. fill in `repoUrl` (and `reportUrl` once a real report is published)
 *   3. only then add any real execution results to `note`
 */
export const automationProjects: Project[] = [
  {
    id: 'playwright-framework',
    title: 'Playwright Automation Framework',
    category: 'ui',
    status: 'planned',
    priority: true,
    summary:
      'An end-to-end web UI test framework built with JavaScript and Playwright, organised with the Page Object Model and ready to run in CI.',
    tech: ['JavaScript', 'Playwright', 'Node.js'],
    features: [
      'Page Object Model',
      'Test fixtures',
      'Locators and assertions',
      'Data-driven testing',
      'Environment configuration',
      'Screenshots and video recording',
      'Trace Viewer',
      'HTML test reports',
      'Cross-browser and parallel runs',
      'GitHub Actions integration',
    ],
    folderStructure: `playwright-automation-framework/
├── tests/
│   ├── specs/            # test specifications
│   └── data/             # data-driven test data (JSON)
├── pages/                # Page Object classes
├── fixtures/             # custom Playwright fixtures
├── utils/                # reusable helpers
├── config/               # environment configuration
├── .github/workflows/    # CI pipeline
├── playwright.config.js
└── package.json`,
    install: ['git clone <repository-url>', 'cd playwright-automation-framework', 'npm install', 'npx playwright install'],
    commands: [
      'npx playwright test',
      'npx playwright test --project=chromium',
      'npx playwright test --headed',
      'npx playwright show-report',
    ],
    note: 'Planned structure and commands. The repository and live report link will be added once the framework is built and verified.',
  },
  {
    id: 'api-testing',
    title: 'API Testing Project',
    category: 'api',
    status: 'planned',
    summary:
      'REST API tests using Postman and Playwright API testing: checking status codes, response data and error cases.',
    tech: ['Postman', 'JavaScript', 'Playwright API Testing'],
    features: [
      'REST API testing',
      'Status code and response validation',
      'Authentication testing',
      'Negative test cases',
      'Postman collection',
      'Automated API tests with Playwright',
    ],
    folderStructure: `api-testing/
├── postman/
│   └── collection.json
├── tests/
│   └── api/              # Playwright API specs
└── package.json`,
    install: ['git clone <repository-url>', 'cd api-testing', 'npm install'],
    commands: ['npx playwright test tests/api'],
    note: 'Planned structure and commands. No collections or tests have been written yet.',
  },
  {
    id: 'sql-testing',
    title: 'SQL Database Testing',
    category: 'database',
    status: 'planned',
    summary:
      'A set of SQL scripts for checking backend data: CRUD behaviour, joins and data consistency on a MySQL database.',
    tech: ['MySQL', 'SQL'],
    features: [
      'CRUD validation',
      'Record verification',
      'Join queries',
      'Data consistency checks',
      'Test data verification',
    ],
    folderStructure: `sql-database-testing/
├── schema/
│   └── schema.sql        # tables and constraints
├── data/
│   └── seed.sql          # test data
├── validations/          # consistency and integrity checks
└── queries/              # join and CRUD examples`,
    install: ['Install MySQL locally', 'Create a database for the exercise'],
    commands: ['mysql -u <user> -p <database> < schema/schema.sql', 'mysql -u <user> -p <database> < data/seed.sql'],
    note: 'Planned scope. No schema or scripts have been written yet.',
  },
  {
    id: 'cicd-pipeline',
    title: 'CI/CD Test Pipeline',
    category: 'cicd',
    status: 'planned',
    summary:
      'A GitHub Actions workflow that runs the Playwright tests on every push and pull request and keeps the HTML report as an artifact.',
    tech: ['GitHub', 'GitHub Actions', 'Playwright'],
    features: [
      'Run tests on every push',
      'Run tests on pull requests',
      'Browser test execution',
      'Test report saved as an artifact',
    ],
    folderStructure: `.github/
└── workflows/
    └── playwright.yml    # test workflow`,
    install: ['Requires the Playwright Automation Framework repository'],
    commands: ['git push origin main   # triggers the workflow'],
    note: 'Planned. Real pipeline results will only be shown after the workflow has actually run.',
  },
];

/** SOFTWARE DEVELOPMENT PROJECTS (academic work from the resume). */
export const developmentProjects: Project[] = [
  {
    id: 'timetable-system',
    title: 'Automatic Timetable Management System',
    category: 'web',
    status: 'academic',
    summary:
      'An automatic college timetable management solution designed to reduce manual scheduling effort and simplify timetable management.',
    tech: ['Java', 'React', 'Node.js', 'Docker', 'Arduino Programming'],
    features: [
      'Developed an automatic college timetable management solution',
      'Focused on reducing manual scheduling efforts',
      'Designed a system to simplify college timetable management',
    ],
    note: 'Academic project from my B.Tech programme.',
  },
  {
    id: 'crop-disease',
    title: 'AI-Driven Crop Disease Detection',
    category: 'ml',
    status: 'academic',
    summary:
      'An end-to-end machine learning pipeline that detects crop diseases from images and suggests prevention and treatment recommendations.',
    tech: ['Python', 'OpenCV', 'Computer Vision', 'Roboflow API'],
    features: [
      'Applied image preprocessing and computer vision techniques',
      'Developed an end-to-end machine learning pipeline',
      'Worked on data collection, preprocessing, training and prediction',
      'Provided disease prevention and treatment recommendations',
    ],
    note: 'Additional academic project. My main focus is QA automation.',
  },
  {
    id: 'customer-segmentation',
    title: 'Customer Segmentation for Mall',
    category: 'data',
    status: 'academic',
    summary:
      'A clustering analysis of 200 mall customer records that identified six customer segments.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    features: [
      'Analysed 200 customer records',
      'Implemented K-Means clustering',
      'Used elbow and silhouette methods',
      'Identified six customer segments',
      'Used PCA for visualization',
    ],
    note: 'Additional academic project. My main focus is QA automation.',
  },
];
