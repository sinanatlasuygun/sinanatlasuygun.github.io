import { aboutMeTranslations as aboutTR } from './tr/aboutme';
import { certificationTranslations as certificationTR } from './tr/certification';
import { contactTranslations as contactTR } from './tr/contact';
import { homeTranslations as homeTR } from './tr/home';
import { projectTranslations as projectTR } from './tr/project';
import { skillTranslations as skillTR } from './tr/skill';

import { aboutMeTranslations as aboutEN } from './en/aboutme';
import { certificationTranslations as certificationEN } from './en/certification';
import { contactTranslations as contactEN } from './en/contact';
import { homeTranslations as homeEN } from './en/home';
import { projectTranslations as projectEN } from './en/project';
import { skillTranslations as skillEN } from './en/skill';


export const ui = {
  tr: {
    ...aboutTR,
    ...certificationTR,
    ...contactTR,
    ...homeTR,
    ...projectTR,
    ...skillTR
  },
  en: {
    ...aboutEN,
    ...certificationEN,
    ...contactEN,
    ...homeEN,
    ...projectEN,
    ...skillEN
  },
} as const;

export const languages = {
  tr: 'Türkçe',
  en: 'English',
};

