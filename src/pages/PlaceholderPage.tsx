import React from 'react';
import { motion } from 'framer-motion';
import { Construction, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function PlaceholderPage({ title, description, icon }: PlaceholderPageProps) {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-muted-foreground mt-2">
            {description}
          </p>
        </div>
        <Button variant="outline" onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </Button>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center justify-center min-h-[60vh]"
      >
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-muted flex items-center justify-center">
              {icon || <Construction className="h-8 w-8 text-muted-foreground" />}
            </div>
            <CardTitle className="text-xl">Coming Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              This feature is currently under development. We're working hard to bring you the best experience.
            </p>
            <div className="space-y-2">
              <div className="h-2 bg-muted rounded-full">
                <div className="h-2 bg-primary rounded-full w-3/4 animate-pulse"></div>
              </div>
              <p className="text-sm text-muted-foreground">Development Progress: 75%</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
