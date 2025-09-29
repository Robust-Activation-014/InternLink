import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { FileText, Download, Upload, Eye, CheckCircle, AlertCircle, Star, Zap } from 'lucide-react';

export default function Resume() {
  const resumeScore = 85;
  const improvements = [
    { type: 'missing', text: 'Add more quantified achievements', priority: 'high' },
    { type: 'suggestion', text: 'Include relevant keywords for ATS optimization', priority: 'medium' },
    { type: 'warning', text: 'Resume length should be 1-2 pages', priority: 'low' },
  ];

  const atsKeywords = [
    { keyword: 'JavaScript', present: true, importance: 'high' },
    { keyword: 'React', present: true, importance: 'high' },
    { keyword: 'Node.js', present: true, importance: 'medium' },
    { keyword: 'Machine Learning', present: false, importance: 'medium' },
    { keyword: 'Agile', present: false, importance: 'low' },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-foreground mb-8">Resume Review Tool</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Resume Upload & Score */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Current Resume
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-4">Alex_Smith_Resume.pdf</p>
                  <div className="flex gap-2 justify-center">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                <Button className="w-full">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload New Resume
                </Button>
              </CardContent>
            </Card>

            {/* Resume Score */}
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Resume Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-primary mb-2">{resumeScore}/100</div>
                  <p className="text-muted-foreground">Your resume score is good!</p>
                </div>
                <Progress value={resumeScore} className="h-3 mb-4" />
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <div className="font-semibold text-success">Content</div>
                    <div className="text-muted-foreground">90/100</div>
                  </div>
                  <div>
                    <div className="font-semibold text-warning">Keywords</div>
                    <div className="text-muted-foreground">75/100</div>
                  </div>
                  <div>
                    <div className="font-semibold text-accent">Format</div>
                    <div className="text-muted-foreground">95/100</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Improvements & ATS Check */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Suggestions */}
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Improvement Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {improvements.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      {item.type === 'missing' && <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />}
                      {item.type === 'suggestion' && <CheckCircle className="w-5 h-5 text-warning mt-0.5" />}
                      {item.type === 'warning' && <AlertCircle className="w-5 h-5 text-muted-foreground mt-0.5" />}
                      <div className="flex-1">
                        <p className="text-sm">{item.text}</p>
                        <Badge 
                          variant={item.priority === 'high' ? 'destructive' : item.priority === 'medium' ? 'secondary' : 'outline'} 
                          className="mt-1"
                        >
                          {item.priority} priority
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ATS Keywords */}
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  ATS Keyword Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {atsKeywords.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {item.present ? (
                          <CheckCircle className="w-5 h-5 text-success" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-muted-foreground" />
                        )}
                        <span className="font-medium">{item.keyword}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={item.importance === 'high' ? 'destructive' : item.importance === 'medium' ? 'secondary' : 'outline'}
                          className="text-xs"
                        >
                          {item.importance}
                        </Badge>
                        {item.present ? (
                          <Badge variant="secondary" className="text-xs">Present</Badge>
                        ) : (
                          <Badge variant="outline" className="text-xs">Missing</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}