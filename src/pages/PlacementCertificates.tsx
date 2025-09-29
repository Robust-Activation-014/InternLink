import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileCheck,
  Download,
  Eye,
  CheckCircle,
  Clock,
  Users,
  Award,
  Filter,
  Search,
  Send,
  Trash2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const certificates = [
  {
    id: 1,
    student: "Bhargab Saikia",
    studentId: "CS2024001",
    company: "Google",
    position: "Software Engineering Intern",
    completionDate: "2024-01-15",
    status: "Generated",
    generatedDate: "2024-01-16",
    downloadCount: 3
  },
  {
    id: 2,
    student: "Priya Patel",
    studentId: "CS2024002",
    company: "Microsoft",
    position: "Product Management Intern",
    completionDate: "2024-01-10",
    status: "Pending",
    generatedDate: null,
    downloadCount: 0
  },
  {
    id: 3,
    student: "Rahul Kumar",
    studentId: "CS2024003",
    company: "Amazon",
    position: "Data Science Intern",
    completionDate: "2024-01-08",
    status: "Generated",
    generatedDate: "2024-01-09",
    downloadCount: 1
  }
];

export default function PlacementCertificates() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleGenerateCertificate = (id) => {
    console.log(`Generating certificate for ${id}`);
    // Handle certificate generation
  };

  const handleDownloadCertificate = (id) => {
    console.log(`Downloading certificate ${id}`);
    // Handle certificate download
  };

  const handleSendCertificate = (id) => {
    console.log(`Sending certificate ${id}`);
    // Handle certificate sending
  };

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || cert.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Certificate Control
        </h1>
        <p className="text-muted-foreground mt-2">
          Trigger and verify auto-generated completion certificates.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <FileCheck className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Certificates</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Generated</p>
                <p className="text-2xl font-bold">18</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold">6</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Download className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Downloads</p>
                <p className="text-2xl font-bold">45</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Certificates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              placeholder="Search by student name, ID, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="generated">Generated</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="sent">Sent</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Certificates List */}
      <div className="grid gap-4">
        {filteredCertificates.map((certificate) => (
          <motion.div
            key={certificate.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{certificate.student}</h3>
                      <Badge variant={certificate.status === 'Generated' ? 'default' : 'secondary'}>
                        {certificate.status}
                      </Badge>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <span className="mr-4">ID: {certificate.studentId}</span>
                      <span className="mr-4">•</span>
                      <span className="mr-4">{certificate.company}</span>
                      <span>•</span>
                      <span className="ml-2">{certificate.position}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm">Completed: {new Date(certificate.completionDate).toLocaleDateString()}</span>
                        </div>
                        {certificate.generatedDate && (
                          <div className="flex items-center">
                            <FileCheck className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span className="text-sm">Generated: {new Date(certificate.generatedDate).toLocaleDateString()}</span>
                          </div>
                        )}
                        <div className="flex items-center">
                          <Download className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm">{certificate.downloadCount} downloads</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedCertificate(certificate)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        {certificate.status === 'Pending' && (
                          <Button
                            size="sm"
                            onClick={() => handleGenerateCertificate(certificate.id)}
                          >
                            <FileCheck className="h-4 w-4 mr-2" />
                            Generate
                          </Button>
                        )}
                        {certificate.status === 'Generated' && (
                          <>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDownloadCertificate(certificate.id)}
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handleSendCertificate(certificate.id)}
                            >
                              <Send className="h-4 w-4 mr-2" />
                              Send
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Certificate Details Modal */}
      {selectedCertificate && (
        <Card className="fixed inset-4 z-50 bg-background border shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Certificate Details</CardTitle>
              <Button variant="ghost" onClick={() => setSelectedCertificate(null)}>
                ×
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Student Information</h4>
                <p>Name: {selectedCertificate.student}</p>
                <p>Student ID: {selectedCertificate.studentId}</p>
                <p>Company: {selectedCertificate.company}</p>
                <p>Position: {selectedCertificate.position}</p>
              </div>
              <div>
                <h4 className="font-semibold">Certificate Details</h4>
                <p>Status: {selectedCertificate.status}</p>
                <p>Completion Date: {new Date(selectedCertificate.completionDate).toLocaleDateString()}</p>
                {selectedCertificate.generatedDate && (
                  <p>Generated: {new Date(selectedCertificate.generatedDate).toLocaleDateString()}</p>
                )}
                <p>Downloads: {selectedCertificate.downloadCount}</p>
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setSelectedCertificate(null)}>
                Close
              </Button>
              {selectedCertificate.status === 'Pending' && (
                <Button onClick={() => handleGenerateCertificate(selectedCertificate.id)}>
                  Generate Certificate
                </Button>
              )}
              {selectedCertificate.status === 'Generated' && (
                <Button onClick={() => handleDownloadCertificate(selectedCertificate.id)}>
                  Download Certificate
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
