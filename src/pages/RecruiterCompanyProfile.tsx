import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2,
  Edit,
  Save,
  X,
  Mail,
  Phone,
  MapPin,
  Globe,
  Calendar,
  Users,
  Award,
  Upload
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const companyData = {
  name: "TechCorp Solutions",
  industry: "Technology",
  size: "500-1000 employees",
  founded: "2010",
  website: "https://techcorp.com",
  description: "Leading technology company specializing in innovative software solutions and digital transformation services.",
  logo: "/api/placeholder/120/120",
  contact: {
    email: "hr@techcorp.com",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Street, Silicon Valley, CA 94000"
  },
  achievements: [
    "Best Tech Company 2023",
    "Innovation Award 2022",
    "Top Employer 2021"
  ],
  benefits: [
    "Health Insurance",
    "401k Matching",
    "Flexible Work Hours",
    "Professional Development",
    "Gym Membership"
  ]
};

export default function RecruiterCompanyProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(companyData);

  const handleSave = () => {
    console.log('Saving company profile:', editedData);
    // Handle save logic
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedData(companyData);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditedData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContactChange = (field, value) => {
    setEditedData(prev => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: value
      }
    }));
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Company Profile
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your company information and details.
          </p>
        </div>
        <div className="flex space-x-2">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={handleCancel}>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)}>
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      {/* Company Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Company Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start space-x-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={editedData.logo} />
              <AvatarFallback className="text-2xl">{editedData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Company Name</label>
                  {isEditing ? (
                    <Input
                      value={editedData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-1"
                    />
                  ) : (
                    <p className="text-lg font-semibold">{editedData.name}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Industry</label>
                  {isEditing ? (
                    <Input
                      value={editedData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      className="mt-1"
                    />
                  ) : (
                    <p className="text-lg">{editedData.industry}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Company Size</label>
                  {isEditing ? (
                    <Input
                      value={editedData.size}
                      onChange={(e) => handleInputChange('size', e.target.value)}
                      className="mt-1"
                    />
                  ) : (
                    <p className="text-lg">{editedData.size}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Founded</label>
                  {isEditing ? (
                    <Input
                      value={editedData.founded}
                      onChange={(e) => handleInputChange('founded', e.target.value)}
                      className="mt-1"
                    />
                  ) : (
                    <p className="text-lg">{editedData.founded}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Website</label>
                {isEditing ? (
                  <Input
                    value={editedData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    className="mt-1"
                  />
                ) : (
                  <p className="text-lg">{editedData.website}</p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Company Description */}
      <Card>
        <CardHeader>
          <CardTitle>Company Description</CardTitle>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <Textarea
              value={editedData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={4}
              placeholder="Describe your company..."
            />
          ) : (
            <p className="text-muted-foreground">{editedData.description}</p>
          )}
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Email</label>
              {isEditing ? (
                <Input
                  value={editedData.contact.email}
                  onChange={(e) => handleContactChange('email', e.target.value)}
                  className="mt-1"
                />
              ) : (
                <div className="flex items-center mt-1">
                  <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{editedData.contact.email}</span>
                </div>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Phone</label>
              {isEditing ? (
                <Input
                  value={editedData.contact.phone}
                  onChange={(e) => handleContactChange('phone', e.target.value)}
                  className="mt-1"
                />
              ) : (
                <div className="flex items-center mt-1">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{editedData.contact.phone}</span>
                </div>
              )}
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-muted-foreground">Address</label>
              {isEditing ? (
                <Input
                  value={editedData.contact.address}
                  onChange={(e) => handleContactChange('address', e.target.value)}
                  className="mt-1"
                />
              ) : (
                <div className="flex items-center mt-1">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{editedData.contact.address}</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle>Achievements & Awards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {editedData.achievements.map((achievement, index) => (
              <div key={index} className="flex items-center">
                <Award className="h-4 w-4 mr-3 text-yellow-500" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Benefits */}
      <Card>
        <CardHeader>
          <CardTitle>Employee Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {editedData.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Company Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Employees</p>
                <p className="text-2xl font-bold">750</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Years in Business</p>
                <p className="text-2xl font-bold">14</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Awards Won</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
