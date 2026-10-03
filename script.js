const INSTAGRAM_URL = "https://www.instagram.com/angelcitymaid/";

const routes = {
 "/": renderHomePage,
  "/services": renderServicesPage,
  "/pricing": renderPricingPage,
  "/about": renderAboutPage,
  "/booking": renderBookingPage,
  "/quote": renderQuotePage,
  "/terms": renderTermsPage,
  "/privacy": renderPrivacyPage,
};

function renderTermsPage() {
  return `
    <main style="padding-top: 6rem;">
      <section class="page-hero light">
        <div class="container text-center reveal">
          <h1>Terms of Service</h1>
        </div>
      </section>

      <section class="section section-lg">
        <div class="container" style="max-width: 900px;">
          <div class="contact-card reveal">
            <p>At Angel City Maid, we are committed to delivering exceptional cleaning services to our customers throughout California. By booking our services, you agree to the following terms and conditions:</p>

            <h2>Booking & Scheduling</h2>
            <p>Appointments can be scheduled online, by phone, or via email. All bookings are subject to availability and confirmation. Please ensure that accurate details regarding your home (size, condition, and specific needs) are provided to ensure proper service planning.</p>

            <h2>Pricing & Payment</h2>
            <p>Our pricing is customized based on the size, layout, and condition of your property, as well as the type of service requested. Final pricing may be adjusted if the home’s condition differs significantly from the initial description.</p>
            <p>Payment is due upon completion of service unless otherwise agreed. We accept major credit/debit cards and approved digital payment methods.</p>

            <h2>Cancellations & Rescheduling</h2>
            <p>We kindly request at least 24 hours’ notice for any cancellations or changes.</p>
            <p>Cancellations made within 24 hours may incur a fee of up to 50% of the scheduled service.</p>
            <p>Same-day cancellations or missed appointments may be charged at full service value.</p>

            <h2>Access to Property</h2>
            <p>Clients are responsible for ensuring access to the property at the scheduled time. This may include providing entry codes, keys, or on-site access.</p>
            <p>If our team is unable to access the property, a lockout fee may apply. For safety, please secure pets or inform us in advance.</p>

            <h2>Scope of Services</h2>
            <p>Our team focuses on detailed and efficient cleaning within reasonable limits.</p>
            <p>We do not move heavy furniture (generally over 30–50 lbs)</p>
            <p>We do not handle hazardous materials, including biohazards or severe mold</p>
            <p>Excessive clutter may limit the areas we can clean effectively</p>

            <h2>Satisfaction Guarantee</h2>
            <p>Your satisfaction is important to us. If you are not fully satisfied, please notify us within 24 hours of service. We will gladly return to address any missed areas at no additional cost.</p>

            <h2>Damages & Liability</h2>
            <p>We are fully insured and take great care in your home. In the rare event of damage:</p>
            <p>Claims must be reported within 24–48 hours of service</p>
            <p>We will assess and resolve valid claims promptly</p>
            <p>We are not responsible for pre-existing damage, normal wear and tear, or improperly secured items</p>

            <h2>Health & Safety Compliance (California Standards)</h2>
            <p>In accordance with California health and safety guidelines:</p>
            <p>Our team reserves the right to refuse or stop service in unsafe conditions</p>
            <p>Clients must disclose any hazards such as pests, mold, or ongoing construction</p>
            <p>We follow safe handling practices for cleaning chemicals in compliance with state regulations</p>

            <h2>Supplies & Equipment</h2>
            <p>We provide all necessary professional-grade cleaning supplies and equipment. Eco-friendly or hypoallergenic products are available upon request.</p>

            <h2>Recurring Services</h2>
            <p>Recurring service clients (weekly, bi-weekly, or monthly) agree to ongoing scheduling unless canceled with prior notice. Pricing adjustments, if necessary, will be communicated in advance.</p>

            <h2>Privacy Policy (California Consumer Privacy Act – CCPA)</h2>
            <p>We respect your privacy. Any personal information collected is used solely for scheduling and service purposes. In compliance with the California Consumer Privacy Act (CCPA):</p>
            <p>We do not sell or share your personal data</p>
            <p>You may request access to or deletion of your personal information at any time</p>

            <h2>Changes to Terms</h2>
            <p>We reserve the right to update these Terms of Service at any time. Continued use of our services constitutes acceptance of any revised terms.</p>
          </div>
        </div>
      </section>
    </main>
  `;
}

function renderPrivacyPage() {
  return `
    <main style="padding-top: 6rem;">
      <section class="page-hero light">
        <div class="container text-center reveal">
          <h1>Privacy Policy</h1>
        </div>
      </section>

      <section class="section section-lg">
        <div class="container" style="max-width: 900px;">
          <div class="contact-card reveal">
            <p>We respect your privacy. Any personal information collected is used solely for scheduling and service purposes.</p>
            <p>In compliance with the California Consumer Privacy Act (CCPA):</p>
            <p>We do not sell or share your personal data</p>
            <p>You may request access to or deletion of your personal information at any time</p>
          </div>
        </div>
      </section>
    </main>
  `;
}

function trackPageView(path) {
  if (typeof gtag !== "function") return;

  gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: path
  });
}

const services = [
  {
    id: "standard",
    title: "Standard Routine Cleaning",
    description: "Perfect for recurring weekly, bi-weekly, or monthly upkeep.",
    icon: "home",
    link: "#/services/standard",
  },
  {
    id: "deep",
    title: "Deep Cleaning",
    description: "Ideal for first-time cleans or homes that need extra attention.",
    icon: "sparkles",
    link: "#/services/deep",
  },
  {
    id: "move",
    title: "Move-in/Move-out Cleaning",
    description: "Detailed cleaning for empty homes, apartments, and condos.",
    icon: "truck",
    link: "#/services/move",
  },
  {
    id: "airbnb",
    title: "AirBnB Cleaning",
    description: "Fast and polished turnovers to keep your guests impressed.",
    icon: "building",
    link: "#/services/airbnb",
  },
  {
    id: "office",
    title: "Office Cleaning",
    description: "Professional workspace cleaning for a spotless environment.",
    icon: "briefcase",
    link: "#/services/office",
  },
  {
    id: "construction",
    title: "Post-Construction Cleaning",
    description: "Remove dust, debris, and residue after renovations or builds.",
    icon: "hammer",
    link: "#/services/construction",
  },
  {
    id: "janitorial",
    title: "Professional Janitorial Cleaning",
    description: "Reliable recurring commercial cleaning tailored to your needs.",
    icon: "shield-check",
    link: "#/services/janitorial",
  },
];

