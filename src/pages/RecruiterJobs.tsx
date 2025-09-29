import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase,
  Plus,
  Edit,
  Trash2,
  Eye,
  Calendar,
  MapPin,
  DollarSign,
  Users,
  Filter,
  Search,
  Building2,
  Clock,
  Target
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const jobPostings = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    salary: "$5,000/month",
    type: "Internship",
    duration: "3 months",
    skills: ["React", "Node.js", "Python"],
    applicants: 45,
    status: "Active",
    postedDate: "2024-01-15",
    description: "Join our team to work on cutting-edge web applications using modern technologies."
  },
  {
    id: 2,
    title: "Product Management Intern",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    salary: "$4,500/month",
    type: "Internship",
    duration: "2 months",
    skills: ["Product Strategy", "Data Analysis", "SQL"],
    applicants: 32,
    status: "Active",
    postedDate: "2024-01-14",
    description: "Work on product strategy and user experience for our flagship products."
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    salary: "$4,800/month",
    type: "Internship",
    duration: "3 months",
    skills: ["Machine Learning", "Python", "TensorFlow"],
    applicants: 28,
    status: "Closed",
    postedDate: "2024-01-10",
    description: "Develop machine learning models for recommendation systems."
  }
];

export default function RecruiterJobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const [newJob, setNewJob] = useState({
    title: '',
    location: '',
    salary: '',
    type: '',
    duration: '',
    skills: '',
    description: ''
  });

  const handleCreateJob = () => {
    console.log('Creating job:', newJob);
    // Handle creation logic
    setIsCreateModalOpen(false);
    setNewJob({
      title: '',
      location: '',
      salary: '',
      type: '',
      duration: '',
      skills: '',
      description: ''
    });
  };

  const handleEditJob = (job) => {
    setSelectedJob(job);
    setIsEditModalOpen(true);
  };

  const handleDeleteJob = (id) => {
    console.log(`Deleting job ${id}`);
    // Handle deletion logic
  };

  const handleToggleStatus = (id) => {
    console.log(`Toggling status for job ${id}`);
    // Handle status toggle
  };

  const filteredJobs = jobPostings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || job.status.toLowerCase() === filterStatus;
    const matchesType = filterType === 'all' || job.type.toLowerCase() === filterType;
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Post Opportunities
        </h1>
        <p className="text-muted-foreground mt-2">
          Create and manage job postings and internship opportunities.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Briefcase className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Jobs</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Applicants</p>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Target className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Active Jobs</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-orange-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Actions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Job Postings</CardTitle>
            <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Post New Job
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
                      <Input
                        value={newJob.title}
                        onChange={(e) => setNewJob({...newJob, title: e.target.value})}
                        placeholder="e.g., Software Engineering Intern"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Location</label>
                      <Input
                        value={newJob.location}
                        onChange={(e) => setNewJob({...newJob, location: e.target.value})}
                        placeholder="e.g., San Francisco, CA"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Salary/Stipend</label>
                      <Input
                        value={newJob.salary}
                        onChange={(e) => setNewJob({...newJob, salary: e.target.value})}
                        placeholder="e.g., $5,000/month"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Job Type</label>
                      <Select value={newJob.type} onValueChange={(value) => setNewJob({...newJob, type: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Internship">Internship</SelectItem>
                          <SelectItem value="Full-time">Full-time</SelectItem>
                          <SelectItem value="Part-time">Part-time</SelectItem>
                          <SelectItem value="Contract">Contract</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Duration</label>
                    <Input
                      value={newJob.duration}
                      onChange={(e) => setNewJob({...newJob, duration: e.target.value})}
                      placeholder="e.g., 3 months"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Required Skills</label>
                    <Input
                      value={newJob.skills}
                      onChange={(e) => setNewJob({...newJob, skills: e.target.value})}
                      placeholder="e.g., React, Node.js, Python"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Job Description</label>
                    <Textarea
                      value={newJob.description}
                      onChange={(e) => setNewJob({...newJob, description: e.target.value})}
                      placeholder="Describe the role and responsibilities..."
                      rows={4}
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleCreateJob}>
                      Post Job
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <Input
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Jobs List */}
      <div className="grid gap-4">
        {filteredJobs.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant={job.status === 'Active' ? 'default' : 'secondary'}>
                          {job.status}
                        </Badge>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Building2 className="h-4 w-4 mr-2" />
                      <span className="mr-4">{job.company}</span>
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="mr-4">{job.location}</span>
                      <DollarSign className="h-4 w-4 mr-2" />
                      <span>{job.salary}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm">Duration: {job.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm">{job.applicants} applicants</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm">Posted: {new Date(job.postedDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedJob(job)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditJob(job)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleToggleStatus(job.id)}
                        >
                          {job.status === 'Active' ? 'Close' : 'Open'}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteJob(job.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <Card className="fixed inset-4 z-50 bg-background border shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Job Details</CardTitle>
              <Button variant="ghost" onClick={() => setSelectedJob(null)}>
                ×
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Job Information</h4>
                <p>Title: {selectedJob.title}</p>
                <p>Company: {selectedJob.company}</p>
                <p>Type: {selectedJob.type}</p>
                <p>Status: {selectedJob.status}</p>
              </div>
              <div>
                <h4 className="font-semibold">Details</h4>
                <p>Location: {selectedJob.location}</p>
                <p>Salary: {selectedJob.salary}</p>
                <p>Duration: {selectedJob.duration}</p>
                <p>Applicants: {selectedJob.applicants}</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Required Skills</h4>
              <div className="flex flex-wrap gap-2">
                {selectedJob.skills.map((skill, index) => (
                  <Badge key={index} variant="outline">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Description</h4>
              <p className="text-sm text-muted-foreground">{selectedJob.description}</p>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setSelectedJob(null)}>
                Close
              </Button>
              <Button onClick={() => handleEditJob(selectedJob)}>
                Edit Job
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
