import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Building, DollarSign } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { InternshipCard } from '@/components/Dashboard/InternshipCard';
import { jobListings } from '@/data/mockData';

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

export default function Internships() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  const handleApply = (jobId: string) => {
    console.log('Applying to job:', jobId);
    // TODO: Implement application logic
  };

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || job.type === typeFilter;
    const matchesLocation = locationFilter === 'all' || job.location === locationFilter;
    
    return matchesSearch && matchesType && matchesLocation;
  });

  const locations = [...new Set(jobListings.map(job => job.location))];

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Internship & Job Marketplace
        </h1>
        <p className="text-muted-foreground mt-2">
          Discover and apply to verified opportunities from top companies.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search internships, companies, or roles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Job Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="internship">Internships</SelectItem>
            <SelectItem value="full-time">Full Time</SelectItem>
            <SelectItem value="part-time">Part Time</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={locationFilter} onValueChange={setLocationFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            {locations.map((location) => (
              <SelectItem key={location} value={location}>
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Button variant="outline" className="px-6">
          <Filter className="mr-2 h-4 w-4" />
          More Filters
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-primary text-white p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <Building className="h-5 w-5" />
            <span className="text-sm font-medium">Companies</span>
          </div>
          <p className="text-2xl font-bold mt-2">150+</p>
        </div>
        <div className="bg-gradient-accent text-white p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium">Locations</span>
          </div>
          <p className="text-2xl font-bold mt-2">25+</p>
        </div>
        <div className="bg-gradient-success text-white p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5" />
            <span className="text-sm font-medium">Avg. Stipend</span>
          </div>
          <p className="text-2xl font-bold mt-2">₹45K</p>
        </div>
        <div className="bg-card border p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <Badge className="bg-gradient-primary text-white">New</Badge>
            <span className="text-sm font-medium">This Week</span>
          </div>
          <p className="text-2xl font-bold mt-2">12</p>
        </div>
      </div>

      {/* Results */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted-foreground">
            Showing {filteredJobs.length} of {jobListings.length} opportunities
          </p>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="salary">Highest Salary</SelectItem>
              <SelectItem value="company">Company A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredJobs.map((job) => (
            <motion.div key={job.id} variants={item}>
              <InternshipCard job={job} onApply={handleApply} />
            </motion.div>
          ))}
        </motion.div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No opportunities found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setTypeFilter('all');
                setLocationFilter('all');
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}