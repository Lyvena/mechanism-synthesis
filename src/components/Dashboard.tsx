import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { ChartLine } from 'lucide-react';
import ProjectList from './ProjectList';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const fetchProjects = async () => {
  // Simulated API call
  return [
    { id: 1, name: 'Project A', status: 'Active', funding: 50000 },
    { id: 2, name: 'Project B', status: 'Pending', funding: 25000 },
    { id: 3, name: 'Project C', status: 'Completed', funding: 75000 },
  ];
};

const Dashboard = () => {
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching projects</div>;

  const totalFunding = projects?.reduce((sum, project) => sum + project.funding, 0) || 0;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <ChartLine className="mr-2" />
            Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalFunding.toLocaleString()}</div>
          <p className="text-sm text-gray-500">Total funding across all projects</p>
        </CardContent>
      </Card>
      <ProjectList projects={projects || []} />
    </div>
  );
};

export default Dashboard;