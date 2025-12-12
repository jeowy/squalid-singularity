import { defaultContent } from "./digitize";
import type { PageContent } from "@/data/types";

// Specific Asset
import carPortal from "@/assets/solutionsscreenshots/carriers/portal2.webp";
import dashboardPreview from "@/assets/dashboard-preview.webp";

export const carriersContent: PageContent = {
  ...defaultContent,
  digitizeGallery: undefined, // Break inheritance
  carriersGallery: {
    staticImage: carPortal
  },
  hero: {
    ...defaultContent.hero,
    headline: "MAKE IT EFFORTLESS FOR YOUR CARRIERS AND CUSTOMERS TO BOOK APPOINTMENTS",
    desktopImage: carPortal,
    mobileGallery: [
      { src: carPortal, alt: "Carrier Portal", style: 'centered' },
      { src: carPortal, alt: "Carrier Portal", style: 'centered' }
    ]
  },
  howItWorks: {
    title: "HOW IT WORKS",
    subtitle: "Automate coordination with your external partners.",
    steps: [
      {
        stepNumber: 1,
        title: "Invite Partners",
        description: "Just share an invite link. Your partners onboard themselves and add their own drivers in minutes.",
        icon: "upload",
        visualTags: ["Self-Service", "Quick Setup"],
        mobileAnnotation: "No more back-and-forth negotiation.",
      },
      {
        stepNumber: 2,
        title: "Set Constraints",
        description: "You decide the mandatory docs and rules. Carriers only see time slots that actually work for their load type.",
        icon: "toggle",
        desktopAnnotation: "No more back-and-forth negotiation.",
        mobileAnnotation: "Insight: You even get turnaround KPIs for carriers that don't collaborate.",
        highlight: true,
      },
      {
        stepNumber: 3,
        title: "Auto-Approve",
        description: "The system validates the booking against your capacity and auto-approves it instantly.",
        icon: "refresh",
      },
    ],
    footerAnnotation: "💡 Insight: You even get turnaround KPIs for carriers that don't collaborate.",
  },
  testimonial: {
    quote: "A great help with keeping track of our appointments. I like that automatic email reminders and notices are sent to the trucking company that sets their appointments.",
    name: "Landon Moreno",
    role: "Logistics Operations Manager, Vee Express, LLC",
    image: "/src/assets/landonmoreno.webp",
  },
  benefits: {
    benefits: [
      { icon: "calendar", title: "Easy Onboarding", description: "Simple bookings portal with rules and required docs up front.", },
      { icon: "database", title: "Less Back-and-Forth", description: "Share docs and status in-system rather than on the phone.", },
      { icon: "barChart", title: "Fewer No-Shows", description: "Set automatic reminders, easy rescheduling and clear policies.", },
      { icon: "users", title: "Cut Detention Fees", description: "Prevent disputes with time-stamped check-in/outs.", },
      { icon: "fileCheck", title: "Compare Performance", description: "Use scorecards to improve carrier selection and management.", },
      { icon: "archive", title: "On-Time Incentives", description: "Prioritize scheduled arrivals and watch adherence improve", },
    ],
  },
  caseStudies: {
    caseStudies: [
      { company: "Vee Express, LLC", industry: "3PL Warehouse", metricValue: "90%", metricLabel: "Reduction in Vendor Disputes", challenge: "Manually tracking appointments made it difficult to prove exactly when a driver arrived late.", result: "Automated timestamps provide irrefutable proof of driver lateness, completely removing the 3PL's liability for missed appointments.", },
      { company: "Nick Steinman", industry: "Warehouse Manager, Food Wholesale", metricValue: "40+", metricLabel: "Weekly Admin Hours Saved", challenge: "Staff lost valuable hours manually contacting drivers and chasing down status updates via phone or text.", result: "The direct driver messaging feature centralized communication, eliminating manual outreach and resulting in huge time savings for the floor team.", },
    ],
  },
  faq: {
    faqs: [
      { question: "How do I convince my carriers to actually book through a scheduling system?", answer: "Carriers sometimes push back because they think scheduling is rigid. Explain it to them as a priority pass: booking a slot means they skip the 'first-come-first-served' line.", },
      { question: "What happens when a truck shows up outside its appointment window?", answer: "The system flags the arrival as 'Late' or 'Early,' allowing you to de-prioritize them and work them in around your on-time appointments.", },
      { question: "How do I make sure carriers understand the requirements before booking a load?", answer: "You can display custom instructions—such as safety protocols, PPE requirements, or delivery guides—directly in the booking portal.", },
      { question: "How are cancellations, reschedules, and no-shows tracked over time?", answer: "The system logs every status change in an immutable audit trail. You can generate reports based on these logs to identify frequency trends.", },
      { question: "How does the system handle different load types — live, drop, multi-stop cross-docking etc.?", answer: "You can configure custom appointment types with their own rules. A 'Live Load' might reserve 60 minutes, while a 'Drop' reserves 15.", },
      { question: "Can I connect dock data with my TMS to plan capacity more accurately?", answer: "Yes. A TMS integration can automatically push planned loads into the schedule so you can visualize capacity needs in advance.", },
      { question: "How can we make sure carriers get updates without noise or spam?", answer: "You can configure what actions trigger a notification and to whom. Plus, the system uses smart buffering.", },
      { question: "What metrics should I use to evaluate carrier performance?", answer: "On-Time Arrival (OTA) and Dwell Time are the big ones. Because the system tracks the exact difference between 'Scheduled' and 'Arrived,' you have objective data.", },
      { question: "Which KPIs will the system track for me automatically, and which need manual input?", answer: "The system automatically tracks all time-based metrics (Arrivals, Duration, Turnaround).", },
      { question: "How does collaboration work between shippers, carriers, and brokers inside the system?", answer: "It centralizes communication. You can chat within specific appointments, attach documents like BOLs, and trigger automated email notifications.", },
      { question: "How much visibility do carriers get into our calendar?", answer: "That is entirely up to you. They’ll see their own booking history, and you can show them all available slots or release only 'preferred' times.", },
      { question: "Where does the data for check-in and check-out timestamps come from?", answer: "It depends on your workflow. Drivers can check in via a tablet kiosk, guards can log them at the gate, or your internal coordinators can simply click 'Arrived'.", },
    ],
  },
};