const features = [
  {
    title: "Experienced Cleaners",
    description:
      "Our team consists of vetted, trained, and highly experienced professionals who know how to make a home shine.",
    icon: "users",
  },
  {
    title: "Eco-Friendly Products",
    description:
      "We use safe, non-toxic, and environmentally friendly cleaning products that are tough on dirt but safe for your family and pets.",
    icon: "leaf",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Book online in seconds. We offer weekly, bi-weekly, monthly, or one-time cleans that fit around your busy life.",
    icon: "calendar-clock",
  },
  {
    title: "100% Satisfaction Guarantee",
    description:
      "If you are not completely satisfied with our service, let us know within 24 hours and we will re-clean for free.",
    icon: "heart-handshake",
  },
];

const steps = [
  {
    number: "01",
    title: "Book Online",
    description:
      "Select your service, choose a date and time, and get instant pricing. It takes less than 60 seconds.",
    icon: "calendar",
  },
  {
    number: "02",
    title: "We Clean",
    description:
      "Our fully equipped, professional cleaners arrive on time and make your home sparkle from top to bottom.",
    icon: "sparkles",
  },
  {
    number: "03",
    title: "Enjoy Your Home",
    description:
      "Come back to a beautifully clean, fresh-smelling home and spend your free time doing what you love.",
    icon: "house",
  },
];

const testimonials = [
  {
    name: "Sarah Jenkins",
    location: "Santa Monica",
    text: "Angel City Maid did an amazing job. My home has never looked better! The team was punctual, professional, and paid attention to every little detail.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    location: "Pasadena",
    text: "I use them for my Airbnb properties and they are lifesavers. Always reliable, and the places look spotless for every new guest. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    location: "Los Angeles",
    text: "Booking was incredibly easy, and the cleaners were so friendly. They managed to get stains out of my carpet I thought were permanent. Worth every penny.",
    rating: 5,
  },
  {
    name: "David Thompson",
    location: "Burbank",
    text: "Moved into a new house that needed a serious deep clean. The team spent 6 hours making it perfect. It smelled so fresh when we finally moved our stuff in.",
    rating: 5,
  },
  {
    name: "Jessica Walsh",
    location: "Glendale",
    text: "I love coming home on Thursdays after Angel City Maid has been here. It is the best feeling in the world. Consistent quality every single time.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "How do I book a cleaning?",
    answer:
      "Appointments can be scheduled online, by phone, or by email. All bookings are subject to availability and confirmation.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing is based on the size, layout, condition of the property, and the type of cleaning requested. Final pricing may be adjusted if the home condition differs significantly from the original description.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We kindly request at least 24 hours' notice for cancellations or changes. Cancellations made within 24 hours may incur a fee of up to 50% of the scheduled service. Same-day cancellations or missed appointments may be charged at full service value.",
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer:
      "No. We provide all necessary professional-grade cleaning supplies and equipment. Eco-friendly or hypoallergenic products are also available upon request.",
  },
  {
    question: "What if I am not satisfied with the cleaning?",
    answer:
      "Your satisfaction matters to us. If you are not fully satisfied, please notify us within 24 hours of service and we will gladly return to address any missed areas at no additional cost.",
  },
  {
    question: "Are there any cleaning limitations?",
    answer:
      "Yes. We do not move heavy furniture, handle hazardous materials such as biohazards or severe mold, and excessive clutter may limit the areas we can clean effectively.",
  },
];

const cities = [
  "Los Angeles",
  "West Hollywood",
  "Pasadena",
  "Santa Monica",
  "Burbank",
  "Beverly Hills",
  "Glendale",
  "Studio City",
  "Culver City",
  "Malibu",
  "Venice",
  "Marina Del Rey",
  "Manhattan Beach",
  "Redondo Beach",
  "North Hollywood",
];

const differences = [
  {
    icon: "user-check",
    title: "Trusted Team",
    paragraphs: [
      "Our cleaners are highly trained and carefully selected to ensure your home receives exceptional care and a consistently high-quality clean. For your peace of mind and safety, all team members undergo background checks before joining our team.",
    ],
  },
  {
    icon: "tag",
    title: "True Flat Rate",
    paragraphs: [
      "The price you see is the price you pay. As long as the information provided about your home and cleaning needs is accurate, there will be no unexpected charges on your cleaning day. Enjoy transparent, straightforward pricing with confidence.",
    ],
  },
  {
    icon: "spray-can",
    title: "Supplies Included",
    paragraphs: [
      "We bring everything needed to deliver an exceptional clean. Our team uses high-quality professional tools and supplies, with eco-friendly cleaning products available upon request. We also use a color-coded cloth system designed to help prevent cross-contamination and maintain the highest standards of cleanliness throughout your home.",
    ],
  },
  {
    icon: "shield-check",
    title: "Fully Insured",
    paragraphs: [
      "At Angel City Maid, the safety and security of your home and the well-being of our employees are among our highest priorities. That’s why we are fully insured with both General Liability Insurance and Workers’ Compensation Insurance, as required by California law.",
      "You can have peace of mind knowing that from the moment our professional cleaners step into your home, your property is treated with the utmost care, respect, and professionalism. Our team is committed to providing reliable, careful, and high-quality service you can trust.",
    ],
  },
];

const logo = document.getElementById("logoLink");

logo?.addEventListener("click", (e) => {
  e.preventDefault();

  closeMobileMenu();
  window.location.hash = "/";
  window.scrollTo({ top: 0, behavior: "smooth" });

  setTimeout(() => {
    renderRoute();
    updateLogo();
  }, 0);
});
// Photos live in img/<folder>/<folder>-01.jpg, -02.jpg, ...
// servicePhotos(folder, [2, 5]) returns those numbers;
// servicePhotos(folder, count, skip) returns 1..count minus the ones in skip
function servicePhotos(folder, countOrNumbers, skip = []) {
  const numbers = Array.isArray(countOrNumbers)
    ? countOrNumbers
    : Array.from({ length: countOrNumbers }, (_, i) => i + 1).filter((n) => !skip.includes(n));

  return numbers.map((n) => `img/${folder}/${folder}-${String(n).padStart(2, "0")}.jpg`);
}

