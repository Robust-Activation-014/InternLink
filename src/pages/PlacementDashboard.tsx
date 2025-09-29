import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Calendar,
  Target,
  BarChart3,
  Briefcase,
  Award,
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Plus,
  Edit,
  Trash2,
  Filter,
  Search,
  Download,
  FileText,
  Settings,
  UserPlus,
  UserMinus,
  FileCheck,
  Eye,
  MoreHorizontal
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

const placementStats = {
  unplacedStudents: 270,
  seatsRemaining: 45,
  offersThisWeek: 12,
  totalCompanies: 45
};

const opportunityManagement = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Google",
    department: "Computer Science",
    skills: ["Python", "React", "Node.js"],
    stipend: "₹25,000/month",
    lastDate: "2024-02-15",
    status: "active",
    applicants: 45
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "Microsoft",
    department: "Data Science",
    skills: ["Python", "Machine Learning", "SQL"],
    stipend: "₹30,000/month",
    lastDate: "2024-02-20",
    status: "active",
    applicants: 32
  },
  {
    id: 3,
    title: "Product Management Intern",
    company: "Amazon",
    department: "Business",
    skills: ["Analytics", "Strategy", "Communication"],
    stipend: "₹28,000/month",
    lastDate: "2024-02-10",
    status: "closed",
    applicants: 28
  }
];

const applicationsOverview = [
  {
    id: 1,
    student: "Bhargab Saikia",
    studentId: "CS2024001",
    department: "Computer Science",
    company: "Google",
    position: "Software Engineering Intern",
    appliedDate: "2024-01-15",
    status: "shortlisted",
    recruiter: "John Doe"
  },
  {
    id: 2,
    student: "Priya Patel",
    studentId: "DS2024002",
    department: "Data Science",
    company: "Microsoft",
    position: "Data Science Intern",
    appliedDate: "2024-01-14",
    status: "interviewed",
    recruiter: "Jane Smith"
  },
  {
    id: 3,
    student: "Rahul Kumar",
    studentId: "CS2024003",
    department: "Computer Science",
    company: "Amazon",
    position: "Product Management Intern",
    appliedDate: "2024-01-13",
    status: "rejected",
    recruiter: "Mike Johnson"
  }
];

const schedulingData = [
  {
    id: 1,
    company: "Google",
    event: "Technical Interview",
    date: "2024-01-25",
    time: "10:00 AM",
    venue: "Main Auditorium",
    students: 15,
    status: "scheduled"
  },
  {
    id: 2,
    company: "Microsoft",
    event: "HR Round",
    date: "2024-01-26",
    time: "2:00 PM",
    venue: "Conference Room A",
    students: 8,
    status: "scheduled"
  }
];

const userManagement = [
  {
    id: 1,
    name: "Dr. Sarah Wilson",
    email: "sarah@university.edu",
    role: "Faculty",
    department: "Computer Science",
    status: "active",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 2,
    name: "John Smith",
    email: "john@company.com",
    role: "Recruiter",
    company: "TechCorp",
    status: "active",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@company.com",
    role: "Recruiter",
    company: "DataCorp",
    status: "inactive",
    avatar: "/api/placeholder/40/40"
  }
];

const recentPlacements = [
  {
    id: 1,
    student: "Bhargab Saikia",
    company: "Google",
    position: "Software Engineer",
    package: "₹15 LPA",
    date: "2024-01-15",
    status: "confirmed",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 2,
    student: "Priya Patel",
    company: "Microsoft",
    position: "Product Manager",
    package: "₹18 LPA",
    date: "2024-01-12",
    status: "confirmed",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 3,
    student: "Rahul Kumar",
    company: "Amazon",
    position: "Data Scientist",
    package: "₹16 LPA",
    date: "2024-01-10",
    status: "pending",
    avatar: "/api/placeholder/40/40"
  }
];

