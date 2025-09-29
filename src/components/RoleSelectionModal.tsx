import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  UserCheck, 
  Building2, 
  Briefcase, 
  X,
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface RoleSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRoleSelect: (role: string) => void;
}

const roles = [
  {
    id: 'student',
    title: 'Student',
    description: 'Find internships, track applications, and grow your career',
    icon: <GraduationCap className="h-8 w-8" />,
    features: ['AI-powered job matching', 'Application tracking', 'Skill assessments', 'Career guidance']
  },
  {
    id: 'faculty',
    title: 'Faculty Mentor',
    description: 'Guide students and track their progress',
    icon: <UserCheck className="h-8 w-8" />,
    features: ['Student progress tracking', 'Mentorship tools', 'Performance analytics', 'Resource management']
  },
  {
    id: 'placement',
    title: 'Placement Cell',
    description: 'Manage campus recruitment and student placements',
    icon: <Building2 className="h-8 w-8" />,
    features: ['Recruitment management', 'Company partnerships', 'Event coordination', 'Analytics dashboard']
  },
  {
    id: 'recruiter',
    title: 'Recruiter',
    description: 'Find and hire the best talent from our platform',
    icon: <Briefcase className="h-8 w-8" />,
    features: ['Talent discovery', 'Candidate screening', 'Interview scheduling', 'Hiring analytics']
  }
];

const stats = [
  { icon: <Users className="h-5 w-5" />, label: "50K+ Students", value: "Active" },
  { icon: <Target className="h-5 w-5" />, label: "2K+ Companies", value: "Partners" },
  { icon: <TrendingUp className="h-5 w-5" />, label: "98% Success", value: "Rate" },
  { icon: <Globe className="h-5 w-5" />, label: "Global", value: "Network" }
];

export const RoleSelectionModal: React.FC<RoleSelectionModalProps> = ({
  isOpen,
  onClose,
  onRoleSelect
}) => {
  const handleRoleSelect = (roleId: string) => {
    onRoleSelect(roleId);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass-card rounded-3xl p-8 border border-border/50">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-4xl font-bold mb-2">
                    Choose Your Role
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Select how you'd like to use GrowthVerse
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="h-10 w-10 rounded-full hover:bg-muted"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="glass-card rounded-xl p-4 text-center">
                    <div className="text-primary mb-2 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Role Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {roles.map((role, index) => (
                  <motion.div
                    key={role.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      className={`border border-border hover:shadow-lg transition-all duration-300 cursor-pointer group bg-card`}
                      onClick={() => handleRoleSelect(role.id)}
                    >
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div className="p-4 rounded-2xl bg-primary/10 text-primary shadow-sm">
                            {role.icon}
                          </div>
                          <Badge variant="outline" className="text-muted-foreground">
                            Popular
                          </Badge>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3">{role.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {role.description}
                        </p>
                        
                        <div className="space-y-3 mb-8">
                          {role.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                              <span className="text-sm font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button className="w-full bg-gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:translate-y-[-2px]">
                          Continue as {role.title}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-border/50 text-center">
                <p className="text-muted-foreground">
                  You can change your role later in your profile settings
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
