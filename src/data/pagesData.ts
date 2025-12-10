import dashboardPreview from "@/assets/dashboard-preview.webp";
import appShot1 from "@/assets/appscreenshot1.webp"; 
import appShot2 from "@/assets/appscreenshot2.webp";
import propertyView from "@/assets/propertyview.webp";
import digiHeader from "@/assets/solutionsscreenshots/digitization/dashboardheader.webp";
import digi1 from "@/assets/solutionsscreenshots/digitization/appointmentscreated.webp";
import digi2 from "@/assets/solutionsscreenshots/digitization/arrivedontime.webp";
import digi3 from "@/assets/solutionsscreenshots/digitization/combinedontime.webp";
import digi4 from "@/assets/solutionsscreenshots/digitization/completedontime.webp";
import digi5 from "@/assets/solutionsscreenshots/digitization/earlyappointments.webp";
import digi6 from "@/assets/solutionsscreenshots/digitization/lateappointments.webp";

export type GalleryStyle = 'bottom-flush' | 'top-flush' | 'centered' | 'pan-horizontal';
export interface DigitizeGalleryData { header: ImageMetadata; gridImages: ImageMetadata[]; }
export type SlideLayoutType = "single" | "double" | "triple" | "quad" | "overlay";
export interface HeroSlide { type: "single" | "double" | "triple" | "quad" | "overlay"; images: ImageMetadata[]; }
export interface DesktopComposition { baseImage: ImageMetadata; floatingImage: ImageMetadata; floatPosition: 'right' | 'left'; }
export interface HeroContent { badgeText: string; headline: string; emailPlaceholder: string; buttonText: string; dashboardAlt: string; desktopImage?: ImageMetadata; mobileGallery?: HeroGalleryItem[]; desktopComposition?: DesktopComposition; heroSlides?: HeroSlide[]; }
export interface HeroGalleryItem { src: ImageMetadata; alt: string; style: GalleryStyle; }
export interface CredibilityContent { g2Rating: string; g2Link: string; uptimePercentage: string; uptimeLabel: string; capterraLink: string; capterraRating: string; supportHours: string; supportLabel: string; securityBadges: { iso: string; isoSubtext: string; gdpr: string; soc2: string; soc2Subtext: string; }; }
export interface HowItWorksContent { title: string; subtitle: string; steps: { stepNumber: number; title: string; description: string; icon: "upload" | "toggle" | "refresh"; desktopAnnotation?: string; mobileAnnotation?: string; visualTags?: string[]; highlight?: boolean; }[]; footerAnnotation?: string; }
export interface TestimonialContent { quote: string; name: string; role: string; image: string; }
export interface BenefitItem { icon: "calendar" | "database" | "barChart" | "users" | "fileCheck" | "archive"; title: string; description: string; }
export interface BenefitsContent { benefits: BenefitItem[]; }
export interface CaseStudyContent { company: string; industry: string; metricValue: string; metricLabel: string; challenge: string; result: string; }
export interface CaseStudiesContent { caseStudies: CaseStudyContent[]; }
export interface FAQItem { question: string; answer: string; }
export interface FAQContent { faqs: FAQItem[]; }
export interface PageContent { hero: HeroContent; credibility: CredibilityContent; testimonial: TestimonialContent; benefits: BenefitsContent; howItWorks: HowItWorksContent; caseStudies: CaseStudiesContent; faq: FAQContent; digitizeGallery?: DigitizeGalleryData; }

