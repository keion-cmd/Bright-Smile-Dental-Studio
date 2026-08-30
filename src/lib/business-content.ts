import { industryBrands } from "@/lib/industryBrands";
import { insuranceProviders } from "@/data/insurance";

export const businessConfig = {
  // "modal" (default) opens the in-page Supabase-backed BookingModal from every CTA.
  // "external" makes every CTA link out to BOOKING_URL (src/lib/booking.ts) instead.
  bookingMode: "modal" as "modal" | "external",
  name: "Bright Smile Dental Studio",
  shortName: "Bright Smile Dental",
  tagline: "Modern Dentistry, Gentle Care",
  descriptor: "Dental Clinic",
  schemaType: "LocalBusiness",
  address: "88 Katipunan Avenue, Unit 3B",
  city: "Quezon City, Metro Manila",
  phone: "0917 123 4567",
  phoneDigits: "639171234567",
  email: "hello@brightsmiledental.ph",
  hours: "Mon–Sat, 9AM–6PM",
  // pending — leave as-is until Google Business Profile is claimed
  googleReviewUrl: "https://www.google.com/search?q=[BUSINESS_NAME]+reviews",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=88 Katipunan Avenue, Unit 3B, Quezon City, Metro Manila",
  businessHours: [
    { days: "Monday–Friday", hours: "9:00 AM – 6:00 PM" },
    { days: "Saturday", hours: "9:00 AM – 3:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ] as { days: string; hours: string }[],
  socialLinks: [
    { label: "Facebook", href: "https://facebook.com/brightsmiledentalph", placeholder: false },
    { label: "Instagram", href: "https://instagram.com/brightsmile.dental", placeholder: false },
  ] as { label: string; href: string; placeholder: boolean }[],
};

/** Backward-compatible alias — prefer `businessConfig` in new code. */
export const clinic = businessConfig;

// Generalized, repeatable homepage logo-marquee groups (Partners, Insurance, Awards,
// "As Seen In", etc). Add or remove groups freely — a group is shown only when its
// `items` array is non-empty (see LogoMarquee.tsx's empty-array guard).
export type LogoMarqueeGroup = {
  id: string;
  heading: string;
  subheading: string;
  items: { name: string }[];
};

export const logoMarquees: LogoMarqueeGroup[] = [
  {
    id: "partners",
    heading: "Trusted Partners",
    subheading: "Brands and technologies we work with",
    items: industryBrands,
  },
  {
    id: "insurance",
    heading: "Insurance We Accept",
    subheading: "We work with most major HMOs and insurance providers",
    // Derived from insuranceProviders (also used by InsuranceCombobox) — not a
    // separate data source. "Other / Not Listed" is a form placeholder, not a
    // real provider, so it's excluded from the marquee.
    items: insuranceProviders.filter((p) => p.id !== "other").map((p) => ({ name: p.name })),
  },
];

// Per-section visibility toggles for optional homepage/proof/about/team sections. Every key
// defaults to true; set a key to false, or empty its backing data array where applicable, to
// hide that section without deleting code or data.
export const sectionVisibility = {
  trustStats: true,
  whyChooseUs: true,
  meetTheTeam: true,
  howItWorks: true,
  clinicExperience: true,
  reviewsMarquee: true,
  clientStories: true,
  healthResources: true,
  carePlans: true,
  faqTeaser: true,
  proofStories: true,
  proofCareStats: true,
  aboutTeamGrid: true,
  teamProvidersGrid: true,
  providerAreasOfInterest: true,
  relatedArticles: true,
  locationServicesAndHours: true,
};

// Centralized, placeholder-driven section copy. Every routed page pulls its headline and
// subheadline text from here so a clone only has to edit tokens in one place. Add/remove
// nested keys freely if a page gains or loses a section.
export const copy = {
  home: {
    heroHeadline: "Your Brightest Smile Starts Here",
    heroSubheadline: "Modern dental care for the whole family, right in the heart of Quezon City.",
    heroStatValue: "5,000+",
    heroStatCaption: "Patients treated with gentle, modern care",
    heroBadgeText: "Now welcoming new patients",
    trustStatsTitle: "Trusted by families across Quezon City",
    servicesEyebrow: "What We Offer",
    servicesTitle: "Dental Care, Done Right",
    servicesSubtitle: "From routine checkups to full smile makeovers, our team is here for every stage of your dental health.",
    whyUsEyebrow: "Why Bright Smile",
    whyUsTitle: "Gentle Care You Can Trust",
    whyUsSubtitle: "We combine modern technique with an unhurried, patient-first approach.",
    teamEyebrow: "Meet the Team",
    teamTitle: "The Dentists Behind Your Smile",
    teamSubtitle: "Experienced, approachable, and genuinely happy to see you.",
    howItWorksEyebrow: "Getting Started",
    howItWorksTitle: "Your Visit, Step by Step",
    howItWorksSubtitle: "Booking your first appointment is simple — here's what to expect.",
    facilityEyebrow: "Our Clinic",
    facilityTitle: "A Calm, Modern Space to Feel at Ease",
    successStoriesTitle: "Real Stories From Real Patients",
    reviewsTitle: "What Our Patients Say",
    reviewsSubtitle: "Kind words from the families and individuals we've treated.",
    resourcesEyebrow: "Dental Tips",
    resourcesTitle: "From Our Blog",
    resourcesSubtitle: "Simple advice to help you keep your smile healthy between visits.",
    resourceCardLabel: "Read the article",
    carePlansEyebrow: "Membership Plans",
    carePlansTitle: "Simple, Affordable Care Plans",
    faqTeaserEyebrow: "Questions?",
    faqTeaserTitle: "Common Questions, Answered",
    faqTeaserSubtitle: "Can't find what you're looking for? Reach out and we'll help.",
    locationEyebrow: "Find Us",
    locationTitle: "Visit Us in Quezon City",
    finalCtaTitle: "Ready for Your Brightest Smile?",
    finalCtaSubtitle: "Book your visit today and see the Bright Smile difference.",
    leadGenForm: {
      heading: "Book Your Visit",
      subheading: "Tell us a bit about what you need and we'll get back to you shortly.",
      submitButton: "Request an Appointment",
      successMessage: "Thanks! We'll be in touch shortly to confirm your appointment.",
      privacyNote: "We'll only use your information to follow up about your appointment.",
    },
  },
  about: {
    heroEyebrow: "About Us",
    heroTitle: "Dentistry That Feels Different",
    heroSubtitle: "Meet the team dedicated to keeping Quezon City smiling.",
    valuesEyebrow: "Our Values",
    valuesTitle: "What We Stand For",
    valueLabel: "Our Value",
    approachEyebrow: "Our Approach",
    approachParagraph1: "We believe a trip to the dentist shouldn't feel stressful. That's why every visit at Bright Smile starts with a conversation, not a drill.",
    approachParagraph2: "We take the time to explain what we see, walk you through your options, and make sure you always feel in control of your care.",
    staffEyebrow: "Our Team",
    staffTitle: "The People Behind Your Care",
    ctaTitle: "Ready to Meet the Team?",
  },
  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Comprehensive dental care for every member of your family.",
    introText: "From preventive checkups to full smile transformations, explore the care we offer below.",
    ctaTitle: "Ready to Book Your Visit?",
  },
  serviceDetail: {
    benefitsEyebrow: "Benefits",
    processEyebrow: "What to Expect",
    processTitle: "How It Works",
  },
  team: {
    heroEyebrow: "Our Team",
    heroTitle: "Meet Your Dentists",
    heroSubtitle: "Experienced, approachable, and dedicated to your comfort.",
    gridEyebrow: "The Team",
    gridTitle: "Get to Know Us",
    ctaTitle: "Ready to Book With Us?",
  },
  proof: {
    heroEyebrow: "Proof in Practice",
    heroTitle: "Smiles We're Proud Of",
    heroSubtitle: "See why patients across Quezon City trust Bright Smile with their care.",
    statsEyebrow: "By the Numbers",
    statsTitle: "Our Track Record",
    statsCaption: "Years of gentle, dependable dental care.",
    statCardLabel: "Patient Rating",
    storiesEyebrow: "Patient Stories",
    ctaTitle: "Ready to Experience the Difference?",
    reviewsEyebrow: "Reviews",
    reviewsTitleLead: "What Patients Are",
    reviewsTitleAccent: "Saying",
    reviewsBody: "We're grateful for every patient who trusts us with their smile.",
    mapsEyebrow: "Visit Us",
    mapsTitleLead: "Find Us in",
    mapsTitleAccent: "Quezon City",
    mapsBody: "Conveniently located and easy to find — we look forward to seeing you.",
    mapsCardAriaLabel: "Map showing Bright Smile Dental Studio location",
    reviewButtonLabel: "Leave a Review",
    mapsHint: "Tap to get directions",
  },
  faq: {
    heroEyebrow: "FAQ",
    heroTitle: "Common Questions, Answered",
    heroSubtitle: "Everything you need to know before your visit.",
    contactEyebrow: "Still Have Questions?",
    contactTitle: "We're Happy to Help",
    callLabel: "Call Us",
    callDescription: "Speak with our front desk directly.",
    emailLabel: "Email Us",
    emailDescription: "Send us your questions anytime.",
    ctaTitle: "Ready to Book Your Visit?",
  },
  locations: {
    heroEyebrow: "Our Location",
    heroTitle: "Visit Bright Smile Dental Studio",
    heroSubtitle: "Conveniently located in Quezon City.",
    gridEyebrow: "Location",
    gridTitle: "Find Us",
    ctaTitle: "Ready to Book Your Visit?",
  },
  location: {
    heroEyebrow: "Our Clinic",
    heroTitle: "Bright Smile Dental Studio",
    heroSubtitle: "Quezon City, Metro Manila",
    startTitle: "Getting Here",
    directionsEyebrow: "Directions",
    directionsTitle: "How to Find Us",
    landmarkLabel: "Nearby Landmark",
    addressLabel: "Address",
    hoursEyebrow: "Hours",
    hoursTitle: "When We're Open",
    emergencyTitle: "Dental Emergency?",
    referralLabel: "Referral",
    whatToDoLabel: "What to Do",
    afterHoursTitle: "After Hours",
  },
  resources: {
    heroEyebrow: "Resources",
    heroTitle: "Dental Tips & Advice",
    heroSubtitle: "Helpful reads to keep your smile healthy between visits.",
    disclaimerText: "This article is for general information only and isn't a substitute for professional dental advice.",
    gridEyebrow: "From the Blog",
    gridTitle: "Latest Articles",
    ctaTitle: "Have a Question for the Team?",
  },
  articleDetail: {
    bodyEyebrow: "Article",
    disclaimerText: "This article is for general information only and isn't a substitute for professional dental advice.",
    relatedEyebrow: "Keep Reading",
    relatedTitle: "More From the Blog",
    ctaTitle: "Ready to Book Your Visit?",
  },
  newClients: {
    heroEyebrow: "New Patients",
    heroTitle: "Your First Visit, Made Easy",
    heroSubtitle: "Here's everything you need to know before you come in.",
    stepsEyebrow: "Getting Started",
    stepsTitle: "What to Expect",
    bringEyebrow: "Before You Arrive",
    bringTitle: "What to Bring",
    ctaTitle: "Ready to Book Your First Visit?",
  },
  notFound: {
    heroTitle: "Page Not Found",
    heroSubtitle: "Sorry, we couldn't find the page you were looking for.",
    ctaTitle: "Let's Get You Back on Track",
  },
  privacyPolicy: {
    heroEyebrow: "[PRIVACY_POLICY_HERO_EYEBROW]",
    heroTitle: "[PRIVACY_POLICY_HERO_TITLE]",
    heroSubtitle: "[PRIVACY_POLICY_HERO_SUBTITLE]",
    bodyHeading: "[PRIVACY_POLICY_BODY_HEADING]",
    bodyParagraph1: "[PRIVACY_POLICY_BODY_PARAGRAPH_1]",
    bodyParagraph2: "[PRIVACY_POLICY_BODY_PARAGRAPH_2]",
  },
  termsAndConditions: {
    heroEyebrow: "[TERMS_AND_CONDITIONS_HERO_EYEBROW]",
    heroTitle: "[TERMS_AND_CONDITIONS_HERO_TITLE]",
    heroSubtitle: "[TERMS_AND_CONDITIONS_HERO_SUBTITLE]",
    bookingChangesHeading: "[TERMS_AND_CONDITIONS_BOOKING_CHANGES_HEADING]",
    bookingChangesBody: "[TERMS_AND_CONDITIONS_BOOKING_CHANGES_BODY]",
    contactingClinicHeading: "[TERMS_AND_CONDITIONS_CONTACTING_CLINIC_HEADING]",
    contactingClinicBody: "[TERMS_AND_CONDITIONS_CONTACTING_CLINIC_BODY]",
  },
  siteShell: {
    footerTagline: "Modern dentistry, gentle care — right here in Quezon City.",
    bookingDetailsText: "Have questions before booking? Call or email us anytime.",
    emailCaptureHeading: "Stay in the Loop",
    emailCaptureBody: "Get occasional tips and updates from Bright Smile Dental Studio.",
    emailCapturePlaceholder: "Enter your email",
    emailCaptureSubmitButton: "Subscribe",
    emailCaptureSuccessMessage: "Thanks for subscribing!",
  },
  chat: {
    greetingMessage: "Hi there! Welcome to Bright Smile Dental Studio. How can we help you today?",
    noMatchMessage: "Sorry, I didn't quite catch that. Could you rephrase, or ask about our services, hours, or booking?",
    humanHandoffMessage: "Let's get you connected with our front desk for more help.",
    leadCaptureOfferMessage: "Would you like us to have someone from our team follow up with you?",
    leadCaptureAskNameMessage: "Great! What's your name?",
    leadCaptureAskPhoneMessage: "Thanks! What's the best phone number to reach you?",
    leadCaptureThankYouMessage: "Thank you! Our team will be in touch shortly.",
    leadCaptureDeclineMessage: "No problem — feel free to reach out anytime.",
    farewellMessage: "Thanks for chatting with us. Have a great day!",
    windowTitle: "Chat with Bright Smile Dental Studio",
    inputPlaceholder: "Type your message...",
    chatWithLabel: "Chat with us",
    askPromptMessage: "How can we help you today?",
  },
  booking: {
    modalEyebrow: "Book Your Visit",
    modalHeadline: "Let's Get You Scheduled",
    modalSubtext: "Fill out the form below and our team will confirm your appointment.",
    successHeadline: "You're All Set!",
    successMessage: "Thanks for booking with Bright Smile Dental Studio — we'll see you soon.",
  },
} as const;

export const aboutValues = [
  { title: "Patient-First Care", copy: "Every decision starts with what's best for you, not just what's fastest." },
  { title: "Honest Communication", copy: "We explain what we see and what your options are — no surprises." },
  { title: "Modern Technique", copy: "We invest in up-to-date equipment and methods for safer, more comfortable care." },
  { title: "Comfort at Every Step", copy: "From the waiting room to the chair, we work to keep every visit calm and easy." },
] as { title: string; copy: string }[];

function serviceProcess(serviceNumber: number, steps: [string, string][]) {
  return steps.map(([title, description], index) => ({
    step: String(index + 1).padStart(2, "0"),
    title,
    description,
  }));
}

export const services = [
  {
    number: "01",
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    short: "Professional in-office whitening for a noticeably brighter smile in one visit.",
    detail: "Our in-office whitening treatment uses a dentist-supervised process to lift years of staining safely, with results visible immediately after your appointment.",
    category: "Cosmetic",
    benefits: ["Visible results in one visit", "Safe, dentist-supervised", "Long-lasting with proper care"],
    process: serviceProcess(1, [
      ["Consultation & shade check", "We assess your teeth and match your target shade before we begin."],
      ["Protective gel application", "A protective barrier keeps your gums comfortable throughout treatment."],
      ["Whitening treatment (45–60 min)", "The whitening gel is applied and activated in short cycles until your target shade is reached."],
    ]),
    duration: "60 min",
    imageKey: "[SERVICE_1_IMAGE]",
  },
  {
    number: "02",
    slug: "dental-cleaning",
    title: "Dental Cleaning & Checkup",
    short: "Routine cleaning and exam to keep your smile healthy year-round.",
    detail: "A thorough cleaning paired with a full checkup to catch small issues before they become bigger (and pricier) problems.",
    category: "Preventive",
    benefits: ["Removes plaque and tartar buildup", "Early detection of cavities and gum issues", "Keeps your smile healthy between visits"],
    process: serviceProcess(2, [
      ["Full exam", "We check your teeth, gums, and bite for any early warning signs."],
      ["Professional cleaning", "Plaque and tartar are gently removed above and below the gumline."],
      ["Polish & recommendations", "A final polish plus personalized tips to keep your smile healthy at home."],
    ]),
    duration: "45 min",
    imageKey: "[SERVICE_2_IMAGE]",
  },
  {
    number: "03",
    slug: "braces-invisalign",
    title: "Braces & Invisalign",
    short: "Traditional braces or clear aligners, matched to your lifestyle and goals.",
    detail: "Whether you prefer traditional braces or clear aligners, we'll design a treatment plan around your goals, your timeline, and your budget.",
    category: "Orthodontics",
    benefits: ["Options for kids, teens, and adults", "Flexible traditional or clear-aligner treatment", "Regular check-ins to track your progress"],
    process: serviceProcess(3, [
      ["Initial consultation", "We evaluate your bite and discuss which option fits your lifestyle."],
      ["Custom treatment plan", "We map out your timeline, whether braces or aligners."],
      ["Ongoing adjustments", "Regular visits keep your treatment on track until your smile is complete."],
    ]),
    duration: "Ongoing treatment plan (initial consult: 30 min)",
    imageKey: "[SERVICE_3_IMAGE]",
  },
  {
    number: "04",
    slug: "tooth-extraction",
    title: "Tooth Extraction",
    short: "Safe, comfortable extractions for damaged, impacted, or problem teeth.",
    detail: "When a tooth is too damaged, impacted, or infected to save, we make the extraction process as safe and comfortable as possible.",
    category: "Restorative",
    benefits: ["Gentle, comfortable procedure", "Relieves pain from damaged or impacted teeth", "Clear aftercare guidance for smooth healing"],
    process: serviceProcess(4, [
      ["Evaluation & X-ray", "We confirm the extraction is necessary and plan the safest approach."],
      ["Local anesthesia", "We numb the area fully before starting, so you stay comfortable."],
      ["Extraction & aftercare", "The tooth is carefully removed and you leave with clear healing instructions."],
    ]),
    duration: "30–60 min depending on complexity",
    imageKey: "[SERVICE_4_IMAGE]",
  },
  {
    number: "05",
    slug: "dental-implants",
    title: "Dental Implants",
    short: "Permanent, natural-looking tooth replacement that restores full function.",
    detail: "Dental implants replace missing teeth with a permanent, natural-looking solution that restores full chewing function and confidence in your smile.",
    category: "Restorative",
    benefits: ["Permanent, natural-looking results", "Restores full chewing function", "Protects surrounding teeth and jawbone"],
    process: serviceProcess(5, [
      ["Consultation & planning", "We evaluate your jawbone and design your implant plan."],
      ["Implant placement", "The implant post is placed and given time to fully bond with the bone."],
      ["Crown placement", "Once healed, a custom crown completes your new tooth."],
    ]),
    duration: "Multi-visit treatment plan",
    imageKey: "[SERVICE_5_IMAGE]",
  },
  {
    number: "06",
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    short: "Gentle, kid-friendly dental care starting from a child's very first visit.",
    detail: "From a child's very first visit through their teenage years, we create a gentle, welcoming experience that builds lifelong healthy habits.",
    category: "Family",
    benefits: ["Kid-friendly, low-stress environment", "Preventive care from the very first tooth", "Builds positive lifelong dental habits"],
    process: serviceProcess(6, [
      ["Friendly welcome", "We keep first visits short, gentle, and pressure-free."],
      ["Gentle exam & cleaning", "We check growth and development and clean little teeth with care."],
      ["Parent guidance", "We share simple at-home tips to keep your child's smile healthy."],
    ]),
    duration: "30 min",
    imageKey: "[SERVICE_6_IMAGE]",
  },
] as const;

export type Service = (typeof services)[number];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const trustStats = [
  { value: "12+", label: "Years in Practice" },
  { value: "5,000+", label: "Patients Treated" },
  { value: "4.9★", label: "Average Rating" },
] as { value: string; label: string }[];

export const differentiators = [
  { title: "Gentle, Judgment-Free Care", copy: "We meet you where you are, whether it's been six months or six years since your last visit." },
  { title: "Experienced Local Team", copy: "Our dentists bring years of combined experience treating families across Quezon City." },
  { title: "Modern Clinic, Modern Tools", copy: "We use up-to-date equipment to make treatment faster and more comfortable." },
  { title: "Flexible Scheduling", copy: "Evening and Saturday appointments make it easier to fit dental care into your week." },
  { title: "Family-Friendly Environment", copy: "From toddlers to grandparents, every member of your family is welcome here." },
  { title: "Clear, Upfront Pricing", copy: "We walk you through costs and payment options before any treatment begins." },
] as { title: string; copy: string }[];

export const howItWorks = [
  { step: "01", title: "Book Your Visit", copy: "Schedule online or give us a call — whichever is easier for you." },
  { step: "02", title: "Tell Us What's Going On", copy: "Share your concerns so we can prepare for your visit." },
  { step: "03", title: "See Your Dentist", copy: "We'll examine, explain, and recommend the right next step." },
  { step: "04", title: "Leave With a Plan", copy: "You'll walk out knowing exactly what's next for your smile." },
] as { step: string; title: string; copy: string }[];

export const healthResources = [
  {
    title: "5 Habits for a Brighter Smile Between Visits",
    excerpt: "Small daily habits that add up to a noticeably healthier, brighter smile.",
    imageKey: "[RESOURCE_1_IMAGE]",
  },
  {
    title: "When Tooth Pain Means It's Time to See a Dentist",
    excerpt: "How to tell the difference between a passing twinge and something that needs attention.",
    imageKey: "[RESOURCE_2_IMAGE]",
  },
  {
    title: "Why Regular Cleanings Matter More Than You Think",
    excerpt: "A quick look at what happens during a cleaning — and why skipping them adds up.",
    imageKey: "[RESOURCE_3_IMAGE]",
  },
] as { title: string; excerpt: string; imageKey: string }[];

export const marqueeReviews = [
  { author: "Jenna R.", segment: "Cosmetic Whitening", quote: "Dr. Santos made my whitening so easy — results after one visit!", rating: 5 },
  { author: "Mark T.", segment: "Pediatric Care", quote: "My daughter actually looks forward to the dentist now.", rating: 5 },
  { author: "Liza P.", segment: "General Checkup", quote: "Clean, modern clinic and the staff explain everything clearly.", rating: 5 },
] as { author: string; segment: string; quote: string; rating: number }[];

export const faqs = [
  {
    question: "Do you accept walk-ins?",
    answer: "We recommend booking ahead, but we'll always try to accommodate urgent cases.",
    category: "General",
  },
  {
    question: "What HMOs do you accept?",
    answer: "See our full list of accepted providers above — if yours isn't listed, contact us to check.",
    category: "Insurance",
  },
  {
    question: "Is teeth whitening safe?",
    answer: "Yes — our in-office whitening is dentist-supervised and safe for most patients.",
    category: "Cosmetic",
  },
  {
    question: "At what age should my child's first visit be?",
    answer: "We recommend a first visit by age 2–3, or as soon as the first teeth appear.",
    category: "Family",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, ask our front desk about installment options for larger treatment plans.",
    category: "Billing",
  },
] as const;

export const staff = [
  {
    name: "Dr. Maria Santos",
    title: "General & Cosmetic Dentistry",
    credentials: "DMD",
    bio: "Dr. Santos has spent over a decade helping patients feel confident about their smiles, with a particular focus on cosmetic bonding and whitening.",
    imageKey: "[STAFF_1_PHOTO]",
    placeholder: true,
  },
  {
    name: "Dr. Miguel Cruz",
    title: "Orthodontics",
    credentials: "DMD, Cert. Orthodontics",
    bio: "Dr. Cruz specializes in both traditional and clear-aligner orthodontics, working with patients of all ages toward a straighter smile.",
    imageKey: "[STAFF_2_PHOTO]",
    placeholder: true,
  },
  {
    name: "Dr. Anna Reyes",
    title: "Pediatric Dentistry",
    credentials: "DMD, Pediatric Cert.",
    bio: "Dr. Reyes has a gift for putting even the most nervous young patients at ease — most of her patients ask when they get to come back.",
    imageKey: "[STAFF_3_PHOTO]",
    placeholder: true,
  },
] as { name: string; title: string; credentials: string; bio: string; imageKey: string; placeholder: boolean }[];

export const emergencyInfo = {
  heading: "After-Hours Dental Emergencies",
  note: "Dental emergencies don't wait for office hours — here's what to do if you need urgent care outside our regular schedule.",
  referralLocationName: "Bright Smile Dental Studio (Call First)",
  referralLocationPhone: "0917 123 4567",
  referralLocationPhoneDigits: "639171234567",
  referralLocationAddress: "88 Katipunan Avenue, Unit 3B, Quezon City, Metro Manila",
  instructions: "Call us first — if we can't see you same-day, we'll help direct you to the nearest emergency care.",
  placeholder: true,
};

export const paymentInfo = {
  heading: "Payment & Insurance",
  methods: ["Cash", "Credit / Debit Card", "Bank Transfer"],
  insuranceNote: "We accept most major HMOs — see our accepted providers above — plus flexible payment plans for larger treatments.",
};

export const providers = [
  {
    slug: "dr-maria-santos",
    name: "Dr. Maria Santos",
    credentials: "DMD",
    specialty: "General & Cosmetic Dentistry",
    bio: "Dr. Santos has spent over a decade helping patients feel confident about their smiles, with a particular focus on cosmetic bonding and whitening.",
    yearsExperience: 12,
    areasOfInterest: ["Cosmetic dentistry", "Teeth whitening", "Patient comfort care"],
    imageKey: "[PROVIDER_1_PHOTO]",
    placeholder: true,
  },
  {
    slug: "dr-miguel-cruz",
    name: "Dr. Miguel Cruz",
    credentials: "DMD, Cert. Orthodontics",
    specialty: "Orthodontics",
    bio: "Dr. Cruz specializes in both traditional and clear-aligner orthodontics, working with patients of all ages toward a straighter smile.",
    yearsExperience: 8,
    areasOfInterest: ["Invisalign", "Adult orthodontics", "Bite correction"],
    imageKey: "[PROVIDER_2_PHOTO]",
    placeholder: true,
  },
  {
    slug: "dr-anna-reyes",
    name: "Dr. Anna Reyes",
    credentials: "DMD, Pediatric Cert.",
    specialty: "Pediatric Dentistry",
    bio: "Dr. Reyes has a gift for putting even the most nervous young patients at ease — most of her patients ask when they get to come back.",
    yearsExperience: 6,
    areasOfInterest: ["Early childhood dental care", "Anxiety-free visits", "Preventive sealants"],
    imageKey: "[PROVIDER_3_PHOTO]",
    placeholder: true,
  },
] as { slug: string; name: string; credentials: string; specialty: string; bio: string; yearsExperience: number; areasOfInterest: string[]; imageKey: string; placeholder: boolean }[];

export type Provider = (typeof providers)[number];

export function getProviderBySlug(slug: string): Provider | undefined {
  return providers.find((provider) => provider.slug === slug);
}

export const articles = [
  {
    slug: "5-habits-for-a-brighter-smile-between-visits",
    title: "5 Habits for a Brighter Smile Between Visits",
    category: "Cosmetic",
    author: "Dr. Maria Santos",
    date: "2026-06-10",
    readingTime: "4 min read",
    excerpt: "Small daily habits that add up to a noticeably healthier, brighter smile between checkups.",
    body: [
      "A bright smile isn't just about what happens in the dental chair — the small things you do every day between visits matter just as much.",
      "First, brush twice a day for a full two minutes, and don't skip the back teeth where staining and plaque tend to build up fastest.",
      "Second, floss daily. It's the step most people skip, but it's what actually clears the spots your toothbrush can't reach.",
      "Third, rinse with water after coffee, tea, or wine — it won't replace brushing, but it cuts down on staining between meals.",
      "Finally, keep up with your regular cleanings. Even great home care can't fully replace a professional polish twice a year.",
    ],
    imageKey: "[RESOURCE_1_IMAGE]",
    disclaimer: true,
  },
  {
    slug: "when-tooth-pain-means-its-time-to-see-a-dentist",
    title: "When Tooth Pain Means It's Time to See a Dentist",
    category: "General",
    author: "Dr. Miguel Cruz",
    date: "2026-07-02",
    readingTime: "5 min read",
    excerpt: "How to tell the difference between a passing twinge and something that needs attention soon.",
    body: [
      "Not all tooth pain is created equal — a brief sensitivity to something cold is different from a dull ache that won't go away.",
      "Pain that lingers well after eating or drinking something hot or cold is often a sign that something below the surface needs a closer look.",
      "Sharp pain when you bite down can point to a crack, a loose filling, or decay that's reached a sensitive part of the tooth.",
      "Swelling, especially paired with pain or a bad taste, should never be ignored — it can be a sign of infection that needs prompt care.",
      "When in doubt, it's always better to get checked early. Small issues caught quickly are almost always simpler — and less costly — to treat.",
    ],
    imageKey: "[RESOURCE_2_IMAGE]",
    disclaimer: true,
  },
] as { slug: string; title: string; category: string; author: string; date: string; readingTime: string; excerpt: string; body: string[]; imageKey: string; disclaimer: boolean }[];

export type Article = (typeof articles)[number];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export const carePlans = [
  {
    title: "Essential Care Plan",
    subtitle: "Great for individuals who want to stay on top of routine care.",
    bullets: ["2 cleanings/year", "1 checkup", "10% off other treatments"],
  },
  {
    title: "Family Care Plan",
    subtitle: "Designed for households who want simple, shared dental care.",
    bullets: ["Covers up to 4 family members", "2 cleanings each per year", "Priority booking"],
  },
] as { title: string; subtitle: string; bullets: string[] }[];

export const newClientSteps = [
  { step: "01", title: "Book your visit online or by phone", copy: "Choose whichever way is easiest for you." },
  { step: "02", title: "Fill out a short health history form", copy: "Just a few quick questions so we're prepared for your visit." },
  { step: "03", title: "Meet your dentist for a full exam", copy: "We'll take the time to understand your dental health and goals." },
  { step: "04", title: "Review your personalized treatment plan", copy: "We'll walk you through options, timelines, and costs." },
  { step: "05", title: "Schedule your next visit before you leave", copy: "So staying on top of your dental health is one less thing to remember." },
] as { step: string; title: string; copy: string }[];

export const whatToBring = [
  "Valid government ID",
  "HMO/insurance card (if applicable)",
  "List of current medications",
  "Previous dental records (if switching clinics)",
  "Preferred payment method",
] as string[];

export const clinicExperienceFeatures = [
  { title: "Modern Equipment", copy: "Digital imaging and up-to-date tools for safer, more precise care.", imageKey: "[CLINIC_1_IMAGE]" },
  { title: "Calm, Comfortable Rooms", copy: "Treatment rooms designed to help you relax from the moment you sit down.", imageKey: "[CLINIC_2_IMAGE]" },
  { title: "Kid-Friendly Spaces", copy: "A welcoming environment that puts even nervous young patients at ease.", imageKey: "[CLINIC_3_IMAGE]" },
  { title: "Easy Parking & Access", copy: "Convenient access right off Katipunan Avenue.", imageKey: "[CLINIC_4_IMAGE]" },
  { title: "Spotless, Sterile Care", copy: "Strict sterilization protocols for your safety and peace of mind.", imageKey: "[CLINIC_5_IMAGE]" },
] as { title: string; copy: string; imageKey: string }[];

export const clientStories = [
  {
    clientName: "Carlo M.",
    segment: "Dental Implants",
    category: "Dental Implants",
    story: "After years of avoiding the dentist, I finally got my implants done here. Dr. Cruz walked me through every step and I never felt rushed.",
    imageKey: "[CLIENT_1_PHOTO]",
  },
] as { clientName: string; segment: string; category: string; story: string; imageKey: string }[];

export const proofStatHighlight = {
  number: "4.9★",
  label: "Average Patient Rating",
};

export const proofCareStats = [
  { value: "12+", label: "Years in Practice" },
  { value: "5,000+", label: "Patients Treated" },
  { value: "4.9★", label: "Average Rating" },
] as { value: string; label: string }[];

export const proofPageStories = [
  { label: "Jenna R.", note: "Whitening results after one visit." },
  { label: "Mark T.", note: "Made pediatric visits stress-free." },
  { label: "Liza P.", note: "Clear communication, modern clinic." },
] as { label: string; note: string }[];

export const SITE_ORIGIN = "https://tier1-services-template.vercel.app";

export function buildBreadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE_ORIGIN}${crumb.path}`,
    })),
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": businessConfig.schemaType || "LocalBusiness",
    name: businessConfig.name,
    description: businessConfig.tagline,
    url: SITE_ORIGIN,
    telephone: businessConfig.phone,
    email: businessConfig.email,
    address: { "@type": "PostalAddress", streetAddress: businessConfig.address, addressLocality: businessConfig.city },
    openingHoursSpecification: businessConfig.businessHours.map((entry) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: entry.days, opens: entry.hours.split("–")[0]?.trim(), closes: entry.hours.split("–")[1]?.trim() })),
    sameAs: businessConfig.socialLinks.map((social) => social.href),
  };
}

export function buildFaqSchema(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  };
}

export function buildPersonSchema(provider: Provider) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: provider.name,
    jobTitle: provider.specialty,
    description: provider.bio,
    worksFor: { "@type": businessConfig.schemaType || "LocalBusiness", name: businessConfig.name },
  };
}

export function buildArticleSchema(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    articleSection: article.category,
    publisher: { "@type": "Organization", name: businessConfig.name },
  };
}
