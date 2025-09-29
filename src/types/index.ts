export interface Student {
  id: string;
  name: string;
  email: string;
  rollNumber: string;
  course: string;
  year: number;
  cgpa: number;
  avatar?: string;
  skills: string[];
  profileCompleteness: number;
  placementStatus: 'not-applied' | 'applied' | 'shortlisted' | 'selected' | 'rejected';
}

export interface AcademicRecord {
  semester: string;
  cgpa: number;
  subjects: {
    name: string;
    grade: string;
    credits: number;
  }[];
}

export interface SkillAssessment {
  skill: string;
  score: number;
  maxScore: number;
  category: 'technical' | 'aptitude' | 'communication';
  completedAt: string;
}

export interface InternshipApplication {
  id: string;
  companyName: string;
  position: string;
  status: 'applied' | 'shortlisted' | 'interview-scheduled' | 'selected' | 'rejected';
  appliedDate: string;
  salary?: number;
  location: string;
  type: 'internship' | 'full-time';
}

export interface Company {
  id: string;
  name: string;
  logo?: string;
  description: string;
  website?: string;
  industry: string;
  size: string;
  location: string;
}

export interface JobListing {
  id: string;
  company: Company;
  title: string;
  description: string;
  requirements: string[];
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  location: string;
  type: 'internship' | 'full-time' | 'part-time';
  duration?: string;
  postedDate: string;
  deadline: string;
  isActive: boolean;
  tags: string[];
}

export type UserRole = 'student' | 'faculty' | 'placement-cell' | 'alumni' | 'industry';

export interface DashboardStats {
  totalApplications: number;
  shortlistedApplications: number;
  interviewsScheduled: number;
  offersReceived: number;
  profileViews: number;
  skillScore: number;
}