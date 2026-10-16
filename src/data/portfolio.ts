export interface RoleProgression {
  role: string;
  period: string;
  bullets?: string[];
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  bullets?: string[];
  skills?: string[];
  link?: string;
  current?: boolean;
  promotion?: string;
  progression?: RoleProgression[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "saas" | "ai" | "web" | "client";
  year: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  clientBudget?: string;
  soldPrice?: string;
  featured?: boolean;
}

export interface OpenSourceItem {
  name: string;
  description: string;
  status: "Current" | "Done";
  url: string;
}

export interface Hackathon {
  title: string;
  award: string;
  organization: string;
  location: string;
  date: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  relativeTime: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export const portfolioData = {
  name: "Rajneesh",
  fullName: "Rajneesh Verma",
  badge: "Available for work",
  role: "Software Engineer & Tinkerer",
  age: "20 y/o",
  location: "Lucknow, India",
  timezone: "Asia/Kolkata",
  resumeUrl: "https://drive.google.com/file/d/1Lx9EBoJcft7coaYpvnWsNiHkDkBrc0z_/view?usp=sharing",
  email: "wwrajneesh807@gmail.com",
  socials: {
    github: "https://github.com/rajneeshverma1",
    twitter: "https://x.com/Rajneeshvermaa",
    linkedin: "https://www.linkedin.com/in/rajneesh-verma-4a871825b/",
    reddit: "https://www.reddit.com/user/rajneesh807/",
  },
  gitaQuote: {
    verse: "Bhagavad Gita 2:47",
    text: "You have the right to work, but never to the fruit of work. You should never engage in action for the sake of reward, nor should you long for inaction.",
  },
  workExperiences: [
    {
      id: "sidekick",
      role: "Software Engineer",
      company: "Sidekick (YC P26)",
      location: "San Francisco, CA · Remote",
      period: "May 2026 — Present",
      current: true,
      description: "Joined a YC P26 backed startup as a Software Engineer.",
      bullets: [
        "Driving core product engineering, scalable architecture, and technical loops from ground zero.",
        "Building high-performance user onboarding engines, real-time telemetry, and resilient full-stack systems.",
        "Collaborating directly with founders to iterate on product-market fit at venture scale."
      ],
      skills: ["Next.js", "TypeScript", "PostgreSQL", "React", "Node.js", "Analytics"]
    },
    {
      id: "flyrank",
      role: "Backend AI Engineer",
      company: "Flyrank AI",
      location: "Remote",
      period: "Dec 2025 — Mar 2026",
      current: false,
      description: "Building and shipping AI backend systems at FlyRank AI - working on LLM integrations, APIs, automation pipelines, and scalable infrastructure.",
      bullets: [
        "Architecting resilient LLM orchestration pipelines and streaming APIs for enterprise search and generative workflows.",
        "Engineering high-throughput async processing queues, latency reduction optimizations, and caching layers.",
        "Managing automated infrastructure deployments, model fine-tuning interfaces, and telemetry."
      ],
      skills: ["LLMs", "Node.js", "Python", "Redis", "Vector DBs", "Docker"]
    },
    {
      id: "stealth-swe",
      role: "Software Engineer",
      company: "Stealth AI Startup",
      location: "South Africa · Remote",
      period: "Jan 2025 — May 2026",
      current: false,
      promotion: "Promoted from Intern to Software Engineer",
      description: "Promoted from Software Engineer Intern to Software Engineer. Scaled the edtech platform to support 500+ concurrent users, optimizing backend services and real-time systems for low latency and high reliability.",
      progression: [
        {
          role: "Software Engineer",
          period: "Mar 2025 — May 2026",
          bullets: [
            "Scaled the edtech platform to support 500+ concurrent users, optimizing backend services and real-time systems for low latency and high reliability.",
            "Optimized database queries and WebSocket communication, reducing API latency by 40%.",
            "Built and deployed scalable backend services using Node.js, PostgreSQL, and Redis."
          ]
        },
        {
          role: "Software Engineer Intern",
          period: "Jan 2025 — Mar 2025",
          bullets: [
            "Built and shipped scalable full-stack features, including backend APIs and real-time workflows to support multi-user live learning sessions.",
            "Implemented authentication, real-time collaboration features, and backend services with Node.js and WebSockets."
          ]
        }
      ],
      bullets: [
        "Promoted from Software Engineer Intern to full-time Software Engineer after successfully delivering core real-time architecture.",
        "Software Engineer (Mar 2025 — May 2026): Scaled backend services and WebSocket infrastructure to support 500+ concurrent interactive live users; refactored database queries to slash latency by 40%.",
        "Software Engineer Intern (Jan 2025 — Mar 2025): Built and shipped scalable full-stack features, backend REST APIs, authentication, and live multi-user workflows."
      ],
      skills: ["WebSockets", "Node.js", "PostgreSQL", "Redis", "Docker", "React", "MongoDB"]
    }
  ] as WorkExperience[],

  projects: [
    {
      id: "matic-ai",
      name: "Matic AI",
      tagline: "Text-to-educational-animation SaaS engine",
      description: "A text-to-educational-animation engine that converts structured content into animated learning sequences.",
      category: "saas",
      year: "2025",
      tech: ["Next.js", "TypeScript", "OpenAI API", "Canvas", "Framer Motion"],
      githubUrl: "https://github.com/rajneeshverma1/main-maticai",
      liveUrl: "https://maticstudio.site/",
      featured: true
    },
    {
      id: "lumify",
      name: "Lumify",
      tagline: "Transform screenshots into export-ready visuals",
      description: "Transform your code snippets and app screenshots into export-ready visual graphics with customizable backgrounds and themes.",
      category: "web",
      year: "2025",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/rajneeshverma1/Lumify",
      liveUrl: "https://lumify-axdo.vercel.app/",
      featured: true
    },
    {
      id: "collectly",
      name: "Collectly AI",
      tagline: "B2B billing automation with sleek aesthetics",
      description: "A high-fidelity SaaS platform for B2B billing automation featuring premium aesthetics, fluid micro-interactions, and cinematic motion design.",
      category: "saas",
      year: "2025",
      tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Aceternity UI"],
      githubUrl: "https://github.com/rajneeshverma1/Collectly",
      liveUrl: "https://collectly-kappa.vercel.app/",
      featured: true
    },
    {
      id: "merge-ai",
      name: "Merge AI",
      tagline: "Multi-LLM engine generating consensus answers",
      description: "Aggregates queries across ChatGPT, Claude, Gemini, and Perplexity simultaneously, synthesizing them into a high-accuracy, comprehensive Super Answer.",
      category: "ai",
      year: "2025",
      tech: ["Next.js", "TypeScript", "OpenAI", "Anthropic", "Gemini", "Perplexity API"],
      githubUrl: "https://github.com/rajneeshverma1/Merge-AI",
      featured: true
    },
    {
      id: "docly-ai",
      name: "Docly AI",
      tagline: "Chat with documents via RAG & Groq",
      description: "Ultra-fast document intelligence interface allowing natural conversations with PDFs and docs via Groq's low-latency inference.",
      category: "ai",
      year: "2025",
      tech: ["Next.js", "TypeScript", "Groq", "RAG", "Vector DB"],
      githubUrl: "https://github.com/rajneeshverma1/Docly-AI",
      featured: true
    },
    {
      id: "drafty-ai",
      name: "Drafty AI",
      tagline: "Real-time collaborative whiteboarding canvas",
      description: "High-performance, real-time collaborative whiteboarding application with instant synchronization and multiplayer drawing.",
      category: "ai",
      year: "2025",
      tech: ["Next.js", "TypeScript", "React", "WebSockets"],
      githubUrl: "https://github.com/rajneeshverma1/Drafty",
      liveUrl: "https://creo.hrsht.me/",
      featured: false
    }
  ] as Project[],

  clientWork: [
    {
      id: "agritech",
      name: "Agritech",
      tagline: "Scalable SaaS for agricultural & storage facilities",
      description: "Developed a comprehensive scalable SaaS solution for regional agricultural and cold storage facilities, featuring advanced inventory management, real-time temperature tracking, automated alerts, and optimized workflows.",
      category: "client",
      year: "2025",
      tech: ["React", "Next.js", "TypeScript", "Node.js", "IoT APIs"],
      soldPrice: "$650",
      featured: true
    },
    {
      id: "ayush-realtors",
      name: "Ayush Realtors",
      tagline: "Modern real estate platform with virtual tours",
      description: "A comprehensive modern real estate platform with detailed property listings, advanced multi-parameter search filters, immersive virtual tours, and interactive maps.",
      category: "client",
      year: "2025",
      tech: ["React", "Next.js", "TypeScript", "PostgreSQL"],
      soldPrice: "$125",
      featured: true
    },
    {
      id: "dream-smile-dental",
      name: "Dream Smile Dental",
      tagline: "Dental clinic & practice management system",
      description: "A comprehensive modern dental clinic management system with seamless appointment booking, detailed patient records management, automated billing and invoicing, and payment processing.",
      category: "client",
      year: "2025",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      soldPrice: "$350",
      featured: true
    }
  ] as Project[],

  openSource: [
    {
      name: "Cal.com",
      description: "Open-source scheduling infrastructure",
      status: "Done",
      url: "https://cal.com/"
    },
    {
      name: "Dodo Payments",
      description: "Open-source payment infrastructure",
      status: "Done",
      url: "https://dodopayments.com/"
    }
  ] as OpenSourceItem[],

  offScreen: [
    {
      id: "formal",
      title: "that's me",
      caption: "Rajneesh Verma · That's Me",
      src: "/images/formal.jpeg",
      alt: "Rajneesh Verma"
    },
    {
      id: "setup",
      title: "here is where i code/ spent most of the time",
      caption: "Desk Setup · Neon Glow, Code & Red Bull",
      src: "/images/setup.jpeg",
      alt: "Late night desk setup with dual monitors and neon lighting"
    },
    {
      id: "cafe",
      title: "Work at Cafe",
      caption: "Cafe Coding · MacBook, Coffee & Pepsi",
      src: "/images/workatcafe.jpeg",
      alt: "MacBook with code open at ambient cafe"
    },
    {
      id: "university",
      title: "Campus Life",
      caption: "University Campus · SRMU Lucknow",
      src: "/images/university.jpeg",
      alt: "Rajneesh at university campus"
    },
    {
      id: "nature",
      title: "this is how i spend my evening",
      caption: "Nature Walks · Evening Countryside Sunset",
      src: "/images/thatscoolnature.jpeg",
      alt: "Scenic sunset over green countryside fields"
    }
  ],

  skills: {
    frontend: ["React", "Next.js", "TailwindCSS", "Aceternity UI", "ShadCN UI", "Tanstack Query", "Redux"],
    backend: ["Node.js", "Express.js", "WebSockets", "Next.js API", "REST APIs"],
    database: ["PostgreSQL", "MySQL", "Prisma ORM", "Mongoose", "Redis"],
    runtime: ["Node.js", "Bun", "pnpm", "Edge Runtime (Vercel)", "Cloudflare Workers"],
    devops: ["Docker", "Kubernetes", "Kafka", "CI/CD Actions", "Git"],
    languages: ["TypeScript", "JavaScript", "C++", "SQL"]
  },

  education: [
    {
      institution: "Sri Ramswaroop Memorial University",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2023 — 2027",
      location: "Uttar Pradesh, India",
      url: "https://srmu.ac.in/"
    },
    {
      institution: "100xDevs Cohort",
      degree: "Full Stack Development & DevOps by Harkirat Singh",
      period: "2024 — 2025",
      location: "Online",
      url: "https://100xdevs.com/"
    }
  ],

  hackathons: [
    {
      title: "Coding Competition",
      award: "1st Position & Rank 1",
      organization: "Sri Ramswaroop Memorial University",
      location: "Lucknow, India",
      date: "September 2024",
      description: "Secured 1st Position and Rank 1 in the university-wide Coding Competition, solving complex algorithmic challenges and data structures."
    },
    {
      title: "Technex",
      award: "Triumphed & Winner",
      organization: "Sri Ramswaroop Memorial University",
      location: "Lucknow, India",
      date: "March 2025",
      description: "Competed and triumphed in Technex, building state-of-the-art technical prototypes and presenting software solutions."
    }
  ] as Hackathon[],

  githubActivity: {
    totalContributions: 2402,
    yearText: "2,402 contributions in the last year",
  },

  articles: [
    {
      id: "how-not-to-give-up",
      title: "How Not to Give Up",
      date: "January 12, 2026",
      relativeTime: "10mo ago",
      readTime: "6 mins read",
      excerpt: "Life gets tough, dreams feel impossible, and quitting seems like the easiest option. But wait! What if I told you the only way to predict the future is to build it yourself?",
      content: `Life gets tough, dreams feel impossible, and quitting seems like the easiest option. But wait! What if I told you the only way to predict the future is to build it yourself?

When you spend your nights staring at compiler errors, debugging race conditions, or watching users churn from an early build, it's easy to mistake friction for failure. But the builders who change things aren't necessarily the ones with effortless beginnings; they are simply the ones who refused to shut their laptops.

Every single commit, every rejected pull request, every edge case you conquer is a brick in the foundation of your craft. When the road feels uphill, zoom out. You are not just building software — you are building resilience.`
    },
    {
      id: "the-education-trap",
      title: "The Education Trap",
      date: "October 10, 2024",
      relativeTime: "25mo ago",
      readTime: "15 mins read",
      excerpt: "A good degree is all you need. Do really skills matter? Education is a scam? The education trap.",
      content: `A good degree is all you need. Do really skills matter? Is formal education obsolete? Welcome to the modern education trap.

Traditional institutions were designed during the industrial era to produce predictable workers for predictable jobs. But the software world doesn't care about credentials; it cares about proof of work. 

Can you ship? Can you diagnose a production outage at 2 AM? Can you read the documentation and learn an unfamiliar framework in a weekend? The real curriculum isn't in a lecture hall — it's in the GitHub repositories, open-source issue trackers, and personal projects you build with your own hands.`
    },
    {
      id: "hello-world",
      title: "Hello World",
      date: "June 18, 2023",
      relativeTime: "41mo ago",
      readTime: "5 mins read",
      excerpt: "My first post on my new blog. Documenting the start of my engineering odyssey.",
      content: `Every developer has a "Hello World" moment — the exact spark where syntax transforms into living logic on screen.

This blog is my personal laboratory and public notebook. I'll be sharing honest write-ups on building distributed systems, contributing to open-source software, diving into AI workflows, and navigating life as a young builder from Lucknow.`
    }
  ] as BlogPost[]
};
