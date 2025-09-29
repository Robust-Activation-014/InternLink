import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users,
  UserPlus,
  UserMinus,
  Edit,
  Trash2,
  Search,
  Filter,
  Mail,
  Phone,
  Building2,
  GraduationCap,
  User,
  Plus,
  Settings
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const users = [
  {
    id: 1,
    name: "Dr. Sarah Wilson",
    email: "sarah.wilson@faculty.edu",
    role: "Faculty",
    department: "Computer Science",
    status: "Active",
    avatar: "/api/placeholder/40/40",
    lastLogin: "2024-01-20"
  },
  {
    id: 2,
    name: "John Smith",
    email: "john.smith@techcorp.com",
    role: "Recruiter",
    department: "Google",
    status: "Active",
    avatar: "/api/placeholder/40/40",
    lastLogin: "2024-01-19"
  },
  {
    id: 3,
    name: "Bhargab Saikia",
    email: "bhargab.sharma@student.edu",
    role: "Student",
    department: "Computer Science",
    status: "Active",
    avatar: "/api/placeholder/40/40",
    lastLogin: "2024-01-18"
  }
];

export default function PlacementUsers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: '',
    department: '',
    phone: ''
  });

  const handleAddUser = () => {
    console.log('Adding user:', newUser);
    // Handle user creation
    setIsAddModalOpen(false);
    setNewUser({
      name: '',
      email: '',
      role: '',
      department: '',
      phone: ''
    });
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    // Handle edit logic
  };

  const handleDeleteUser = (id) => {
    console.log(`Deleting user ${id}`);
    // Handle deletion logic
  };

  const handleToggleStatus = (id) => {
    console.log(`Toggling status for user ${id}`);
    // Handle status toggle
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role.toLowerCase() === filterRole;
    const matchesStatus = filterStatus === 'all' || user.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getRoleIcon = (role) => {
    switch (role) {
      case 'Faculty': return <GraduationCap className="h-4 w-4" />;
      case 'Recruiter': return <Building2 className="h-4 w-4" />;
      case 'Student': return <User className="h-4 w-4" />;
      default: return <User className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          User Management
        </h1>
        <p className="text-muted-foreground mt-2">
          Add, edit, and manage faculty, recruiters, and student accounts.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Faculty</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Recruiters</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <User className="h-8 w-8 text-orange-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Students</p>
                <p className="text-2xl font-bold">120</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Actions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Users</CardTitle>
            <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
              <DialogTrigger asChild>
                <Button>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New User</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Full Name</label>
                      <Input
                        value={newUser.name}
                        onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                        placeholder="e.g., John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <Input
                        type="email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                        placeholder="e.g., john.doe@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Role</label>
                      <Select value={newUser.role} onValueChange={(value) => setNewUser({...newUser, role: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Faculty">Faculty</SelectItem>
                          <SelectItem value="Recruiter">Recruiter</SelectItem>
                          <SelectItem value="Student">Student</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Department/Company</label>
                      <Input
                        value={newUser.department}
                        onChange={(e) => setNewUser({...newUser, department: e.target.value})}
                        placeholder="e.g., Computer Science or Google"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input
                      value={newUser.phone}
                      onChange={(e) => setNewUser({...newUser, phone: e.target.value})}
                      placeholder="e.g., +91 98765 43210"
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddUser}>
                      Add User
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Select value={filterRole} onValueChange={setFilterRole}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="faculty">Faculty</SelectItem>
                <SelectItem value="recruiter">Recruiter</SelectItem>
                <SelectItem value="student">Student</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Users List */}
      <div className="grid gap-4">
        {filteredUsers.map((user) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{user.name}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                            {user.status}
                          </Badge>
                          <div className="flex items-center">
                            {getRoleIcon(user.role)}
                            <span className="ml-1 text-sm text-muted-foreground">{user.role}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Mail className="h-4 w-4 mr-2" />
                        <span className="mr-4">{user.email}</span>
                        <span className="mr-4">•</span>
                        <span>{user.department}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-sm text-muted-foreground">
                            Last login: {new Date(user.lastLogin).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedUser(user)}
                          >
                            View Details
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditUser(user)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleToggleStatus(user.id)}
                          >
                            {user.status === 'Active' ? <UserMinus className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <Card className="fixed inset-4 z-50 bg-background border shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>User Details</CardTitle>
              <Button variant="ghost" onClick={() => setSelectedUser(null)}>
                ×
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Personal Information</h4>
                <p>Name: {selectedUser.name}</p>
                <p>Email: {selectedUser.email}</p>
                <p>Role: {selectedUser.role}</p>
                <p>Status: {selectedUser.status}</p>
              </div>
              <div>
                <h4 className="font-semibold">Professional Information</h4>
                <p>Department/Company: {selectedUser.department}</p>
                <p>Last Login: {new Date(selectedUser.lastLogin).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setSelectedUser(null)}>
                Close
              </Button>
              <Button onClick={() => handleEditUser(selectedUser)}>
                Edit User
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
