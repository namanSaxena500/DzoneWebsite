import React from 'react';
import { Layers, Globe, Smartphone, Cloud, Lock, Activity } from 'lucide-react';

export const servicesData = [
  {
    id: 'app-design',
    slug: 'app-design',
    title: 'UI/UX Design',
    shortTitle: 'UI/UX Design',
    desc: 'We design intuitive, modern, and beautiful user interfaces that convert users into loyal customers. Our process involves deep user research, wireframing, prototyping, and stunning visual design systems.',
    features: [
      'User Persona & Journey Maps',
      'Interactive Prototypes',
      'Responsive Layout Designs',
      'Design Systems & Component Libraries'
    ],
    heroTitle: 'UI/UX Design & User Experiences',
    heroDesc: 'Crafting visually stunning, highly interactive user experiences that connect brands with their audiences. We turn ideas into beautiful, user-centric interfaces.',
    heroLaunch: 'Engage Users . Convert Leads . Establish Brand Authority',
    bestGotTitle: 'Crafting Visual Identities',
    bestGotDesc: 'Our UI/UX design process centers on the user. We combine qualitative research with pixel-perfect visuals, micro-animations, and smooth transition frameworks to create interfaces that feel natural, premium, and extremely satisfying to interact with.',
    bestGotImage: '/images/service_ux_intro.png',
    techIds: ['figma', 'adobexd', 'sketch'],
    subServices: [
      {
        id: 1,
        title: 'User Research & Persona Development',
        desc: 'We analyze target audiences to outline clear user behaviors, pain points, and motivations, shaping features to meet real user needs.'
      },
      {
        id: 2,
        title: 'Wireframing & Interactive Prototyping',
        desc: 'We construct structural skeletons and high-fidelity clickable models in Figma to preview interactions and validate workflows before coding.'
      },
      {
        id: 3,
        title: 'Custom Brand & Visual Design',
        desc: 'We define the aesthetics, colors, typography, and mood boards that capture your brand\'s core character and make it stand out globally.'
      },
      {
        id: 4,
        title: 'Mobile App UI/UX Design',
        desc: 'Designing fluid, thumb-friendly interfaces for iOS and Android apps with platform-specific interactions and transition gestures.'
      },
      {
        id: 5,
        isImage: true,
        image: '/images/service_ux_feature.png'
      },
      {
        id: 6,
        title: 'Design Systems Creation',
        desc: 'We build comprehensive component libraries with strict style guides to guarantee visual consistency across web, mobile, and print products.'
      },
      {
        id: 7,
        title: 'Usability Testing & Audits',
        desc: 'Evaluating existing designs or prototypes with real users to identify design friction, bottlenecks, and optimization opportunities.'
      },
      {
        id: 8,
        title: 'Responsive Web UI Design',
        desc: 'Creating visual layouts that adapt dynamically to any desktop monitor, tablet, or smartphone screen size without layout breakage.'
      },
      {
        id: 9,
        title: 'Micro-interaction & Animation Planning',
        desc: 'Designing subtle button hovers, page loaders, and transition effects that make interfaces feel alive and keep users highly engaged.'
      }
    ],
    faq: [
      {
        id: 1,
        question: 'What design tools do you use?',
        answer: 'We primarily use Figma for collaborative wireframing and prototyping. We also support Adobe XD and Sketch depending on client preferences.'
      },
      {
        id: 2,
        question: 'How long does a typical UI/UX process take?',
        answer: 'Depending on the complexity, a full UI/UX design phase takes anywhere from 2 to 6 weeks. This includes research, wireframing, high-fidelity layouts, and design feedback.'
      },
      {
        id: 3,
        question: 'Do you design with responsiveness in mind?',
        answer: 'Yes! Every design layout we deliver is fully responsive, ensuring it looks pixel-perfect on desktop screens, tablets, and smartphones alike.'
      }
    ]
  },
  {
    id: 'web-dev',
    slug: 'web-dev',
    title: 'Web Development',
    shortTitle: 'Web Dev',
    desc: 'Top-tier, high-performance web development utilizing the latest stack like React, Next.js, and Node.js. We ensure your application is incredibly fast, responsive, secure, and optimized for search engines.',
    features: [
      'Server-Side Rendering (SSR)',
      'SEO Optimizations',
      'Headless CMS Integration',
      'E-Commerce & Custom Portals'
    ],
    heroTitle: 'Web Application Development',
    heroDesc: 'Top-tier, high-performance web development utilizing modern tech stacks. We ensure your application is fast, secure, scalable, and fully search engine optimized.',
    heroLaunch: 'Launch Faster . Scale Effortlessly . Capture Search Traffic',
    bestGotTitle: 'High-Performance Web Engineering',
    bestGotDesc: 'We construct bespoke web applications that solve your business challenges. Unlike generic tools, our custom solutions are designed around your workflows, processes, and user needs, using frameworks that score perfect Core Web Vitals.',
    bestGotImage: '/images/service_web_intro.png',
    techIds: ['react', 'nextjs', 'angular', 'vue', 'html5', 'css3', 'nodejs', 'python', 'go', 'java', 'postgresql', 'mongodb', 'mysql'],
    subServices: [
      {
        id: 1,
        title: 'Custom Web Application Development',
        desc: 'We build bespoke web applications that solve your business challenges. Unlike generic tools, our custom solutions are designed around your workflows.'
      },
      {
        id: 2,
        title: 'Frontend Development',
        desc: 'We craft responsive, interactive web applications using React, Next.js, and Vue, ensuring state-of-the-art modular structure and clean data flows.'
      },
      {
        id: 3,
        title: 'Backend API Development',
        desc: 'Compile-to-binary or event-driven server runtime. We build microservice architectures, real-time socket channels, and high-concurrency API integrations.'
      },
      {
        id: 4,
        title: 'Full-Stack Web Development',
        desc: 'Seamless integration between client and server layers, with responsive visual aesthetics, fluid user animations, and modular database layers.'
      },
      {
        id: 5,
        isImage: true,
        image: '/images/service_web_intro.png'
      },
      {
        id: 6,
        title: 'E-commerce Web Development',
        desc: 'Build lightning-fast e-commerce storefronts that elevate brand presence globally, utilizing custom payment integrations and order processing flows.'
      },
      {
        id: 7,
        title: 'Progressive Web App (PWA)',
        desc: 'Modern single page applications featuring offline-first capabilities, push notifications, and fast loading times on mobile devices.'
      },
      {
        id: 8,
        title: 'Headless CMS Development',
        desc: 'Empower content creators with headless CMS configurations, offering rich foundations and decoupled frontend presentation layers.'
      },
      {
        id: 9,
        title: 'Website Modernization & Migration',
        desc: 'Transition legacy web systems to modern, fast stacks with zero downtime, improved performance scores, and perfect SEO path preservation.'
      }
    ],
    faq: [
      {
        id: 1,
        question: 'Which framework do you recommend for Web Development?',
        answer: 'We highly recommend Next.js and React for frontend development due to their incredible performance, SEO benefits (SSR), and massive developer ecosystem.'
      },
      {
        id: 2,
        question: 'Do you offer custom API integrations?',
        answer: 'Absolutely. We regularly build custom API integrations with ERP, CRM, payment gateways (Stripe, PayPal), and proprietary systems.'
      },
      {
        id: 3,
        question: 'How do you optimize websites for fast loading times?',
        answer: 'We optimize using lazy loading, image compression, Server-Side Rendering (SSR), edge deployment (Vercel/AWS CloudFront), and clean, modular code practices.'
      }
    ]
  },
  {
    id: 'mobile-app',
    slug: 'mobile-app',
    title: 'Mobile Application',
    shortTitle: 'Mobile Apps',
    desc: 'High quality cross-platform and native mobile application development. We build iOS and Android apps using React Native and Flutter, ensuring native-level performance and smooth, native user experiences.',
    features: [
      'Cross-platform efficiency',
      'App Store deployment assistance',
      'Offline-first capabilities',
      'Native device API integrations'
    ],
    heroTitle: 'Mobile Application Engineering',
    heroDesc: 'Designing and building top-tier mobile apps that engage users on both iOS and Android platforms. Enjoy native speeds, offline storage, and beautiful mobile layouts.',
    heroLaunch: 'Engage Mobile Users . Publish to App Stores . Optimize Conversions',
    bestGotTitle: 'Uncompromising Mobile Apps',
    bestGotDesc: 'We construct natively compiled mobile applications with high-fps animations, smooth transitions, and stable background sync capability, helping you connect with users directly on their smartphones.',
    bestGotImage: '/images/service_mobile_intro.png',
    techIds: ['reactnative', 'flutter', 'swift', 'kotlin'],
    subServices: [
      {
        id: 1,
        title: 'Cross-Platform App Development',
        desc: 'Build native iOS and Android apps from a single codebase using React Native and Flutter, optimizing costs and time-to-market.'
      },
      {
        id: 2,
        title: 'Native iOS Development',
        desc: 'Writing optimized Swift applications that interface directly with core Apple SDKs, Apple Health, ARKit, and iOS layouts.'
      },
      {
        id: 3,
        title: 'Native Android Development',
        desc: 'Building modern, high-performance Android applications using Kotlin, targeting current material components and native device APIs.'
      },
      {
        id: 4,
        title: 'Mobile UI/UX Optimization',
        desc: 'Adapting responsive web grids to gesture-driven mobile screens with thumb-friendly controls, quick sliders, and smooth swipe actions.'
      },
      {
        id: 5,
        isImage: true,
        image: '/images/tech_mobile.png'
      },
      {
        id: 6,
        title: 'Offline-First App Architecture',
        desc: 'Integrating local databases (SQLite, Realm) to store data locally and sync with cloud databases when network availability returns.'
      },
      {
        id: 7,
        title: 'App Store Submission & Lifecycle',
        desc: 'Handling the technical process of signing apps, setting up store layouts, and securing approvals on Apple App Store & Google Play.'
      },
      {
        id: 8,
        title: 'Device API Integrations',
        desc: 'Interfacing apps with native capabilities including GPS trackers, cameras, biometric locks, push alerts, and Bluetooth accessories.'
      },
      {
        id: 9,
        title: 'App Maintenance & Security Updates',
        desc: 'Monitoring crash reports, patching security protocols, and updating codebase structures to support newest iOS & Android OS upgrades.'
      }
    ],
    faq: [
      {
        id: 1,
        question: 'Should I choose React Native/Flutter or Native Swift/Kotlin?',
        answer: 'For most startups and business apps, React Native or Flutter is perfect because it saves time and budget by writing code once for both iOS and Android. If your app requires heavy graphic rendering or extensive native hardware API access, Native is the way to go.'
      },
      {
        id: 2,
        question: 'Do you handle App Store approvals?',
        answer: 'Yes! We manage the complete distribution process, from setting up the Developer accounts to generating certificates and submitting apps for review.'
      },
      {
        id: 3,
        question: 'How do you test mobile apps before release?',
        answer: 'We test using simulators and actual physical devices via TestFlight (iOS) and Firebase App Distribution (Android) to guarantee absolute stability.'
      }
    ]
  },
  {
    id: 'cloud-services',
    slug: 'cloud-services',
    title: ' Cloud & DevOps Solutions',
    shortTitle: 'Cloud',
    desc: 'Scalable cloud infrastructure architectures on AWS, GCP, and Azure. We plan, deploy, and monitor scalable serverless or microservice structures tailored for high-availability requirements.',
    features: [
      'Microservices Architecture',
      'Serverless Functions',
      'Continuous Delivery Pipelines',
      'Auto-scaling & Monitoring'
    ],
    heroTitle: 'Cloud Architectures & Infrastructure',
    heroDesc: 'Designing, deploying, and maintaining high-availability cloud setups that scale dynamically. Say goodbye to server failures and hello to 99.99% uptime.',
    heroLaunch: 'Maximize Availability . Dynamic Autoscale . Trim Server Bills',
    bestGotTitle: 'Bank-Grade Cloud Engineering',
    bestGotDesc: 'We specialize in containerization, serverless functions, database replication, and CDN routing on Amazon Web Services (AWS) and Google Cloud Platform (GCP) to guarantee absolute resilience and low-latency client experiences.',
    bestGotImage: '/images/service_cloud_intro.png',
    techIds: ['nodejs', 'python', 'go', 'java', 'postgresql', 'mongodb', 'mysql'],
    subServices: [
      {
        id: 1,
        title: 'Cloud Infrastructure Design',
        desc: 'Structuring cloud environments on AWS, GCP, or Azure using VPCs, subnets, and load balancers to ensure absolute security and scalability.'
      },
      {
        id: 2,
        title: 'Microservices & Containerization',
        desc: 'Breaking down monolithic setups into Docker containers orchestrated by Kubernetes, facilitating independent updates and scaling.'
      },
      {
        id: 3,
        title: 'Serverless Deployments',
        desc: 'Writing and deploying AWS Lambda or Google Cloud Functions that run only when triggered, saving you massive database hosting costs.'
      },
      {
        id: 4,
        title: 'Database Replication & Sharding',
        desc: 'Configuring read-replicas, multi-region failovers, and sharded clusters to handle millions of read-write operations without lag.'
      },
      {
        id: 5,
        isImage: true,
        image: '/images/tech_backend.png'
      },
      {
        id: 6,
        title: 'CDN Setup & Edge Caching',
        desc: 'Configuring Amazon CloudFront or Cloudflare to cache static assets close to your users, dropping page load latency to milliseconds.'
      },
      {
        id: 7,
        title: 'Infrastructure as Code (IaC)',
        desc: 'Defining server templates using Terraform or AWS CloudFormation to build, test, and tear down identical environments instantly.'
      },
      {
        id: 8,
        title: 'Cloud Cost Optimization',
        desc: 'Auditing server utilization to terminate unused resources, optimize database instances, and configure proper server auto-scaling.'
      },
      {
        id: 9,
        title: 'Real-time Monitoring & Alerting',
        desc: 'Setting up systems with Prometheus, Grafana, or AWS CloudWatch to trace request flows and notify developers of errors instantly.'
      }
    ],
    faq: [
      {
        id: 1,
        question: 'Which cloud provider is best for my startup?',
        answer: 'AWS is the industry leader with the most extensive features, while GCP is highly favored for Kubernetes and machine learning projects. We evaluate your requirements and suggest the most cost-effective option.'
      },
      {
        id: 2,
        question: 'How do cloud services save hosting costs?',
        answer: 'By using autoscaling and serverless technology, you only pay for compute power when users actually access your app, instead of paying for a large idle server 24/7.'
      },
      {
        id: 3,
        question: 'Do you migrate existing on-premise apps to the cloud?',
        answer: 'Yes, we specialize in lift-and-shift migrations as well as refactoring legacy apps into modern cloud-native formats.'
      }
    ]
  },
  {
    id: 'ecommerce-development',
    slug: 'ecommerce-development',
    title: 'E-Commerce Development',
    shortTitle: 'E-Commerce',
    desc: 'High-performance, secure e-commerce storefront development. We build custom shop systems, Shopify setups, WooCommerce solutions, and payment gateway integrations optimized for conversions and search rankings in Jaipur and globally.',
    features: [
      'Custom Checkout & Cart Flows',
      'Secure Payment Integrations',
      'Inventory & Catalog Systems',
      'SEO Optimized Storefronts'
    ],
    heroTitle: 'E-Commerce Web Design & Development',
    heroDesc: 'Launch a stunning online storefront that drives sales. We design fast, mobile-friendly, secure e-commerce systems optimized to rank #1 on Google.',
    heroLaunch: 'Sell Online . Accept Secure Payments . Rank Higher on Google',
    bestGotTitle: 'Converting Visitors into Loyal Customers',
    bestGotDesc: 'We engineer high-performance, fast-loading online store architectures. From headless commerce to customized checkouts, we ensure a seamless purchase flow that reduces cart abandonment and boosts search visibility.',
    bestGotImage: '/images/portfolio_skincare.png',
    techIds: ['react', 'nextjs', 'nodejs', 'postgresql', 'mongodb', 'mysql'],
    subServices: [
      {
        id: 1,
        title: 'Custom E-Commerce Platform Design',
        desc: 'We build bespoke online shops tailor-made for your unique brand experience, catalog structures, and customer user journeys.'
      },
      {
        id: 2,
        title: 'Shopify & WooCommerce Setup',
        desc: 'Designing, customizing, and launching premium Shopify or WordPress WooCommerce store themes to get your sales live fast.'
      },
      {
        id: 3,
        title: 'Headless Commerce Architecture',
        desc: 'Decoupling frontend store interfaces using React/Next.js from backend engines to deliver page speeds under 1 second.'
      },
      {
        id: 4,
        title: 'Secure Payment Integrations',
        desc: 'Connecting popular gateways like Razorpay, Paytm, Stripe, and PayPal to secure friction-free transactions.'
      },
      {
        id: 5,
        isImage: true,
        image: '/images/portfolio_restaurant.png'
      },
      {
        id: 6,
        title: 'Inventory & Order Management',
        desc: 'Synchronizing your digital store catalog with physical stock levels, warehouse data, and shipping logistics pipelines.'
      },
      {
        id: 7,
        title: 'Mobile-Optimized Storefronts',
        desc: 'Developing responsive layouts that guarantee seamless shopping experiences on smartphones and tablets.'
      },
      {
        id: 8,
        title: 'Store Migration & Data Porting',
        desc: 'Moving products, order histories, and customer accounts from legacy platforms to modern engines with zero SEO ranking loss.'
      },
      {
        id: 9,
        title: 'E-Commerce SEO & Performance Audits',
        desc: 'Optimizing meta tags, schemas, product descriptions, and core web vitals to place your store on Google page 1 in Jaipur.'
      }
    ],
    faq: [
      {
        id: 1,
        question: 'Which e-commerce engine is right for my online shop?',
        answer: 'For standard retail shops, Shopify or WooCommerce is ideal due to quick launching. For custom enterprise scale storefronts with complex rules, custom headless setups are recommended.'
      },
      {
        id: 2,
        question: 'Are e-commerce sites optimized for Google search?',
        answer: 'Yes! We implement schema markup, fast image delivery, clean URL hierarchies, and custom meta keywords to ensure maximum visibility for product searches.'
      },
      {
        id: 3,
        question: 'How do you secure payment processing?',
        answer: 'We integrate PCI-DSS compliant payment gateways, forcing HTTPS encryption and JWT authentication to protect user credit card details.'
      }
    ]
  },
  {
    id: 'devops-qa',
    slug: 'devops-qa',
    title: 'DevOps & QA',
    shortTitle: 'DevOps & QA',
    desc: 'Automating software integration, testing, and deployment to guarantee flawless product releases. We utilize automated testing frameworks and CI/CD tools to minimize production faults.',
    features: [
      'Automated Unit & E2E Testing',
      'Continuous Integration (CI/CD)',
      'Infrastructure as Code (IaC)',
      'Zero-downtime Deployments'
    ],
    heroTitle: 'DevOps & Automated Quality Assurance',
    heroDesc: 'Automating the pipeline from code commit to production release. We set up automated testing scripts and deployment pipelines to keep releases smooth and error-free.',
    heroLaunch: 'Automate Deployments . Catch Bugs Early . Guarantee Zero Downtime',
    bestGotTitle: 'Zero-Friction Release Engineering',
    bestGotDesc: 'We use CI/CD scripts, containerized virtualization, and automated unit/integration suites (Jest, Cypress) to ensure every updates file gets validated, built, and deployed safely with absolutely zero human error.',
    bestGotImage: '/images/service_devops_intro.png',
    techIds: ['nodejs', 'python', 'go', 'java'],
    subServices: [
      {
        id: 1,
        title: 'Continuous Integration (CI) Pipelines',
        desc: 'Configuring Github Actions or GitLab CI to automatically build, lint, and run tests every time developer pushes new code commits.'
      },
      {
        id: 2,
        title: 'Automated E2E Testing',
        desc: 'Writing simulation tests using Cypress or Playwright that mimic real users navigating your site, catching bugs before production.'
      },
      {
        id: 3,
        title: 'Zero-Downtime Deployments',
        desc: 'Setting up rolling updates, blue-green environments, or canary releases to push code changes without interrupting live customers.'
      },
      {
        id: 4,
        title: 'Automated API & Integration Tests',
        desc: 'Testing database calls, validation scripts, and server-to-server APIs using Jest or Supertest to assert perfect calculations.'
      },
      {
        id: 5,
        isImage: true,
        image: '/images/service_web_feature.png'
      },
      {
        id: 6,
        title: 'Performance & Load Testing',
        desc: 'Simulating high-volume virtual traffic using k6 or Artillery to identify database memory leaks and server bottlenecks.'
      },
      {
        id: 7,
        title: 'Infrastructure Provisioning Automation',
        desc: 'Deploying servers, databases, and CDN routing dynamically using code configurations (Terraform) to avoid configuration drift.'
      },
      {
        id: 8,
        title: 'Log Aggregation & Crash Analytics',
        desc: 'Structuring diagnostic pipelines with Sentry or Datadog to capture production application faults and alert developers instantly.'
      },
      {
        id: 9,
        title: 'Docker Image Build Optimizations',
        desc: 'Structuring multi-stage Dockerfiles to compile lightweight, secure app containers that spin up in a fraction of a second.'
      }
    ],
    faq: [
      {
        id: 1,
        question: 'What is CI/CD and why do I need it?',
        answer: 'Continuous Integration / Continuous Deployment automates the process of testing and releasing code. It ensures that any changes to your app are automatically verified for quality, so updates reach users within minutes instead of days.'
      },
      {
        id: 2,
        question: 'Do you write automated tests for my app?',
        answer: 'Yes. We write unit tests for critical business logic, integration tests for API endpoints, and End-to-End (E2E) UI tests for core user paths.'
      },
      {
        id: 3,
        question: 'How do you deploy code without downtime?',
        answer: 'We use container orchestration and rolling updates. This spins up new server instances with the updated code and only routes users to them once they pass health checks, then safely shuts down the old instances.'
      }
    ]
  }
];

export const getServiceBySlug = (slug) => {
  return servicesData.find((service) => service.slug === slug) || servicesData[0];
};

export const getServiceById = (id) => {
  return servicesData.find((service) => service.id === id);
};
