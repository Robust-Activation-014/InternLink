import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText,
  Users,
  Building2,
  Calendar,
  Filter,
  Search,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  User,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const applications = [
  {
    id: 1,
    student: "Bhargab Saikia",
    studentId: "CS2024001",
    company: "Google",
    position: "Software Engineering Intern",
    appliedDate: "2024-01-15",
    status: "Under Review",
    department: "Computer Science",
    cgpa: "8.7",
    skills: ["React", "Node.js", "Python"],
    avatar: "/api/placeholder/40/40",
    contact: {
      email: "bhargab.sharma@student.edu",
      phone: "+91 98765 43210"
    }
  },
  {
    id: 2,
    student: "Priya Patel",
    studentId: "CS2024002",
    company: "Microsoft",
    position: "Product Management Intern",
    appliedDate: "2024-01-14",
    status: "Shortlisted",
    department: "Business",
    cgpa: "8.5",
    skills: ["Product Strategy", "Data Analysis", "SQL"],
    avatar: "/api/placeholder/40/40",
    contact: {
      email: "priya.patel@student.edu",
      phone: "+91 98765 43211"
    }
  },
  {
    id: 3,
    student: "Rahul Kumar",
    studentId: "CS2024003",
    company: "Amazon",
    position: "Data Science Intern",
    appliedDate: "2024-01-13",
    status: "Rejected",
    department: "Data Science",
    cgpa: "8.2",
    skills: ["Machine Learning", "Python", "TensorFlow"],
    avatar: "/api/placeholder/40/40",
    contact: {
      email: "rahul.kumar@student.edu",
      phone: "+91 98765 43212"
    }
  }
];

export default function PlacementApplications() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [selectedApplication, setSelectedApplication] = useState(null);

  const handleStatusChange = (id, newStatus) => {
    console.log(`Changing status for application ${id} to ${newStatus}`);
    // Handle status change logic
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || app.status.toLowerCase().replace(' ', '-') === filterStatus;
    const matchesDepartment = filterDepartment === 'all' || app.department === filterDepartment;
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Under Review': return 'bg-yellow-100 text-yellow-800';
      case 'Shortlisted': return 'bg-blue-100 text-blue-800';
      case 'Accepted': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Applications Overview
        </h1>
        <p className="text-muted-foreground mt-2">
          View and manage all student applications across companies.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Applications</p>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Under Review</p>
                <p className="text-2xl font-bold">45</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Shortlisted</p>
                <p className="text-2xl font-bold">32</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Accepted</p>
                <p className="text-2xl font-bold">28</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              placeholder="Search by student name, ID, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="under-review">Under Review</SelectItem>
                <SelectItem value="shortlisted">Shortlisted</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterDepartment} onValueChange={setFilterDepartment}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="Computer Science">Computer Science</SelectItem>
                <SelectItem value="Business">Business</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
                <SelectItem value="Engineering">Engineering</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Applications List */}
      <div className="grid gap-4">
        {filteredApplications.map((application) => (
          <motion.div
            key={application.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={application.avatar} />
                      <AvatarFallback>{application.student.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{application.student}</h3>
                          <p className="text-muted-foreground">{application.studentId}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(application.status)}>
                            {application.status}
                          </Badge>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Applied</p>
                            <p className="font-medium">{new Date(application.appliedDate).toLocaleDateString()}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Building2 className="h-4 w-4 mr-2" />
                        <span className="mr-4">{application.company}</span>
                        <span className="mr-4">•</span>
                        <span>{application.position}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <span className="text-sm text-muted-foreground mr-2">Department:</span>
                            <Badge variant="outline">{application.department}</Badge>
                          </div>
                          <div className="flex items-center">
                            <span className="text-sm text-muted-foreground mr-2">CGPA:</span>
                            <span className="font-medium">{application.cgpa}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-sm text-muted-foreground mr-2">Skills:</span>
                            <div className="flex space-x-1">
                              {application.skills.slice(0, 2).map((skill, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                              {application.skills.length > 2 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{application.skills.length - 2}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedApplication(application)}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                          {application.status === 'Under Review' && (
                            <>
                              <Button
                                size="sm"
                                className="bg-green-600 hover:bg-green-700"
                                onClick={() => handleStatusChange(application.id, 'Shortlisted')}
                              >
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Shortlist
                              </Button>
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => handleStatusChange(application.id, 'Rejected')}
                              >
                                <XCircle className="h-4 w-4 mr-2" />
                                Reject
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Application Details Modal */}
      {selectedApplication && (
        <Card className="fixed inset-4 z-50 bg-background border shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Application Details</CardTitle>
              <Button variant="ghost" onClick={() => setSelectedApplication(null)}>
                ×
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Student Information</h4>
                <p>Name: {selectedApplication.student}</p>
                <p>Student ID: {selectedApplication.studentId}</p>
                <p>Department: {selectedApplication.department}</p>
                <p>CGPA: {selectedApplication.cgpa}</p>
              </div>
              <div>
                <h4 className="font-semibold">Application Details</h4>
                <p>Company: {selectedApplication.company}</p>
                <p>Position: {selectedApplication.position}</p>
                <p>Applied: {new Date(selectedApplication.appliedDate).toLocaleDateString()}</p>
                <p>Status: {selectedApplication.status}</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {selectedApplication.skills.map((skill, index) => (
                  <Badge key={index} variant="outline">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contact Information</h4>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span className="text-sm">{selectedApplication.contact.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-sm">{selectedApplication.contact.phone}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setSelectedApplication(null)}>
                Close
              </Button>
              <Button>
                Update Status
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
