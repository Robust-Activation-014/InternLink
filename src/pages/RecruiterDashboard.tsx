import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  Eye,
  Calendar,
  Target,
  BarChart3,
  Search,
  Filter,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Award,
  Globe,
  Plus,
  Edit,
  Trash2,
  Upload,
  Download,
  Send,
  MessageSquare,
  Building2,
  User,
  FileText,
  FileCheck,
  Settings
} from 'lucide-react';
import { StatsCard } from '@/components/Dashboard/StatsCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const recruiterStats = {
  totalCandidates: 2450,
  shortlistedCandidates: 156,
  interviewsScheduled: 89,
  offersExtended: 23
};

const companyProfile = {
  name: "TechCorp Solutions",
  logo: "/api/placeholder/80/80",
  description: "Leading technology company specializing in innovative software solutions and digital transformation services.",
  website: "https://techcorp.com",
  email: "hr@techcorp.com",
  phone: "+1 (555) 123-4567",
  address: "123 Tech Street, Silicon Valley, CA 94000",
  industry: "Technology",
  size: "500-1000 employees",
  founded: "2010"
};

const jobPostings = [
  {
    id: 1,
    title: "Software Engineering Intern",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    salary: "₹25,000/month",
    requirements: ["Python", "React", "Node.js"],
    description: "Join our engineering team to work on cutting-edge projects...",
    postedDate: "2024-01-15",
    applicants: 45,
    status: "active"
  },
  {
    id: 2,
    title: "Data Science Intern",
    department: "Data Science",
    type: "Full-time",
    location: "Hybrid",
    salary: "₹30,000/month",
    requirements: ["Python", "Machine Learning", "SQL"],
    description: "Work with our data science team on AI/ML projects...",
    postedDate: "2024-01-10",
    applicants: 32,
    status: "active"
  }
];

const candidatePool = [
  {
    id: 1,
    name: "Bhargab Saikia",
    email: "bhargab@example.com",
    department: "Computer Science",
    skills: ["React", "Node.js", "Python"],
    experience: "2 years",
    rating: 4.8,
    status: "available",
    avatar: "/api/placeholder/40/40",
    location: "Mumbai"
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya@example.com",
    department: "Data Science",
    skills: ["Machine Learning", "Python", "TensorFlow"],
    experience: "3 years",
    rating: 4.9,
    status: "shortlisted",
    avatar: "/api/placeholder/40/40",
    location: "Bangalore"
  },
  {
    id: 3,
    name: "Rahul Kumar",
    email: "rahul@example.com",
    department: "Computer Science",
    skills: ["Java", "Spring Boot", "AWS"],
    experience: "1 year",
    rating: 4.6,
    status: "available",
    avatar: "/api/placeholder/40/40",
    location: "Delhi"
  }
];

const applicationManagement = [
  {
    id: 1,
    candidate: "Bhargab Saikia",
    position: "Software Engineering Intern",
    appliedDate: "2024-01-15",
    status: "under_review",
    experience: "2 years",
    skills: ["React", "JavaScript", "CSS"],
    interviewDate: null,
    interviewLocation: null
  },
  {
    id: 2,
    candidate: "Priya Patel",
    position: "Data Science Intern",
    appliedDate: "2024-01-14",
    status: "shortlisted",
    experience: "3 years",
    skills: ["Python", "ML", "Statistics"],
    interviewDate: "2024-01-25",
    interviewLocation: "Conference Room A"
  },
  {
    id: 3,
    candidate: "Rahul Kumar",
    position: "Backend Developer",
    appliedDate: "2024-01-13",
    status: "rejected",
    experience: "1 year",
    skills: ["Java", "Spring", "MySQL"],
    interviewDate: null,
    interviewLocation: null
  }
];