const upcomingEvents = [
  {
    id: 1,
    company: "TCS",
    event: "Campus Recruitment Drive",
    date: "2024-01-20",
    time: "9:00 AM",
    venue: "Main Auditorium",
    students: 150
  },
  {
    id: 2,
    company: "Infosys",
    event: "Technical Interview Session",
    date: "2024-01-22",
    time: "2:00 PM",
    venue: "Computer Lab 1",
    students: 75
  },
  {
    id: 3,
    company: "Wipro",
    event: "HR Round",
    date: "2024-01-25",
    time: "10:00 AM",
    venue: "Conference Room",
    students: 50
  }
];

const companyPartners = [
  {
    id: 1,
    name: "Google",
    logo: "/api/placeholder/40/40",
    positions: 12,
    students: 25,
    status: "active"
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "/api/placeholder/40/40",
    positions: 8,
    students: 18,
    status: "active"
  },
  {
    id: 3,
    name: "Amazon",
    logo: "/api/placeholder/40/40",
    positions: 15,
    students: 32,
    status: "active"
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

export default function PlacementDashboard() {
  const [isCreateOpportunityOpen, setIsCreateOpportunityOpen] = useState(false);
  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'closed': return 'bg-red-500';
      case 'shortlisted': return 'bg-blue-500';
      case 'interviewed': return 'bg-purple-500';
      case 'rejected': return 'bg-red-500';
      case 'scheduled': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="h-4 w-4" />;
      case 'closed': return <AlertCircle className="h-4 w-4" />;
      case 'shortlisted': return <Target className="h-4 w-4" />;
      case 'interviewed': return <Calendar className="h-4 w-4" />;
      case 'rejected': return <AlertCircle className="h-4 w-4" />;
      case 'scheduled': return <Clock className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const handleCreateOpportunity = () => {
    console.log('Creating new opportunity');
    setIsCreateOpportunityOpen(false);
  };

  const handleCreateUser = () => {
    console.log('Creating new user');
    setIsCreateUserOpen(false);
  };

  const handleExportReports = () => {
    console.log('Exporting reports');
  };

  const handleCertificateControl = () => {
    console.log('Managing certificates');
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Placement Cell Dashboard 🏢
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage campus recruitment and student placements effectively.
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
            title="Unplaced Students"
            value={placementStats.unplacedStudents}
            description="Still seeking opportunities"
            icon={<Users className="h-5 w-5" />}
            trend={{ value: 15, isPositive: false }}
          />
        </motion.div>
        
        <motion.div variants={item}>
          <StatsCard
            title="Seats Remaining"
            value={placementStats.seatsRemaining}
            description="Available positions"
            icon={<Target className="h-5 w-5" />}
            trend={{ value: 8, isPositive: true }}
          />
        </motion.div>
        
        <motion.div variants={item}>
          <StatsCard
            title="Offers This Week"
            value={placementStats.offersThisWeek}
            description="New offers extended"
            icon={<Award className="h-5 w-5" />}
            trend={{ value: 3, isPositive: true }}
          />
        </motion.div>
        
        <motion.div variants={item}>
          <StatsCard
            title="Total Companies"
            value={placementStats.totalCompanies}
            description="Active recruiting partners"
            icon={<Building2 className="h-5 w-5" />}
            trend={{ value: 2, isPositive: true }}
          />
        </motion.div>
      </motion.div>

      {/* Opportunity Management */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Opportunity Management</CardTitle>
            <Dialog open={isCreateOpportunityOpen} onOpenChange={setIsCreateOpportunityOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Posting
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create New Opportunity</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Title</label>
                      <Input placeholder="e.g., Software Engineering Intern" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Company</label>
                      <Input placeholder="e.g., Google" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Department</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cs">Computer Science</SelectItem>
                          <SelectItem value="ds">Data Science</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Stipend</label>
                      <Input placeholder="e.g., ₹25,000/month" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Skills Required</label>
                    <Input placeholder="e.g., Python, React, Node.js" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Last Date</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <Textarea placeholder="Describe the opportunity..." rows={4} />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsCreateOpportunityOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleCreateOpportunity}>
                      Create Opportunity
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent className="space-y-4">
            {opportunityManagement.map((opportunity) => (
              <div key={opportunity.id} className="p-4 bg-muted/50 rounded-lg border">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium">{opportunity.title}</h4>
                    <p className="text-sm text-muted-foreground">{opportunity.company}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={opportunity.status === 'active' ? 'default' : 'secondary'}>
                      {opportunity.status}
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
                    <p className="text-muted-foreground">Department</p>
                    <p className="font-medium">{opportunity.department}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Stipend</p>
                    <p className="font-medium">{opportunity.stipend}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Last Date</p>
                    <p className="font-medium">{new Date(opportunity.lastDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Applicants</p>
                    <p className="font-medium">{opportunity.applicants}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-3">
                  {opportunity.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Applications Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Applications Overview</CardTitle>
            <div className="flex items-center space-x-2">
              <Select value={filterDepartment} onValueChange={setFilterDepartment}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="ds">Data Science</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="shortlisted">Shortlisted</SelectItem>
                  <SelectItem value="interviewed">Interviewed</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {applicationsOverview.map((application) => (
                <div key={application.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="font-medium">{application.student}</p>
                      <p className="text-sm text-muted-foreground">ID: {application.studentId} • {application.department}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="font-medium">{application.position}</p>
                    <p className="text-sm text-muted-foreground">{application.company}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Recruiter</p>
                    <p className="font-medium">{application.recruiter}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className={`p-1 rounded-full ${getStatusColor(application.status)}`}>
                        {getStatusIcon(application.status)}
                      </div>
                      <span className="text-sm font-medium capitalize">{application.status}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {new Date(application.appliedDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Analytics & Reports */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Analytics & Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary mb-1">270</div>
                    <div className="text-sm text-muted-foreground">Unplaced Students</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">45</div>
                    <div className="text-sm text-muted-foreground">Seats Remaining</div>
                  </div>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">12</div>
                  <div className="text-sm text-muted-foreground">Offers This Week</div>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <Button variant="outline" onClick={handleExportReports}>
                    <Download className="mr-2 h-4 w-4" />
                    Export CSV Report
                  </Button>
                  <Button variant="outline" onClick={handleExportReports}>
                    <FileText className="mr-2 h-4 w-4" />
                    Generate PDF Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Scheduling */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Scheduling</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {schedulingData.map((event) => (
                <div key={event.id} className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{event.company}</h4>
                    <Badge variant="outline">{event.event}</Badge>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(event.date).toLocaleDateString()} at {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.venue}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {event.students} students
                    </div>
                  </div>
                </div>
              ))}
              <Button className="w-full mt-4" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule New Event
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Certificate Control */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Certificate Control</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Auto-generated Certificates</span>
                    <Badge variant="outline">Active</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Certificates are automatically generated when students complete their internships.
                  </p>
                  <Button onClick={handleCertificateControl} className="w-full">
                    <FileCheck className="mr-2 h-4 w-4" />
                    Manage Certificates
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-4 w-4" />
                    View Pending
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

        {/* User Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>User Management</CardTitle>
              <Dialog open={isCreateUserOpen} onOpenChange={setIsCreateUserOpen}>
                <DialogTrigger asChild>
                  <Button size="sm">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add User
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New User</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Name</label>
                      <Input placeholder="Full name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <Input placeholder="email@example.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Role</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="faculty">Faculty</SelectItem>
                          <SelectItem value="recruiter">Recruiter</SelectItem>
                          <SelectItem value="student">Student</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setIsCreateUserOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleCreateUser}>
                        Add User
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent className="space-y-4">
              {userManagement.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                      <p className="text-xs text-muted-foreground">
                        {user.role} • {user.department || user.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                      {user.status}
                    </Badge>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <UserMinus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
