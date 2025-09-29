import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Calendar, Building2, Award, Users, Target, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const placementData = {
  name: "Placement Admin",
  email: "placement@admin.edu",
  phone: "+91 98765 43212",
  location: "Delhi, India",
  employeeId: "PLAC2024001",
  department: "Placement Cell",
  designation: "Placement Officer",
  experience: "8 years",
  avatar: "/api/placeholder/120/120",
  responsibilities: ["Campus Recruitment", "Company Relations", "Student Placement", "Career Guidance"],
  achievements: [
    { title: "Best Placement Officer", description: "University Excellence", date: "2023-12-01" },
    { title: "100% Placement", description: "Computer Science Batch", date: "2024-01-15" },
    { title: "New Company Partnership", description: "Added 25+ Companies", date: "2023-11-20" }
  ],
  statistics: {
    totalPlacements: 1250,
    activeCompanies: 45,
    placementRate: 85,
    averagePackage: "₹8.5 LPA"
  },
  recentActivities: [
    { activity: "Google Recruitment Drive", date: "2024-01-20", status: "Completed" },
    { activity: "Microsoft Interview Session", date: "2024-01-18", status: "Scheduled" },
    { activity: "Amazon Campus Visit", date: "2024-01-15", status: "Completed" }
  ],
  upcomingEvents: [
    { event: "TCS Recruitment Drive", date: "2024-01-25", venue: "Main Auditorium" },
    { event: "Infosys Technical Round", date: "2024-01-28", venue: "Computer Lab 1" }
  ]
};

export default function PlacementProfile() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Placement Cell Profile
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage placement cell operations and student placements.
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
                <AvatarImage src={placementData.avatar} />
                <AvatarFallback className="text-2xl">{placementData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{placementData.name}</CardTitle>
              <p className="text-muted-foreground">{placementData.designation}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">{placementData.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">{placementData.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">{placementData.location}</span>
                </div>
                <div className="flex items-center">
                  <Building2 className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">{placementData.department}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">{placementData.experience}</span>
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
          {/* Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Placement Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-bold text-primary">{placementData.statistics.totalPlacements}</p>
                  <p className="text-sm text-muted-foreground">Total Placements</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">{placementData.statistics.activeCompanies}</p>
                  <p className="text-sm text-muted-foreground">Active Companies</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">{placementData.statistics.placementRate}%</p>
                  <p className="text-sm text-muted-foreground">Placement Rate</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-bold text-orange-600">{placementData.statistics.averagePackage}</p>
                  <p className="text-sm text-muted-foreground">Average Package</p>
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
                {placementData.responsibilities.map((responsibility, index) => (
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
              {placementData.achievements.map((achievement, index) => (
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
              {placementData.recentActivities.map((activity, index) => (
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

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {placementData.upcomingEvents.map((event, index) => (
                <div key={index} className="p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium">{event.event}</p>
                    <Badge variant="outline">Upcoming</Badge>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                    <p>Venue: {event.venue}</p>
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
