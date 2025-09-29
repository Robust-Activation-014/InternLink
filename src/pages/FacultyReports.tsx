import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText,
  Download,
  Calendar,
  TrendingUp,
  Users,
  Award,
  BarChart3,
  Filter,
  Search
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DatePickerWithRange } from '@/components/ui/date-picker';

const reportData = [
  {
    id: 1,
    title: "Approved Students Report",
    description: "List of all students approved for internships",
    type: "Student List",
    date: "2024-01-20",
    status: "Generated",
    downloads: 12
  },
  {
    id: 2,
    title: "Faculty Performance Report",
    description: "Academic performance metrics for faculty",
    type: "Performance",
    date: "2024-01-18",
    status: "Generated",
    downloads: 8
  },
  {
    id: 3,
    title: "Student Progress Report",
    description: "Progress tracking for mentored students",
    type: "Progress",
    date: "2024-01-15",
    status: "Generated",
    downloads: 15
  }
];

const studentApprovals = [
  {
    id: 1,
    student: "Bhargab Saikia",
    studentId: "CS2024001",
    company: "Google",
    position: "Software Engineering Intern",
    approvedDate: "2024-01-15",
    status: "Approved"
  },
  {
    id: 2,
    student: "Priya Patel",
    studentId: "CS2024002",
    company: "Microsoft",
    position: "Product Management Intern",
    approvedDate: "2024-01-14",
    status: "Approved"
  },
  {
    id: 3,
    student: "Rahul Kumar",
    studentId: "CS2024003",
    company: "Amazon",
    position: "Data Science Intern",
    approvedDate: "2024-01-13",
    status: "Approved"
  }
];

export default function FacultyReports() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [dateRange, setDateRange] = useState({ from: undefined, to: undefined });

  const handleGenerateReport = (type) => {
    console.log(`Generating ${type} report`);
    // Handle report generation
  };

  const handleDownloadReport = (reportId) => {
    console.log(`Downloading report ${reportId}`);
    // Handle report download
  };

  const filteredReports = reportData.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || report.type.toLowerCase() === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Reports
        </h1>
        <p className="text-muted-foreground mt-2">
          Generate and download academic reports and student lists.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Reports</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Download className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Downloads</p>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Approved Students</p>
                <p className="text-2xl font-bold">89</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Generate Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Generate New Report</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center mb-3">
                <Users className="h-6 w-6 text-blue-500 mr-2" />
                <h3 className="font-semibold">Student List</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Generate a list of all approved students with their details.
              </p>
              <Button onClick={() => handleGenerateReport('student-list')} className="w-full">
                <FileText className="h-4 w-4 mr-2" />
                Generate Student List
              </Button>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center mb-3">
                <TrendingUp className="h-6 w-6 text-green-500 mr-2" />
                <h3 className="font-semibold">Performance Report</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Create a performance report for your mentored students.
              </p>
              <Button onClick={() => handleGenerateReport('performance')} className="w-full">
                <BarChart3 className="h-4 w-4 mr-2" />
                Generate Performance Report
              </Button>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 text-purple-500 mr-2" />
                <h3 className="font-semibold">Achievement Report</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Generate a report of student achievements and milestones.
              </p>
              <Button onClick={() => handleGenerateReport('achievement')} className="w-full">
                <Award className="h-4 w-4 mr-2" />
                Generate Achievement Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Reports</CardTitle>
            <div className="flex gap-2">
              <Input
                placeholder="Search reports..."
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
                  <SelectItem value="student list">Student List</SelectItem>
                  <SelectItem value="performance">Performance</SelectItem>
                  <SelectItem value="progress">Progress</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredReports.map((report) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-muted rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{report.title}</h3>
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                    <div className="flex items-center mt-1">
                      <Badge variant="outline" className="mr-2">{report.type}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(report.date).toLocaleDateString()} • {report.downloads} downloads
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={report.status === 'Generated' ? 'default' : 'secondary'}>
                    {report.status}
                  </Badge>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownloadReport(report.id)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Approved Students List */}
      <Card>
        <CardHeader>
          <CardTitle>Approved Students</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {studentApprovals.map((student) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-muted rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{student.student}</h3>
                    <p className="text-sm text-muted-foreground">{student.studentId}</p>
                    <p className="text-sm text-muted-foreground">
                      {student.company} • {student.position}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="default">{student.status}</Badge>
                  <span className="text-xs text-muted-foreground">
                    Approved: {new Date(student.approvedDate).toLocaleDateString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
