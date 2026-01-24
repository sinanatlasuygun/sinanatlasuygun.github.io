import { type Project } from '../model/project.model';
import dataSoftware from '../../../public/json/software.json';
import dataArt from '../../../public/json/art.json';

export const PROJECTS: Project[] = [
    ...(dataSoftware as Project[]),
    ...(dataArt as Project[]),
];

export const totalProjects = PROJECTS.length;
export const totalSoftware = PROJECTS.filter(project=> project.type == "Software").length;
export const totalArt = PROJECTS.filter(project=> project.type == "Art").length;

export const getProjectById = (id: number) => {
  return PROJECTS.find(project=> project.id == id);
};

export const getProjectByDevLan = (devlan: string[]) => {
  return PROJECTS.filter(project=> project.devlan == devlan);
};

export const getProjectByType = (type: string) => {
  return PROJECTS.filter(project=> project.type == type);
};

export type ProjectPreview = Pick<Project, 'id' | 'type' | 'title' | 'complate' |'summary' | 'link' | 'image'>;

export const getProjectPreviewById = (id: number): ProjectPreview | undefined => {
  const project = PROJECTS.find(p => p.id === id);
  
  if (!project) return undefined;

  return {
    id: project.id,
    type:project.type,
    title: project.title,
    complate:project.complate,
    summary: project.summary,
    link: project.link,
    image: project.image
  };
};