const feedbackSubmissions = [
  {
    id: 1,
    candidate: "Bhargab Saikia",
    position: "Software Engineering Intern",
    rating: 4.5,
    comments: "Excellent technical skills, needs improvement in communication",
    submittedDate: "2024-01-25",
    status: "submitted"
  },
  {
    id: 2,
    candidate: "Priya Patel",
    position: "Data Science Intern",
    rating: 4.8,
    comments: "Outstanding performance, recommended for full-time offer",
    submittedDate: "2024-01-20",
    status: "submitted"
  }
];

const topCandidates = [
  {
    id: 1,
    name: "Bhargab Saikia",
    email: "bhargab@example.com",
    skills: ["React", "Node.js", "Python"],
    experience: "2 years",
    rating: 4.8,
    status: "shortlisted",
    avatar: "/api/placeholder/40/40",
    location: "Mumbai"
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya@example.com",
    skills: ["Machine Learning", "Python", "TensorFlow"],
    experience: "3 years",
    rating: 4.9,
    status: "interviewed",
    avatar: "/api/placeholder/40/40",
    location: "Bangalore"
  },
  {
    id: 3,
    name: "Rahul Kumar",
    email: "rahul@example.com",
    skills: ["Java", "Spring Boot", "AWS"],
    experience: "1 year",
    rating: 4.6,
    status: "applied",
    avatar: "/api/placeholder/40/40",
    location: "Delhi"
  }
];

