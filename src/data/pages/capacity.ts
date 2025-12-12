import { defaultContent } from "./digitize";
import type { PageContent } from "@/data/types";

// Specific Assets
import dashboardPreview from "@/assets/dashboard-preview.webp";
import capSchedule from "@/assets/solutionsscreenshots/capacity/scheduleview.webp";

export const capacityContent: PageContent = {
  ...defaultContent,
  digitizeGallery: undefined,
  hero: {
    ...defaultContent.hero,
    headline: "ELIMINATE BOTTLENECKS IN YOUR LOADING DOCK, SLASH OVERTIME AND UNLOCK CAPACITY",
    desktopImage: dashboardPreview,
    mobileGallery: [
      { src: dashboardPreview, alt: "Dashboard", style: 'centered' },
      { src: dashboardPreview, alt: "Dashboard", style: 'centered' }
    ]
  },
  capacityGallery: {
    staticImage: capSchedule
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
        mobileAnnotation: "Operations Control: Don't let Sales dictate your inventory flow.",
      },
      {
        stepNumber: 2,
        title: "Refine Labor",
        description: "The system learns exactly how much time and labor you need for specific loads, replacing guesswork with data.",
        icon: "toggle", 
        desktopAnnotation: "Operations Control: Don't let Sales dictate your inventory flow.",
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
      { icon: "barChart", title: "Max Utilization", description: "Estimate slot lengths and optimize labor and equipment usage.", },
      { icon: "calendar", title: "Cut Down On Overtime", description: "Forecast demand and right-size shifts to flatten peaks.", },
      { icon: "users", title: "Better Jobs", description: "Improve morale, retention, and safety with balanced workloads.", },
      { icon: "fileCheck", title: "Faster Turnarounds", description: "Coordinate dock, yard, and warehouse to cut down dwell time.", },
      { icon: "database", title: "Continuous Improvement", description: "Pull reports, spot bottlenecks, and refine processes.", },
      { icon: "archive", title: "Absorb the Shock", description: "Handle disruptions and seasonal spikes without changing plans.", },
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
      { question: "What level of manual oversight is still required once scheduling is automated?", answer: "The goal is 'management by exception'. The system handles routine bookings, so you only need to step in when there is an issue to resolve.", },
    ],
  },
};