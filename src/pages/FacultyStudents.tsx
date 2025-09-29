import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck,
  TrendingUp,
  Calendar,
  Award,
  Eye,
  MessageSquare,
  Filter,
  Search,
  BarChart3
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const mentees = [
  {
    id: 1,
    name: "Bhargab Saikia",
    studentId: "CS2024001",
    currentInternship: "Google - Software Engineering Intern",
    progress: 75,
    status: "Active",
    lastActivity: "2024-01-20",
    avatar: "/api/placeholder/40/40",
    skills: ["React", "Node.js", "Python"],
    achievements: ["Hackathon Winner", "Dean's List"]
  },
  {
    id: 2,
    name: "Priya Patel",
    studentId: "CS2024002",
    currentInternship: "Microsoft - Product Management Intern",
    progress: 60,
    status: "Active",
    lastActivity: "2024-01-19",
    avatar: "/api/placeholder/40/40",
    skills: ["Product Management", "Data Analysis", "SQL"],
    achievements: ["Best Project Award"]
  },
  {
    id: 3,
    name: "Rahul Kumar",
    studentId: "CS2024003",
    currentInternship: "Amazon - Data Science Intern",
    progress: 90,
    status: "Completed",
    lastActivity: "2024-01-18",
    avatar: "/api/placeholder/40/40",
    skills: ["Machine Learning", "Python", "TensorFlow"],
    achievements: ["Research Paper Published"]
  }
];

export default function FacultyStudents() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = mentees.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || student.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Student Tracking
        </h1>
        <p className="text-muted-foreground mt-2">
          Monitor your mentees' progress and performance.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <UserCheck className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Mentees</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Active</p>
                <p className="text-2xl font-bold">18</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold">6</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Avg. Progress</p>
                <p className="text-2xl font-bold">75%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Students</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              placeholder="Search by name or student ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Students</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Students List */}
      <div className="grid gap-4">
        {filteredStudents.map((student) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={student.avatar} />
                      <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{student.name}</h3>
                          <p className="text-muted-foreground">{student.studentId}</p>
                          <p className="text-sm text-muted-foreground mt-1">{student.currentInternship}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={student.status === 'Active' ? 'default' : 'secondary'}>
                            {student.status}
                          </Badge>
                          <p className="text-sm text-muted-foreground mt-1">
                            Last activity: {new Date(student.lastActivity).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mt-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Progress</span>
                          <span className="text-sm text-muted-foreground">{student.progress}%</span>
                        </div>
                        <Progress value={student.progress} className="h-2" />
                      </div>

                      {/* Skills and Achievements */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {student.skills.slice(0, 3).map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {student.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{student.skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedStudent(student)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Student Details Modal */}
      {selectedStudent && (
        <Card className="fixed inset-4 z-50 bg-background border shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Student Details</CardTitle>
              <Button variant="ghost" onClick={() => setSelectedStudent(null)}>
                ×
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Basic Information</h4>
                <p>Name: {selectedStudent.name}</p>
                <p>Student ID: {selectedStudent.studentId}</p>
                <p>Status: {selectedStudent.status}</p>
              </div>
              <div>
                <h4 className="font-semibold">Current Internship</h4>
                <p>{selectedStudent.currentInternship}</p>
                <p>Progress: {selectedStudent.progress}%</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {selectedStudent.skills.map((skill, index) => (
                  <Badge key={index} variant="outline">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Achievements</h4>
              <div className="flex flex-wrap gap-2">
                {selectedStudent.achievements.map((achievement, index) => (
                  <Badge key={index} variant="secondary">{achievement}</Badge>
                ))}
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setSelectedStudent(null)}>
                Close
              </Button>
              <Button>
                Send Message
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
