import { type Project } from '../model/project.model';

export const PROJECTS: Project[] = [
    {
        id:1,
        complate:false,
        type:'Software',
        devlan:["Python"],
        title:{ tr: "Örnek Başlık", en: "Example Tİtle" },
        summary:{ tr: "Örnek Özet", en: "Example Summary" },
        description:{ tr: "Örnek Açıklama", en: "Example description" },
        developers:[],
        image:{ tr: "...", en: "..." },
        link:{ tr: "...", en: "..." },
        installization:{ tr: "...", en: "..." },
        introduction:{ tr: "...", en: "..." },
        usage:{ tr: "...", en: "..." }
    },
    {
        id:2,
        complate:true,
        type:'Software',
        devlan:["Python"],
        title:{ tr: "Örnek Başlık", en: "Example Tİtle" },
        summary:{ tr: "Örnek Özet", en: "Example Summary" },
        description:{ tr: "Örnek Açıklama", en: "Example description" },
        developers:[],
        image:{ tr: "...", en: "..." },
        link:{ tr: "...", en: "..." },
        installization:{ tr: "...", en: "..." },
        introduction:{ tr: "...", en: "..." },
        usage:{ tr: "...", en: "..." }
    },
    {
        id:3,
        complate:true,
        type:'Art',
        devlan:["Python"],
        title:{ tr: "Örnek Başlık", en: "Example Tİtle" },
        summary:{ tr: "Örnek Özet", en: "Example Summary" },
        description:{ tr: "Örnek Açıklama", en: "Example description" },
        developers:[],
        image:{ tr: "...", en: "..." },
        link:{ tr: "...", en: "..." },
        installization:{ tr: "...", en: "..." },
        introduction:{ tr: "...", en: "..." },
        usage:{ tr: "...", en: "..." }
    },
    {
        id:4,
        complate:true,
        type:'Art',
        devlan:["Python"],
        title:{ tr: "Örnek Başlık", en: "Example Tİtle" },
        summary:{ tr: "Örnek Özet", en: "Example Summary" },
        description:{ tr: "Örnek Açıklama", en: "Example description" },
        developers:[],
        image:{ tr: "...", en: "..." },
        link:{ tr: "...", en: "..." },
        installization:{ tr: "...", en: "..." },
        introduction:{ tr: "...", en: "..." },
        usage:{ tr: "...", en: "..." }
    },
    {
        id:5,
        complate:true,
        type:'Software',
        devlan:["Python"],
        title:{ tr: "Örnek Başlık", en: "Example Tİtle" },
        summary:{ tr: "Örnek Özet", en: "Example Summary" },
        description:{ tr: "Örnek Açıklama", en: "Example description" },
        developers:[],
        image:{ tr: "...", en: "..." },
        link:{ tr: "...", en: "..." },
        installization:{ tr: "...", en: "..." },
        introduction:{ tr: "...", en: "..." },
        usage:{ tr: "...", en: "..." }
    },
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