import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Calendar, GraduationCap, Award, BookOpen, Users, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const facultyData = {
  name: "Dr. Sarah Wilson",
  email: "sarah.wilson@faculty.edu",
  phone: "+91 98765 43211",
  location: "Bangalore, India",
  employeeId: "FAC2024001",
  department: "Computer Science",
  designation: "Professor",
  experience: "15 years",
  avatar: "/api/placeholder/120/120",
  qualifications: ["Ph.D. in Computer Science", "M.Tech in Software Engineering", "B.Tech in Computer Science"],
  specializations: ["Machine Learning", "Data Structures", "Software Engineering", "Database Systems"],
  achievements: [
    { title: "Best Teacher Award", description: "University Excellence", date: "2023-12-01" },
    { title: "Research Paper Published", description: "IEEE Conference", date: "2024-01-15" },
    { title: "Student Mentor Award", description: "Outstanding Mentorship", date: "2023-11-20" }
  ],
  currentStudents: [
    { name: "Bhargab Saikia", project: "AI Chatbot", status: "Active" },
    { name: "Priya Patel", project: "Data Analytics", status: "Active" },
    { name: "Rahul Kumar", project: "Web Development", status: "Completed" }
  ],
  courses: [
    { name: "Data Structures", code: "CS201", semester: "3rd", students: 45 },
    { name: "Machine Learning", code: "CS401", semester: "7th", students: 32 },
    { name: "Software Engineering", code: "CS301", semester: "5th", students: 38 }
  ]
};

export default function FacultyProfile() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Faculty Profile
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage your academic and professional information.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1"
        >
          <Card>
            <CardHeader className="text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src={facultyData.avatar} />
                <AvatarFallback className="text-2xl">{facultyData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{facultyData.name}</CardTitle>
              <p className="text-muted-foreground">{facultyData.designation}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">{facultyData.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">{facultyData.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">{facultyData.location}</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">{facultyData.department}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">{facultyData.experience}</span>
                </div>
              </div>
              <Button className="w-full">Edit Profile</Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Professional Information */}
          <Card>
            <CardHeader>
              <CardTitle>Professional Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Employee ID</p>
                  <p className="text-lg font-bold">{facultyData.employeeId}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="text-lg font-bold">{facultyData.experience}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Qualifications */}
          <Card>
            <CardHeader>
              <CardTitle>Qualifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {facultyData.qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center">
                    <GraduationCap className="h-4 w-4 mr-3 text-primary" />
                    <span className="text-sm">{qualification}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Specializations */}
          <Card>
            <CardHeader>
              <CardTitle>Specializations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {facultyData.specializations.map((specialization, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {specialization}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {facultyData.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">{achievement.title}</p>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                  <div className="text-right">
                    <Award className="h-5 w-5 text-yellow-500 mb-1" />
                    <p className="text-xs text-muted-foreground">{new Date(achievement.date).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Current Students */}
          <Card>
            <CardHeader>
              <CardTitle>Current Students</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {facultyData.currentStudents.map((student, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-muted-foreground">{student.project}</p>
                  </div>
                  <Badge variant={student.status === 'Active' ? 'default' : 'secondary'}>
                    {student.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Courses */}
          <Card>
            <CardHeader>
              <CardTitle>Teaching Courses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {facultyData.courses.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">{course.name}</p>
                    <p className="text-sm text-muted-foreground">{course.code} • {course.semester} Semester</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{course.students} students</p>
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
