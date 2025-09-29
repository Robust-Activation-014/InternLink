import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { cgpaData, skillsRadarData, applicationStatusData } from '@/data/mockData';

const chartConfig = {
  cgpa: {
    label: "CGPA",
    color: "hsl(var(--primary))",
  },
  score: {
    label: "Score",
    color: "hsl(var(--accent))",
  },
  count: {
    label: "Applications",
    color: "hsl(var(--success))",
  },
};

const COLORS = ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--success))', 'hsl(var(--warning))', 'hsl(var(--destructive))'];

export function PerformanceCharts() {
  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {/* CGPA Trend */}
      <Card className="col-span-full lg:col-span-2">
        <CardHeader>
          <CardTitle>Academic Performance Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart data={cgpaData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="semester" />
              <YAxis domain={[7, 10]} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="cgpa" 
                stroke="var(--color-cgpa)" 
                strokeWidth={3}
                dot={{ fill: 'var(--color-cgpa)', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Skills Radar */}
      <Card>
        <CardHeader>
          <CardTitle>Skill Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart data={skillsRadarData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="skill" type="category" width={80} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar 
                dataKey="score" 
                fill="var(--color-score)"
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Application Status */}
      <Card>
        <CardHeader>
          <CardTitle>Application Status</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <PieChart>
              <Pie
                data={applicationStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {applicationStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Placement Readiness */}
      <Card>
        <CardHeader>
          <CardTitle>Placement Readiness Index</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Profile Completeness</span>
              <span className="text-sm font-bold">85%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-gradient-primary h-2 rounded-full" style={{width: '85%'}}></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Skill Score</span>
              <span className="text-sm font-bold">87%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-gradient-accent h-2 rounded-full" style={{width: '87%'}}></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Interview Readiness</span>
              <span className="text-sm font-bold">72%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-gradient-success h-2 rounded-full" style={{width: '72%'}}></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}