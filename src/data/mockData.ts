import { Student, AcademicRecord, SkillAssessment, InternshipApplication, JobListing, DashboardStats } from '@/types';

export const currentStudent: Student = {
  id: '1',
  name: 'Bhargab Saikia',
  email: 'bhargab.sharma@college.edu',
  rollNumber: 'CSE21B001',
  course: 'Computer Science Engineering',
  year: 3,
  cgpa: 8.7,
  skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Machine Learning', 'SQL'],
  profileCompleteness: 85,
  placementStatus: 'applied'
};

export const academicRecords: AcademicRecord[] = [
  {
    semester: 'Semester 1',
    cgpa: 8.2,
    subjects: [
      { name: 'Mathematics I', grade: 'A', credits: 4 },
      { name: 'Physics', grade: 'A-', credits: 3 },
      { name: 'Programming in C', grade: 'A+', credits: 4 }
    ]
  },
  {
    semester: 'Semester 2',
    cgpa: 8.5,
    subjects: [
      { name: 'Mathematics II', grade: 'A', credits: 4 },
      { name: 'Data Structures', grade: 'A+', credits: 4 },
      { name: 'Digital Logic', grade: 'A-', credits: 3 }
    ]
  },
  {
    semester: 'Semester 3',
    cgpa: 8.8,
    subjects: [
      { name: 'Algorithms', grade: 'A+', credits: 4 },
      { name: 'Database Systems', grade: 'A', credits: 4 },
      { name: 'Computer Networks', grade: 'A', credits: 3 }
    ]
  },
  {
    semester: 'Semester 4',
    cgpa: 9.1,
    subjects: [
      { name: 'Operating Systems', grade: 'A+', credits: 4 },
      { name: 'Software Engineering', grade: 'A+', credits: 4 },
      { name: 'Web Development', grade: 'A', credits: 3 }
    ]
  },
  {
    semester: 'Semester 5',
    cgpa: 8.9,
    subjects: [
      { name: 'Machine Learning', grade: 'A+', credits: 4 },
      { name: 'System Design', grade: 'A', credits: 4 },
      { name: 'Mobile Development', grade: 'A-', credits: 3 }
    ]
  }
];

export const skillAssessments: SkillAssessment[] = [
  {
    skill: 'JavaScript Programming',
    score: 92,
    maxScore: 100,
    category: 'technical',
    completedAt: '2024-01-15'
  },
  {
    skill: 'React Development',
    score: 88,
    maxScore: 100,
    category: 'technical',
    completedAt: '2024-01-20'
  },
  {
    skill: 'Logical Reasoning',
    score: 85,
    maxScore: 100,
    category: 'aptitude',
    completedAt: '2024-01-25'
  },
  {
    skill: 'Quantitative Aptitude',
    score: 78,
    maxScore: 100,
    category: 'aptitude',
    completedAt: '2024-02-01'
  },
  {
    skill: 'Communication Skills',
    score: 82,
    maxScore: 100,
    category: 'communication',
    completedAt: '2024-02-05'
  },
  {
    skill: 'Data Structures & Algorithms',
    score: 94,
    maxScore: 100,
    category: 'technical',
    completedAt: '2024-02-10'
  }
];

export const internshipApplications: InternshipApplication[] = [
  {
    id: '1',
    companyName: 'Google',
    position: 'Software Engineer Intern',
    status: 'shortlisted',
    appliedDate: '2024-02-01',
    salary: 80000,
    location: 'Bangalore',
    type: 'internship'
  },
  {
    id: '2',
    companyName: 'Microsoft',
    position: 'Product Manager Intern',
    status: 'interview-scheduled',
    appliedDate: '2024-02-05',
    salary: 75000,
    location: 'Hyderabad',
    type: 'internship'
  },
  {
    id: '3',
    companyName: 'Amazon',
    position: 'Full Stack Developer',
    status: 'applied',
    appliedDate: '2024-02-10',
    salary: 120000,
    location: 'Mumbai',
    type: 'full-time'
  },
  {
    id: '4',
    companyName: 'Flipkart',
    position: 'Backend Developer',
    status: 'selected',
    appliedDate: '2024-01-20',
    salary: 110000,
    location: 'Bangalore',
    type: 'full-time'
  },
  {
    id: '5',
    companyName: 'Zomato',
    position: 'Frontend Developer Intern',
    status: 'rejected',
    appliedDate: '2024-01-15',
    salary: 40000,
    location: 'Delhi',
    type: 'internship'
  }
];

