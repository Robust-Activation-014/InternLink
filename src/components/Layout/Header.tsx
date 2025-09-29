import React from 'react';
import { Bell, Search, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useUser } from '@/contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6 shadow-sm">
      {/* Search */}
      <div className="flex flex-1 items-center space-x-4">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search internships, companies, or resources..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-destructive"></span>
        </Button>

        {/* User Avatar */}
        {user && (
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-muted-foreground capitalize">{user.role}</p>
            </div>
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleLogout}
              title="Logout"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}