import { type Certificate } from '../model/certificate.model';

export const CERTIFICATE: Certificate[] = [ 
    {
        id:0,
        path: "/public/certificate/Dart_Programlama_Dili_Sertifika.pdf",
        name: "Dart Programlama Dili Sertifika",
        institution:"BTK Akademi",
    },
    {
        id:1,
        path: "/public/certificate/Flutter_ile_Mobil_Uygulama_Geliştirme_Sertifika.pdf",
        name: "Flutter ile Mobil Uygulama Geliştirme Sertifika",
        institution:"BTK Akademi",
    },
    {
        id:2,
        path: "/public/certificate/Logo Tasarımı Eğitimi + Temel Illustrator Eğitimi.pdf",
        name: "Logo Tasarımı Eğitimi + Temel Illustrator Eğitimi",
        institution:"Udemy",
    },
    {
        id:3,
        path: "/public/certificate/python_basic certificate.pdf",
        name: "Python Basic",
        institution:"HackerRank",
    },
];

export const totalCertificate = CERTIFICATE.length;

export const getCertificateById = (id: number) => {
  return CERTIFICATE.find(certificate=> certificate.id == id);
};