const detailedServices = [
  {
    id: "standard",
    title: "Standard Routine Cleaning",
    description: "Our standard routine cleaning service is ideal for maintaining a clean, healthy, and welcoming home. Perfect for recurring weekly, bi-weekly, or monthly service.",
    image:
              "img/Table.jpg",
    time: "2 - 4 hours",
    includes: [
      "Dusting all accessible surfaces",
      "Vacuuming carpets and rugs",
      "Mopping hard floors",
      "Cleaning kitchen counters and sink",
      "Cleaning bathroom sinks, toilets, tubs, and showers",
      "Emptying trash bins",
      "General tidying and straightening",
    ],
  },
  {
    id: "deep",
    title: "Deep Cleaning (Most Popular)",
    description: "A more thorough top-to-bottom cleaning service for homes that need extra attention, seasonal resets, or first-time professional service.",
    images: [
      "img/Stairs.png",
      "img/cleaningMirrorBathRm.png"
    ],
    time: "4 - 8 hours",
    includes: [
      "Everything in Standard Routine Cleaning",
      "Detailed dusting of baseboards, doors, and frames",
      "Cleaning window sills and ledges",
      "Extra attention to bathrooms and kitchen buildup",
      "Wiping cabinet exteriors",
      "Cleaning light fixtures and ceiling fans",
      "Detailed floor and surface care",
    ],
  },
  {
    id: "move",
  title: "Move-in/Move-out Cleaning",
  description:
    "Whether you’re preparing a home for new beginnings or leaving it spotless for the next resident, our move-in/move-out cleaning service ensures every space is fresh, sanitized, and ready. We focus on the details that matter most during transitions, helping take one more thing off your checklist during a busy move.",
    images: servicePhotos("move-in-out", [6, 2]),
    gallery: servicePhotos("move-in-out", 10, [6, 2]),
  time: "5 - 10 hours",
  includes: [
    "Full Property Cleaning",
    "Dusting all surfaces, baseboards, and fixtures",
    "Vacuuming carpets and rugs, mopping all floors",
    "Removing trash and debris",
    "Kitchen Cleaning",
    "Cleaning countertops, cabinets, backsplash, and sinks",
    "Wiping down exterior appliances",
    "Cleaning inside oven and fridge (optional add-on if applicable)",
    "Bathroom Cleaning & Sanitizing",
    "Disinfecting toilets, tubs, showers, and sinks",
    "Cleaning mirrors, fixtures, and surfaces",
    "Bedroom & Living Area Reset",
    "Cleaning closets, shelves, and accessible interior spaces",
    "Wiping doors, handles, and light switches",
    "Interior Window & Glass Cleaning",
    "Removing smudges from mirrors, windows, and glass doors",
    "Final Touch & Inspection",
    "Checking that the space is clean, refreshed, and move-ready",
    ],
  },
  {
    id: "office",
    title: "Office Cleaning",
    description:
      "Our office cleaning services are designed to keep your workspace spotless, organized, and welcoming every day. We specialize in reliable, detail-oriented cleaning tailored to your business needs. From daily maintenance to deep cleaning, our trained professionals use high-quality products and proven techniques to ensure every corner of your office shines.",
    images: servicePhotos("office", [2, 3]),
    gallery: servicePhotos("office", 8, [2, 3]),
    time: "",
    includes: [
      "General Cleaning",
      "Dusting desks, surfaces, and office furniture",
      "Emptying trash and recycling bins",
      "Vacuuming carpets and mopping floors",
      "Restroom Cleaning & Sanitizing",
      "Cleaning and disinfecting toilets, sinks, and fixtures",
      "Restocking paper products and soap",
      "Floor cleaning and odor control",
      "Kitchen & Breakroom Cleaning",
      "Cleaning countertops, tables, and sinks",
      "Wiping down appliances (microwaves, refrigerators, etc.)",
      "Trash removal and floor care",
      "High-Touch Surface Disinfection",
      "Door handles, light switches, keyboards, and shared equipment",
      "Regular sanitization to reduce germs and bacteria",
      "Glass & Window Cleaning (Interior)",
      "Cleaning interior windows and glass partitions",
      "Removing smudges and fingerprints",
      "Floor Care",
      "Sweeping, mopping, and vacuuming",
      "Optional deep cleaning (carpet shampoo, floor polishing)",
      "Customized Cleaning Plans",
      "Daily, weekly, or monthly service options",
      "Tailored solutions based on your office size and needs",
    ],
  },
  {
    id: "airbnb",
    title: "AirBnB Cleaning",
    description:
      "Elevate your guest experience with our luxury Airbnb cleaning services. We deliver immaculate, hotel-quality results with meticulous attention to every detail—from pristine linens to perfectly styled spaces. Designed for hosts who expect excellence, our reliable and discreet service ensures your property is always flawless, inviting, and five-star ready.",
    images: servicePhotos("airbnb", [13, 15]),
    gallery: servicePhotos("airbnb", 18, [13, 15]),
    time: "",
    includes: [
      "Full Property Cleaning",
      "Dusting all surfaces, furniture, and décor",
      "Vacuuming carpets and rugs, mopping floors",
      "Removing trash and replacing liners",
      "Bedroom Reset",
      "Changing and making beds with fresh linens",
      "Fluffing pillows and staging the space",
      "Checking for guest belongings",
      "Bathroom Cleaning & Sanitizing",
      "Disinfecting toilets, showers, tubs, and sinks",
      "Cleaning mirrors and fixtures",
      "Restocking essentials (toilet paper, toiletries if provided)",
      "Kitchen Cleaning",
      "Cleaning countertops, cabinets, and backsplash",
      "Washing dishes or loading dishwasher",
      "Wiping down appliances (microwave, fridge, stove)",
      "High-Touch Surface Disinfection",
      "Door handles, remotes, switches, and frequently used items",
      "Sanitizing to maintain a hygienic environment",
      "Interior Window & Glass Cleaning",
      "Removing smudges from mirrors, glass doors, and windows",
      "Turnover Inspection",
      "Checking for damages or missing items",
      "Reporting issues promptly",
      "Ensuring everything is in place for the next guest",
      "Restocking Supplies (Optional)",
      "Toiletries, paper goods, and cleaning essentials",
      "Replenishing guest welcome items",
      "Laundry Service (Optional)",
      "Washing, drying, and folding linens and towels",
      "Replacing with fresh sets",
      "Staging & Final Touches",
      "Arranging furniture and décor neatly",
      "Creating a clean, inviting, hotel-like presentation",
    ],
  },
  {
    id: "construction",
    title: "Post-Construction Cleaning",
    description:
      "Transform your newly built or renovated space into a flawless, move-in-ready environment. Our post-construction cleaning services deliver meticulous, detail-driven results—removing dust, debris, and residue to reveal a pristine finish. With a focus on precision and excellence, we ensure every surface is polished to perfection, leaving your space clean, refined, and ready to impress.",
    images: servicePhotos("post-construction", [2, 26]),
    gallery: servicePhotos("post-construction", 26, [2, 26]),
    time: "",
    includes: [
      "Detailed Dust Removal",
      "Elimination of fine dust from all surfaces, including walls, ceilings, baseboards, and fixtures",
      "Careful cleaning of vents, light fixtures, and hard-to-reach areas",
      "Surface Cleaning & Polishing",
      "Wiping and polishing of countertops, cabinets, and built-ins",
      "Removing construction residue, smudges, and adhesive marks",
      "Floor Care",
      "Vacuuming, sweeping, and mopping all flooring surfaces",
      "Deep cleaning to remove dust, debris, and buildup",
      "Window & Glass Cleaning",
      "Interior window, frame, and sill cleaning",
      "Removal of stickers, paint splatter, and construction residue",
      "Kitchen & Bathroom Detailing",
      "Deep cleaning and sanitizing of sinks, faucets, appliances, and fixtures",
      "Polishing surfaces to a spotless, showroom-quality finish",
      "Debris & Trash Removal",
      "Collection and removal of leftover construction debris and materials",
      "Leaving the space clean, safe, and presentable",
      "Final Touch & Inspection",
      "Thorough walkthrough to ensure every detail meets our high standards",
      "Preparing the space for immediate use, staging, or handover",
    ],
  },
  {
    id: "janitorial",
    title: "Professional Janitorial Cleaning",
    description:
      "Maintain a pristine, polished workspace with our premium janitorial cleaning services. We provide consistent, detail-oriented care designed to uphold the highest standards of cleanliness and professionalism. With a focus on reliability, discretion, and excellence, our team ensures your environment remains spotless, healthy, and always ready to impress.",
    images: [
      "img/KitchenWhite.jpg"
    ],
    time: "",
    includes: [
      "Daily & Routine Cleaning",
      "Dusting surfaces, furniture, and work areas",
      "Emptying trash and recycling bins",
      "General tidying and upkeep",
      "Restroom Cleaning & Sanitization",
      "Thorough disinfection of toilets, sinks, and fixtures",
      "Restocking paper products and soap",
      "Odor control and floor cleaning",
      "Floor Care",
      "Sweeping, vacuuming, and mopping",
      "Detailed care for all flooring types",
      "Optional polishing and deep cleaning services",
      "Breakroom & Kitchen Cleaning",
      "Cleaning countertops, tables, and sinks",
      "Wiping down appliances and cabinets",
      "Maintaining a clean, hygienic shared space",
      "High-Touch Surface Disinfection",
      "Door handles, light switches, and shared equipment",
      "Routine sanitization to promote a healthy environment",
      "Glass & Surface Detailing",
      "Interior glass, mirrors, and partitions",
      "Smudge-free, polished finishes",
      "Supply Management (Optional)",
      "Monitoring and restocking essential supplies",
      "Ensuring your facility remains fully equipped",
      "Customized Cleaning Plans",
      "Flexible scheduling (daily, weekly, or custom)",
      "Services tailored to your business size and requirements",
    ],
  },
];

