import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3,
  TrendingUp,
  Users,
  Building2,
  Calendar,
  Download,
  Filter,
  Target,
  Award,
  Clock,
  DollarSign,
  MapPin
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const analyticsData = {
  totalStudents: 1250,
  placedStudents: 980,
  unplacedStudents: 270,
  placementRate: 78.4,
  totalCompanies: 45,
  averagePackage: 8.5,
  offersThisWeek: 12,
  interviewsScheduled: 28
};

const departmentStats = [
  { department: "Computer Science", placed: 320, total: 400, rate: 80 },
  { department: "Business", placed: 180, total: 250, rate: 72 },
  { department: "Data Science", placed: 120, total: 150, rate: 80 },
  { department: "Engineering", placed: 360, total: 450, rate: 80 }
];

const companyStats = [
  { company: "Google", offers: 25, avgPackage: 12.5 },
  { company: "Microsoft", offers: 20, avgPackage: 11.0 },
  { company: "Amazon", offers: 18, avgPackage: 10.5 },
  { company: "Meta", offers: 15, avgPackage: 13.0 }
];

const monthlyTrends = [
  { month: "Jan", applications: 45, placements: 32 },
  { month: "Feb", applications: 52, placements: 38 },
  { month: "Mar", applications: 48, placements: 35 },
  { month: "Apr", applications: 55, placements: 42 }
];

export default function PlacementAnalytics() {
  const [timeRange, setTimeRange] = useState('6months');
  const [department, setDepartment] = useState('all');

  const handleExportReport = (format) => {
    console.log(`Exporting report as ${format}`);
    // Handle export logic
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Analytics & Reports
        </h1>
        <p className="text-muted-foreground mt-2">
          View placement statistics and generate comprehensive reports.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                <p className="text-2xl font-bold">{analyticsData.totalStudents}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Target className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Placed Students</p>
                <p className="text-2xl font-bold">{analyticsData.placedStudents}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Placement Rate</p>
                <p className="text-2xl font-bold">{analyticsData.placementRate}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-orange-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Active Companies</p>
                <p className="text-2xl font-bold">{analyticsData.totalCompanies}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Avg. Package (LPA)</p>
                <p className="text-2xl font-bold">{analyticsData.averagePackage}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Offers This Week</p>
                <p className="text-2xl font-bold">{analyticsData.offersThisWeek}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Interviews Scheduled</p>
                <p className="text-2xl font-bold">{analyticsData.interviewsScheduled}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-red-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Unplaced Students</p>
                <p className="text-2xl font-bold">{analyticsData.unplacedStudents}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Export */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Report Settings</CardTitle>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={() => handleExportReport('csv')}>
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
              <Button variant="outline" onClick={() => handleExportReport('pdf')}>
                <Download className="h-4 w-4 mr-2" />
                Export PDF
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1month">Last Month</SelectItem>
                <SelectItem value="3months">Last 3 Months</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
                <SelectItem value="1year">Last Year</SelectItem>
              </SelectContent>
            </Select>
            <Select value={department} onValueChange={setDepartment}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="Computer Science">Computer Science</SelectItem>
                <SelectItem value="Business">Business</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
                <SelectItem value="Engineering">Engineering</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Department-wise Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Department-wise Placement Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {departmentStats.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-4 border rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{dept.department}</h3>
                  <Badge variant={dept.rate >= 80 ? 'default' : dept.rate >= 70 ? 'secondary' : 'destructive'}>
                    {dept.rate}% Placement Rate
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Placed: {dept.placed} / {dept.total}</span>
                  <span>Remaining: {dept.total - dept.placed}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${dept.rate}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Company-wise Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Top Recruiting Companies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {companyStats.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-muted rounded-lg flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{company.company}</h3>
                    <p className="text-sm text-muted-foreground">{company.offers} offers</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹{company.avgPackage} LPA</p>
                  <p className="text-sm text-muted-foreground">Average Package</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Monthly Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyTrends.map((month, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <h3 className="font-semibold">{month.month}</h3>
                  <p className="text-sm text-muted-foreground">Applications: {month.applications}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Placements: {month.placements}</p>
                  <p className="text-sm text-muted-foreground">
                    Rate: {((month.placements / month.applications) * 100).toFixed(1)}%
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
