import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'student' | 'faculty' | 'placement' | 'recruiter';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (role: UserRole) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = (role: UserRole) => {
    const mockUser: User = {
      id: '1',
      name: role === 'student' ? 'Bhargab Saikia' : 
            role === 'faculty' ? 'Dr. Sarah Wilson' :
            role === 'placement' ? 'Placement Admin' : 'John Smith',
      email: role === 'student' ? 'bhargab@student.edu' :
             role === 'faculty' ? 'sarah@faculty.edu' :
             role === 'placement' ? 'placement@admin.edu' : 'john@recruiter.com',
      role,
      avatar: '/api/placeholder/40/40'
    };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
