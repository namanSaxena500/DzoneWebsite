export const technologiesData = [
  // FRONTEND
  {
    id: 'react',
    slug: 'react',
    title: 'React',
    category: 'frontend',
    desc: 'Top-tier component library designed for fluid interfaces. We craft responsive web applications using React and Next.js, assuring state-of-the-art modular structure and clean data flows.',
    introTitle: 'Let\'s Understand Something About React',
    introDesc: 'React is a powerful declarative library that enables developers to build highly dynamic user interfaces. Our team leverages React to write clean, reusable visual modules, optimize render paths, and build high-performance web products.',
    introImage: '/images/abouttechleftinmage.png',
    featuresTitle: 'What Makes React Unique',
    features: [
      { id: 1, title: 'Virtual DOM Rendering', desc: 'React maintains a lightweight virtual copy of the DOM, updating only the modified nodes to maximize page responsiveness.' },
      { id: 2, title: 'Component-Based Architecture', desc: 'Interfaces are split into isolated, reusable visual modules that manage their own state, making maintenance highly efficient.' },
      { id: 3, title: 'Unidirectional Data Flow', desc: 'Data flows down from parents to children in a clean structure, preventing state mutations and simplifying code debugging.' },
      { id: 4, title: 'Vast Ecosystem & Libraries', desc: 'Access to millions of open-source packages, state managers (Redux, Zustand), and visual UI libraries to accelerate development.' },
      { id: 5, isImage: true, image: '/images/side1.png' },
      { id: 6, title: 'Declarative UI Code', desc: 'Simply describe what your interface should look like for any state, and React takes care of updating DOM elements automatically.' },
      { id: 7, title: 'Excellent Hooks APIs', desc: 'Enable classless component state management and side effects, facilitating very concise and clean JavaScript logic.' },
      { id: 8, title: 'SEO-Friendly Integrations', desc: 'Combines seamlessly with Next.js to provide Server-Side Rendering (SSR) and static generation capabilities.' },
      { id: 9, title: 'React Native Shared Codebase', desc: 'Allows developers to reuse React concepts and code blocks to compile native iOS & Android applications.' }
    ],
    faq: [
      { id: 1, question: 'Is React a library or a framework?', answer: 'React is officially a JavaScript library focused on the view layer. However, when combined with routing, build systems, and state managers, it serves as a full-fledged application framework.' },
      { id: 2, question: 'Why choose React for business applications?', answer: 'It is highly performant, widely adopted, backed by Meta, and supported by a massive developer ecosystem, making it a very safe and future-proof choice for startups and enterprises.' },
      { id: 3, question: 'Does React support SEO?', answer: 'Standard Client-Side Rendered (CSR) React apps have limited SEO support. To solve this, we combine React with Next.js to enable server-side pre-rendering, ensuring search engines index your site perfectly.' }
    ]
  },
  {
    id: 'nextjs',
    slug: 'nextjs',
    title: 'Next.js',
    category: 'frontend',
    desc: 'Production-ready framework offering SSR, static generation, and API structures. Essential for highly optimized, SEO-friendly React sites with instant responsiveness.',
    introTitle: 'Let\'s Understand Something About Next.js',
    introDesc: 'Next.js is the premier React framework for production. It simplifies modern web development by providing automatic route structure, server components, edge pre-rendering, and image optimizations out-of-the-box.',
    introImage: '/images/abouttechleftinmage.png',
    featuresTitle: 'Next.js Performance Core',
    features: [
      { id: 1, title: 'Server-Side Rendering (SSR)', desc: 'Pre-renders page content on the server for each user request, leading to instant load times and optimal SEO indexation.' },
      { id: 2, title: 'Static Site Generation (SSG)', desc: 'Compiles pages into static HTML and CSS files during build, deploying them across edge CDNs for server-less speeds.' },
      { id: 3, title: 'App Router File System', desc: 'Organizes routes based on directory layout with page.js, layout.js, and template.js, simplifying complex routing hierarchies.' },
      { id: 4, title: 'API Routes & Server Actions', desc: 'Allows writing backend server logic directly within the React folder structure, eliminating the need for separate server setups.' },
      { id: 5, isImage: true, image: '/images/side1.png' },
      { id: 6, title: 'Automatic Code Splitting', desc: 'Only downloads the JavaScript required for the active page, dropping user load latency significantly.' },
      { id: 7, title: 'Built-in Image Optimization', desc: 'Resizes, compresses, and delivers images in modern formats (WebP, AVIF) to secure perfect PageSpeed scores.' },
      { id: 8, title: 'Zero Config TS Support', desc: 'Friction-less TypeScript integration with automatic configuration, type safety check, and auto-completions.' },
      { id: 9, title: 'Incremental Static Regeneration', desc: 'Updates static pages in the background without needing a full build rebuild, keeping content constantly fresh.' }
    ],
    faq: [
      { id: 1, question: 'Do I need a separate backend with Next.js?', answer: 'Not necessarily! Next.js supports API Routes and Server Actions, allowing you to write server-side code, connect to databases, and query external APIs directly in Next.js.' },
      { id: 2, question: 'Is Next.js good for search engine optimization?', answer: 'Yes! Because Next.js pre-renders pages on the server, search engine crawlers can read the full HTML text instantly, which is why it is the top framework for SEO-critical web projects.' },
      { id: 3, question: 'Can Next.js compile to standard HTML/CSS?', answer: 'Yes, using static exports (`output: export` in config), Next.js builds pages as pure static assets that can be hosted on AWS S3, GitHub Pages, or Netlify.' }
    ]
  },
  {
    id: 'angular',
    slug: 'angular',
    title: 'Angular',
    category: 'frontend',
    desc: 'Robust, enterprise-level framework offering strict architectural patterns, two-way data binding, and modularity. Perfect for complex, scalable corporate platforms.',
    introTitle: 'Let\'s Understand Something About Angular',
    introDesc: 'Angular is a full-featured, opinionated framework designed by Google. It enforces strict architectural structure and clean typing via TypeScript, making it the premier choice for large-scale enterprise applications.',
    introImage: '/images/abouttechleftinmage.png',
    featuresTitle: 'Angular Enterprise Core',
    features: [
      { id: 1, title: 'Two-Way Data Binding', desc: 'Syncs model data changes with the UI layout automatically, reducing boilerplates code inside controllers.' },
      { id: 2, title: 'Built-in Dependency Injection', desc: 'Decouples service layers from visual UI modules, promoting high unit-testability and clean maintenance.' },
      { id: 3, title: 'Strict TypeScript Foundation', desc: 'Enforces compile-time type check, auto-completion, and modern object-oriented programming methodologies.' },
      { id: 4, title: 'Angular CLI Automation', desc: 'Scaffolds components, routers, and configurations instantly via standardized, reliable terminal utilities.' },
      { id: 5, isImage: true, image: '/images/side1.png' },
      { id: 6, title: 'Robust Modular Routings', desc: 'Supports lazy-loaded route modules, route guards, and nested paths out of the box.' },
      { id: 7, title: 'RxJS Reactive Programming', desc: 'Uses streams and observables natively to manage async network requests and complicated state pipelines.' },
      { id: 8, title: 'Enterprise Forms Engine', desc: 'Includes both Template-driven and Reactive forms structures with built-in schema validation filters.' },
      { id: 9, title: 'Built-in HTTP Client', desc: 'Eliminates external libraries for server requests, offering interceptors and typed response mapping out-of-the-box.' }
    ],
    faq: [
      { id: 1, question: 'What is Angular?', answer: 'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.' },
      { id: 2, question: 'Is Angular good for small projects?', answer: 'Angular has a steeper learning curve and higher initial boilerplate, making it slightly heavier for small websites. However, for large apps with multiple developers, its strict patterns are invaluable.' },
      { id: 3, question: 'What is RxJS in Angular?', answer: 'RxJS is a library for reactive programming using Observables, which Angular uses for handling events, asynchronous operations, and routing state.' }
    ]
  },
  {
    id: 'vue',
    slug: 'vue',
    title: 'Vue',
    category: 'frontend',
    desc: 'Progressive JavaScript framework for lightweight and highly reactive web experiences. Vue allows rapid prototyping and reliable execution for modern single page apps.',
    introTitle: 'Let\'s Understand Something About Vue',
    introDesc: 'Vue.js is a progressive JavaScript framework. It is approachable, performant, and versatile, featuring a flexible API that can scale from small script integrations to full-scale single page applications (SPAs).',
    introImage: '/images/abouttechleftinmage.png',
    featuresTitle: 'Why Developers Choose Vue',
    features: [
      { id: 1, title: 'Single-File Components', desc: 'Encapsulates HTML template, CSS styling, and JS controller logic inside a single `.vue` file for cohesive layout construction.' },
      { id: 2, title: 'Flexible Composition API', desc: 'Allows sharing components state logic cleanly using hooks-style layout structures introduced in Vue 3.' },
      { id: 3, title: 'High Execution Speeds', desc: 'Features a minimal library footprint (around 20KB gzipped) and optimized Virtual DOM rendering paths.' },
      { id: 4, title: 'Highly Intuitive Syntax', desc: 'Extremely easy learning curve compared to React/Angular; integrates easily into existing HTML codebases.' },
      { id: 5, isImage: true, image: '/images/side1.png' },
      { id: 6, title: 'Official Core Tooling', desc: 'Provides centralized, officially maintained routers (Vue Router) and state managers (Pinia, Vuex) for maximum reliability.' },
      { id: 7, title: 'Transition Transition Animations', desc: 'Offers native wrappers to configure enter/leave user animations on page routes and DOM nodes with ease.' },
      { id: 8, title: 'Reactivity System v3', desc: 'Utilizes modern ES6 proxies to watch data properties and update views instantly without virtual diff overheads.' },
      { id: 9, title: 'Vite Ecosystem Integration', desc: 'Integrates natively with Vite build engine for ultra-fast dev server startups and optimized production compilation.' }
    ],
    faq: [
      { id: 1, question: 'What does progressive framework mean?', answer: 'It means you can use Vue for a small part of a page as a script tag, or build a complete, highly complex single page application using its full CLI and routing system.' },
      { id: 2, question: 'What is the state manager for Vue 3?', answer: 'Pinia is the officially recommended, modern state management library for Vue 3, replacing Vuex with simpler APIs and full TypeScript support.' },
      { id: 3, question: 'Is Vue suitable for enterprise applications?', answer: 'Yes! With Vue 3\'s Composition API and full TypeScript support, it is regularly chosen by global brands (like Nintendo and Zoom) for enterprise apps.' }
    ]
  },
  {
    id: 'html5',
    slug: 'html5',
    title: 'HTML5',
    category: 'frontend',
    desc: 'Semantically rich foundations for modern web interfaces. We ensure 100% W3C standard compliance and clean document structures for supreme cross-browser rendering.',
    introTitle: 'The Foundation of Modern Web Layouts',
    introDesc: 'We construct semantically compliant HTML5 templates to guarantee maximum web accessibility, screen reader optimization, search crawler indexing, and standardized cross-browser layout renderings.',
    introImage: '/images/abouttechleftinmage.png',
    featuresTitle: 'HTML5 Standards & Best Practices',
    features: [
      { id: 1, title: 'Semantic Element Layouts', desc: 'Using proper section tags (`<header>`, `<nav>`, `<article>`, `<footer>`) to construct structured semantic page layers.' },
      { id: 2, title: 'WCAG Accessibility Standards', desc: 'Structuring elements with appropriate ARIA roles and labels to ensure screen readers read them accurately.' },
      { id: 3, title: 'SEO Optimized Headings', desc: 'Arranging single H1 tags and hierarchical h2-h6 headers to pass search engine crawling algorithms perfectly.' },
      { id: 4, title: 'Native Media Element Tags', desc: 'Deploying optimized `<video>` and `<audio>` files natively without needing slow external media player libraries.' },
      { id: 5, isImage: true, image: '/images/side1.png' },
      { id: 6, title: 'Standard Input Validation', desc: 'Leveraging modern form input types (email, tel, date) for native validation and mobile device keypads.' },
      { id: 7, title: 'Web Storage APIs Integration', desc: 'Using LocalStorage and SessionStorage APIs to save key configurations directly inside user browsers.' },
      { id: 8, title: 'Embedded SVG Graphics', desc: 'Rendering vector layouts inline for sharp icon shapes that load instantly and scale without pixel loss.' },
      { id: 9, title: 'Offline Manifest Support', desc: 'Working with service workers to cache crucial static layouts for offline loading capability.' }
    ],
    faq: [
      { id: 1, question: 'Why is semantic HTML important for SEO?', answer: 'Semantic elements communicate the meaning of the content to search engine crawlers, highlighting what is important (headings, articles) and what is wrapper structure.' },
      { id: 2, question: 'What is web accessibility (a11y)?', answer: 'Accessibility means structuring markup so that individuals with visual, motor, or cognitive impairments can navigate pages successfully using assistive technology.' }
    ]
  },
  {
    id: 'css3',
    slug: 'css3',
    title: 'CSS3',
    category: 'frontend',
    desc: 'Robust styling engine featuring CSS Variables, Grid, and Flexbox layouts. Delivers responsive visual aesthetics, fluid user animations, and modular styling sheets.',
    introTitle: 'Responsive, Premium Aesthetics via CSS3',
    introDesc: 'We write modern, scalable stylesheets using CSS variables, Flexbox, and Grid systems, avoiding heavy and generic frameworks in favor of light code and custom layouts.',
    introImage: '/images/abouttechleftinmage.png',
    featuresTitle: 'Modern Styling Engine',
    features: [
      { id: 1, title: 'Flexible Flexbox Layouts', desc: 'Arranging page components in clean horizontal or vertical rows with dynamic spacing adjustments.' },
      { id: 2, title: 'CSS Grid Specifications', desc: 'Structuring grid systems for card lists, headers, and dashboard widgets with strict alignments.' },
      { id: 3, title: 'Native Custom Variables', desc: 'Defining color schemes, text sizes, and border-radii values inside `:root` to adjust styles instantly.' },
      { id: 4, title: 'Fluid Keyframe Animations', desc: 'Writing smooth animations and transition effects directly in stylesheets to enhance visual premium feel.' },
      { id: 5, isImage: true, image: '/images/side1.png' },
      { id: 6, title: 'Optimized Media Queries', desc: 'Tailoring styles for precise responsive breakpoints to guarantee layouts render nicely on all devices.' },
      { id: 7, title: 'Glassmorphic Backdrops', desc: 'Leveraging `backdrop-filter` rules to build frosted-glass layers that let colors shine through.' },
      { id: 8, title: 'Visual Hover Effects', desc: 'Implementing micro-animations on interactive elements to elevate user engagement.' },
      { id: 9, title: 'Custom Font Integration', desc: 'Configuring web fonts dynamically to ensure fast text rendering without layouts shifting.' }
    ],
    faq: [
      { id: 1, question: 'Do you use CSS preprocessors?', answer: 'Yes! We frequently use Sass/SCSS to manage variable structures and nesting on complex projects, though native CSS custom properties are preferred for runtime modifications.' },
      { id: 2, question: 'How do you prevent stylesheet bloat?', answer: 'We structure styles modularly (using CSS Modules or scoped files), reuse tokens, and clean out unused selectors before deployment.' }
    ]
  },

  // BACKEND
  {
    id: 'nodejs',
    slug: 'nodejs',
    title: 'Node.js',
    category: 'backend',
    desc: 'Event-driven, non-blocking I/O server runtime. Node.js enables microservice architectures, real-time socket channels, and high-concurrency API integrations.',
    introTitle: 'High-Throughput Servers via Node.js',
    introDesc: 'Node.js powers our fast backend APIs. Its asynchronous nature is ideal for building real-time applications, chat networks, and scalable integration layers that handle thousands of requests per second.',
    introImage: '/images/abouttechleftinmage.png',
    featuresTitle: 'Node.js Architectural Features',
    features: [
      { id: 1, title: 'Non-blocking Async I/O', desc: 'Node.js uses a single-threaded event loop to execute requests concurrently, avoiding blocking on database calls.' },
      { id: 2, title: 'Universal JS Architecture', desc: 'Allows sharing formatting scripts and validations between the React frontend and Node backend layers.' },
      { id: 3, title: 'Fast Express & NestJS APIs', desc: 'Scaffolding backend routing layouts quickly using lightweight routers or enterprise NestJS frameworks.' },
      { id: 4, title: 'NPM Package Ecosystem', desc: 'Leveraging the largest software registry in the world to integrate validated libraries for auth, mail, and charts.' },
      { id: 5, isImage: true, image: '/images/side1.png' },
      { id: 6, title: 'Real-time WebSockets Integration', desc: 'Building instant chat systems and live stock ticker feeds using Socket.io or native websockets.' },
      { id: 7, title: 'JSON Database Compatibility', desc: 'Exchanging JSON payloads natively with MongoDB or PostgreSQL databases, avoiding serialization delays.' },
      { id: 8, title: 'Stream Handling APIs', desc: 'Processing massive PDF generation, media uploads, and data exports in chunks without exceeding server RAM limits.' },
      { id: 9, title: 'Serverless Functions Ready', desc: 'Compiles into lightweight, fast-starting containers ideal for AWS Lambda or Vercel Serverless hosting.' }
    ],
    faq: [
      { id: 1, question: 'Is Node.js a programming language?', answer: 'No, Node.js is a runtime environment that allows executing JavaScript code on the server, outside of a web browser.' },
      { id: 2, question: 'Is Node.js good for heavy CPU calculations?', answer: 'Node.js is optimized for I/O-intensive tasks (network requests, file reading). For heavy computational math or machine learning, we recommend pairing Node.js with Python or Go helper tasks.' }
    ]
  },
  {
    id: 'python',
    slug: 'python',
    title: 'Python',
    category: 'backend',
    desc: 'Ideal for machine learning algorithms, scripting tasks, and backend API frameworks like Django or FastAPI. Ensures high readable maintainability.',
    introTitle: 'Empowering Automation and Analytics',
    introDesc: 'Python is a versatile programming language ideal for data science, backend integration, web scraping, and AI scripting. We build modular backends using FastAPI and Django.',
    introImage: '/images/abouttechleftinmage.png',
    featuresTitle: 'Python Backends & Integrations',
    features: [
      { id: 1, title: 'Clean, Readable Codebase', desc: 'Enforces clean visual style guides (PEP8), making it easy to read and maintain for complex calculations.' },
      { id: 2, title: 'Data & Machine Learning libraries', desc: 'Querying Pandas, NumPy, Scikit-Learn, or TensorFlow models directly within backend API endpoints.' },
      { id: 3, title: 'FastAPI Microservice Speed', desc: 'Building high-performance REST APIs featuring automatic OpenAPI/Swagger interactive documentations.' },
      { id: 4, title: 'Automated Scripting & Scraping', desc: 'Writing crawlers (BeautifulSoup, Scrapy) to scrape pricing catalogs and automate database tasks.' },
      { id: 5, isImage: true, image: '/images/side1.png' },
      { id: 6, title: 'Django Enterprise Framework', desc: 'Scaffolding full security models, admin panels, and DB relations instantly for business management portals.' },
      { id: 7, title: 'Asynchronous Task Runners', desc: 'Running heavy background tasks and database audits asynchronously using Celery & Redis.' },
      { id: 8, title: 'Flexible REST/GraphQL Integrations', desc: 'Exposing multi-tenant endpoints using Graphene or Strawberry for dynamic web client calls.' },
      { id: 9, title: 'Robust Cloud Compatibility', desc: 'Integrates natively into container platforms (Docker, Kubernetes) and serverless cloud architectures.' }
    ],
    faq: [
      { id: 1, question: 'Why choose FastAPI over Django?', answer: 'FastAPI is modern, asynchronous, extremely fast, and provides automatic request validation. Django is best for large applications that require built-in features like user authentication, DB ORM, and admin UI.' }
    ]
  },
  {
    id: 'go',
    slug: 'go',
    title: 'Go (Golang)',
    category: 'backend',
    desc: 'Compile-to-binary language offering unmatched execution speeds, native concurrency handling, and highly scalable server infrastructure capabilities.',
    introTitle: 'Speed and Concurrency Natively',
    introDesc: 'Golang, built by Google, is compiled directly to machine code. It offers lightning-fast execution speeds, minimal memory footprint, and native concurrency support using goroutines.',
    introImage: '/images/abouttechleftinmage.png',
    featuresTitle: 'Go Backend Performance',
    features: [
      { id: 1, title: 'Compile-to-Binary Speed', desc: 'Go compiles into single, lightweight machine binaries that start instantly and require no heavy interpreter runtimes.' },
      { id: 2, title: 'Lightweight Goroutines Concurrency', desc: 'Handles thousands of concurrent operations on a fraction of the RAM required by traditional thread architectures.' },
      { id: 3, title: 'Clean Go Modules', desc: 'Enforces strict formatting rules and module dependencies to ensure uniform readability on collaborative projects.' },
      { id: 4, title: 'Highly Robust Static Types', desc: 'Detects code errors during compilation, eliminating common runtime crashes and null pointer references.' },
      { id: 5, isImage: true, image: '/images/side1.png' },
      { id: 6, title: 'Minimal Memory Usage', desc: 'Ideal for containerized Docker services and microservices where memory overhead impacts hosting costs.' },
      { id: 7, title: 'Excellent Gin & Fiber Routers', desc: 'Serving HTTP responses with single-digit microsecond latency times.' },
      { id: 8, title: 'Native GC Memory Management', desc: 'Includes an optimized Garbage Collector to automate memory cleanup without blocking active connections.' },
      { id: 9, title: 'Cloud-Native Standards', desc: 'Docker and Kubernetes are written in Go; deploying Go backends ensures perfect integration with cloud setups.' }
    ],
    faq: [
      { id: 1, question: 'What is Go used for?', answer: 'Go is primarily used for microservices, cloud-native tools, high-traffic APIs, and backend systems where speed, low memory footprint, and concurrency are critical.' }
    ]
  },
  {
    id: 'java',
    slug: 'java',
    title: 'Java',
    category: 'backend',
    desc: 'Enterprise-grade ecosystem supporting multi-tenant microservices, strict typings, and legacy systems integrations with maximum security.',
    introTitle: 'Enterprise-Grade Security and Scale',
    introDesc: 'Java is the backbone of major financial systems and enterprise portals. It offers mature frameworks like Spring Boot, strict object-oriented typings, and unbeatable security.',
    introImage: '/images/abouttechleftinmage.png',
    featuresTitle: 'Java Spring Boot Core',
    features: [
      { id: 1, title: 'Spring Boot Framework', desc: 'Allows scaffolding secure, database-ready enterprise microservices instantly with minimal configurations.' },
      { id: 2, title: 'Strict Type Modularity', desc: 'Enforces Object-Oriented Principles (OOP) to divide complex bank workflows into isolated modules.' },
      { id: 3, title: 'Platform Independence (JVM)', desc: 'Run the compiled bytecode seamlessly across any AWS Linux instance, Windows Server, or container environment.' },
      { id: 4, title: 'Bank-Grade Security Library', desc: 'Integrates Spring Security natively to handle token authentications, role permissions, and request blocks.' },
      { id: 5, isImage: true, image: '/images/side1.png' },
      { id: 6, title: 'Hibernate DB Mapping', desc: 'Mapping relational databases (Oracle, PostgreSQL) into Java classes with complete type safety and transaction protection.' },
      { id: 7, title: 'Multi-Tenant Microservices', desc: 'Orchestrating interconnected services with Spring Cloud Eureka, gateway routers, and configuration servers.' },
      { id: 8, title: 'Automatic Garbage Collection', desc: 'JVM memory managers analyze memory references in the background to prevent server leaks.' },
      { id: 9, title: 'Vast Enterprise Tools', desc: 'Seamless integration with message queues (Kafka, RabbitMQ) and search indices (ElasticSearch).' }
    ],
    faq: [
      { id: 1, question: 'Why use Java for banking software?', answer: 'Java offers unmatched transactional stability, strict object-oriented design, robust security modules, and complete backward compatibility, reducing system failure risks.' }
    ]
  },

  // MOBILE
  {
    id: 'reactnative',
    slug: 'reactnative',
    title: 'React Native',
    category: 'mobile',
    desc: 'Build native iOS and Android apps with React. Saves code sharing efficiency while keeping native performance metrics fully intact.',
    introTitle: 'Natively Compiled iOS & Android Apps',
    introDesc: 'React Native maps JavaScript components to actual native UI widgets. It gives users the speed, fluidity, and animations of native code while cutting project costs and timelines in half.',
    introImage: '/images/abouttechleftinmage.png',
    featuresTitle: 'React Native Capabilities',
    features: [
      { id: 1, title: '90%+ Code Sharing', desc: 'Write the core application features once in JavaScript and compile it directly for both Apple iPhones and Android devices.' },
      { id: 2, title: 'Direct Native Bridge Rendering', desc: 'Translates React components into native iOS Swift widgets and Android XML modules, assuring high performance.' },
      { id: 3, title: 'Fast Refresh Development', desc: 'See code updates reflect on simulator screens within milliseconds without rebuilding app binaries.' },
      { id: 4, title: 'Flexible Styling Engine', desc: 'Layout application visual components using familiar, responsive flexbox models and stylesheet APIs.' },
      { id: 5, isImage: true, image: '/images/side1.png' },
      { id: 6, title: 'Native SDK Extensions', desc: 'Allows writing custom Objective-C/Swift or Java/Kotlin wrappers when unique device modules are required.' },
      { id: 7, title: 'Hermes Engine Execution', desc: 'Uses Meta\'s optimized JavaScript engine to accelerate app startup speeds and reduce memory footprint.' },
      { id: 8, title: 'Expo Tooling Ecosystem', desc: 'Leveraging Expo libraries to build, test, and distribute OTA (Over-The-Air) app updates instantly.' },
      { id: 9, title: 'Third-Party UI Libraries', desc: 'Integrate pre-styled mobile components (elements, calendars, loaders) to launch mobile products rapidly.' }
    ],
    faq: [
      { id: 1, question: 'Does React Native look like a web app?', answer: 'No! React Native renders actual native UI elements (buttons, inputs, lists) of the host OS, making it look and feel indistinguishable from fully native Swift/Kotlin apps.' }
    ]
  },
  {
    id: 'flutter',
    slug: 'flutter',
    title: 'Flutter',
    category: 'mobile',
    desc: 'Google\'s UI toolkit for compiling natively compiled applications for mobile, web, and desktop from a single codebase with high-fps widgets.',
    introTitle: 'Pixel-Perfect Mobile Widgets via Flutter',
    introDesc: 'Flutter uses its own rendering engine to draw every visual component. This guarantees that your application looks exactly the same on older Android tablets, the newest iPhones, and web layouts alike.',
    introImage: '/images/abouttechleftinmage.png',
    featuresTitle: 'Why Choose Flutter',
    features: [
      { id: 1, title: 'Custom Graphics Engine (Impeller)', desc: 'Draws every widget pixel-by-pixel on the GPU, guaranteeing smooth 60fps/120fps scrolling speeds.' },
      { id: 2, title: 'Standardized Widget Library', desc: 'Includes rich collections of Material Design (Android) and Cupertino (iOS) components out-of-the-box.' },
      { id: 3, title: 'Compiled Dart Code', desc: 'Dart compiles directly into native ARM machine code, securing native startup speed and execution efficiency.' },
      { id: 4, title: 'State Management Modularity', desc: 'Implementing clean state structures using modern Provider, Riverpod, or Bloc design architectures.' },
      { id: 5, isImage: true, image: '/images/side1.png' },
      { id: 6, title: 'Hot Reload Feature', desc: 'Injects code modifications directly into the running app VM to speed up layout tweaks and bug fixes.' },
      { id: 7, title: 'Multi-Platform Targets', desc: 'Compiling the same Dart codebase to iOS, Android, Web, macOS, Windows, and Linux layouts.' },
      { id: 8, title: 'Strict Type Verification', desc: 'Dart provides type safety, checking errors before compiling to prevent runtime mobile crashes.' },
      { id: 9, title: 'Rich Graphic Customizations', desc: 'Enables custom paint effects, overlapping paths, and visual clipping structures without UI lag.' }
    ],
    faq: [
      { id: 1, question: 'What language does Flutter use?', answer: 'Flutter uses Dart, a modern client-optimized programming language created by Google that compiles to fast native machine code.' }
    ]
  },
  {
    id: 'swift',
    slug: 'swift',
    title: 'Swift (iOS)',
    category: 'mobile',
    desc: 'Native Apple platform programming offering optimized memory speeds, modern language syntax, and native integrations with Apple UI kits.',
    introTitle: 'Ultimate Performance for Apple Devices',
    introDesc: 'Swift is Apple\'s native language for iOS, iPadOS, and macOS. We write clean, lightning-fast native apps utilizing SwiftUI, combining high frame rates with deep integration into iOS hardware.',
    introImage: '/images/abouttechleftinmage.png',
    featuresTitle: 'Native iOS Features',
    features: [
      { id: 1, title: 'SwiftUI Layout Declarations', desc: 'Designing modern, responsive Apple layouts with minimal code and dynamic interactive state changes.' },
      { id: 2, title: 'Apple Core SDK Integrations', desc: 'Connecting apps with native iOS tools including Apple Pay, HealthKit, ARKit, and MapKit.' },
      { id: 3, title: 'Metal Graphics Optimizations', desc: 'Utilizing Apple\'s GPU framework to draw high-definition layouts, interactive charts, and animations.' },
      { id: 4, title: 'Uncompromising Execution Speed', desc: 'Swift compiles directly to LLVM machine instructions, achieving absolute hardware speeds.' },
      { id: 5, isImage: true, image: '/images/side1.png' },
      { id: 6, title: 'Native App Store Integrity', desc: 'Ensures your app supports latest iOS features, Widgets, and dark modes instantly.' },
      { id: 7, title: 'Biometric Keychain Access', desc: 'Securing login tokens behind iOS FaceID and TouchID hardware protocols.' },
      { id: 8, title: 'CoreData Local Storage', desc: 'Managing offline relational database schemas with high speeds and minimal battery drain.' },
      { id: 9, title: 'Combine Reactive Pipelines', desc: 'Processing asynchronous values and API states using Apple\'s native reactive framework.' }
    ],
    faq: [
      { id: 1, question: 'Do I need a Mac to run Swift apps?', answer: 'Yes, Apple requires using Xcode on a macOS computer to compile and publish native Swift applications to the App Store.' }
    ]
  },
  {
    id: 'kotlin',
    slug: 'kotlin',
    title: 'Kotlin (Android)',
    category: 'mobile',
    desc: 'Modern native Android programming language replacing Java. Fully concise, secure, and robustly optimized for modern device APIs.',
    introTitle: 'Robust and Modern Android Apps',
    introDesc: 'Kotlin is Google\'s preferred programming language for Android. We write clean, type-safe code utilizing Jetpack Compose, ensuring complete compatibility with the Android SDK.',
    introImage: '/images/abouttechleftinmage.png',
    featuresTitle: 'Kotlin Android Highlights',
    features: [
      { id: 1, title: 'Jetpack Compose UI', desc: 'Building dynamic Android interfaces declaratively, avoiding complex XML layout sheets.' },
      { id: 2, title: 'Kotlin Coroutines Concurrency', desc: 'Executing database calls and network requests asynchronously without blocking user scrolling actions.' },
      { id: 3, title: 'Strict Null Safety', desc: 'Detects potential null values during coding, preventing the dreaded Android NullPointerException crashes.' },
      { id: 4, title: 'Modern Jetpack Libraries', desc: 'Leveraging Android Architecture Components (ViewModel, Room, WorkManager) for stable apps.' },
      { id: 5, isImage: true, image: '/images/side1.png' },
      { id: 6, title: 'Native Hardware Integrations', desc: 'Accessing device hardware seamlessly: cameras, NFC chips, GPS, and bluetooth accessories.' },
      { id: 7, title: 'Lightweight APK Footprint', desc: 'Optimizing compiler configurations with R8 to deploy lightweight apps that install instantly.' },
      { id: 8, title: 'Google Play Integrity API', desc: 'Securing app payments, subscriptions, and preventing reverse-engineering hacking attempts.' },
      { id: 9, title: 'Room Database Synchronization', desc: 'Structuring fast local caches that synchronize automatically with cloud database servers.' }
    ],
    faq: [
      { id: 1, question: 'Is Kotlin fully replacing Java for Android?', answer: 'Yes! Google declared Kotlin as the first-class language for Android development, and all new Android APIs and UI frameworks (like Jetpack Compose) are built exclusively for Kotlin.' }
    ]
  },

  // UI DEVELOPMENT
  {
    id: 'figma',
    slug: 'figma',
    title: 'Figma',
    category: 'uiDev',
    desc: 'Vector graphics and collaborative design prototype platform. Enables real-time wireframing, dev handoff, and component library design systems.',
    introTitle: 'Collaborative UI/UX Prototyping',
    introDesc: 'Figma is our primary design workspace. It facilitates real-time collaboration between clients, designers, and developers, ensuring perfect transparency throughout the design phase.',
    introImage: '/images/abouttechleftinmage.png',
    featuresTitle: 'Figma Design Capabilities',
    features: [
      { id: 1, title: 'Real-time Canvas Collaboration', desc: 'Clients and designers review wireframes concurrently, dropping visual feedback directly on components.' },
      { id: 2, title: 'Component Library Systems', desc: 'Defining standardized typography, colors, and button variants to assure visual consistency.' },
      { id: 3, title: 'Interactive Smart Animation', desc: 'Creating clickable prototypes that mimic final app animations, transitions, and drawer openings.' },
      { id: 4, title: 'Precise Dev Handoff Inspector', desc: 'Exposing exact margin spacings, padding, colors, and CSS styling rules for developer copy.' },
      { id: 5, isImage: true, image: '/images/side1.png' }
    ],
    faq: [
      { id: 1, question: 'Can I view the design progress in Figma?', answer: 'Yes! We share interactive Figma preview links with our clients, allowing you to watch our design team build layouts in real-time.' }
    ]
  },
  {
    id: 'adobexd',
    slug: 'adobexd',
    title: 'Adobe XD',
    category: 'uiDev',
    desc: 'Vector-based tool for designing and prototyping user experiences for web and mobile apps. Collaborates easily with Photoshop systems.',
    introTitle: 'Integrated Visual Layouts',
    introDesc: 'Adobe XD provides a reliable sandbox for visual mockups. We use it to align design assets with Photoshop and Illustrator layouts, compiling them into interactive prototypes.',
    introImage: '/images/abouttechleftinmage.png',
    featuresTitle: 'Adobe XD Features',
    features: [
      { id: 1, title: 'Creative Cloud Integration', desc: 'Importing vector designs directly from Adobe Illustrator and Photoshop without format errors.' },
      { id: 2, title: 'Interactive Link Prototyping', desc: 'Mapping user flows and adding audio triggers to test application structures easily.' },
      { id: 3, title: 'Repeat Grid Tool', desc: 'Arranging list grids and gallery cards instantly to test layouts with real content files.' }
    ],
    faq: [
      { id: 1, question: 'Do you design in Adobe XD?', answer: 'Yes! We support Adobe XD layout creation for teams heavily integrated into the Adobe Creative Cloud workflow.' }
    ]
  },
  {
    id: 'sketch',
    slug: 'sketch',
    title: 'Sketch',
    category: 'uiDev',
    desc: 'Legendary Mac design environment for UI vector design, layouts, and artboards. Offers precise layout grids and responsive layout resizing.',
    introTitle: 'Precise Vector Visuals via Sketch',
    introDesc: 'Sketch is a robust mac design ecosystem. We use it to construct clean, vector-based layout assets, typography structures, and export formats (SVG, PDF) for developers.',
    introImage: '/images/abouttechleftinmage.png',
    featuresTitle: 'Sketch Design Specs',
    features: [
      { id: 1, title: 'Flexible Vector Grids', desc: 'Drawing detailed vector shapes and page grids that scale to extreme print densities.' },
      { id: 2, title: 'Reusable Layout Symbols', desc: 'Creating nested symbol libraries to modify elements (headers, menus) globally in one click.' }
    ],
    faq: [
      { id: 1, question: 'Is Sketch compatible with Windows developers?', answer: 'Yes, while Sketch app is Mac-only, we upload layouts to Sketch Cloud or Zeplin so Windows developers can inspect and export assets easily.' }
    ]
  },

  // DATABASE
  {
    id: 'postgresql',
    slug: 'postgresql',
    title: 'PostgreSQL',
    category: 'database',
    desc: 'Advanced open-source relational database. Supports strict transactions (ACID), JSON queries, and high reliability for complex data relationships.',
    introTitle: 'Enterprise Relational Storage',
    introDesc: 'PostgreSQL is our relational database of choice. It combines relational SQL reliability with NoSQL JSON functionalities, making it ideal for financial records and complex data platforms.',
    introImage: '/images/abouttechleftinmage.png',
    featuresTitle: 'PostgreSQL Features',
    features: [
      { id: 1, title: 'Strict ACID Transactions', desc: 'Guarantees that database updates succeed completely or rollback safely to prevent financial errors.' },
      { id: 2, title: 'Flexible JSONB Columns', desc: 'Allows querying unstructured JSON objects with index speeds, combining SQL and NoSQL benefits.' },
      { id: 3, title: 'Foreign Keys & Constraints', desc: 'Enforces complete database integrity, preventing orphaned rows and bad data formats.' }
    ],
    faq: [
      { id: 1, question: 'Why choose PostgreSQL over MySQL?', answer: 'PostgreSQL is more advanced, offering richer analytical features, better concurrent query execution, and native support for complex data types and JSON objects.' }
    ]
  },
  {
    id: 'mongodb',
    slug: 'mongodb',
    title: 'MongoDB',
    category: 'database',
    desc: 'Leading NoSQL document store. Offers flexible BSON schemas, automated horizontal scaling, and ultra-fast read-writes for modern app catalogs.',
    introTitle: 'Scalable Document Storage via MongoDB',
    introDesc: 'MongoDB stores data in JSON-like documents. Its flexible schema allows fast database structure modifications during development and simplifies high-scale cluster replication.',
    introImage: '/images/abouttechleftinmage.png',
    featuresTitle: 'MongoDB Architecture',
    features: [
      { id: 1, title: 'Flexible Document Schema', desc: 'Store data records without strict table layouts; change fields instantly as your app requirements evolve.' },
      { id: 2, title: 'Horizontal Scale Sharding', desc: 'Distributes database files across multiple servers automatically to handle high-traffic spikes.' }
    ],
    faq: [
      { id: 1, question: 'Is MongoDB secure?', answer: 'Yes! MongoDB supports enterprise-grade SSL connections, IP authorization controls, role permissions, and full field-level encryption.' }
    ]
  },
  {
    id: 'mysql',
    slug: 'mysql',
    title: 'MySQL',
    category: 'database',
    desc: 'The most popular open-source SQL database powering millions of web systems, offering high speeds and transactional support.',
    introTitle: 'The Web\'s Most Trusted Database',
    introDesc: 'MySQL powers millions of websites globally, from simple blogs to major e-commerce systems. It offers transactional safety, index speeds, and broad hosting support.',
    introImage: '/images/abouttechleftinmage.png',
    featuresTitle: 'MySQL Relational Core',
    features: [
      { id: 1, title: 'ACID Transaction Support', desc: 'Ensures database records remain stable across complex relational transactions.' },
      { id: 2, title: 'Highly Optimized Indexing', desc: 'Enables quick search lookups across millions of structured rows with B-Tree indices.' }
    ],
    faq: [
      { id: 1, question: 'Is MySQL good for high traffic?', answer: 'Yes, when set up with master-slave replicas and query caching, MySQL handles massive read-write traffic efficiently.' }
    ]
  }
];

export const getTechBySlug = (slug) => {
  return technologiesData.find((tech) => tech.slug === slug);
};

export const getTechById = (id) => {
  return technologiesData.find((tech) => tech.id === id);
};

export const getTechsByCategory = (category) => {
  return technologiesData.filter((tech) => tech.category === category);
};