const recentApplications = [
  {
    id: 1,
    candidate: "Bhargab Saikia",
    position: "Frontend Developer",
    appliedDate: "2024-01-15",
    status: "under_review",
    experience: "2 years",
    skills: ["React", "JavaScript", "CSS"]
  },
  {
    id: 2,
    candidate: "Priya Patel",
    position: "Data Scientist",
    appliedDate: "2024-01-14",
    status: "shortlisted",
    experience: "3 years",
    skills: ["Python", "ML", "Statistics"]
  },
  {
    id: 3,
    candidate: "Rahul Kumar",
    position: "Backend Developer",
    appliedDate: "2024-01-13",
    status: "rejected",
    experience: "1 year",
    skills: ["Java", "Spring", "MySQL"]
  }
];


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function RecruiterDashboard() {
  const [isCreateJobOpen, setIsCreateJobOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [feedbackComment, setFeedbackComment] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'shortlisted': return 'bg-green-500';
      case 'interviewed': return 'bg-blue-500';
      case 'applied': return 'bg-yellow-500';
      case 'under_review': return 'bg-orange-500';
      case 'rejected': return 'bg-red-500';
      case 'available': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'shortlisted': return <CheckCircle className="h-4 w-4" />;
      case 'interviewed': return <Calendar className="h-4 w-4" />;
      case 'applied': return <Clock className="h-4 w-4" />;
      case 'under_review': return <Eye className="h-4 w-4" />;
      case 'rejected': return <AlertCircle className="h-4 w-4" />;
      case 'available': return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'shortlisted': return 'Shortlisted';
      case 'interviewed': return 'Interviewed';
      case 'applied': return 'Applied';
      case 'under_review': return 'Under Review';
      case 'rejected': return 'Rejected';
      case 'available': return 'Available';
      default: return 'Unknown';
    }
  };

  const handleCreateJob = () => {
    console.log('Creating new job posting');
    setIsCreateJobOpen(false);
  };

  const handleEditProfile = () => {
    console.log('Editing company profile');
    setIsEditProfileOpen(false);
  };

  const handleSubmitFeedback = (candidateId: number) => {
    console.log('Submitting feedback for candidate:', candidateId, 'Rating:', feedbackRating, 'Comment:', feedbackComment);
    setFeedbackComment('');
    setFeedbackRating(0);
    setSelectedCandidate(null);
  };

  const handleCertificateTrigger = (candidateId: number) => {
    console.log('Triggering certificate generation for candidate:', candidateId);
  };

  const handleApplicationAction = (applicationId: number, action: string) => {
    console.log('Application action:', action, 'for application:', applicationId);
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Recruiter Dashboard 💼
        </h1>
        <p className="text-muted-foreground mt-2">
          Find and hire the best talent from our platform.
        </p>
      </div>

      {/* Stats Cards */}
      <motion.div 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <StatsCard
            title="Total Candidates"
            value={recruiterStats.totalCandidates}
            description="Available for hire"
            icon={<Users className="h-5 w-5" />}
            trend={{ value: 8, isPositive: true }}
          />
        </motion.div>
        
        <motion.div variants={item}>
          <StatsCard
            title="Shortlisted"
            value={recruiterStats.shortlistedCandidates}
            description="Candidates of interest"
            icon={<Target className="h-5 w-5" />}
            trend={{ value: 12, isPositive: true }}
          />
        </motion.div>
        
        <motion.div variants={item}>
          <StatsCard
            title="Interviews Scheduled"
            value={recruiterStats.interviewsScheduled}
            description="This month"
            icon={<Calendar className="h-5 w-5" />}
            trend={{ value: 15, isPositive: true }}
          />
        </motion.div>
        
        <motion.div variants={item}>
          <StatsCard
            title="Offers Extended"
            value={recruiterStats.offersExtended}
            description="Successful hires"
            icon={<Award className="h-5 w-5" />}
            trend={{ value: 5, isPositive: true }}
          />
        </motion.div>
      </motion.div>

      {/* Company Profile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Company Profile</CardTitle>
            <Dialog open={isEditProfileOpen} onOpenChange={setIsEditProfileOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Edit Company Profile</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Company Name</label>
                      <Input defaultValue={companyProfile.name} />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Industry</label>
                      <Input defaultValue={companyProfile.industry} />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <Textarea defaultValue={companyProfile.description} rows={4} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <Input defaultValue={companyProfile.email} />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Phone</label>
                      <Input defaultValue={companyProfile.phone} />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Address</label>
                    <Textarea defaultValue={companyProfile.address} rows={2} />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsEditProfileOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleEditProfile}>
                      Save Changes
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="flex items-start space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={companyProfile.logo} />
                <AvatarFallback>{companyProfile.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-xl font-bold">{companyProfile.name}</h3>
                <p className="text-muted-foreground mb-4">{companyProfile.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Website</p>
                    <p className="font-medium">{companyProfile.website}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Email</p>
                    <p className="font-medium">{companyProfile.email}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Phone</p>
                    <p className="font-medium">{companyProfile.phone}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Size</p>
                    <p className="font-medium">{companyProfile.size}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Post Opportunities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Post Opportunities</CardTitle>
            <Dialog open={isCreateJobOpen} onOpenChange={setIsCreateJobOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Posting
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create New Job Posting</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Job Title</label>
                      <Input placeholder="e.g., Software Engineering Intern" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Department</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="engineering">Engineering</SelectItem>
                          <SelectItem value="data-science">Data Science</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Type</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">Full-time</SelectItem>
                          <SelectItem value="part-time">Part-time</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Location</label>
                      <Input placeholder="e.g., Remote, Mumbai" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Salary</label>
                    <Input placeholder="e.g., ₹25,000/month" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Requirements</label>
                    <Input placeholder="e.g., Python, React, Node.js" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <Textarea placeholder="Describe the role and responsibilities..." rows={4} />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsCreateJobOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleCreateJob}>
                      Create Posting
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent className="space-y-4">
            {jobPostings.map((job) => (
              <div key={job.id} className="p-4 bg-muted/50 rounded-lg border">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium">{job.title}</h4>
                    <p className="text-sm text-muted-foreground">{job.department} • {job.type} • {job.location}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={job.status === 'active' ? 'default' : 'secondary'}>
                      {job.status}
                    </Badge>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Salary</p>
                    <p className="font-medium">{job.salary}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Posted</p>
                    <p className="font-medium">{new Date(job.postedDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Applicants</p>
                    <p className="font-medium">{job.applicants}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Status</p>
                    <p className="font-medium capitalize">{job.status}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-3">
                  {job.requirements.map((req, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {req}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Candidate Pool */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Candidate Pool</CardTitle>
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Search candidates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-48"
                />
                <Select value={filterDepartment} onValueChange={setFilterDepartment}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="ds">Data Science</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {candidatePool.map((candidate) => (
                <div key={candidate.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={candidate.avatar} />
                      <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{candidate.name}</p>
                      <p className="text-sm text-muted-foreground">{candidate.department} • {candidate.experience} • {candidate.location}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        {candidate.skills.slice(0, 3).map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-medium">{candidate.rating}</span>
                      <div className={`p-1 rounded-full ${getStatusColor(candidate.status)}`}>
                        {getStatusIcon(candidate.status)}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {getStatusText(candidate.status)}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Application Management */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Application Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {applicationManagement.map((application) => (
                <div key={application.id} className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{application.candidate}</h4>
                    <Badge variant="outline" className="text-xs">
                      {application.status.replace('_', ' ')}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{application.position}</p>
                  <div className="flex items-center text-xs text-muted-foreground space-x-4 mb-3">
                    <span>{application.experience}</span>
                    <span>{new Date(application.appliedDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1 mb-3">
                    {application.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  {application.interviewDate && (
                    <div className="text-xs text-muted-foreground mb-2">
                      Interview: {new Date(application.interviewDate).toLocaleDateString()} at {application.interviewLocation}
                    </div>
                  )}
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" onClick={() => handleApplicationAction(application.id, 'accept')}>
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Accept
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleApplicationAction(application.id, 'shortlist')}>
                      <Target className="h-4 w-4 mr-1" />
                      Shortlist
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleApplicationAction(application.id, 'reject')}>
                      <AlertCircle className="h-4 w-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Feedback Submission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Feedback Submission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Select onValueChange={(value) => setSelectedCandidate(parseInt(value))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select candidate for feedback" />
                  </SelectTrigger>
                  <SelectContent>
                    {candidatePool.map((candidate) => (
                      <SelectItem key={candidate.id} value={candidate.id.toString()}>
                        {candidate.name} - {candidate.department}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <div>
                  <label className="text-sm font-medium">Rating (1-5)</label>
                  <div className="flex items-center space-x-2 mt-1">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <Star
                        key={rating}
                        className={`h-5 w-5 cursor-pointer ${
                          rating <= feedbackRating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                        }`}
                        onClick={() => setFeedbackRating(rating)}
                      />
                    ))}
                  </div>
                </div>

                <Textarea
                  placeholder="Add your feedback comments..."
                  value={feedbackComment}
                  onChange={(e) => setFeedbackComment(e.target.value)}
                  rows={4}
                />

                <Button 
                  className="w-full" 
                  onClick={() => selectedCandidate && handleSubmitFeedback(selectedCandidate)}
                  disabled={!selectedCandidate || !feedbackComment || feedbackRating === 0}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Submit Feedback
                </Button>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-3">Recent Feedback</h4>
                <div className="space-y-3">
                  {feedbackSubmissions.map((feedback) => (
                    <div key={feedback.id} className="p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{feedback.candidate}</span>
                        <div className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-medium">{feedback.rating}</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{feedback.position}</p>
                      <p className="text-sm">{feedback.comments}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Certificate Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Certificate Trigger</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Training Completion</span>
                    <Badge variant="outline">Active</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Mark training as complete to initiate certificate generation for students.
                  </p>
                  <div className="space-y-2">
                    {candidatePool.filter(c => c.status === 'shortlisted').map((candidate) => (
                      <div key={candidate.id} className="flex items-center justify-between p-2 bg-background rounded border">
                        <span className="text-sm font-medium">{candidate.name}</span>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleCertificateTrigger(candidate.id)}
                        >
                          <FileCheck className="h-4 w-4 mr-1" />
                          Mark Complete
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-4 w-4" />
                    View Certificates
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download Batch
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
