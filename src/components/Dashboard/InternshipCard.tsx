import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, DollarSign, Building } from 'lucide-react';
import { JobListing } from '@/types';

interface InternshipCardProps {
  job: JobListing;
  onApply?: (jobId: string) => void;
}

export function InternshipCard({ job, onApply }: InternshipCardProps) {
  const formatSalary = (min: number, max: number, currency: string) => {
    if (min === max) return `${currency} ${min.toLocaleString()}`;
    return `${currency} ${min.toLocaleString()} - ${max.toLocaleString()}`;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'internship': return 'bg-gradient-accent text-white';
      case 'full-time': return 'bg-gradient-primary text-white';
      default: return 'bg-muted';
    }
  };

  return (
    <Card className="transition-all duration-300 hover-lift hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary text-white font-bold text-lg">
              {job.company.name[0]}
            </div>
            <div>
              <CardTitle className="text-lg">{job.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{job.company.name}</p>
            </div>
          </div>
          <Badge className={getTypeColor(job.type)}>
            {job.type === 'internship' ? 'Internship' : 'Full Time'}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {job.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {job.requirements.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
          {job.requirements.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{job.requirements.length - 3} more
            </Badge>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4" />
            <span>{formatSalary(job.salary.min, job.salary.max, job.salary.currency)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{job.duration || 'Full Time'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Building className="h-4 w-4" />
            <span>{job.company.size}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-muted-foreground">
            Posted {new Date(job.postedDate).toLocaleDateString()}
          </p>
          <Button 
            onClick={() => onApply?.(job.id)}
            className="bg-gradient-primary hover:bg-gradient-accent"
          >
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}