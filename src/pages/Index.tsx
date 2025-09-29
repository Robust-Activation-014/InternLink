import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Users, TrendingUp, Award, Star, Check, Play, ChevronRight, Code, Database, Zap, Shield, Globe, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RoleSelectionModal } from '@/components/RoleSelectionModal';
import { useUser, UserRole } from '@/contexts/UserContext';

const Index = () => {
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const navigate = useNavigate();
  const { login } = useUser();

  const handleRoleSelect = (role: string) => {
    // Login the user with the selected role
    login(role as UserRole);
    
    // Navigate to the appropriate dashboard
    switch (role) {
      case 'student':
        navigate('/dashboard');
        break;
      case 'faculty':
        navigate('/faculty');
        break;
      case 'placement':
        navigate('/placement');
        break;
      case 'recruiter':
        navigate('/recruiter');
        break;
      default:
        navigate('/dashboard');
    }
  };

  const handleGetStarted = () => {
    setIsRoleModalOpen(true);
  };
  const features = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "AI-Powered Matching",
      description: "Advanced algorithms connect you with opportunities that match your skills and career goals",
      accent: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Industry Analytics",
      description: "Real-time insights from leading companies and emerging market trends",
      accent: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Verified Opportunities",
      description: "Curated internships from trusted partners with guaranteed quality assurance",
      accent: "from-green-500 to-teal-500"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Students", icon: <Users className="h-6 w-6" /> },
    { number: "2K+", label: "Partner Companies", icon: <Globe className="h-6 w-6" /> },
    { number: "98%", label: "Success Rate", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "4.9", label: "Platform Rating", icon: <Star className="h-6 w-6" /> }
  ];

  const industries = [
    { name: "Technology", growth: "+127%", companies: "500+" },
    { name: "Finance", growth: "+89%", companies: "350+" },
    { name: "Healthcare", growth: "+156%", companies: "200+" },
    { name: "Manufacturing", growth: "+78%", companies: "400+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="floating-element w-32 h-32 top-20 left-10 animate-float" />
      <div className="floating-element w-24 h-24 top-40 right-20 animate-float" style={{ animationDelay: '-2s' }} />
      <div className="floating-element w-40 h-40 bottom-32 left-1/4 animate-float" style={{ animationDelay: '-4s' }} />
      <div className="floating-element w-28 h-28 top-1/3 right-1/3 animate-float" style={{ animationDelay: '-1s' }} />

      {/* Navigation */}
      <nav className="relative z-50 glass-tech border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <Award className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                CareerSync
              </span>
              <Badge variant="outline" className="ml-2 border-primary/50 text-primary">
                BETA
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                  Dashboard
                </Button>
              </Link>
              <Button 
                onClick={handleGetStarted}
                className="bg-gradient-primary text-white shadow-tech hover-glow"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8">
              <Badge variant="outline" className="mb-6 px-6 py-3 text-sm border-primary/30 bg-primary/5 animate-pulse-glow">
                <Zap className="h-4 w-4 mr-2" />
                AI-Powered Career Platform
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Think. Connect.{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Digitize.
              </span>
            </h1>
            
            <p className="text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Revolutionary internship platform connecting ambitious students with industry leaders 
              through advanced AI matching and real-time market intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                onClick={handleGetStarted}
                size="lg" 
                className="text-xl px-12 py-8 bg-gradient-primary text-white shadow-tech hover-tech"
              >
                Start Your Journey
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button variant="outline" size="lg" className="text-xl px-12 py-8 border-primary/30 hover:bg-primary/10">
                <Play className="mr-3 h-6 w-6" />
                Watch Demo
              </Button>
            </div>

            {/* Floating Tech Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { icon: <Code className="h-5 w-5" />, label: "AI Matching" },
                { icon: <Database className="h-5 w-5" />, label: "Real-time Data" },
                { icon: <Shield className="h-5 w-5" />, label: "Verified Jobs" },
                { icon: <Globe className="h-5 w-5" />, label: "Global Network" }
              ].map((item, index) => (
                <div key={index} className="glass-card rounded-2xl p-4 hover-tech">
                  <div className="text-primary mb-2">{item.icon}</div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 text-center hover-tech">
                <div className="text-primary mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Expertise that cuts across{' '}
              <span className="bg-gradient-accent bg-clip-text text-transparent">Industries</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced technology meets human expertise to deliver unprecedented career opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card border-0 hover-tech group">
                <CardContent className="p-10">
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{feature.description}</p>
                  <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm font-medium">Explore capabilities</span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Industry Insights */}
          <div className="glass-tech rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Industry Insights</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{industry.name}</div>
                  <div className="text-lg text-accent mb-1">{industry.growth}</div>
                  <div className="text-sm text-muted-foreground">{industry.companies} companies</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-16">
            <h2 className="text-5xl font-bold mb-8">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Join the next generation of professionals leveraging AI-powered career advancement.
            </p>
            
            <div className="flex items-center justify-center space-x-8 mb-12">
              {[
                { icon: <Check className="h-5 w-5" />, text: "AI-Powered Matching" },
                { icon: <Check className="h-5 w-5" />, text: "Global Opportunities" },
                { icon: <Check className="h-5 w-5" />, text: "Expert Mentorship" }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-primary mr-3">{item.icon}</div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={handleGetStarted}
              size="lg" 
              className="text-xl px-16 py-8 bg-gradient-primary text-white shadow-glow hover-glow"
            >
              Launch Your Career
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="h-10 w-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <Award className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold">CareerSync</span>
            <Badge variant="outline" className="border-primary/50 text-primary">BETA</Badge>
          </div>
          <p className="text-muted-foreground text-lg">
            Powering the future of career development through advanced AI technology
          </p>
        </div>
      </footer>

      {/* Role Selection Modal */}
      <RoleSelectionModal
        isOpen={isRoleModalOpen}
        onClose={() => setIsRoleModalOpen(false)}
        onRoleSelect={handleRoleSelect}
      />
    </div>
  );
};

export default Index;
