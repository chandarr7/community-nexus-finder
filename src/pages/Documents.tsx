
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from "@/components/ui/scroll-area";

const Documents = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16 md:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Project Documentation</h1>
              <p className="text-muted-foreground">
                Comprehensive documentation for the Community Connect project, including design principles, implementation details, and more.
              </p>
            </div>
            
            {/* Table of Contents */}
            <div className="bg-accent/20 rounded-lg p-6 mb-10">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li><a href="#proposal" className="text-primary hover:underline">Project Proposal and Requirements</a></li>
                <li><a href="#design" className="text-primary hover:underline">User-Centric Design Document</a></li>
                {/* Additional sections can be added here */}
              </ol>
            </div>
            
            {/* Project Proposal Section */}
            <section id="proposal" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b">1. Project Proposal and Requirements</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Introduction</h3>
              <p className="mb-4">
                The Community Connect system is a comprehensive web application designed to connect students at the University of South Florida with campus events, resources, and community opportunities. It serves as a centralized platform where students can discover events, find housing options, explore job opportunities, and engage with various campus groups, all within a unified ecosystem.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Problem Statement</h3>
              <p className="mb-4">
                USF students currently face challenges in efficiently finding relevant campus activities, local housing, job opportunities, and connecting with peers sharing similar interests. Information is scattered across multiple platforms, departmental websites, and physical bulletin boards, creating a fragmented experience. This leads to missed opportunities, reduced campus engagement, and an overall diminished sense of community. Additionally, many students, especially newcomers or international students, struggle to navigate the complex university ecosystem, causing them to miss valuable resources that could enhance their academic and social experience.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Techniques Used for Requirements Gathering</h3>
              <ol className="list-decimal list-inside space-y-2 pl-4 mb-4">
                <li>
                  <span className="font-medium">User Interviews:</span> Conducted structured interviews with diverse student populations (undergraduate, graduate, international, commuters) to understand their needs and pain points.
                </li>
                <li>
                  <span className="font-medium">Surveys:</span> Distributed online questionnaires to capture quantitative data on student preferences and priorities.
                </li>
                <li>
                  <span className="font-medium">Competitive Analysis:</span> Evaluated existing university community platforms and social networking apps to identify best practices and opportunities for innovation.
                </li>
                <li>
                  <span className="font-medium">Contextual Inquiry:</span> Observed students in their natural campus environment to understand how they currently discover and engage with campus activities.
                </li>
                <li>
                  <span className="font-medium">Focus Groups:</span> Facilitated discussions with student organizations and campus administrators to gather collective insights.
                </li>
                <li>
                  <span className="font-medium">Document Analysis:</span> Reviewed university communications, event calendars, and housing listings to identify information distribution patterns.
                </li>
              </ol>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Stakeholder Analysis</h3>
              <div className="mb-4">
                <h4 className="font-medium mb-2">Primary Stakeholders:</h4>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li><span className="font-medium">Students:</span> The end-users who will use the system to discover opportunities and connect with the community.</li>
                  <li><span className="font-medium">Student Organizations:</span> Groups that create and promote events through the platform.</li>
                  <li><span className="font-medium">University Administration:</span> Oversees the system and ensures alignment with university policies and goals.</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Secondary Stakeholders:</h4>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li><span className="font-medium">Faculty and Staff:</span> May use the system to promote academic events or opportunities.</li>
                  <li><span className="font-medium">Local Businesses:</span> Potential advertisers or partners providing student discounts and opportunities.</li>
                  <li><span className="font-medium">Housing Providers:</span> On and off-campus housing entities listing available accommodations.</li>
                  <li><span className="font-medium">Employers:</span> Organizations posting job and internship opportunities for students.</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Functional Requirements</h3>
              <ul className="space-y-4 mb-4">
                <li>
                  <p className="font-medium">User Authentication and Profiles</p>
                  <ul className="list-disc list-inside pl-4">
                    <li>Secure login using university credentials</li>
                    <li>Customizable student profiles with interests, major, and preferences</li>
                    <li>Privacy controls for information sharing</li>
                  </ul>
                </li>
                <li>
                  <p className="font-medium">Event Discovery and Management</p>
                  <ul className="list-disc list-inside pl-4">
                    <li>Browse and search events by category, date, location</li>
                    <li>Filter events based on user preferences and interests</li>
                    <li>Create and manage events for authorized users</li>
                    <li>RSVP functionality and attendance tracking</li>
                  </ul>
                </li>
                {/* Additional requirements shortened for brevity */}
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Non-Functional Requirements</h3>
              <ul className="space-y-4 mb-4">
                <li>
                  <p className="font-medium">Performance</p>
                  <ul className="list-disc list-inside pl-4">
                    <li>Page load time under 2 seconds</li>
                    <li>Support for at least 10,000 concurrent users</li>
                    <li>Responsive design across all device types and screen sizes</li>
                  </ul>
                </li>
                <li>
                  <p className="font-medium">Security</p>
                  <ul className="list-disc list-inside pl-4">
                    <li>End-to-end encryption for sensitive communications</li>
                    <li>Compliance with FERPA regulations for student data</li>
                    <li>Regular security audits and vulnerability testing</li>
                  </ul>
                </li>
                {/* Additional requirements shortened for brevity */}
              </ul>
            </section>
            
            {/* User-Centric Design Document Section */}
            <section id="design" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b">2. User-Centric Design Document</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">UX/UI Design Principles</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium mb-2">1. Consistency and Standards</h4>
                  <p className="pl-4">
                    Community Connect implements a consistent design system across all pages to ensure users can navigate intuitively. We maintain:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-8 mt-2">
                    <li>Unified color scheme based on USF's brand guidelines (green primary color with complementary accents)</li>
                    <li>Standardized component library using Shadcn UI for consistent interactive elements</li>
                    <li>Persistent navigation patterns (header with primary links, context-specific side navigation)</li>
                    <li>Consistent typography hierarchy to establish information precedence</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">2. User Control and Freedom</h4>
                  <p className="pl-4">
                    The application provides users with clear control over their actions and easy ways to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-8 mt-2">
                    <li>Undo actions through confirmation dialogs before permanent changes</li>
                    <li>Navigate back to previous states via breadcrumb navigation</li>
                    <li>Customize their experience through preference settings</li>
                    <li>Exit unwanted states through clearly marked cancel options in forms and modals</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">3. Recognition Rather than Recall</h4>
                  <p className="pl-4">
                    The interface minimizes cognitive load by:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-8 mt-2">
                    <li>Using familiar iconography (bell for notifications, calendar for events)</li>
                    <li>Implementing contextual filters that adapt to the current view</li>
                    <li>Providing visual cues and tooltips for interactive elements</li>
                    <li>Auto-suggesting search terms based on previous user activity</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">4. Flexibility and Efficiency</h4>
                  <p className="pl-4">
                    The system caters to both novice and experienced users through:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-8 mt-2">
                    <li>Progressive disclosure of advanced features</li>
                    <li>Personalized recommendations based on user behavior</li>
                    <li>Multiple navigation paths to access the same information</li>
                    <li>Responsive design that adapts to various devices and screen sizes</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">5. Aesthetic and Minimalist Design</h4>
                  <p className="pl-4">
                    The interface embraces minimalism while maintaining visual appeal through:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-8 mt-2">
                    <li>Clean layout with appropriate white space</li>
                    <li>Visual hierarchy that guides users to important information</li>
                    <li>Progressive loading of content to prevent information overload</li>
                    <li>Thoughtful use of color to emphasize actions and statuses</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mt-8 mb-3">HCI Best Practices</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium mb-2">1. Cognitive Load Management</h4>
                  <p className="pl-4">
                    To address the challenge of information overload, Community Connect implements:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-8 mt-2">
                    <li>Chunking of related information into digestible sections</li>
                    <li>Progressive disclosure to reveal information only when needed</li>
                    <li>Clear categorization and filtering systems for content discovery</li>
                    <li>Visual cues to distinguish between different types of content</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">2. Error Prevention and Recovery</h4>
                  <p className="pl-4">
                    The system minimizes errors through:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-8 mt-2">
                    <li>Inline form validation with real-time feedback</li>
                    <li>Confirmation dialogs for destructive or irreversible actions</li>
                    <li>Clear error messages with actionable resolution steps</li>
                    <li>Auto-save functionality for form data to prevent loss of input</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">3. Accessibility Considerations</h4>
                  <p className="pl-4">
                    Community Connect addresses inclusive design through:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-8 mt-2">
                    <li>WCAG 2.1 AA compliance for all interface elements</li>
                    <li>Keyboard navigation support throughout the application</li>
                    <li>Sufficient color contrast ratios for text legibility</li>
                    <li>Screen reader compatible markup and ARIA attributes</li>
                    <li>Responsive design that accommodates various input methods</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">4. Mental Model Alignment</h4>
                  <p className="pl-4">
                    The interface aligns with users' expectations by:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-8 mt-2">
                    <li>Using familiar patterns from social platforms for community features</li>
                    <li>Implementing marketplace conventions for housing and jobs sections</li>
                    <li>Adopting calendar-based interaction models for event discovery</li>
                    <li>Leveraging established messaging patterns for communication features</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mt-8 mb-3">Prototyping and User Testing</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium mb-2">1. Prototyping Methodology</h4>
                  <p className="pl-4">
                    Our design process utilized a multi-stage prototyping approach:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-8 mt-2">
                    <li><span className="font-medium">Low-fidelity wireframes:</span> Initial sketches and paper prototypes to establish basic layout and information architecture</li>
                    <li><span className="font-medium">Mid-fidelity wireframes:</span> Digital grayscale prototypes with basic interactions to validate navigation flows</li>
                    <li><span className="font-medium">High-fidelity mockups:</span> Detailed visual designs incorporating color, typography, and refined UI components</li>
                    <li><span className="font-medium">Interactive prototypes:</span> Clickable prototypes built with design tools to simulate real user interactions</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">2. User Testing Strategies</h4>
                  <p className="pl-4">
                    Multiple testing methodologies were employed throughout the development cycle:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-8 mt-2">
                    <li><span className="font-medium">Usability testing:</span> Moderated sessions with representative users attempting specific tasks</li>
                    <li><span className="font-medium">Heuristic evaluation:</span> Expert review against established usability heuristics</li>
                    <li><span className="font-medium">A/B testing:</span> Comparison of alternative designs for key interactions</li>
                    <li><span className="font-medium">Accessibility audits:</span> Systematic evaluation of interface against WCAG guidelines</li>
                    <li><span className="font-medium">First-click testing:</span> Analysis of users' initial navigational choices</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">3. Key Findings and Design Iterations</h4>
                  <p className="pl-4">
                    User testing revealed several insights that informed design iterations:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-8 mt-2">
                    <li>Initial testing showed confusion around event categories, leading to a redesigned categorization system with visual icons</li>
                    <li>Mobile navigation was refined after discovery that users struggled with the original bottom navigation pattern</li>
                    <li>The event registration flow was simplified from a 3-step to a 2-step process based on completion rate data</li>
                    <li>Housing search filters were reprioritized after watching users' search behavior patterns</li>
                    <li>Notification preferences were expanded based on user feedback requesting more granular control</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">4. Continuous Improvement Framework</h4>
                  <p className="pl-4">
                    The design process establishes ongoing evaluations through:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-8 mt-2">
                    <li>Analytics implementation to monitor user behavior patterns</li>
                    <li>Feedback mechanisms integrated throughout the interface</li>
                    <li>Quarterly usability testing sessions with representative user groups</li>
                    <li>Feature-specific surveys after major updates or new feature releases</li>
                    <li>Maintenance of a user research repository to inform future design decisions</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documents;

