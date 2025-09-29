import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  Award, 
  Eye, 
  BookOpen,
  MessageSquare,
  Calendar,
  Target,
  BarChart3,
  UserCheck,
  Clock,
  Star,
  CheckCircle,
  XCircle,
  FileText,
  Download,
  Edit,
  Send,
  Filter,
  Search
} from 'lucide-react';
import { StatsCard } from '@/components/Dashboard/StatsCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const facultyStats = {
  pendingApprovals: 12,
  totalMentees: 24,
  approvedApplications: 89,
  averageRating: 4.8
};

const approvalQueue = [
  {
    id: 1,
    student: "Bhargab Saikia",
    studentId: "CS2024001",
    company: "Google",
    position: "Software Engineering Intern",
    appliedDate: "2024-01-15",
    status: "pending",
    documents: ["Resume", "Cover Letter", "Academic Transcript"],
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
    documents: ["Resume", "Cover Letter", "Academic Transcript"],
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
    documents: ["Resume", "Cover Letter", "Academic Transcript"],
    avatar: "/api/placeholder/40/40"
  }
];

const studentTracking = [
  {
    id: 1,
    name: "Bhargab Saikia",
    studentId: "CS2024001",
    currentInternship: "Google - Software Engineering",
    startDate: "2024-01-20",
    endDate: "2024-06-20",
    progress: 75,
    status: "active",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 2,
    name: "Priya Patel",
    studentId: "CS2024002",
    currentInternship: "Microsoft - Product Management",
    startDate: "2024-01-15",
    endDate: "2024-05-15",
    progress: 90,
    status: "excellent",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 3,
    name: "Rahul Kumar",
    studentId: "CS2024003",
    currentInternship: "Amazon - Data Science",
    startDate: "2024-02-01",
    endDate: "2024-07-01",
    progress: 45,
    status: "needs_attention",
    avatar: "/api/placeholder/40/40"
  }
];

