import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { User, Edit, MapPin, Mail, Phone, Calendar, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-foreground mb-8">Student Profile</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <Card className="card-glass">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="/placeholder.svg" alt="Student" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-xl">Alex Smith</CardTitle>
                <p className="text-muted-foreground">Computer Science Engineering</p>
                <div className="flex justify-center gap-2 mt-4">
                  <Badge variant="secondary">Final Year</Badge>
                  <Badge variant="outline">Available</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>alex.smith@college.edu</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>Graduating May 2024</span>
                </div>
                <Button className="w-full mt-4">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Profile Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Skills */}
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Python', 'Java', 'SQL', 'Node.js', 'MongoDB', 'Git'].map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Bachelor of Technology - Computer Science</h4>
                    <p className="text-muted-foreground">University of California, Berkeley</p>
                    <p className="text-sm text-muted-foreground">2020 - 2024 | CGPA: 8.7/10</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Software Development Intern</h4>
                    <p className="text-muted-foreground">TechCorp Inc.</p>
                    <p className="text-sm text-muted-foreground">Jun 2023 - Aug 2023</p>
                    <p className="text-sm mt-2">Developed React components and improved application performance by 25%.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Web Developer</h4>
                    <p className="text-muted-foreground">Freelance</p>
                    <p className="text-sm text-muted-foreground">Jan 2023 - May 2023</p>
                    <p className="text-sm mt-2">Built responsive websites for small businesses using modern web technologies.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}