const plans = [
  {
    name: "Basic Cleaning",
    priceRange: "$155 - $255",
    description: "",
    features: [],
    popular: false,
  },
  {
    name: "Deep Cleaning (Most Popular)",
    priceRange: "$220 - $375",
    description: "",
    features: [],
    popular: false,
  },
  {
    name: "Move-Out Cleaning",
    priceRange: "$285 - $455",
    description: "",
    features: [],
    popular: false,
  },
];

const addons = [
  { name: "Inside Oven", price: "+$30" },
  { name: "Inside Fridge", price: "+$25" },
  { name: "Interior Windows", price: "+$40 (10 per window)" },
  { name: "Laundry (per load)", price: "+$20" },
  { name: "Pet Hair Removal", price: "+$35" },
  { name: "Patio Sweep", price: "+$20" },
];

function getCurrentPath() {
  const hash = window.location.hash || "#/";
  return hash.replace("#", "") || "/";
}

function updateLogo() {
  const logoImg = document.getElementById("siteLogo");
  if (!logoImg) return;

  const isHome = getCurrentPath() === "/";
  const isScrolled = window.scrollY > 20;

  if (isHome && !isScrolled) {
    // homepage top over purple hero
    logoImg.src = "img/ANGEL CITY MAIDS Logo-06.png"; 
  } else {
    // scrolled navbar or inner pages
    logoImg.src = "img/ANGEL CITY MAIDS Logo-05.png";
  }
}

function initRouter() {
  window.addEventListener("hashchange", renderRoute);
  renderRoute();
}

function renderRoute() {
  const path = getCurrentPath();
  const app = document.getElementById("app");

  let html = "";

  if (path.startsWith("/services/")) {
    const serviceId = path.split("/")[2];
    html = renderSingleServicePage(serviceId);
  } else {
    const render = routes[path] || renderHomePage;
    html = render();
  }

  app.innerHTML = html;

  updateNavState(path.startsWith("/services/") ? "/services" : path);
  updateLogo();
  initPageFeatures(path);
  window.scrollTo(0, 0);

  if (window.lucide) {
    lucide.createIcons();
  }

  trackPageView(path);
}

