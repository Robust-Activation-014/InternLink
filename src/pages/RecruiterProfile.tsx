import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Calendar, Building2, Award, Users, Target, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const recruiterData = {
  name: "John Smith",
  email: "john.smith@techcorp.com",
  phone: "+91 98765 43213",
  location: "Bangalore, India",
  employeeId: "REC2024001",
  company: "TechCorp Solutions",
  designation: "Senior Recruiter",
  experience: "6 years",
  avatar: "/api/placeholder/120/120",
  companyInfo: {
    industry: "Technology",
    size: "500-1000 employees",
    website: "https://techcorp.com",
    founded: "2010"
  },
  responsibilities: ["Talent Acquisition", "Campus Recruitment", "Interview Coordination", "Candidate Assessment"],
  achievements: [
    { title: "Best Recruiter Award", description: "Company Excellence", date: "2023-12-01" },
    { title: "Successful Campus Drive", description: "Hired 50+ Students", date: "2024-01-15" },
    { title: "New University Partnership", description: "Added 3 Universities", date: "2023-11-20" }
  ],
  statistics: {
    totalHires: 150,
    activePositions: 12,
    successRate: 78,
    averageTimeToHire: "15 days"
  },
  recentActivities: [
    { activity: "Google Campus Drive", date: "2024-01-20", status: "Completed" },
    { activity: "Microsoft Interview Session", date: "2024-01-18", status: "Scheduled" },
    { activity: "Amazon Technical Round", date: "2024-01-15", status: "Completed" }
  ],
  currentOpenings: [
    { position: "Software Engineer", department: "Engineering", applicants: 45, status: "Active" },
    { position: "Data Scientist", department: "Data Science", applicants: 32, status: "Active" },
    { position: "Product Manager", department: "Product", applicants: 28, status: "Closed" }
  ]
};

export default function RecruiterProfile() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Recruiter Profile
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage your recruitment activities and company information.
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
                <AvatarImage src={recruiterData.avatar} />
                <AvatarFallback className="text-2xl">{recruiterData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{recruiterData.name}</CardTitle>
              <p className="text-muted-foreground">{recruiterData.designation}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">{recruiterData.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">{recruiterData.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">{recruiterData.location}</span>
                </div>
                <div className="flex items-center">
                  <Building2 className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">{recruiterData.company}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">{recruiterData.experience}</span>
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
          {/* Company Information */}
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Industry</p>
                  <p className="text-lg font-bold">{recruiterData.companyInfo.industry}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Company Size</p>
                  <p className="text-lg font-bold">{recruiterData.companyInfo.size}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Website</p>
                  <p className="text-lg font-bold">{recruiterData.companyInfo.website}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Founded</p>
                  <p className="text-lg font-bold">{recruiterData.companyInfo.founded}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Recruitment Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-bold text-primary">{recruiterData.statistics.totalHires}</p>
                  <p className="text-sm text-muted-foreground">Total Hires</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">{recruiterData.statistics.activePositions}</p>
                  <p className="text-sm text-muted-foreground">Active Positions</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">{recruiterData.statistics.successRate}%</p>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-bold text-orange-600">{recruiterData.statistics.averageTimeToHire}</p>
                  <p className="text-sm text-muted-foreground">Avg. Time to Hire</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle>Key Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {recruiterData.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-center">
                    <Target className="h-4 w-4 mr-3 text-primary" />
                    <span className="text-sm">{responsibility}</span>
                  </div>
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
              {recruiterData.achievements.map((achievement, index) => (
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

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recruiterData.recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">{activity.activity}</p>
                    <p className="text-sm text-muted-foreground">{new Date(activity.date).toLocaleDateString()}</p>
                  </div>
                  <Badge variant={activity.status === 'Completed' ? 'default' : 'secondary'}>
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Current Openings */}
          <Card>
            <CardHeader>
              <CardTitle>Current Openings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recruiterData.currentOpenings.map((opening, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">{opening.position}</p>
                    <p className="text-sm text-muted-foreground">{opening.department} • {opening.applicants} applicants</p>
                  </div>
                  <Badge variant={opening.status === 'Active' ? 'default' : 'secondary'}>
                    {opening.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
