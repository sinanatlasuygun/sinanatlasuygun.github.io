export interface Project {
  id: number;
  complate: boolean;
  type:string;
  title: { tr: string; en: string };
  devlan:string[];
  developers: string[];
  description: { tr: string; en: string };
  summary: { tr: string; en: string };
  link: { tr: string; en: string };
  image: { tr: string; en: string };
  introduction: { tr: string; en: string };
  installization: { tr: string; en: string };
  usage:{ tr: string; en: string };
  licance:string;
}