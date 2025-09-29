import React from 'react';
import { motion } from 'framer-motion';
import { PerformanceCharts } from '@/components/Dashboard/PerformanceCharts';

export default function Performance() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-foreground mb-8">Performance Dashboard</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <PerformanceCharts />
        </motion.div>
      </div>
    </div>
  );
}