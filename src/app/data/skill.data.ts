import { type Skills } from '../model/skill.model';

export const SKILLS: Skills[] = [
    {
        id: 1,
        name: "Flutter",
        type: "FRAMEWORK",
        logo: "string",
        percent:60,
        color:"#02569B",
        experience:""
    },
    {
        id: 2,
        name: "Python",
        percent:20,
        color:"#0D4715",
        type: "Software",
        logo: "string",
        experience:""
    },
    {
        id: 3,
        name: "C",
        percent:5,
        color:"#EEA727",
        type: "Software",
        logo: "string",
        experience:""
    },
    {
        id: 4,
        name: "C #",
        percent:10,
        color:"#EEA727",
        type: "Software",
        logo: "string",
        experience:""
    },
    {
        id: 5,
        name: "C ++",
        percent:15,
        color:"#EEA727",
        type: "Software",
        logo: "string",
        experience:""
    },
    {
        id: 6,
        name: "Java",
        type: "Software",
        percent:5,
        color:"#ED8B00",
        logo: "string",
        experience:""
    },
    {
        id: 7,
        name: "Dart",
        type: "Software",
        percent:40,
        color:"#1E93AB",
        logo: "string",
        experience:""
    },
    {
        id: 8,
        name: "TypScript",
        type: "Software",
        percent:5,
        color:"#8C00FF",
        logo: "string",
        experience:""
    },
    {
        id: 9,
        name: "Matlab",
        type: "Tool",
        percent:1,
        color:"#D1242F",
        logo: "string",
        experience:""
    },
    {
        id: 10,
        name: "Assembly",
        type: "Tool",
        percent:0.1,
        color:"#E62727",
        logo: "string",
        experience:""
    },
    {
        id: 11,
        name: "Git",
        type: "Tool",
        percent:30,
        color:"#F05032",
        logo: "string",
        experience:""
    },
    {
        id: 12,
        name: "VS Code",
        type: "Tool",
        percent:40,
        color:"#1C4D8D",
        logo: "string",
        experience:""
    },
    {
        id: 13,
        name: "Visual Studio",
        type: "Tool",
        percent:8.9,
        color:"#85409D",
        logo: "string",
        experience:""
    },
    {
        id: 14,
        name: "OOP",
        type: "ARCH",
        percent:90,
        color:"#000000",
        logo: "string",
        experience:""
    },
    {
        id: 15,
        name: "MVC",
        type: "ARCH",
        percent:10,
        color:"#FFFFFF",
        logo: "string",
        experience:""
    },
    {
        id: 16,
        name: "ASTRO",
        type: "FRAMEWORK",
        percent:40,
        color:"#AE75DA",
        logo: "string",
        experience:""
    },
    {
        id: 17,
        name: "Aseprite",
        type: "Tool",
        percent:20,
        color:"#FDB5CE",
        logo: "string",
        experience:""
    },
];

export const totalSkills = SKILLS.length;

export const getSkillById = (id: number) => {
  return SKILLS.find(skill=> skill.id == id);
};

export const getSkillByType = (type: string) => {
  return SKILLS.filter(skill=> skill.type == type);
};

export const lenSkillByType = (type: string) => {
  return SKILLS.filter(skill=> skill.type == type).length;
};