const feedbackEntries = [
  {
    id: 1,
    student: "Bhargab Saikia",
    type: "Mid-training Evaluation",
    date: "2024-01-25",
    rating: 4.5,
    comments: "Excellent technical skills, needs improvement in communication",
    status: "submitted"
  },
  {
    id: 2,
    student: "Priya Patel",
    type: "Academic Feedback",
    date: "2024-01-20",
    rating: 4.8,
    comments: "Outstanding performance, recommended for full-time offer",
    status: "submitted"
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

export default function FacultyDashboard() {
  const [selectedApplication, setSelectedApplication] = useState<number | null>(null);
  const [approvalComment, setApprovalComment] = useState('');
  const [feedbackComment, setFeedbackComment] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'excellent': return 'bg-blue-500';
      case 'needs_attention': return 'bg-orange-500';
      case 'pending': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'excellent': return 'Excellent';
      case 'needs_attention': return 'Needs Attention';
      case 'pending': return 'Pending';
      default: return 'Unknown';
    }
  };

  const handleApprove = (applicationId: number) => {
    console.log('Approving application:', applicationId, 'with comment:', approvalComment);
    setApprovalComment('');
    setSelectedApplication(null);
  };

  const handleReject = (applicationId: number) => {
    console.log('Rejecting application:', applicationId, 'with comment:', approvalComment);
    setApprovalComment('');
    setSelectedApplication(null);
  };

  const handleSubmitFeedback = (studentId: number) => {
    console.log('Submitting feedback for student:', studentId, 'with comment:', feedbackComment);
    setFeedbackComment('');
    setSelectedStudent(null);
  };

  const handleExportReports = () => {
    console.log('Exporting approved students list');
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Faculty Dashboard 👨‍🏫
        </h1>
        <p className="text-muted-foreground mt-2">
          Guide and mentor your students on their career journey.
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
            title="Pending Approvals"
            value={facultyStats.pendingApprovals}
            description="Awaiting your signature"
            icon={<Clock className="h-5 w-5" />}
            trend={{ value: 3, isPositive: false }}
          />
        </motion.div>
        
        <motion.div variants={item}>
          <StatsCard
            title="Total Mentees"
            value={facultyStats.totalMentees}
            description="Students under guidance"
            icon={<Users className="h-5 w-5" />}
            trend={{ value: 5, isPositive: true }}
          />
        </motion.div>
        
        <motion.div variants={item}>
          <StatsCard
            title="Approved Applications"
            value={facultyStats.approvedApplications}
            description="This semester"
            icon={<CheckCircle className="h-5 w-5" />}
            trend={{ value: 12, isPositive: true }}
          />
        </motion.div>
        
        <motion.div variants={item}>
          <StatsCard
            title="Average Rating"
            value={`${facultyStats.averageRating}/5`}
            description="Student feedback"
            icon={<Star className="h-5 w-5" />}
            trend={{ value: 0.2, isPositive: true }}
          />
        </motion.div>
      </motion.div>

      {/* Approval Queue */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Approval Queue</CardTitle>
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
              {facultyStats.pendingApprovals} Pending
            </Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            {approvalQueue.map((application) => (
              <div key={application.id} className="p-4 bg-muted/50 rounded-lg border">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={application.avatar} />
                      <AvatarFallback>{application.student.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{application.student}</p>
                      <p className="text-sm text-muted-foreground">ID: {application.studentId}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{application.position}</p>
                    <p className="text-sm text-muted-foreground">{application.company}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {application.documents.map((doc, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {doc}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => setSelectedApplication(application.id)}
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Review
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => handleApprove(application.id)}
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Approve
                    </Button>
                    <Button 
                      size="sm" 
                      variant="destructive"
                      onClick={() => handleReject(application.id)}
                    >
                      <XCircle className="h-4 w-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                </div>
                {selectedApplication === application.id && (
                  <div className="mt-4 p-4 bg-background rounded-lg border">
                    <Textarea
                      placeholder="Add your comments for approval/rejection..."
                      value={approvalComment}
                      onChange={(e) => setApprovalComment(e.target.value)}
                      className="mb-3"
                    />
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        onClick={() => handleApprove(application.id)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Approve with Comment
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive"
                        onClick={() => handleReject(application.id)}
                      >
                        Reject with Comment
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setSelectedApplication(null)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Student Tracking */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Student Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {studentTracking.map((student) => (
                <div key={student.id} className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={student.avatar} />
                        <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">ID: {student.studentId}</p>
                      </div>
                    </div>
                    <div className={`p-1 rounded-full ${getStatusColor(student.status)}`}></div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">{student.currentInternship}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>Start: {new Date(student.startDate).toLocaleDateString()}</span>
                        <span>End: {new Date(student.endDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Progress value={student.progress} className="w-16 h-2" />
                        <span className="text-sm font-medium">{student.progress}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Feedback Portal */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Feedback Portal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Select onValueChange={(value) => setSelectedStudent(parseInt(value))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select student for feedback" />
                  </SelectTrigger>
                  <SelectContent>
                    {studentTracking.map((student) => (
                      <SelectItem key={student.id} value={student.id.toString()}>
                        {student.name} - {student.currentInternship}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Feedback type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mid-training">Mid-training Evaluation</SelectItem>
                    <SelectItem value="academic">Academic Feedback</SelectItem>
                    <SelectItem value="final">Final Assessment</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Add your feedback comments..."
                  value={feedbackComment}
                  onChange={(e) => setFeedbackComment(e.target.value)}
                  rows={4}
                />

                <Button 
                  className="w-full" 
                  onClick={() => selectedStudent && handleSubmitFeedback(selectedStudent)}
                  disabled={!selectedStudent || !feedbackComment}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Submit Feedback
                </Button>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-3">Recent Feedback</h4>
                <div className="space-y-3">
                  {feedbackEntries.map((feedback) => (
                    <div key={feedback.id} className="p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{feedback.student}</span>
                        <div className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-medium">{feedback.rating}</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{feedback.type}</p>
                      <p className="text-sm">{feedback.comments}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Reports */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                className="h-20 flex flex-col space-y-2" 
                variant="outline"
                onClick={handleExportReports}
              >
                <Download className="h-6 w-6" />
                <span className="text-sm">Export Approved Students</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2" variant="outline">
                <FileText className="h-6 w-6" />
                <span className="text-sm">Generate Report</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2" variant="outline">
                <BarChart3 className="h-6 w-6" />
                <span className="text-sm">View Analytics</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