// ---------------------------------------------------------
// 1. DIGITIZATION (Default)
// ---------------------------------------------------------
export const defaultContent: PageContent = {
  hero: {
    badgeText: "More Than 1,000,000 Appointments Booked Annually!",
    headline: "GET ACTIONABLE DATA ABOUT EVERYTHING THAT COMES THROUGH YOUR DOCKS",
    emailPlaceholder: "Enter your work email",
    buttonText: "Get Free Demo",
    dashboardAlt: "Dashboard showing appointment analytics, dock statistics, and peak booking times",
    desktopImage: dashboardPreview, 
  },
  digitizeGallery: {
    header: digiHeader,
    gridImages: [digi1, digi2, digi3, digi4, digi5, digi6] 
  },
  credibility: {
    g2Rating: "4.9/5 on G2",
    g2Link: "https://www.g2.com/products/datadocks/reviews",
    uptimePercentage: "99.99%",
    uptimeLabel: "Uptime",
    capterraLink: "https://www.capterra.com/p/179266/DataDocks/",
    capterraRating: "4.9",
    supportHours: "24/7",
    supportLabel: "Support",
    securityBadges: { iso: "ISO", isoSubtext: "27001", gdpr: "GDPR", soc2: "SOC 2", soc2Subtext: "TYPE II", },
  },
  testimonial: {
    quote: "A little over a year in and I couldn't imagine going back to the old ways of using spreadsheets to manage our shipping schedule.",
    name: "Nick Steinman",
    role: "Warehouse Supervisor, Food Industry",
    image: "/src/assets/nick-steinman.jpg",
  },
  benefits: {
    benefits: [
      { icon: "calendar", title: "Carrier Self-Service", description: "Cut 80% of calls and emails by having customers and carriers book.", },
      { icon: "database", title: "Upgrade Your Systems", description: "Get richer, cleaner data into your TMS, WMS or ERP", },
      { icon: "barChart", title: "Scale Effortlessly", description: "Pull reports on your carriers and your own operations.", },
      { icon: "users", title: "Team Collaboration", description: "Promote your logistics coordinator to a process optimizer", },
      { icon: "fileCheck", title: "Digital Audit Trail", description: "Get time-stamped logs and low friction SOC2 & GDPR Compliance.", },
      { icon: "archive", title: "Standardize Processes", description: "Set up required fields and documentation for every load", },
    ],
  },
  howItWorks: {
    title: "HOW IT WORKS",
    subtitle: "From messy inputs to automated outputs.",
    steps: [
      {
        stepNumber: 1,
        title: "Unify Your Inputs",
        description: "Bulk upload your POs, or feed in data through EDI, API, or manual entry.",
        icon: "upload",
        desktopAnnotation: "Stop booking appointments on behalf of your customers!",
        mobileAnnotation: "Stop booking appointments on behalf of your customers!",
        visualTags: ["EDI", "API", "CSV"],
      },
      {
        stepNumber: 2,
        title: "Manage by Exception",
        description: "Just mark loads as arrived or departed and instantly get reports you can use.",
        icon: "toggle",
        // Space 2: Footer content
        mobileAnnotation: "It all comes down to getting stuff off your plate.",
        highlight: true,
      },
      {
        stepNumber: 3,
        title: "Automate the Rest",
        description: "The more you use the system, the more you can automate.",
        icon: "refresh",
      },
    ],
    footerAnnotation: "💡 Logic: (It all comes down to getting stuff off your plate)",
  },
  caseStudies: {
    caseStudies: [
      { company: "Honeyville, Inc.", industry: "Food Wholesale", metricValue: "x%", metricLabel: "xyz improvement", challenge: "Struggling with manual data entry and disconnected systems slowing down supply chain decision making.", result: "Automated workflows reduced cycle time by x% and increased xyz by 85%.", },
      { company: "ShipMonk", industry: "E-commerce 3PL", metricValue: "90%", metricLabel: "of Manual Calculations Eliminated", challenge: "Need to maximize utilization, forcing manual calculations for each facility type and appointment rejections in crunch moments.", result: "'The portal produced a ripple effect across our network. freed up bandwidth, allowing our team to focus on elevating the merchant experience, and the reporting capabilities drive quality assurance.' - Colleen Germain, Senior Coordinator.", },
    ],
  },
  faq: {
    faqs: [
      { question: "How does dock scheduling data connect with our WMS, TMS, or ERP systems?", answer: "We can connect via API or EDI if you want to streamline data entry, sync POs, or trigger workflows in your other systems automatically.", },
      { question: "Can we exchange data through EDI, or does it use another format?", answer: "We support modern APIs for real-time flexibility, but we also handle standard EDI formats (like 204s and 214s) to ensure compatibility with legacy systems and large enterprise partners.", },
      { question: "How does time-stamped event tracking actually work in practice?", answer: "Transparency is key. Every single status change, from 'Scheduled' to 'Arrived' to 'Departed' is logged with a timestamp and the user ID of the person who made the change.", },
      { question: "What kinds of reports or dashboards are available straight out of the system?", answer: "You get immediate access to operational dashboards showing daily throughput, carrier on-time performance, and average duration. It gives you a high-level health check of your facility without any setup.", },
      { question: "Which KPIs are automatically tracked, and which ones will we still define ourselves?", answer: "We track the operational timeline automatically (Wait Times, Turnaround). You define the business context, such as which carriers are 'preferred' or what constitutes a compliant delivery for your specific site.", },
      { question: "How accurate is the data for audit or compliance use?", answer: "Because the system maintains a complete audit trail of every edit and status change, the data is incredibly reliable for resolving detention fee disputes or passing compliance audits.", },
      { question: "How can this help us find recurring causes of delay or inefficiency?", answer: "Digital records reveal patterns. You might spot that a specific carrier is chronically late, or that a certain shift consistently runs overtime. The data helps you move from 'gut feeling' to root-cause analysis.", },
      { question: "What’s the best way to measure loading dock performance across multiple sites?", answer: "Digitization creates a standard. You can report on multiple facilities using the same metrics, making it easy to benchmark high-performing sites against those that need attention, regardless of their volume.", },
      { question: "How can digital data support a continuous-improvement loop instead of one-off reviews?", answer: "It allows for agility. Instead of waiting for a quarterly review, you can monitor weekly trends in dwell time or capacity usage and make small, data-driven adjustments to your rules immediately.", },
      { question: "How can dock-level metrics feed into broader supply-chain visibility tools?", answer: "If you use enterprise visibility platforms, we can feed our timestamp data directly to them. This fills the 'black hole' of the yard, giving your broader network accurate visibility into when goods actually arrived or departed.", },
      { question: "What role could this play in a digital-twin or predictive-planning project down the line?", answer: "Your historical dock data serves as the 'training set.' Over time, this data allows predictive models to simulate how changes in layout or labor would impact your actual throughput.", },
      { question: "How do we make a clear business case for digitizing dock operations and prove the ROI?", answer: "Start with the hard costs: reduction in detention fees (proven by accurate timestamps) and admin hours saved (scheduling automation). Most facilities see ROI in under 6 months through these two savings alone. The larger, long-term value comes from the operational efficiency you unlock with better data.", },
    ],
  },
};

