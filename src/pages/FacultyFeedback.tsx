import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare,
  Star,
  Send,
  User,
  Calendar,
  Award,
  TrendingUp,
  Filter,
  Search
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const students = [
  {
    id: 1,
    name: "Bhargab Saikia",
    studentId: "CS2024001",
    avatar: "/api/placeholder/40/40",
    currentInternship: "Google - Software Engineering Intern"
  },
  {
    id: 2,
    name: "Priya Patel",
    studentId: "CS2024002",
    avatar: "/api/placeholder/40/40",
    currentInternship: "Microsoft - Product Management Intern"
  },
  {
    id: 3,
    name: "Rahul Kumar",
    studentId: "CS2024003",
    avatar: "/api/placeholder/40/40",
    currentInternship: "Amazon - Data Science Intern"
  }
];

const recentFeedback = [
  {
    id: 1,
    student: "Bhargab Saikia",
    type: "Academic",
    rating: 4.5,
    comment: "Excellent performance in the internship. Shows great potential.",
    date: "2024-01-15",
    status: "Submitted"
  },
  {
    id: 2,
    student: "Priya Patel",
    type: "Mid-training",
    rating: 4.0,
    comment: "Good progress, needs improvement in technical skills.",
    date: "2024-01-10",
    status: "Submitted"
  }
];

export default function FacultyFeedback() {
  const [selectedStudent, setSelectedStudent] = useState('');
  const [feedbackType, setFeedbackType] = useState('academic');
  const [rating, setRating] = useState('5');
  const [comment, setComment] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const handleSubmitFeedback = () => {
    console.log('Submitting feedback:', {
      student: selectedStudent,
      type: feedbackType,
      rating,
      comment
    });
    // Handle feedback submission
    setComment('');
    setSelectedStudent('');
  };

  const filteredFeedback = recentFeedback.filter(feedback => {
    const matchesSearch = feedback.student.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || feedback.type.toLowerCase() === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Feedback Portal
        </h1>
        <p className="text-muted-foreground mt-2">
          Submit academic feedback and mid-training evaluations for your students.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <MessageSquare className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Feedback</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Star className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Avg. Rating</p>
                <p className="text-2xl font-bold">4.2</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Submit Feedback Form */}
        <Card>
          <CardHeader>
            <CardTitle>Submit Feedback</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="student">Select Student</Label>
              <Select value={selectedStudent} onValueChange={setSelectedStudent}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a student" />
                </SelectTrigger>
                <SelectContent>
                  {students.map((student) => (
                    <SelectItem key={student.id} value={student.id.toString()}>
                      <div className="flex items-center">
                        <Avatar className="h-6 w-6 mr-2">
                          <AvatarImage src={student.avatar} />
                          <AvatarFallback className="text-xs">{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        {student.name} - {student.studentId}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="type">Feedback Type</Label>
              <Select value={feedbackType} onValueChange={setFeedbackType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="academic">Academic Feedback</SelectItem>
                  <SelectItem value="mid-training">Mid-training Evaluation</SelectItem>
                  <SelectItem value="final">Final Evaluation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Rating</Label>
              <RadioGroup value={rating} onValueChange={setRating} className="flex space-x-4">
                {[1, 2, 3, 4, 5].map((value) => (
                  <div key={value} className="flex items-center space-x-2">
                    <RadioGroupItem value={value.toString()} id={`rating-${value}`} />
                    <Label htmlFor={`rating-${value}`} className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      {value}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="comment">Comments</Label>
              <Textarea
                id="comment"
                placeholder="Provide detailed feedback about the student's performance..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="mt-2"
                rows={4}
              />
            </div>

            <Button onClick={handleSubmitFeedback} className="w-full">
              <Send className="h-4 w-4 mr-2" />
              Submit Feedback
            </Button>
          </CardContent>
        </Card>

        {/* Recent Feedback */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredFeedback.map((feedback) => (
                <div key={feedback.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-3">
                        <AvatarFallback className="text-xs">{feedback.student.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{feedback.student}</p>
                        <p className="text-sm text-muted-foreground">{feedback.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="font-medium">{feedback.rating}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{new Date(feedback.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{feedback.comment}</p>
                  <Badge variant={feedback.status === 'Submitted' ? 'default' : 'secondary'}>
                    {feedback.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Feedback History */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Feedback History</CardTitle>
            <div className="flex gap-2">
              <Input
                placeholder="Search feedback..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64"
              />
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="mid-training">Mid-training</SelectItem>
                  <SelectItem value="final">Final</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredFeedback.map((feedback) => (
              <motion.div
                key={feedback.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>{feedback.student.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{feedback.student}</p>
                    <p className="text-sm text-muted-foreground">{feedback.type} • {new Date(feedback.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-medium">{feedback.rating}</span>
                  </div>
                  <Badge variant={feedback.status === 'Submitted' ? 'default' : 'secondary'}>
                    {feedback.status}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
