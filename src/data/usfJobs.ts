
import { Job } from "../types";

// Mock data for USF part-time jobs
export const usfJobs: Job[] = [
  {
    id: "usf-job-1",
    title: "Library Assistant",
    department: "USF Library",
    location: "USF Tampa Campus Library",
    description: "Assist library staff with book shelving, customer service, and maintaining library resources. Flexible hours available to accommodate class schedules.",
    hoursPerWeek: "10-15",
    pay: "$12.00/hour",
    requirements: [
      "Current USF student",
      "Good organizational skills",
      "Basic computer knowledge"
    ],
    contactEmail: "usflibrary@usf.edu",
    postedDate: "2023-09-15",
    applicationDeadline: "2023-10-15",
    isOnCampus: true
  },
  {
    id: "usf-job-2",
    title: "Student IT Support",
    department: "Information Technology",
    location: "Marshall Student Center",
    description: "Provide technical support to students and faculty. Troubleshoot computer issues, assist with software installation, and help with network connectivity problems.",
    hoursPerWeek: "15-20",
    pay: "$14.50/hour",
    requirements: [
      "Current USF student",
      "IT background or coursework",
      "Customer service experience",
      "Troubleshooting skills"
    ],
    contactEmail: "itsupport@usf.edu",
    postedDate: "2023-09-10",
    applicationDeadline: "2023-10-10",
    isOnCampus: true
  },
  {
    id: "usf-job-3",
    title: "Research Assistant",
    department: "Biology Department",
    location: "Science Center",
    description: "Assist faculty with ongoing research projects. Tasks include data collection, lab maintenance, and literature reviews. Great opportunity to gain research experience.",
    hoursPerWeek: "10-15",
    pay: "$13.75/hour",
    requirements: [
      "Biology major preferred",
      "Minimum GPA of 3.0",
      "Basic lab experience",
      "Attention to detail"
    ],
    contactEmail: "biologyresearch@usf.edu",
    postedDate: "2023-09-05",
    applicationDeadline: "2023-10-05",
    isOnCampus: true
  },
  {
    id: "usf-job-4",
    title: "Campus Recreation Assistant",
    department: "Campus Recreation",
    location: "USF Recreation Center",
    description: "Monitor recreational facilities, assist with equipment checkout, and ensure safety procedures are followed. May include evening and weekend shifts.",
    hoursPerWeek: "12-18",
    pay: "$11.50/hour",
    requirements: [
      "Current USF student",
      "CPR certification (or willingness to obtain)",
      "Customer service skills",
      "Reliable and punctual"
    ],
    contactEmail: "recreation@usf.edu",
    postedDate: "2023-09-20",
    applicationDeadline: "2023-10-20",
    isOnCampus: true
  },
  {
    id: "usf-job-5",
    title: "Writing Tutor",
    department: "Academic Success Center",
    location: "Learning Commons",
    description: "Provide writing assistance to undergraduate students. Help with essay structure, grammar, citation styles, and research strategies.",
    hoursPerWeek: "8-12",
    pay: "$13.00/hour",
    requirements: [
      "Minimum GPA of 3.5",
      "Excellent writing skills",
      "Completion of English Composition I & II with A grades",
      "Patient and supportive attitude"
    ],
    contactEmail: "writingcenter@usf.edu",
    postedDate: "2023-09-12",
    applicationDeadline: "2023-10-12",
    isOnCampus: true
  },
  {
    id: "usf-job-6",
    title: "Student Ambassador",
    department: "Admissions Office",
    location: "Welcome Center",
    description: "Lead campus tours for prospective students and their families. Share your USF experience and provide information about campus resources and academic programs.",
    hoursPerWeek: "10-15",
    pay: "$12.25/hour",
    requirements: [
      "Current USF student with at least 2 semesters completed",
      "Minimum GPA of 3.0",
      "Excellent communication skills",
      "Enthusiasm for USF"
    ],
    contactEmail: "admissions@usf.edu",
    postedDate: "2023-09-08",
    applicationDeadline: "2023-10-08",
    isOnCampus: true
  }
];

// Function to get all USF jobs
export const getAllUSFJobs = (): Job[] => {
  return usfJobs;
};

// Function to get a job by ID
export const getUSFJobById = (id: string): Job | undefined => {
  return usfJobs.find(job => job.id === id);
};
