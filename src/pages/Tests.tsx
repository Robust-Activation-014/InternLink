import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { Clock, Play, Award, BookOpen, Code, Brain, MessageSquare } from 'lucide-react';

const testCategories = [
  {
    icon: Brain,
    title: 'Aptitude Tests',
    description: 'Logical reasoning, quantitative aptitude, and analytical skills',
    tests: [
      { name: 'Logical Reasoning', duration: '45 min', questions: 30, status: 'completed', score: 85 },
      { name: 'Quantitative Aptitude', duration: '60 min', questions: 40, status: 'in-progress', score: null },
      { name: 'Data Interpretation', duration: '30 min', questions: 25, status: 'not-started', score: null },
    ]
  },
  {
    icon: Code,
    title: 'Coding Assessments',
    description: 'Programming challenges and algorithm problems',
    tests: [
      { name: 'Data Structures', duration: '90 min', questions: 5, status: 'completed', score: 92 },
      { name: 'Algorithms', duration: '120 min', questions: 6, status: 'not-started', score: null },
      { name: 'System Design', duration: '60 min', questions: 3, status: 'not-started', score: null },
    ]
  },
  {
    icon: MessageSquare,
    title: 'Communication Skills',
    description: 'English proficiency and communication assessments',
    tests: [
      { name: 'English Proficiency', duration: '45 min', questions: 50, status: 'completed', score: 78 },
      { name: 'Group Discussion', duration: '30 min', questions: 1, status: 'not-started', score: null },
      { name: 'Presentation Skills', duration: '20 min', questions: 1, status: 'not-started', score: null },
    ]
  }
];

export default function Tests() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="secondary">Completed</Badge>;
      case 'in-progress':
        return <Badge variant="destructive">In Progress</Badge>;
      default:
        return <Badge variant="outline">Not Started</Badge>;
    }
  };

  const getActionButton = (status: string) => {
    switch (status) {
      case 'completed':
        return <Button variant="outline" size="sm">View Results</Button>;
      case 'in-progress':
        return <Button size="sm">Continue</Button>;
      default:
        return <Button size="sm"><Play className="w-4 h-4 mr-2" />Start Test</Button>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-foreground mb-8">Online Tests & Assessments</h1>
        </motion.div>

        {/* Overall Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="card-glass mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Overall Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">Tests Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-warning">1</div>
                  <div className="text-sm text-muted-foreground">In Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">6</div>
                  <div className="text-sm text-muted-foreground">Remaining</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Completion Progress</span>
                  <span>36%</span>
                </div>
                <Progress value={36} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Test Categories */}
        <div className="space-y-6">
          {testCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
            >
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <category.icon className="w-5 h-5" />
                    {category.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.tests.map((test, testIndex) => (
                      <div key={test.name} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-semibold">{test.name}</h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {test.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <BookOpen className="w-4 h-4" />
                              {test.questions} questions
                            </div>
                            {test.score && (
                              <div className="flex items-center gap-1">
                                <Award className="w-4 h-4" />
                                Score: {test.score}%
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {getStatusBadge(test.status)}
                          {getActionButton(test.status)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}