// ---------------------------------------------------------
// 2. CARRIERS (Mapped to carriersContent)
// ---------------------------------------------------------
export const carriersContent = {
  ...defaultContent,
  hero: {
    ...defaultContent.hero,
    headline: "MAKE IT EFFORTLESS FOR YOUR CARRIERS AND CUSTOMERS TO BOOK APPOINTMENTS",
    desktopImage: dashboardPreview,
    mobileGallery: [
      { src: dashboardPreview, alt: "Dashboard", style: 'centered' },
      { src: dashboardPreview, alt: "Dashboard", style: 'centered' }
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
        // Space 1: Side Annotation
        mobileAnnotation: "No more back-and-forth negotiation.",
      },
      {
        stepNumber: 2,
        title: "Set Constraints",
        description: "You decide the mandatory docs and rules. Carriers only see time slots that actually work for their load type.",
        icon: "toggle",
        desktopAnnotation: "No more back-and-forth negotiation.",
        // Space 2: Footer Annotation
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
      { icon: "calendar" as const, title: "Easy Onboarding", description: "Simple bookings portal with rules and required docs up front.", },
      { icon: "database" as const, title: "Less Back-and-Forth", description: "Share docs and status in-system rather than on the phone.", },
      { icon: "barChart" as const, title: "Fewer No-Shows", description: "Set automatic reminders, easy rescheduling and clear policies.", },
      { icon: "users" as const, title: "Cut Detention Fees", description: "Prevent disputes with time-stamped check-in/outs.", },
      { icon: "fileCheck" as const, title: "Compare Performance", description: "Use scorecards to improve carrier selection and management.", },
      { icon: "archive" as const, title: "On-Time Incentives", description: "Prioritize scheduled arrivals and watch adherence improve", },
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

// ---------------------------------------------------------
// 3. VISIBILITY (Mapped to yardappContent)
// ---------------------------------------------------------
export const yardappContent = {
  ...defaultContent,
  hero: {
    ...defaultContent.hero,
    headline: "SEE WHAT’S AT YOUR DOCKS, ON THE WAY, OR IN YOUR YARD, AND MANAGE IT ALL FROM THE APP",
    heroSlides: [
      { type: "overlay", images: [dashboardPreview, propertyView, appShot1] },
    ]
  },
  howItWorks: {
    title: "HOW IT WORKS",
    subtitle: "Better data in, better visibility out.",
    steps: [
      {
        stepNumber: 1,
        title: "Standardize Intake",
        description: "Make specific fields (like PO#) or documents mandatory so you can always identify a load the moment it arrives.",
        icon: "upload",
        visualTags: ["Mandatory Fields", "Docs"],
        // Space 1: Side Annotation
        mobileAnnotation: "Configurable Alert: 'Detention risk detected' — lets you pivot before fees accrue.",
      },
      {
        stepNumber: 2,
        title: "Automate Alerts",
        description: "When anyone requests a schedule change, notifications trigger instantly—keeping your dock and yard teams in sync.",
        icon: "toggle",
        desktopAnnotation: "Configurable Alert: 'Detention risk detected' — lets you pivot before fees accrue.",
        // Space 2: Footer Annotation
        mobileAnnotation: "Result: Your gate, yard, and dock teams finally see the same reality.",
        highlight: true,
      },
      {
        stepNumber: 3,
        title: "Smooth the Flow",
        description: "The algorithm spreads appointments out to match your daily capacity, preventing bottlenecks before they form.",
        icon: "refresh",
      },
    ],
    footerAnnotation: "💡 Result: Your gate, yard, and dock teams finally see the same reality."
  },
  testimonial: {
    quote: "We work out of several facilities, and until we implemented DataDocks, each of them relied on a different scheduling system. This provided us with some standardization.",
    name: "Marcasa Ahlstrom",
    role: "Transportation Manager, Honeyville Inc.",
    image: "/src/assets/honeyvillelogo.webp",
  }, 
  benefits: {
    benefits: [
      { icon: "barChart" as const, title: "Live ETAs & Smart Alerts", description: "Auto-ETA refresh, notifications, and real-time board visibility.", },
      { icon: "archive" as const, title: "Mobile Load Info", description: "Check who/what/PO/ASN in the app in one tap.", },
      { icon: "users" as const, title: "Improve Yard Flow", description: "Order jockey moves and let drivers check themselves in.", },
      { icon: "calendar" as const, title: "Quick Workload Forecast", description: "See what’s coming in later and plan proactively.", },
      { icon: "database" as const, title: "Smart Door Assignment", description: "Automatically check for conflicts and resequence based on load data.", },
      { icon: "fileCheck" as const, title: "Easy Inspections", description: "Access checklists and packing lists in-app or printable.", },
    ],
  },
  caseStudies: {
    caseStudies: [
      { company: "Honeyville, Inc.", industry: "Food Wholesale", metricValue: "1", metricLabel: "Unified System", challenge: "Critical scheduling information was trapped in isolated systems.", result: "Removed all visibility barriers, giving every team member instant access to the real-time data they need.", },
      { company: "TBC", industry: "TBC Industry", metricValue: "xx%", metricLabel: "of xyz improved", challenge: "Challenge TBC", result: "Result TBC", },
    ],
  },
  faq: {
    faqs: [
      { question: "How does the system show what’s coming in next so teams can plan ahead?", answer: "Our Schedule View serves as your daily timeline. It displays not just your time slots, but pallet counts, load types, and special handling needs.", },
      { question: "How does the system predict how long each appointment will take?", answer: "It combines historical averages with human oversight. The system suggests a duration based on load data.", },
      { question: "When a truck is delayed or early, how is that reflected in the live schedule?", answer: "The schedule is dynamic. Delayed trucks are visually flagged, letting your team see the gap in the schedule instantly.", },
      { question: "How are alerts set up so the right people get notified at the right time?", answer: "You can configure email notifications for key events like new bookings or cancellations. For active users, in-app notifications ensure they see important updates.", },
      { question: "How can the system show trailers waiting in the yard and flag ones that have been idle too long?", answer: "You can filter the schedule to see only trucks in the 'Arrived/Yard' status, and set up rules to flag any trailer that has sat waiting for longer.", },
      { question: "How does the system handle planned yard moves or jockey assignments?", answer: "You can issue digital tasks for yard jockeys, such as moving a specific trailer to a door or parking spot.", },
      { question: "How do supervisors access live information while they’re out on the floor?", answer: "We offer dedicated mobile apps for iOS and Android, and the web platform is tablet-friendly.", },
      { question: "How does the system display workload or door utilization throughout the day?", answer: "We work backward from capacity. You set constraints on appointments per hour or zone, and the system visualizes how close you are to those limits.", },
      { question: "What tools are there for managing inspections or safety checks?", answer: "You can attach digital forms and checklists directly to the appointment record, ensuring that safety checks and quality inspections are documented.", },
      { question: "How do drivers or carriers see their own status once they’ve checked in?", answer: "Dispatchers can view the real-time status of their drivers directly in the portal.", },
      { question: "What happens if there’s a data lag, or the wifi goes down?", answer: "The Schedule View remains accessible as a local snapshot, so your team knows what was planned. Once you’re back online, the system automatically syncs.", },
      { question: "How does better visibility actually speed up turnarounds and reduce waiting?", answer: "Preparation is everything. When the warehouse knows a floor-loaded container is arriving at 2 PM, they can stage the right labor and equipment beforehand.", },
    ],
  },
};

// ---------------------------------------------------------
// 4. PRODUCTIVITY (Mapped to capacityContent)
// ---------------------------------------------------------
export const capacityContent = {
  ...defaultContent,
  hero: {
    ...defaultContent.hero,
    headline: "ELIMINATE BOTTLENECKS IN YOUR LOADING DOCK, SLASH OVERTIME AND UNLOCK CAPACITY",
    desktopImage: dashboardPreview,
    mobileGallery: [
      { src: dashboardPreview, alt: "Dashboard", style: 'centered' },
      { src: dashboardPreview, alt: "Dashboard", style: 'centered' }
    ]
  },
  howItWorks: {
    title: "HOW IT WORKS",
    subtitle: "Turn historical data into future capacity.",
    steps: [
      {
        stepNumber: 1,
        title: "Track Durations",
        description: "Automatically log the average loading and unloading duration for every different load type.",
        icon: "upload", 
        // FIX: Removed desktopAnnotation from Step 1
        // Space 1: Side Annotation
        mobileAnnotation: "Operations Control: Don't let Sales dictate your inventory flow.",
      },
      {
        stepNumber: 2,
        title: "Refine Labor",
        description: "The system learns exactly how much time and labor you need for specific loads, replacing guesswork with data.",
        icon: "toggle", 
        desktopAnnotation: "Operations Control: Don't let Sales dictate your inventory flow.",
        // Space 2: Footer Annotation
        mobileAnnotation: "Strategy: Use 'Actual Duration' data to justify headcount or equipment budgets.",
        highlight: true,
      },
      {
        stepNumber: 3,
        title: "Allocate Capacity",
        description: "Set the right appointment lengths based on actual need, and watch your dock utilization climb.",
        icon: "refresh", 
      },
    ],
    footerAnnotation: "💡 Strategy: Use 'Actual Duration' data to justify headcount or equipment budgets.",
  },
  testimonial: {
    quote: "The automation features that we're using will literally save our company hundreds of labor hours each year",
    name: "Isaac Morley",
    role: "Director of Operations, Quality Distribution LLC",
    image: "/src/assets/isaacmorley.webp",
  },
  benefits: {
    benefits: [
      { icon: "barChart" as const, title: "Max Utilization", description: "Estimate slot lengths and optimize labor and equipment usage.", },
      { icon: "calendar" as const, title: "Cut Down On Overtime", description: "Forecast demand and right-size shifts to flatten peaks.", },
      { icon: "users" as const, title: "Better Jobs", description: "Improve morale, retention, and safety with balanced workloads.", },
      { icon: "fileCheck" as const, title: "Faster Turnarounds", description: "Coordinate dock, yard, and warehouse to cut down dwell time.", },
      { icon: "database" as const, title: "Continuous Improvement", description: "Pull reports, spot bottlenecks, and refine processes.", },
      { icon: "archive" as const, title: "Absorb the Shock", description: "Handle disruptions and seasonal spikes without changing plans.", },
    ],
  },
  faq: {
    faqs: [
      { question: "How can a dock scheduling system help balance labor and dock utilization more effectively?", answer: "It smooths out the peaks. You can set appointment caps per hour to prevent morning rushes or evening spikes.", },
      { question: "How does it adapt slot lengths for different trailer sizes or product types?", answer: "You set the rules. The system can automatically reserve 2 hours for a 26-pallet load and 30 minutes for a drop-and-hook.", },
      { question: "What happens when unplanned or urgent loads need to be added to the schedule?", answer: "Managers have override permissions. If a VIP load needs to get in, a supervisor can bypass the standard capacity limits.", },
      { question: "How does the system estimate how long each load will take to process?", answer: "Estimates are based on the load attributes you define combined with your facility’s recent and historical performance data.", },
      { question: "What happens when a shift falls behind schedule?", answer: "The timeline view makes the impact visible immediately. If necessary, coordinators can drag-and-drop upcoming appointments.", },
      { question: "What results have other sites seen in turnaround time after implementing this?", answer: "Most sites see a 20–30% reduction in average driver dwell time and a significant drop in overtime labor costs.", },
      { question: "What visibility do supervisors have into workload balance across doors?", answer: "The Schedule View allows coordinators to see all doors side-by-side.", },
      { question: "Which signals does the system use to flag a bottleneck forming during the shift?", answer: "It’s about queue management. If the list of trucks in 'Arrived' status grows while 'Departed' numbers stall, supervisors can see.", },
      { question: "How does the schedule translate into hourly labor needs by door or zone?", answer: "The system provides the volume data, like loads and pallets arriving per hour. Managers can apply their own labor standards.", },
      { question: "How can I standardize dock operating procedures across multiple facilities?", answer: "You can build global templates for appointment types, buffer times, and booking rules. These can be deployed to all sites.", },
      { question: "What’s the most effective method to benchmark dock performance?", answer: "Compare 'Planned Duration' vs. 'Actual Duration.' This variance metric tells you instantly if your operations are running according to plan.", },
      { question: "What level of manual oversight is still required once scheduling is automated?", answer: "The goal is 'management by exception'. The system handles routine bookings, so you only need to step in when there is an issue.", },
    ],
  },
};