import { type Contact } from '../model/contact.model';

export const CONTACT = [ 
    {
        id: 0,
        primary_mail: "oxidianme@gmail.com",
        secondary_mail:"sinanuygunofficial@gmail.com",
        youtube:"youtube.com/@OxidianOfficial",
        github: "github.com/oxidiancode",
        gitlab: "gitlab.com/sinanatlasuygun",
        linkedn: "linkedin.com/in/sinanuygun"
    }
];
export const getContactById = (id: number) => {
    return CONTACT.find(item => item.id === id);
};

export const getMappedContacts = (id: number) => {
    const c = CONTACT.find(item => item.id === id);
    if (!c) return [];

    return [
        { key: 'home.contact.primary' as const, value: c.primary_mail, link: `mailto:${c.primary_mail}`, color: '#00f2ff' },
        { key: 'home.contact.secondary' as const, value: c.secondary_mail, link: `mailto:${c.secondary_mail}`, color: '#FEBA17' },
        { key: 'home.contact.youtube' as const, value: c.youtube, link: `https://${c.youtube}`, color: '#CF0F0F' },
        { key: 'home.contact.github' as const, value: c.github, link: `https://${c.github}`, color: '#ffffff' },
        { key: 'home.contact.gitlab' as const, value: c.gitlab, link: `https://${c.gitlab}`, color: '#fca326' },
        { key: 'LinkedIn' as const, value: c.linkedn, link: `https://${c.linkedn}`, color: '#0077b5' }
    ];
};