function renderSingleServicePage(serviceId) {
  const service = detailedServices.find((s) => s.id === serviceId);

  if (!service) {
    return `
      <main style="padding-top: 6rem;">
        <section class="section">
          <div class="container text-center">
            <h1>Service Not Found</h1>
            <p>The service you are looking for does not exist.</p>
            <a href="#/services" class="btn btn-primary">Back to Services</a>
          </div>
        </section>
      </main>
    `;
  }

  const images = service.images || (service.image ? [service.image] : []);

  return `
    <main style="padding-top: 6rem;">
      <section class="page-hero light">
        <div class="container text-center reveal">
          <h1>${service.title}</h1>
          <p class="section-subtitle">
            ${service.description}
          </p>
        </div>
      </section>

      <section class="section section-lg">
        <div class="container">
          <div class="grid-2-1" style="align-items: start;">
            <div class="reveal-left">
              ${images.length ? `
                <div class="service-image-grid ${images.length > 1 ? "double" : "single"}">
                  ${images.map(img => `<img src="${img}" alt="${service.title}" data-lightbox />`).join("")}
                </div>
              ` : ""}
            </div>

            <div class="reveal-right">
              ${service.time ? `
                <div class="service-time">
                  <i data-lucide="clock"></i>
                  <span>${service.time}</span>
                </div>
              ` : ""}

              <h2 class="section-title" style="font-size: 2.2rem;">What's Included</h2>

              <ul class="feature-list">
                ${service.includes.map(item => `
                  <li>
                    <i data-lucide="check-circle-2"></i>
                    <span>${item}</span>
                  </li>
                `).join("")}
              </ul>

              <div style="display:flex; gap:1rem; flex-wrap:wrap; margin-top:2rem;">
                <a href="#/booking" class="btn btn-primary">Book This Service</a>
                <a href="#/services" class="btn btn-light">Back to All Services</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      ${service.gallery?.length ? `
        <section class="section section-muted">
          <div class="container">
            <div class="text-center reveal">
              <span class="section-label">Gallery</span>
              <h2 class="section-title">Our Recent Work</h2>
            </div>

            <div class="service-gallery">
              ${service.gallery.map(img => `
                <img src="${img}" alt="${service.title} by Angel City Maid" loading="lazy" data-lightbox />
              `).join("")}
            </div>
          </div>
        </section>
      ` : ""}

      ${renderCTASection()}
    </main>
  `;
}



function updateNavState(path) {
  document.querySelectorAll("[data-route]").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("data-route") === path);
  });

  const navbar = document.getElementById("navbar");
  if (path === "/") {
    navbar.classList.remove("not-home");
  } else {
    navbar.classList.add("not-home");
  }

  closeMobileMenu();
  handleNavbarScroll();
}

function initPageFeatures(path) {
  initRevealAnimations();
  initInstagramLinks();
  initFAQ();
  initTestimonials();
  initContactForm();
  initQuoteForm();
  initLightbox();
}

