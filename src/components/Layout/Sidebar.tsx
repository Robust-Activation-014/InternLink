import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  User, 
  BarChart3, 
  Briefcase, 
  MessageCircle, 
  FileText, 
  Code, 
  Users, 
  Settings,
  GraduationCap,
  Award,
  CheckCircle,
  Clock,
  Building2,
  Target,
  Calendar,
  FileCheck,
  UserCheck,
  Search,
  Filter,
  Plus,
  Edit,
  Download,
  Star,
  Eye,
  Send
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUser, UserRole } from '@/contexts/UserContext';

// Student Navigation (as shown in the image)
const studentNavigation = [
  { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
  { name: 'Profile', href: '/student-profile', icon: User },
  { name: 'Internships', href: '/internships', icon: Briefcase },
  { name: 'Performance', href: '/performance', icon: Award },
  { name: 'Tests & Code', href: '/tests', icon: Code },
  { name: 'Resume Review', href: '/resume', icon: FileText },
  { name: 'Alumni Connect', href: '/alumni', icon: Users },
  { name: 'Interview Prep', href: '/interviews', icon: MessageCircle },
];

// Faculty Navigation
const facultyNavigation = [
  { name: 'Dashboard', href: '/faculty', icon: BarChart3 },
  { name: 'Approval Queue', href: '/faculty/approvals', icon: Clock },
  { name: 'Student Tracking', href: '/faculty/students', icon: UserCheck },
  { name: 'Feedback Portal', href: '/faculty/feedback', icon: MessageCircle },
  { name: 'Reports', href: '/faculty/reports', icon: FileText },
  { name: 'Profile', href: '/faculty-profile', icon: User },
  { name: 'Settings', href: '/settings', icon: Settings },
];

// Placement Cell Navigation
const placementNavigation = [
  { name: 'Dashboard', href: '/placement', icon: BarChart3 },
  { name: 'Opportunities', href: '/placement/opportunities', icon: Briefcase },
  { name: 'Applications', href: '/placement/applications', icon: FileText },
  { name: 'Analytics', href: '/placement/analytics', icon: BarChart3 },
  { name: 'Scheduling', href: '/placement/scheduling', icon: Calendar },
  { name: 'Certificates', href: '/placement/certificates', icon: FileCheck },
  { name: 'User Management', href: '/placement/users', icon: Users },
  { name: 'Profile', href: '/placement-profile', icon: User },
];

// Recruiter Navigation
const recruiterNavigation = [
  { name: 'Dashboard', href: '/recruiter', icon: BarChart3 },
  { name: 'Company Profile', href: '/recruiter/profile', icon: Building2 },
  { name: 'Post Jobs', href: '/recruiter/jobs', icon: Plus },
  { name: 'Candidates', href: '/recruiter/candidates', icon: Users },
  { name: 'Applications', href: '/recruiter/applications', icon: FileText },
  { name: 'Feedback', href: '/recruiter/feedback', icon: Star },
  { name: 'Certificates', href: '/recruiter/certificates', icon: FileCheck },
  { name: 'Profile', href: '/recruiter-profile', icon: User },
];

const getNavigationForRole = (role: UserRole) => {
  switch (role) {
    case 'student':
      return studentNavigation;
    case 'faculty':
      return facultyNavigation;
    case 'placement':
      return placementNavigation;
    case 'recruiter':
      return recruiterNavigation;
    default:
      return studentNavigation;
  }
};

export function Sidebar() {
  const location = useLocation();
  const { user } = useUser();
  
  // Get navigation based on user role, default to student if no user
  const navigation = getNavigationForRole(user?.role || 'student');

  return (
    <div className="flex h-full w-64 flex-col bg-gradient-primary text-white">
      {/* Logo */}
      <div className="flex h-16 items-center px-6">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8" />
          <span className="text-xl font-bold">CareerHub</span>
        </div>
      </div>

      {/* User Info */}
      {user && (
        <div className="px-6 py-3 border-b border-white/20">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">{user.name}</p>
              <p className="text-xs text-white/60 capitalize">{user.role}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 space-y-2 px-4 py-4">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={cn(
                'group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover-lift',
                isActive 
                  ? 'bg-white/20 text-white shadow-lg' 
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              )}
            >
              <item.icon className={cn(
                'mr-3 h-5 w-5 transition-colors',
                isActive ? 'text-white' : 'text-white/60 group-hover:text-white'
              )} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* Settings - only show if not already in navigation */}
      {!navigation.some(item => item.name === 'Settings') && (
        <div className="p-4 border-t border-white/20">
          <NavLink
            to="/settings"
            className="group flex items-center px-3 py-2 text-sm font-medium text-white/80 rounded-lg transition-all duration-200 hover:bg-white/10 hover:text-white"
          >
            <Settings className="mr-3 h-5 w-5 text-white/60 group-hover:text-white" />
            Settings
          </NavLink>
        </div>
      )}
    </div>
  );
}