import domestic from "@/assets/svc-domestic.jpg";
import international from "@/assets/svc-international.jpg";
import flight from "@/assets/svc-flight.jpg";
import hotel from "@/assets/svc-hotel.jpg";
import transport from "@/assets/svc-transport.jpg";
import group from "@/assets/svc-group.jpg";
import honeymoon from "@/assets/svc-honeymoon.jpg";
import visa from "@/assets/svc-visa.jpg";
import pilgrimage from "@/assets/svc-pilgrimage.jpg";
import corporate from "@/assets/svc-corporate.jpg";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  icon: string;
  highlights: string[];
  description: string;
  destinations: string[];
  inclusions: string[];
  badge: string;
};

export const services: Service[] = [
  {
    slug: "domestic-tour-packages",
    title: "Domestic Tour Packages",
    tagline: "Discover the soul of India",
    image: domestic,
    icon: "Plane",
    badge: "Customized | Group | Family",
    highlights: ["Himachal Pradesh", "Kashmir • Kerala • Goa", "Rajasthan • Northeast", "Andaman", "Temple Tours & more"],
    description:
      "From the snow-laced peaks of Himachal to the houseboats of Kerala, our domestic packages are crafted to reveal India's most cinematic corners — with handpicked stays, local guides and seamless logistics.",
    destinations: ["Himachal", "Kashmir", "Kerala", "Goa", "Rajasthan", "Andaman", "Northeast", "Tamil Nadu Temples"],
    inclusions: ["Airport pickup & drop", "Handpicked 3★–5★ hotels", "Sightseeing with guides", "On-trip concierge"],
  },
  {
    slug: "international-holiday-packages",
    title: "International Holiday Packages",
    tagline: "Let's explore the world together",
    image: international,
    icon: "Globe2",
    badge: "Visa Assistance | Forex | Insurance",
    highlights: ["Europe • Switzerland", "Dubai • Thailand", "Maldives • Bali", "Singapore • Malaysia", "Vietnam & more"],
    description:
      "Bespoke international holidays across 40+ countries — from the canals of Venice to Bali's hidden temples. Visa, forex and insurance handled end-to-end so you only carry the camera.",
    destinations: ["Europe", "Switzerland", "Dubai", "Thailand", "Maldives", "Bali", "Singapore", "Malaysia", "Vietnam"],
    inclusions: ["Visa documentation", "Forex & travel insurance", "Premium airline partners", "24/7 destination support"],
  },
  {
    slug: "flight-ticket-booking",
    title: "Flight Ticket Booking",
    tagline: "Skyward made simple",
    image: flight,
    icon: "Ticket",
    badge: "Comfort | Quality | Value",
    highlights: ["Domestic & International", "Best Fares • Group Fares", "Student Fares", "Last Minute Tickets", "Rescheduling & Cancellation"],
    description:
      "Real human agents, real time. We hunt the lowest fares across 500+ carriers, lock group seats together, and rebook you fast when plans change.",
    destinations: ["All major hubs worldwide"],
    inclusions: ["Lowest-fare hunting", "Group seat blocking", "Free rescheduling support", "Web check-in assist"],
  },
  {
    slug: "hotel-resort-bookings",
    title: "Hotel & Resort Bookings",
    tagline: "Sleep where the view is",
    image: hotel,
    icon: "Hotel",
    badge: "Comfort | Quality | Value",
    highlights: ["Budget to Luxury Stays", "3★ / 4★ / 5★ Hotels", "Resorts, Villas & Cottages", "Best Rates & Upgrades"],
    description:
      "From boutique homestays to five-star resorts — we negotiate complimentary upgrades, late checkouts and welcome amenities so every stay feels like a small celebration.",
    destinations: ["10,000+ properties worldwide"],
    inclusions: ["Room upgrades when available", "Late checkout requests", "Honeymoon & anniversary perks", "Best price guarantee"],
  },
  {
    slug: "transportation-services",
    title: "Transportation Services",
    tagline: "Arrive in quiet luxury",
    image: transport,
    icon: "Car",
    badge: "Comfort | Quality | Value",
    highlights: ["Airport Transfers", "Tempo Traveller", "Sedan, SUV, Luxury Cars", "Coaches / Buses", "Local Sightseeing"],
    description:
      "Punctual, polished and private. Choose from premium sedans, SUVs, tempo travellers and luxury coaches — driven by vetted, multilingual chauffeurs.",
    destinations: ["Pan-India ground network"],
    inclusions: ["Sanitised vehicles", "English-speaking chauffeurs", "Real-time tracking", "Tolls & parking handled"],
  },
  {
    slug: "group-tours",
    title: "Group Tours",
    tagline: "Travel together, remember forever",
    image: group,
    icon: "Users",
    badge: "Customized | Group | Family",
    highlights: ["Family & Friends Groups", "Corporate Outings", "Student Tours", "Pilgrimage Tours", "Tour Manager Support"],
    description:
      "Custom-built group journeys — from extended families to college batches and corporate teams. Dedicated tour managers travel with you, end to end.",
    destinations: ["Anywhere your group dreams"],
    inclusions: ["Dedicated tour manager", "Group discounts", "Custom itineraries", "Group photographer add-on"],
  },
  {
    slug: "honeymoon-packages",
    title: "Honeymoon Packages",
    tagline: "Chapter one, written in gold",
    image: honeymoon,
    icon: "Heart",
    badge: "Romance | Privacy | Memory",
    highlights: ["Romantic Destinations", "Luxury Stays", "Candlelight Dinners", "Private Sightseeing", "Special Inclusions"],
    description:
      "Maldives overwater villas, Santorini cliff suites, Swiss chalet retreats — designed for two, with private dinners, spa rituals and quiet surprises throughout.",
    destinations: ["Maldives", "Santorini", "Bali", "Switzerland", "Mauritius", "Andaman"],
    inclusions: ["Private candlelight dinner", "Couple spa session", "Honeymoon room decor", "Sunset photography"],
  },
  {
    slug: "visa-documentation-assistance",
    title: "Visa & Documentation Assistance",
    tagline: "Paperwork, perfected",
    image: visa,
    icon: "FileCheck2",
    badge: "Trusted | Accurate | Fast",
    highlights: ["Tourist Visas", "Visa Appointment", "Documentation Guidance", "Cover Letters", "Travel Insurance"],
    description:
      "End-to-end visa support across 60+ countries. We pre-check every document, draft your cover letter and walk you through the embassy step by step.",
    destinations: ["60+ countries — Schengen, US, UK, UAE, ANZ, SE Asia"],
    inclusions: ["Document pre-check", "Cover letter drafting", "Appointment booking", "Travel insurance"],
  },
  {
    slug: "pilgrimage-spiritual-tours",
    title: "Pilgrimage & Spiritual Tours",
    tagline: "Journeys for the soul",
    image: pilgrimage,
    icon: "Mountain",
    badge: "Sacred | Comfortable | Guided",
    highlights: ["Char Dham Yatra", "Kedarnath, Badrinath", "Vaishno Devi", "Tirupati, Kashi, Rameswaram", "Kailash Mansarovar"],
    description:
      "Reverent, comfortable pilgrimages — Char Dham, Vaishno Devi, Tirupati, Kashi and the great Kailash Mansarovar Yatra. Senior-friendly pace, priestly guides.",
    destinations: ["Char Dham", "Vaishno Devi", "Tirupati", "Kashi", "Rameswaram", "Kailash Mansarovar"],
    inclusions: ["VIP darshan where possible", "Senior-friendly transport", "Priestly guides", "Vegetarian meals"],
  },
  {
    slug: "corporate-travel-management",
    title: "Corporate Travel Management",
    tagline: "Business travel, simplified",
    image: corporate,
    icon: "Briefcase",
    badge: "MICE | Bookings | Compliance",
    highlights: ["Corporate Bookings", "MICE Tourism", "Travel Policy Management", "Monthly Billing", "GST Invoices"],
    description:
      "A single account manager, policy-aware bookings, consolidated GST invoices and MICE event execution — built for finance teams and busy founders alike.",
    destinations: ["Domestic & international"],
    inclusions: ["Dedicated account manager", "Monthly consolidated billing", "GST-compliant invoices", "MICE event execution"],
  },
];

export const moreServices = [
  "Cruise Bookings",
  "Activity & Attractions",
  "Travel Insurance",
  "Forex & Currency Assistance",
  "Premium Hospitality Services",
  "Digital Travel Support",
  "Special Interest Tours",
];
