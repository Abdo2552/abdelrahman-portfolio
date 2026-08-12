// Featured, fully-detailed projects (shown as large cards).
export const featuredProjects = [
  {
    id: "pc-builder",
    featured: true,
    name: "PC Builder",
    tagline: "A PC parts store built around one idea: compatibility first.",
    overview:
      "PC Builder is a full-stack e-commerce platform for computer components. Instead of acting like a generic store, its core feature is the \"Build a PC\" tool, where a user picks a CPU, motherboard, RAM, storage, PSU, GPU, cooler, and case, and the site checks that everything actually works together — matching CPU/motherboard sockets, supported RAM type, enough PSU wattage, and GPU length fitting the case — before checkout.",
    features: [
      "Build a PC tool with live component-to-component compatibility checking",
      "Product catalog with filtering, product detail pages, and image galleries",
      "Cart, checkout, and order history",
      "User accounts with token-based authentication (register, login, profile, addresses)",
      "Wishlist and side-by-side product comparison",
      "Product reviews",
      "Save and share a build publicly via a shareable link",
      "Admin dashboard for managing products, categories, brands, banners, reviews, and benchmark data",
    ],
    tech: [
      "Laravel 12",
      "PHP 8.2",
      "HTML / CSS / JavaScript (no framework)",
      "PostgreSQL (Neon)",
      "SQLite",
      "Laravel Sanctum",
      "Cloudflare R2",
    ],
    role: "Designed and built the full stack solo — the Laravel API (auth, catalog, cart, orders, the compatibility-checking build logic, and the admin endpoints) and the plain HTML/CSS/JS frontend that consumes it, then deployed it entirely on free-tier infrastructure.",
    liveUrl: "https://pc-builder-sandy.vercel.app/",
    githubUrl: "https://github.com/Osama2214/pc-builder",
    note: "The backend runs on a free Render instance and spins down after inactivity, so the first request to the live demo can take 30–50 seconds to wake up.",
    images: [
      { label: "Homepage", file: "" },
      { label: "Build a PC — compatibility checker", file: "" },
      { label: "Product catalog", file: "" },
    ],
  },
  {
    id: "coffee-shop",
    featured: true,
    name: "Coffee House",
    tagline: "A single-page static site for a small coffee shop.",
    overview:
      "Coffee House is a static one-page site built with plain HTML and CSS. It covers a hero introduction, an about section, a coffee/menu preview, an embedded map for the shop's Alexandria location, and a photo gallery.",
    features: [
      "Hero section with intro copy and two call-to-action buttons",
      "About section highlighting fresh beans, staff, Wi-Fi, and seating",
      "Coffee/menu preview section",
      "Embedded Google Map showing the Alexandria, Egypt location",
      "Photo gallery",
      "Footer with contact details",
    ],
    tech: ["HTML", "CSS"],
    role: "Built the full single-page layout and styling from scratch.",
    liveUrl: "",
    githubUrl: "https://github.com/Abdo2552/Coffee-Shop",
    images: [{ label: "Homepage", file: "" }],
  },
];

// Smaller cards for projects without enough material for a full showcase.
export const otherProjects = [
  {
    name: "Java OOP Projects",
    text: "A set of university assignments applying core OOP concepts — class hierarchies, inheritance, polymorphism, and aggregation — including a UML-modeled class design and a Java implementation exercise.",
    tech: ["Java"],
  },
  {
    name: "Java GUI Projects",
    text: "Desktop applications built with Java, focused on practicing GUI structure alongside OOP design.",
    tech: ["Java"],
  },
  {
    name: "Database-Related Projects",
    text: "Coursework involving relational database design and integration with application code.",
    tech: ["SQL"],
  },
  {
    name: "Flight System",
    text: "A university project modeling a flight booking/management system.",
    tech: ["Java"],
  },
  {
    name: "Banking System",
    text: "A university project modeling core banking operations using OOP principles.",
    tech: ["Java"],
  },
  {
    name: "Smart Parking Management System",
    text: "A digital logic project simulating a smart parking system, implemented in Verilog HDL.",
    tech: ["Verilog HDL"],
  },
  {
    name: "Algorithms & Data Structures",
    text: "Coursework and practice projects implementing and analyzing common algorithms and data structures.",
    tech: ["Java", "C++"],
  },
  {
    name: "PHP / XAMPP Projects",
    text: "Web projects built and tested locally with PHP and XAMPP.",
    tech: ["PHP", "XAMPP"],
  },
];
