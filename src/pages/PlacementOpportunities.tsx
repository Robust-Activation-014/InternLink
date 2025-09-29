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

const opportunities = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Google",
    location: "Mountain View, CA",
    stipend: "$5,000/month",
    duration: "3 months",
    skills: ["React", "Node.js", "Python"],
    department: "Computer Science",
    lastDate: "2024-02-15",
    applicants: 45,
    status: "Active",
    description: "Join our team to work on cutting-edge web applications using modern technologies."
  },
  {
    id: 2,
    title: "Product Management Intern",
    company: "Microsoft",
    location: "Seattle, WA",
    stipend: "$4,500/month",
    duration: "2 months",
    skills: ["Product Strategy", "Data Analysis", "SQL"],
    department: "Business",
    lastDate: "2024-02-10",
    applicants: 32,
    status: "Active",
    description: "Work on product strategy and user experience for our flagship products."
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "Amazon",
    location: "Seattle, WA",
    stipend: "$4,800/month",
    duration: "3 months",
    skills: ["Machine Learning", "Python", "TensorFlow"],
    department: "Data Science",
    lastDate: "2024-02-20",
    applicants: 28,
    status: "Active",
    description: "Develop machine learning models for recommendation systems."
  }
];

export default function PlacementOpportunities() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);

  const [newOpportunity, setNewOpportunity] = useState({
    title: '',
    company: '',
    location: '',
    stipend: '',
    duration: '',
    skills: '',
    department: '',
    lastDate: '',
    description: ''
  });

  const handleCreateOpportunity = () => {
    console.log('Creating opportunity:', newOpportunity);
    // Handle creation logic
    setIsCreateModalOpen(false);
    setNewOpportunity({
      title: '',
      company: '',
      location: '',
      stipend: '',
      duration: '',
      skills: '',
      department: '',
      lastDate: '',
      description: ''
    });
  };

  const handleEditOpportunity = (opportunity) => {
    setSelectedOpportunity(opportunity);
    setIsEditModalOpen(true);
  };

  const handleDeleteOpportunity = (id) => {
    console.log(`Deleting opportunity ${id}`);
    // Handle deletion logic
  };

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'all' || opp.department === filterDepartment;
    const matchesStatus = filterStatus === 'all' || opp.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Opportunity Management
        </h1>
        <p className="text-muted-foreground mt-2">
          Create and manage internship and job opportunities for students.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Briefcase className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Opportunities</p>
                <p className="text-2xl font-bold">24</p>
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
              <Building2 className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Active Companies</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Target className="h-8 w-8 text-orange-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Actions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Opportunities</CardTitle>
            <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Opportunity
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
                      <Input
                        value={newOpportunity.title}
                        onChange={(e) => setNewOpportunity({...newOpportunity, title: e.target.value})}
                        placeholder="e.g., Software Engineering Intern"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Company</label>
                      <Input
                        value={newOpportunity.company}
                        onChange={(e) => setNewOpportunity({...newOpportunity, company: e.target.value})}
                        placeholder="e.g., Google"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Location</label>
                      <Input
                        value={newOpportunity.location}
                        onChange={(e) => setNewOpportunity({...newOpportunity, location: e.target.value})}
                        placeholder="e.g., Mountain View, CA"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Stipend</label>
                      <Input
                        value={newOpportunity.stipend}
                        onChange={(e) => setNewOpportunity({...newOpportunity, stipend: e.target.value})}
                        placeholder="e.g., $5,000/month"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Duration</label>
                      <Input
                        value={newOpportunity.duration}
                        onChange={(e) => setNewOpportunity({...newOpportunity, duration: e.target.value})}
                        placeholder="e.g., 3 months"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Department</label>
                      <Select value={newOpportunity.department} onValueChange={(value) => setNewOpportunity({...newOpportunity, department: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Computer Science">Computer Science</SelectItem>
                          <SelectItem value="Business">Business</SelectItem>
                          <SelectItem value="Data Science">Data Science</SelectItem>
                          <SelectItem value="Engineering">Engineering</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Skills Required</label>
                    <Input
                      value={newOpportunity.skills}
                      onChange={(e) => setNewOpportunity({...newOpportunity, skills: e.target.value})}
                      placeholder="e.g., React, Node.js, Python"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Last Date to Apply</label>
                    <Input
                      type="date"
                      value={newOpportunity.lastDate}
                      onChange={(e) => setNewOpportunity({...newOpportunity, lastDate: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <Textarea
                      value={newOpportunity.description}
                      onChange={(e) => setNewOpportunity({...newOpportunity, description: e.target.value})}
                      placeholder="Describe the opportunity..."
                      rows={3}
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleCreateOpportunity}>
                      Create Opportunity
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
              placeholder="Search opportunities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
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
          </div>
        </CardContent>
      </Card>

      {/* Opportunities List */}
      <div className="grid gap-4">
        {filteredOpportunities.map((opportunity) => (
          <motion.div
            key={opportunity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{opportunity.title}</h3>
                      <Badge variant={opportunity.status === 'Active' ? 'default' : 'secondary'}>
                        {opportunity.status}
                      </Badge>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Building2 className="h-4 w-4 mr-2" />
                      <span className="mr-4">{opportunity.company}</span>
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="mr-4">{opportunity.location}</span>
                      <DollarSign className="h-4 w-4 mr-2" />
                      <span>{opportunity.stipend}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{opportunity.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm">Duration: {opportunity.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm">{opportunity.applicants} applicants</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm">Deadline: {new Date(opportunity.lastDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{opportunity.department}</Badge>
                        <div className="flex space-x-1">
                          <Button variant="outline" size="sm" onClick={() => setSelectedOpportunity(opportunity)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleEditOpportunity(opportunity)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleDeleteOpportunity(opportunity.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
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
    </div>
  );
}
