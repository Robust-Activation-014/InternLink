import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Calendar, GraduationCap, Award, Briefcase, Code, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';

const studentData = {
  name: "Bhargab Saikia",
  email: "bhargab.sharma@student.edu",
  phone: "+91 98765 43210",
  location: "Mumbai, India",
  rollNumber: "CS2024001",
  course: "Computer Science Engineering",
  year: "Final Year",
  cgpa: "8.7",
  avatar: "/api/placeholder/120/120",
  skills: ["React", "Node.js", "Python", "JavaScript", "MongoDB", "AWS"],
  achievements: [
    { title: "Hackathon Winner", description: "TechFest 2024", date: "2024-01-15" },
    { title: "Dean's List", description: "Academic Excellence", date: "2023-12-01" },
    { title: "Best Project", description: "Final Year Project", date: "2024-01-10" }
  ],
  internships: [
    { company: "Google", position: "Software Engineering Intern", duration: "3 months", status: "Completed" },
    { company: "Microsoft", position: "Product Management Intern", duration: "2 months", status: "Ongoing" }
  ],
  projects: [
    { name: "E-commerce Platform", tech: "React, Node.js", description: "Full-stack web application" },
    { name: "AI Chatbot", tech: "Python, TensorFlow", description: "Machine learning project" }
  ]
};

export default function StudentProfile() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Student Profile
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
                <AvatarImage src={studentData.avatar} />
                <AvatarFallback className="text-2xl">{studentData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{studentData.name}</CardTitle>
              <p className="text-muted-foreground">{studentData.rollNumber}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">{studentData.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">{studentData.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">{studentData.location}</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">{studentData.course}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">{studentData.year}</span>
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
          {/* Academic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Academic Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">CGPA</p>
                  <p className="text-2xl font-bold">{studentData.cgpa}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Year</p>
                  <p className="text-2xl font-bold">{studentData.year}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {studentData.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {skill}
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
              {studentData.achievements.map((achievement, index) => (
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

          {/* Internships */}
          <Card>
            <CardHeader>
              <CardTitle>Internship Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {studentData.internships.map((internship, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">{internship.position}</p>
                    <p className="text-sm text-muted-foreground">{internship.company}</p>
                    <p className="text-xs text-muted-foreground">{internship.duration}</p>
                  </div>
                  <Badge variant={internship.status === 'Completed' ? 'default' : 'secondary'}>
                    {internship.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Projects */}
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {studentData.projects.map((project, index) => (
                <div key={index} className="p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium">{project.name}</p>
                    <Badge variant="outline">{project.tech}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
