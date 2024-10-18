import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  name: string;
  status: string;
  funding: number;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <Badge variant={project.status === 'Active' ? 'default' : project.status === 'Pending' ? 'secondary' : 'outline'}>
            {project.status}
          </Badge>
          <span className="text-lg font-semibold">${project.funding.toLocaleString()}</span>
        </div>
        <p className="text-sm text-gray-500">Funding allocated</p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;