function initLightbox() {
  // Close it if the visitor navigated (e.g. back button) while it was open
  if (document.getElementById("lightbox")) closeLightbox();

  const photos = [...document.querySelectorAll("#app img[data-lightbox]")];
  if (!photos.length) return;

  let lightbox = document.getElementById("lightbox");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <button class="lightbox-nav prev" aria-label="Previous photo">&#8249;</button>
      <img alt="" />
      <button class="lightbox-nav next" aria-label="Next photo">&#8250;</button>
    `;
    document.body.appendChild(lightbox);

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.classList.contains("lightbox-close")) closeLightbox();
      if (e.target.classList.contains("prev")) showLightboxPhoto(-1);
      if (e.target.classList.contains("next")) showLightboxPhoto(1);
    });

    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showLightboxPhoto(-1);
      if (e.key === "ArrowRight") showLightboxPhoto(1);
    });
  }

  photos.forEach((photo, index) => {
    photo.addEventListener("click", () => {
      lightbox.photos = photos;
      lightbox.index = index;
      showLightboxPhoto(0);
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });
}

function showLightboxPhoto(step) {
  const lightbox = document.getElementById("lightbox");
  const count = lightbox.photos.length;
  lightbox.index = (lightbox.index + step + count) % count;
  lightbox.querySelector("img").src = lightbox.photos[lightbox.index].src;
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

// BookingKoala's embed.js only resizes iframes present at page load,
// so attach its resizer to the quote iframe each time the page renders
function initQuoteForm() {
  const iframe = document.querySelector(".quote-iframe");
  if (!iframe || typeof window.iFrameResize !== "function") return;

  window.iFrameResize(
    { checkOrigin: false, heightCalculationMethod: "bodyOffset" },
    iframe
  );
}

function initRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    },
    { threshold: 0.14 }
  );

  document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => {
    observer.observe(el);
  });
}

function initFAQ() {
  const items = document.querySelectorAll(".faq-item");
  if (!items.length) return;

  items.forEach((item, index) => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      items.forEach((i) => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });

    if (index === 0) item.classList.add("open");
  });
}

let testimonialIndex = 0;
let testimonialTimer = null;

function initTestimonials() {
  const track = document.querySelector(".testimonial-track");
  if (!track) return;

  const dotsWrap = document.querySelector(".carousel-dots");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  function updateCarousel() {
    track.style.transform = `translateX(-${testimonialIndex * 100}%)`;

    if (dotsWrap) {
      dotsWrap.querySelectorAll("button").forEach((dot, i) => {
        dot.classList.toggle("active", i === testimonialIndex);
      });
    }
  }

  function next() {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    updateCarousel();
  }

  function prev() {
    testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateCarousel();
  }

  prevBtn?.addEventListener("click", prev);
  nextBtn?.addEventListener("click", next);

  dotsWrap?.querySelectorAll("button").forEach((dot, i) => {
    dot.addEventListener("click", () => {
      testimonialIndex = i;
      updateCarousel();
      restartTestimonialTimer();
    });
  });

  function restartTestimonialTimer() {
    if (testimonialTimer) clearInterval(testimonialTimer);
    testimonialTimer = setInterval(next, 5000);
  }

  updateCarousel();
  restartTestimonialTimer();
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type='submit']");
    const success = document.getElementById("contactSuccess");
    const formWrap = document.getElementById("contactFormWrap");

    btn.disabled = true;
    btn.textContent = "Sending...";

    setTimeout(() => {
      formWrap.style.display = "none";
      success.style.display = "block";
    }, 1500);
  });

  const resetBtn = document.getElementById("sendAnotherBtn");
  resetBtn?.addEventListener("click", () => {
    document.getElementById("contactSuccess").style.display = "none";
    document.getElementById("contactFormWrap").style.display = "block";
    form.reset();
    const btn = form.querySelector("button[type='submit']");
    btn.disabled = false;
    btn.textContent = "Request a Quote";
  });
}

function initNavbar() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const mobileCloseBtn = document.getElementById("mobileCloseBtn");

  mobileMenuBtn?.addEventListener("click", openMobileMenu);
  mobileCloseBtn?.addEventListener("click", closeMobileMenu);
  mobileOverlay?.addEventListener("click", (e) => {
    if (e.target === mobileOverlay) closeMobileMenu();
  });

  window.addEventListener("scroll", handleNavbarScroll);
  handleNavbarScroll();
}

function handleNavbarScroll() {
  const navbar = document.getElementById("navbar");
  const isHome = getCurrentPath() === "/";
  const scrolled = window.scrollY > 20;

  navbar.classList.toggle("scrolled", scrolled);

  if (!isHome) {
    navbar.classList.add("not-home");
  } else {
    navbar.classList.remove("not-home");
  }

  updateLogo();
}

function openMobileMenu() {
  document.getElementById("mobileOverlay")?.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  document.getElementById("mobileOverlay")?.classList.remove("open");
  document.body.style.overflow = "";
}

function initStickyBookButton() {
  const wrap = document.getElementById("stickyBookWrap");
  function handleSticky() {
    if (window.innerWidth > 768) {
      wrap.classList.remove("show");
      return;
    }
    wrap.classList.toggle("show", window.scrollY > 500);
  }

  window.addEventListener("scroll", handleSticky);
  window.addEventListener("resize", handleSticky);
  handleSticky();
}

function renderCTASection() {
  return `
    <section class="cta-section">
      <div class="cta-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
      <div class="blob one"></div>
      <div class="blob two"></div>
      <div class="container cta-inner reveal">
        <p class="cta-text">
        </p>
        <a href="#/booking" class="btn btn-primary">Book Your Cleaning Today</a>
      </div>
    </section>
  `;
}

// Small version links to the About page; large version sits in the About page section
function renderGoogleBadge(large = false) {
  const content = `
    <span class="google-badge-icon"><i data-lucide="check"></i></span>
    <span class="google-badge-text">
      <strong>Google Guaranteed</strong>
      <small>Screened &amp; verified by Google</small>
    </span>
  `;

  return large
    ? `<div class="google-badge google-badge-lg">${content}</div>`
    : `<a href="#/about" class="google-badge" aria-label="Google Guaranteed - learn more">${content}</a>`;
}

function renderHeroSection() {
  return `
    <section class="hero">
      <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80" alt="Clean, modern living room" />
      </div>
      <div class="hero-overlay"></div>

      <div class="container">
        <div class="hero-content reveal">

          <div class="hero-badges">
            <span class="hero-badge">Premium Cleaning Services in LA</span>
            ${renderGoogleBadge()}
          </div>

          <h1 class="hero-title">
            Professional House Cleaning You Can <span>Trust</span>
          </h1>

          <p class="hero-text">
            Premium, reliable, and high-quality home cleaning services tailored to your busy lifestyle.
            Experience the joy of a spotless home.
          </p>

          <div class="hero-actions">
            <a href="#/booking" class="btn btn-primary">Book a Cleaning</a>
            <a href="#/quote" class="btn btn-secondary">Get a Free Quote</a>
          </div>

          <div class="hero-trust">
              <div class="trust-item">
                <div class="trust-icon"><i data-lucide="sparkles"></i></div>
                <span>Woman-Owned Business</span>
              </div>
              <div class="trust-item">
                <div class="trust-icon"><i data-lucide="shield-check"></i></div>
                <span>Fully Insured</span>
              </div>
              <div class="trust-item">
                <div class="trust-icon"><i data-lucide="award"></i></div>
                <span>Background Checked</span>
              </div>
              <div class="trust-item">
                <div class="trust-icon"><i data-lucide="headset"></i></div>
                <span>24/7 Customer Support</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderServicesSection() {
  const featuredServices = services.slice(0, 3);

  return `
    <section class="section section-muted home-services">
      <div class="container">
        <div class="text-center reveal">
          <span class="section-label">What We Do</span>
          <h2 class="section-title">Our Cleaning Services</h2>
          <p class="section-subtitle">
            We offer a comprehensive range of cleaning services tailored to meet your specific needs.
          </p>
        </div>

        <div class="services-clean-grid" style="margin-top: 3rem;">
          ${featuredServices.map((service) => `
            <article class="service-clean-card reveal">
              <div class="service-clean-icon">
                <i data-lucide="${service.icon}"></i>
              </div>

              <h3 class="service-clean-title">${service.title}</h3>

              <p class="service-clean-text">
                ${service.description}
              </p>

              <a href="${service.link}" class="service-clean-link">
                Learn More
              </a>
            </article>
          `).join("")}
        </div>

        <div class="text-center reveal" style="margin-top: 2rem;">
          <a href="#/services" class="btn btn-primary">View All Services</a>
        </div>
      </div>
    </section>
  `;
}

function renderWhyChooseUs() {
  return `
    <section class="section section-brand">
      <div class="container">
        <div class="text-center reveal">
          <span class="section-label">The Angel City Difference</span>
          <h2 class="section-title">Why Choose Angel City Maid?</h2>
          <p class="section-subtitle">
            We don't just clean houses; we care for homes. Here is why thousands of LA residents trust us.
          </p>
        </div>

        <div class="grid-2" style="margin-top: 3rem;">
          ${features.map((feature) => `
            <div class="feature-item reveal">
              <div class="feature-icon">
                <i data-lucide="${feature.icon}"></i>
              </div>
              <div>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderHowItWorks() {
  return `
    <section class="section">
      <div class="container">
        <div class="text-center reveal">
          <span class="section-label">Simple Process</span>
          <h2 class="section-title">How It Works</h2>
          <p class="section-subtitle">Getting a spotless home has never been easier.</p>
        </div>

        <div class="steps-wrap" style="margin-top: 4rem;">
          <div class="steps-line"></div>
          <div class="grid-3">
            ${steps.map((step) => `
              <div class="step-card reveal">
                <div class="step-circle">
                  <div class="step-number">${step.number}</div>
                  <i data-lucide="${step.icon}"></i>
                </div>
                <h3>${step.title}</h3>
                <p>${step.description}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderTestimonials() {
  return `
    <section class="section section-muted">
      <div class="container">
        <div class="text-center reveal">
          <span class="section-label">Reviews</span>
          <h2 class="section-title">What Our Clients Say</h2>
        </div>

        <div class="testimonial-wrap reveal" style="margin-top: 3rem;">
          <div class="testimonial-viewport">
            <div class="testimonial-track">
              ${testimonials.map((testimonial) => `
                <div class="testimonial-slide">
                  <div class="testimonial-card">
                    <div class="quote-mark">"</div>
                    <div class="stars">
                      ${Array.from({ length: testimonial.rating }).map(() => `<i data-lucide="star"></i>`).join("")}
                    </div>
                    <p class="testimonial-text">"${testimonial.text}"</p>
                    <div>
                      <h4>${testimonial.name}</h4>
                      <p class="testimonial-location">${testimonial.location}</p>
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <button class="carousel-btn prev" aria-label="Previous testimonial">
            <i data-lucide="chevron-left"></i>
          </button>
          <button class="carousel-btn next" aria-label="Next testimonial">
            <i data-lucide="chevron-right"></i>
          </button>

          <div class="carousel-dots">
            ${testimonials.map((_, i) => `
              <button class="${i === 0 ? "active" : ""}" aria-label="Go to slide ${i + 1}"></button>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderServiceAreas() {
  return `
    <section class="section section-brand">
      <div class="container service-areas-wrap">
        <div class="reveal-left">
          <span class="section-label">Locations</span>
          <h2 class="section-title">Serving the Greater Los Angeles Area</h2>
          <p class="section-subtitle" style="margin: 0 0 2rem 0; max-width: none; text-align: left;">
            We provide top-tier residential and commercial cleaning services across LA county.
            Don't see your city listed? Contact us to see if we service your neighborhood.
          </p>

          <div class="city-grid">
            ${cities.map((city) => `
              <div class="city-pill">
                <i data-lucide="map-pin"></i>
                <span>${city}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="reveal-scale">
          <div class="map-card">
            <div class="map-circle">
              <div class="map-pattern"></div>
              <div class="map-pin pin1"><i data-lucide="map-pin"></i></div>
              <div class="map-pin pin2"><i data-lucide="map-pin"></i></div>
              <div class="map-pin pin3"><i data-lucide="map-pin"></i></div>
              <div class="map-pin pin4"><i data-lucide="map-pin"></i></div>
              <div class="map-label">Los Angeles County</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFAQ() {
  return `
    <section class="section">
      <div class="container faq-wrap">
        <div class="text-center reveal">
          <span class="section-label">Got Questions?</span>
          <h2 class="section-title">Frequently Asked Questions</h2>
        </div>

        <div style="margin-top: 2.5rem;">
          ${faqs.map((faq) => `
            <div class="faq-item reveal">
              <button class="faq-question" aria-expanded="false">
                <span>${faq.question}</span>
                <i data-lucide="chevron-down" class="faq-icon"></i>
              </button>
              <div class="faq-answer">
                ${faq.answer}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

const instagramIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`;

function renderInstagramSection() {
  const previews = [
    "img/post-construction/post-construction-26.jpg",
    "img/office/office-03.jpg",
    "img/post-construction/post-construction-02.jpg",
    "img/airbnb/airbnb-13.jpg",
  ];

  return `
    <section class="section instagram-section">
      <div class="container instagram-wrap">
        <div class="instagram-text reveal-left">
          <div class="instagram-badge">${instagramIcon}</div>
          <h2 class="section-title">Follow Us on Instagram</h2>
          <p>
            See our latest work from homes and offices across Los Angeles.
          </p>
          <a href="#" data-instagram target="_blank" rel="noopener" class="btn btn-primary instagram-btn">
            ${instagramIcon}
            <span>Follow Us on Instagram</span>
          </a>
        </div>

        <a href="#" data-instagram target="_blank" rel="noopener" class="instagram-grid reveal-right" aria-label="Open our Instagram">
          ${previews.map((img) => `<img src="${img}" alt="Angel City Maid cleaning work" loading="lazy" />`).join("")}
        </a>
      </div>
    </section>
  `;
}

function initInstagramLinks() {
  document.querySelectorAll("[data-instagram]").forEach((link) => {
    link.href = INSTAGRAM_URL;
  });
}

function renderHomePage() {
  return `
    <main>
      ${renderHeroSection()}
      ${renderServicesSection()}
      ${renderWhyChooseUs()}
      ${renderHowItWorks()}
      ${renderTestimonials()}
      ${renderInstagramSection()}
      ${renderServiceAreas()}
      ${renderFAQ()}
      ${renderCTASection()}
    </main>
  `;
}

function renderAboutPage() {
  return `
    <main style="padding-top: 6rem;">
      <section class="page-hero navy">
        <div class="hero-bg-soft">
          <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&q=80" alt="Cleaning supplies" />
        </div>
        <div class="container text-center reveal">
          <h1>About Angel City Maid</h1>
          <p>Bringing sparkle, trust, and peace of mind to Los Angeles homes since 2018.</p>
        </div>
      </section>

      <section class="section section-lg">
        <div class="container story-wrap">
          <div class="text reveal-left">
            <h2 class="section-title">Our Story</h2>
            <p>
              Angel City Maid was founded on a simple premise: finding a reliable, high-quality house cleaner shouldn't be a chore.
              We saw a gap in the Los Angeles market for a cleaning service that combined modern convenience with old-fashioned attention to detail.
            </p>
            <p>
              What started as a small team of three dedicated cleaners has grown into one of LA's most trusted premium home service companies.
              We've cleaned thousands of homes, but our core values remain exactly the same.
            </p>
            <p>
              We believe that a clean home is a happy home. It reduces stress, improves health, and gives you back your most valuable asset: time.
            </p>
          </div>

          <div class="reveal-right">
            <img src="img/cleaningKitchen.png" alt="About us" />
          </div>
        </div>
      </section>

      <section class="section section-lg ceo-section">
        <div class="container ceo-wrap">
          <div class="ceo-photo reveal-left">
            <img src="img/ceo.webp" alt="Victoria, Founder and CEO of Angel City Maid" loading="lazy" />
          </div>

          <div class="ceo-letter reveal-right">
            <span class="section-label">A Message from Our CEO</span>
            <h2 class="section-title">Welcome to Angel City Maid!</h2>
            <p>
              What started as a one-person cleaning service has grown into a dedicated team of four proudly serving residents, commercial businesses, and apartment communities throughout Los Angeles. Our journey has been built one client, one home, and one relationship at a time — with a simple belief that professional cleaning should be more than just making a space look clean. It should create comfort, trust, and peace of mind.
            </p>
            <p>
              As a woman-owned business, I am incredibly proud of how far Angel City Maid has come. We are committed to providing consistent professionalism, dependable service, and quality results while continuously learning and evolving with the cleaning industry.
            </p>
            <p>
              But our commitment goes beyond our customers. We care deeply about the people behind our service. Our team is at the heart of Angel City Maid, and we believe that taking care of our employees, supporting their well-being, and creating a respectful and positive work environment allows us to deliver better service to every customer we serve.
            </p>
            <p>
              We understand that inviting a cleaning team into your home, business, or community requires trust. That is why we focus on professionalism, attention to detail, communication, and accountability in everything we do.
            </p>
            <p>
              As we continue to grow, our goal remains simple: to raise the standard of cleaning service in Los Angeles while building a company our customers and our team can be proud of.
            </p>
            <p>
              Thank you for choosing Angel City Maid and for allowing us to be part of your space.
            </p>

            <div class="ceo-signoff">
              <span>With gratitude,</span>
              <strong class="ceo-name">Victoria</strong>
              <span>Founder &amp; CEO</span>
              <span>Angel City Maid</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-brand">
        <div class="container">
          <div class="mission-box reveal-scale">
            <h2>Our Mission</h2>
            <p>
              "To elevate the standard of living for our clients by providing meticulous, reliable, and trustworthy cleaning services, allowing them to focus on what truly matters in their lives."
            </p>
          </div>
        </div>
      </section>

      <section class="section section-lg">
        <div class="container">
          <div class="text-center reveal">
            <span class="section-label">Why Angel City Maid</span>
            <h2 class="section-title">What Makes Us Different</h2>
          </div>

          <div class="different-grid">
            ${differences.map((item) => `
              <article class="different-card reveal">
                <div class="feature-icon">
                  <i data-lucide="${item.icon}"></i>
                </div>
                <h3>${item.title}</h3>
                ${item.paragraphs.map((text) => `<p>${text}</p>`).join("")}
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="section section-brand">
        <div class="container">
          <div class="guarantee-box reveal-scale">
            ${renderGoogleBadge(true)}
            <div class="guarantee-text">
              <h2>We Are Google Guaranteed</h2>
              <p>
                We are proud to be a Google Guaranteed cleaning company. This designation means our business has completed Google’s required screening and verification process, giving customers added confidence when choosing our services.
              </p>
              <p>
                At Angel City Maid, we are committed to providing dependable, professional, and high-quality cleaning services. Our Google Guaranteed status is another way we demonstrate our commitment to building trust with every customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-lg" style="background: var(--navy-900);">
        <div class="container stats-grid">
          <div class="stat-box reveal">
            <i data-lucide="shield-check"></i>
            <div class="value">6+</div>
            <div class="label">Years of Industry Experience</div>
          </div>
          <div class="stat-box reveal">
            <i data-lucide="home"></i>
            <div class="value">1,000+</div>
            <div class="label">Homes Cleaned</div>
          </div>
          <div class="stat-box reveal">
            <i data-lucide="users"></i>
            <div class="value">100%</div>
            <div class="label">Satisfaction Rate</div>
          </div>
        </div>
      </section>

      ${renderCTASection()}
    </main>
  `;
}

function renderBookingPage() {
  return `
    <main class="booking-page">
      <section class="section section-lg" style="padding-bottom: 0;">
        <div class="container">
          <div class="text-center reveal">
            <h1 class="section-title">Book Your Cleaning</h1>
            <p class="section-subtitle">
              Schedule your cleaning in seconds. Choose your service, date, and time — it's that simple.
            </p>
          </div>
        </div>

        <div class="reveal" style="width: 100%; margin-top: 3rem;">
          <iframe
            class="booking-iframe-full"
            src="https://angelcitymaid.bookingkoala.com/booknow?embed=true"
            title="Angel City Maids Booking Form"
            loading="lazy"
            scrolling="yes">
          </iframe>
        </div>
      </section>
    </main>
  `;
}

function renderQuotePage() {
  return `
    <main class="booking-page">
      <section class="section section-lg">
        <div class="container">
          <div class="text-center reveal">
            <h1 class="section-title">Get a Free Quote</h1>
            <p class="section-subtitle">
              Tell us a little about your home and what you need. We'll get back to you with a personalized quote — no commitment required.
            </p>
          </div>

          <div class="quote-card reveal">
            <iframe
              class="quote-iframe"
              src="https://angelcitymaid.bookingkoala.com/short-form/?sf_id=6aadaf61f48deddb419c902f&language=en"
              title="Angel City Maids Quote Request Form"
              scrolling="auto">
            </iframe>
          </div>

          <p class="booking-fallback-text">
            Ready to schedule now? <a href="#/booking">Book your cleaning online</a> or call us at 213-881-3300.
          </p>
        </div>
      </section>
    </main>
  `;
}

function renderPricingPage() {
  return `
    <main style="padding-top: 6rem;">
      <section class="page-hero light">
        <div class="container text-center reveal">
          <h1>Pricing</h1>
        </div>
      </section>

      <section class="section section-lg">
        <div class="container">
          <div class="pricing-grid">
            ${plans.map((plan) => `
              <div class="price-card reveal">
                <div>
                  <h3>${plan.name}</h3>
                  <div class="price-value">${plan.priceRange}</div>
                </div>
                <a href="#/booking" class="btn btn-primary full">Book Now</a>
              </div>
            `).join("")}
          </div>

          <div class="text-center reveal" style="margin-top: -2rem; margin-bottom: 2rem;">
              <p class="section-subtitle" style="font-size: 0.95rem;">
                Prices may change depending on the number of bedrooms and condition of the state.
              </p>
          </div>

          <div class="text-center reveal">
            <h2 class="section-title">Optional Add-ons</h2>
            <p class="section-subtitle">Customize your cleaning with these extra services.</p>
          </div>

          <div class="addons-grid" style="margin-top: 2rem;">
            ${addons.map((addon) => `
              <div class="addon-card reveal-scale">
                <div class="left">
                  <i data-lucide="plus"></i>
                  <span>${addon.name}</span>
                </div>
                <div class="addon-price">${addon.price}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      ${renderCTASection()}
    </main>
  `;
}

function renderServicesPage() {
  return `
    <main style="padding-top: 9rem;">
      <section class="page-hero light">
        <div class="container text-center reveal">
          <h1>Home Cleaning Service Packages</h1>
          <p class="section-subtitle">
            Explore our range of cleaning packages designed to meet your needs.
            From routine maintenance to deep transformations, we have the perfect solution for every space.
          </p>
        </div>
      </section>

      <section class="section section-lg">
        <div class="container">
          <div class="services-clean-grid">
            ${services.map((service) => `
              <article class="service-clean-card reveal">
                <div class="service-clean-icon">
                  <i data-lucide="${service.icon}"></i>
                </div>

                <h3 class="service-clean-title">${service.title}</h3>

                <p class="service-clean-text">
                  ${service.description}
                </p>

                <a href="${service.link}" class="service-clean-link">
                  Learn More
                </a>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    </main>
  `;
}

function renderHomeSectionsOnlyForContactReuse() {
  return "";
}

function renderHomePageExtras() {
  return "";
}

function initApp() {
  document.getElementById("year").textContent = new Date().getFullYear();
  initNavbar();
  initStickyBookButton();
  initRouter();

  if (window.lucide) {
    lucide.createIcons();
  }
}

document.addEventListener("DOMContentLoaded", initApp);