export const jobListings: JobListing[] = [
  {
    id: '1',
    company: {
      id: 'c1',
      name: 'TechCorp Solutions',
      description: 'Leading technology solutions provider',
      industry: 'Technology',
      size: '1000-5000',
      location: 'Bangalore'
    },
    title: 'Software Development Intern',
    description: 'Join our dynamic team to work on cutting-edge projects using React, Node.js, and cloud technologies.',
    requirements: ['React.js', 'JavaScript', 'Node.js', 'Git', 'Problem Solving'],
    salary: { min: 25000, max: 40000, currency: 'INR' },
    location: 'Bangalore',
    type: 'internship',
    duration: '6 months',
    postedDate: '2024-02-15',
    deadline: '2024-03-15',
    isActive: true,
    tags: ['Remote', 'Full-time', 'Tech']
  },
  {
    id: '2',
    company: {
      id: 'c2',
      name: 'DataFlow Analytics',
      description: 'Data science and analytics company',
      industry: 'Analytics',
      size: '100-500',
      location: 'Pune'
    },
    title: 'Data Science Intern',
    description: 'Work with large datasets and build machine learning models for business insights.',
    requirements: ['Python', 'Machine Learning', 'SQL', 'Statistics', 'Pandas'],
    salary: { min: 30000, max: 50000, currency: 'INR' },
    location: 'Pune',
    type: 'internship',
    duration: '4 months',
    postedDate: '2024-02-12',
    deadline: '2024-03-10',
    isActive: true,
    tags: ['On-site', 'Data Science', 'AI/ML']
  },
  {
    id: '3',
    company: {
      id: 'c3',
      name: 'FinTech Innovations',
      description: 'Revolutionary financial technology solutions',
      industry: 'Financial Services',
      size: '500-1000',
      location: 'Mumbai'
    },
    title: 'Full Stack Developer',
    description: 'Build scalable web applications for financial services using modern technologies.',
    requirements: ['React', 'Node.js', 'MongoDB', 'Express.js', 'AWS'],
    salary: { min: 800000, max: 1200000, currency: 'INR' },
    location: 'Mumbai',
    type: 'full-time',
    postedDate: '2024-02-18',
    deadline: '2024-04-01',
    isActive: true,
    tags: ['Full-time', 'FinTech', 'Remote Options']
  }
];

export const dashboardStats: DashboardStats = {
  totalApplications: 15,
  shortlistedApplications: 5,
  interviewsScheduled: 3,
  offersReceived: 2,
  profileViews: 127,
  skillScore: 87
};

export const cgpaData = [
  { semester: 'Sem 1', cgpa: 8.2 },
  { semester: 'Sem 2', cgpa: 8.5 },
  { semester: 'Sem 3', cgpa: 8.8 },
  { semester: 'Sem 4', cgpa: 9.1 },
  { semester: 'Sem 5', cgpa: 8.9 }
];

export const skillsRadarData = [
  { skill: 'Programming', score: 92, maxScore: 100 },
  { skill: 'Problem Solving', score: 88, maxScore: 100 },
  { skill: 'Communication', score: 82, maxScore: 100 },
  { skill: 'Leadership', score: 75, maxScore: 100 },
  { skill: 'Teamwork', score: 90, maxScore: 100 },
  { skill: 'Technical Knowledge', score: 94, maxScore: 100 }
];

export const applicationStatusData = [
  { status: 'Applied', count: 8 },
  { status: 'Shortlisted', count: 5 },
  { status: 'Interview', count: 3 },
  { status: 'Selected', count: 2 },
  { status: 'Rejected', count: 4 }
];