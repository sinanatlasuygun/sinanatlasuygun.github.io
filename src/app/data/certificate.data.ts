import { type Certificate } from '../model/certificate.model';

export const CERTIFICATE: Certificate[] = [ 
    {
        id:0,
        path: "/certificate/Dart_Programlama_Dili_Sertifika.pdf",
        name: {tr:"Dart Programlama Dili Sertifikası",en:"Dart Programming Language Certificate"},
        institution:"BTK Akademi",
    },
    {
        id:1,
        path: "/certificate/Flutter_ile_Mobil_Uygulama_Geliştirme_Sertifika.pdf",
        name: {tr:"Flutter ile Mobil Uygulama Geliştirme Sertifikası",en:"Flutter Mobile Application Development Certificate"},
        institution:"BTK Akademi",
    },
    {
        id:2,
        path: "/certificate/Logo Tasarımı Eğitimi + Temel Illustrator Eğitimi.pdf",
        name: {tr:"Logo Tasarımı Eğitimi + Temel Illustrator Eğitimi",en:"Logo Design Training + Basic Illustrator Training"},
        institution:"Udemy",
    },
    {
        id:3,
        path: "/certificate/python_basic certificate.pdf",
        name: {tr:"Python Basit",en:"Python Basic"},
        institution:"HackerRank",
    },
];

export const totalCertificate = CERTIFICATE.length;

export const getCertificateById = (id: number) => {
  return CERTIFICATE.find(certificate=> certificate.id == id);
};