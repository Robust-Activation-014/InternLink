import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  TrendingUp, 
  Award, 
  Eye, 
  Users, 
  Calendar 
} from 'lucide-react';
import { StatsCard } from '@/components/Dashboard/StatsCard';
import { PerformanceCharts } from '@/components/Dashboard/PerformanceCharts';
import { InternshipCard } from '@/components/Dashboard/InternshipCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { dashboardStats, jobListings, internshipApplications } from '@/data/mockData';

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

export default function Dashboard() {
  const handleApply = (jobId: string) => {
    console.log('Applying to job:', jobId);
    // TODO: Implement application logic
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Welcome back, Bhargab! 👋
        </h1>
        <p className="text-muted-foreground mt-2">
          Here's what's happening with your internship journey today.
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
            title="Total Applications"
            value={dashboardStats.totalApplications}
            description="This month"
            icon={<Briefcase className="h-5 w-5" />}
            trend={{ value: 12, isPositive: true }}
          />
        </motion.div>
        
        <motion.div variants={item}>
          <StatsCard
            title="Shortlisted"
            value={dashboardStats.shortlistedApplications}
            description="Pending interviews"
            icon={<TrendingUp className="h-5 w-5" />}
            trend={{ value: 25, isPositive: true }}
          />
        </motion.div>
        
        <motion.div variants={item}>
          <StatsCard
            title="Skill Score"
            value={`${dashboardStats.skillScore}%`}
            description="Overall performance"
            icon={<Award className="h-5 w-5" />}
            trend={{ value: 5, isPositive: true }}
          />
        </motion.div>
        
        <motion.div variants={item}>
          <StatsCard
            title="Profile Views"
            value={dashboardStats.profileViews}
            description="Last 30 days"
            icon={<Eye className="h-5 w-5" />}
            trend={{ value: 8, isPositive: true }}
          />
        </motion.div>
      </motion.div>

      {/* Performance Charts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <PerformanceCharts />
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Applications */}
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Applications</CardTitle>
              <Button variant="outline" size="sm">View All</Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {internshipApplications.slice(0, 3).map((application) => (
                <div key={application.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                    <div>
                      <p className="font-medium">{application.position}</p>
                      <p className="text-sm text-muted-foreground">{application.companyName}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium capitalize">{application.status.replace('-', ' ')}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(application.appliedDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-gradient-primary hover:bg-gradient-accent">
                <Users className="mr-2 h-4 w-4" />
                Update Profile
              </Button>
              <Button variant="outline" className="w-full">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Mock Interview
              </Button>
              <Button variant="outline" className="w-full">
                <Award className="mr-2 h-4 w-4" />
                Take Skill Test
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Featured Internships */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Featured Opportunities</h2>
          <Button variant="outline">Browse All</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobListings.slice(0, 3).map((job) => (
            <InternshipCard 
              key={job.id} 
              job={job} 
              onApply={handleApply}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}