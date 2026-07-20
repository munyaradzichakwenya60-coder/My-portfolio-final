export const caseStudies = {
  "Restaurant Project": {
    name: "Restaurant Project (Order.uk)",
    problem: "Local boutique restaurants and delivery businesses often face high commission overheads and complex tech setups when using third-party aggregators. They require an independent, fast, and responsive digital presence that showcases menus, deals, and enables real-time reservations without layout bugs on mobile devices.",
    solution: "Designed and built a mobile-first web portal with dynamic menu views, promo codes, and interactive FAQ tabs. To prevent horizontal shaking on mobile, a strict styling architecture was implemented: absolute elements like character graphics and overlap elements are hidden on mobile, sections utilize clamp-based fluid spacing, and horizontal scrolls are isolated correctly.",
    keyFeature: "Custom fluid CSS structures and media query rules that eliminate horizontal page layout shifts, maintaining zero layout shaking even on extra-small mobile screen sizes."
  },
  "Apple-cloneV2": {
    name: "Apple-cloneV2",
    problem: "Premium brand landing pages need to command the user's attention from the first split-second. This requires pixel-perfect replicate layouts, high-fidelity dark-mode themes, and subtle micro-interactions that feel responsive and alive.",
    solution: "Replicated a section of the Apple website using React and Vite. Focused on creating a polished, minimalist layout using Styled Components with deep contrast gradients, premium typography spacing, and active interactive elements to simulate the high-end feel of the official site.",
    keyFeature: "Integrated interactive product slider controls and smooth CSS hover animations that mirror Apple's official component feel."
  },
  "Event Planners": {
    name: "Event Planners",
    problem: "Planning detailed family or business events (like weddings or conferences) involves coordinating multiple schedules, programs, vendors, and checklist items. Users need a visual, centralized dashboard to overview steps, track progress, and review plans.",
    solution: "Developed a comprehensive planner layout with responsive card modules, schedule badges, and clear step-by-step progress tracking. The dashboard adapts dynamically from desktop grid columns to single-column phone cards.",
    keyFeature: "A clean, responsive dashboard grid utilizing CSS Grid Auto-fit with responsive media constraints to present step tracking elegantly on screens of all sizes."
  }
};
