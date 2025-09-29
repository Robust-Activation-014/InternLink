import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  MessageSquare,
  User,
  Calendar,
  Building2,
  FileText
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const approvalQueue = [
  {
    id: 1,
    student: "Bhargab Saikia",
    studentId: "CS2024001",
    company: "Google",
    position: "Software Engineering Intern",
    appliedDate: "2024-01-15",
    status: "pending",
    documents: ["Resume", "Cover Letter", "Transcript"],
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 2,
    student: "Priya Patel",
    studentId: "CS2024002",
    company: "Microsoft",
    position: "Product Management Intern",
    appliedDate: "2024-01-14",
    status: "pending",
    documents: ["Resume", "Cover Letter", "Transcript"],
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 3,
    student: "Rahul Kumar",
    studentId: "CS2024003",
    company: "Amazon",
    position: "Data Science Intern",
    appliedDate: "2024-01-13",
    status: "pending",
    documents: ["Resume", "Cover Letter", "Transcript"],
    avatar: "/api/placeholder/40/40"
  }
];

export default function FacultyApprovals() {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [comment, setComment] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const handleApprove = (id) => {
    console.log(`Approved application ${id}`);
    // Handle approval logic
  };

  const handleReject = (id) => {
    console.log(`Rejected application ${id}`);
    // Handle rejection logic
  };

  const filteredApplications = approvalQueue.filter(app => 
    filterStatus === 'all' || app.status === filterStatus
  );

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Approval Queue
        </h1>
        <p className="text-muted-foreground mt-2">
          Review and approve student internship applications.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-orange-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Approved</p>
                <p className="text-2xl font-bold">89</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <XCircle className="h-8 w-8 text-red-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Rejected</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total</p>
                <p className="text-2xl font-bold">106</p>
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
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Applications</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Search by student name or company..." className="flex-1" />
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
                    <div>
                      <h3 className="font-semibold text-lg">{application.student}</h3>
                      <p className="text-muted-foreground">{application.studentId}</p>
                      <div className="flex items-center mt-1">
                        <Building2 className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm">{application.company}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm">{application.position}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Applied</p>
                      <p className="font-medium">{new Date(application.appliedDate).toLocaleDateString()}</p>
                    </div>
                    <Badge variant={application.status === 'pending' ? 'secondary' : application.status === 'approved' ? 'default' : 'destructive'}>
                      {application.status}
                    </Badge>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedApplication(application)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Review
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleApprove(application.id)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Approve
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleReject(application.id)}
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Reject
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Review Modal */}
      {selectedApplication && (
        <Card className="fixed inset-4 z-50 bg-background border shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Review Application</CardTitle>
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
                <p>ID: {selectedApplication.studentId}</p>
              </div>
              <div>
                <h4 className="font-semibold">Application Details</h4>
                <p>Company: {selectedApplication.company}</p>
                <p>Position: {selectedApplication.position}</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Documents</h4>
              <div className="flex flex-wrap gap-2">
                {selectedApplication.documents.map((doc, index) => (
                  <Badge key={index} variant="outline">{doc}</Badge>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Comments</label>
              <Textarea
                placeholder="Add your comments here..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="mt-2"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setSelectedApplication(null)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={() => handleReject(selectedApplication.id)}>
                Reject
              </Button>
              <Button onClick={() => handleApprove(selectedApplication.id)}>
                Approve
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
