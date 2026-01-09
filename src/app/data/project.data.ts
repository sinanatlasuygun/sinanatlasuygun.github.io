import { type Project } from '../model/project.model';

export const PROJECTS: Project[] = [
    {
        id: 1,
        complate: false,
        type: 'Software',
        devlan: ["C++"],
        licance:"MIT License ",
        title: { tr: "Turquoise Script", en: "Turquoise Script" },
        summary: { 
            tr: "Oyun geliştirme sürecini kolaylaştırmak amacıyla geliştirilen, C++ tabanlı yüksek seviyeli betik dili.", 
            en: "A C++ based high-level scripting language developed to streamline the game development process." 
        },
        description: { 
            tr: "Turquoise Script (TQS), oyun motorları için özel olarak optimize edilmiş bir syntax sunar. GameObject, Prefab ve Component gibi yapılar dilin çekirdeğine dahil edilmiştir.", 
            en: "Turquoise Script (TQS) offers a syntax specifically optimized for game engines. Structures like GameObject, Prefab, and Component are integrated into the core of the language." 
        },
        developers: ["Sinan Uygun"],
        image: { tr: "/project/turquoisescript.svg", en: "/project/turquoisescript.svg" },
        link: { tr: "https://github.com/oxidiancode/TurquoiseScript", en: "https://github.com/oxidiancode/TurquoiseScript" },
        installization: { 
            tr: "Şu an geliştirme aşamasındadır. Yakında v1.0 ile yayında!", 
            en: "Currently in development. Coming soon with v1.0!" 
        },
        introduction: { 
            tr: "Oyun geliştirmedeki kod karmaşasını azaltan devrimsel bir yaklaşım.", 
            en: "A revolutionary approach to reducing code complexity in game development." 
        },
        usage: { 
            tr: "Örnek syntax: GameObject Player { start function()... }", 
            en: "Example syntax: GameObject Player { start function()... }" 
        }
    },
    {
        id: 2, 
        complate: true, 
        type: 'Software',
        devlan: ["Dart", "Flutter"],
        licance:"BSD 3-Clause",
        title: { tr: "FrostColor", en: "FrostColor" },
        summary: { 
            tr: "Flutter geliştiricileri için Hex kodlarını anında renk nesnelerine dönüştüren, performans odaklı ve çok modlu yardımcı paket.", 
            en: "A performance-oriented, multi-modal utility package for Flutter developers that converts Hex codes into color objects instantly." 
        },
        description: { 
            tr: "FrostColor, Flutter projelerinde renk yönetimini kolaylaştırır. Güvenli kontrol (Standard), yüksek hız (Fast) ve doğrudan erişim (Direct) modları ile her ihtiyaca uygun çözüm sunar. BuildContext extension desteği ile kod yazım süresini kısaltır.", 
            en: "FrostColor simplifies color management in Flutter projects. It offers solutions for every need with Secure Control (Standard), High Speed (Fast), and Direct Access (Direct) modes. It shortens development time with BuildContext extension support." 
        },
        developers: ["Sinan Uygun"],
        image: { 
            tr: "/project/frostcolor.svg", 
            en: "/project/frostcolor.svg" 
        },
        link: { 
            tr: "https://pub.dev/packages/frostcolor", 
            en: "https://pub.dev/packages/frostcolor" 
        },
        installization: { 
            tr: "flutter pub add frostcolor", 
            en: "flutter pub add frostcolor" 
        },
        introduction: { 
            tr: "Açık kaynaklı, hızlı ve kolay anlaşılır Flutter renk yardımcı kütüphanesi.", 
            en: "Open-source, fast, and easy-to-understand Flutter color utility library." 
        },
        usage: { 
            tr: "final color = DFColor(hex: '#000000');", 
            en: "final color = DFColor(hex: '#000000');" 
        }
    },
    {
        id: 3, 
        complate: true, 
        type: 'Software',
        devlan: ["Python"],
        licance:"AGPL-3.0 license",
        title: { tr: "PDFConvert", en: "PDFConvert" },
        summary: { 
            tr: "PDF dosyalarını hızlı ve kayıpsız bir şekilde düzenlenebilir Microsoft Word (DOCX) formatına dönüştüren Windows masaüstü uygulaması.", 
            en: "A Windows desktop application that quickly and losslessly converts PDF files into editable Microsoft Word (DOCX) format." 
        },
        description: { 
            tr: "Python tabanlı geliştirilen PDFConvert, karmaşık PDF yapılarını analiz ederek metin, tablo ve görsel yerleşimlerini koruyarak DOCX formatına aktarır. Kullanıcı dostu arayüzü sayesinde teknik bilgi gerektirmeden saniyeler içinde dönüşüm sağlar.", 
            en: "Developed using Python, PDFConvert analyzes complex PDF structures and transfers text, tables, and image layouts to DOCX format while preserving them. Its user-friendly interface allows for conversion in seconds without requiring technical knowledge." 
        },
        developers: ["Sinan Uygun"],
        image: { 
            tr: "/project/pdfconvert.svg", 
            en: "/project/pdfconvert.svg" 
        },
        link: { 
            tr: "https://ln5.sync.com/dl/75331b350#fchm63t4-bh9kde3c-k4sgftzx-sjfv3kpv", 
            en: "https://ln5.sync.com/dl/75331b350#fchm63t4-bh9kde3c-k4sgftzx-sjfv3kpv" 
        },
        installization: { 
            tr: "Setup dosyasını indirip çalıştırın. Python kurulumu gerektirmez.", 
            en: "Download and run the setup file. No Python installation required." 
        },
        introduction: { 
            tr: "Windows için hızlı ve güvenilir PDF'ten Word'e dönüştürme aracı.", 
            en: "Fast and reliable PDF to Word conversion tool for Windows." 
        },
        usage: { 
            tr: "Dosyanı seç, dönüştür butonuna bas ve Word dosyan hazır!", 
            en: "Select your file, click convert, and your Word document is ready!" 
        }
    },
    {
        id: 4, 
        complate: true, 
        type: 'Software',
        devlan: ["C"],
        licance:"None",
        title: { tr: "C Number Prediction Game", en: "C Number Prediction Game" },
        summary: { 
            tr: "Mantıksal çıkarım ve algoritma temelli, bilgisayarın tuttuğu 4 basamaklı sayıyı bulmaya dayalı klasik bir terminal oyunu.", 
            en: "A classic terminal-based game focused on logical inference and algorithms, where the player tries to guess a 4-digit number." 
        },
        description: { 
            tr: "Bu proje, yazılım kariyerimin ilk adımlarından biri olup, C dilinde rastgele sayı üretimi, döngü mekanizmaları ve kullanıcı girdi kontrolü gibi temel konseptleri pekiştirmek amacıyla geliştirilmiştir. 'Mastermind' mantığına dayanan oyun, oyuncuya her tahminde sayı ve basamak doğruluğu hakkında geri bildirim verir.", 
            en: "This project is one of the first steps in my software career, developed to reinforce core concepts like random number generation, loop mechanisms, and input validation in C. Based on 'Mastermind' logic, the game provides feedback on numerical and positional accuracy for each guess." 
        },
        developers: ["Sinan Uygun"],
        image: { 
            tr: "/project/oldfourdigit.svg", 
            en: "/project/oldfourdigit.svg" 
        },
        link: { 
            tr: "https://github.com/oxidiancode/C_Number_Prediction_Game", 
            en: "https://github.com/oxidiancode/C_Number_Prediction_Game" 
        },
        installization: { 
            tr: "Herhangi bir C derleyicisi (GCC, Clang) ile derleyip çalıştırabilirsiniz.", 
            en: "You can compile and run it with any C compiler like GCC or Clang." 
        },
        introduction: { 
            tr: "Algoritmik düşünce yapısını temsil eden nostaljik bir terminal oyunu.", 
            en: "A nostalgic terminal game representing the core of algorithmic thinking." 
        },
        usage: { 
            tr: "Terminal üzerinden tahminlerinizi girin ve ipuçlarını takip edin.", 
            en: "Enter your guesses via the terminal and follow the hints." 
        }
    },
    {
        id: 5, 
        complate: true, 
        type: 'Software',
        devlan: ["C"],
        licance:"None",
        title: { tr: "Transpose Matrix Calculator", en: "Transpose Matrix Calculator" },
        summary: { 
            tr: "Lineer cebir operasyonlarını temel alan, bir matrisin satır ve sütunlarını yer değiştirerek transpozunu hesaplayan C tabanlı algoritma.", 
            en: "A C-based algorithm that calculates the transpose of a matrix by swapping its rows and columns based on linear algebra operations." 
        },
        description: { 
            tr: "Bu proje, iki boyutlu dizilerin (2D Arrays) bellek üzerindeki yerleşimini ve manipülasyonunu anlamak amacıyla geliştirilmiştir. Matematiksel bir matrisin devriğini alırken döngü optimizasyonu ve veri yapısı yönetimi üzerine odaklanır. Mühendislik hesaplamalarında kullanılan temel veri işleme mantığını temsil eder.", 
            en: "This project was developed to understand the memory layout and manipulation of 2D arrays. It focuses on loop optimization and data structure management while transposing a mathematical matrix. It represents the core data processing logic used in engineering computations." 
        },
        developers: ["Sinan Uygun"],
        image: { 
            tr: "/project/oldmatrixtranspose.svg", 
            en: "/project/oldmatrixtranspose.svg" 
        },
        link: { 
            tr: "https://github.com/oxidiancode/transpose_matrix", 
            en: "https://github.com/oxidiancode/transpose_matrix" 
        },
        installization: { 
            tr: "Standart bir C derleyicisi ile derlenip, matris değerleri girilerek kullanılabilir.", 
            en: "Can be used by compiling with a standard C compiler and entering matrix values." 
        },
        introduction: { 
            tr: "Matris manipülasyonu ve bellek yönetimi üzerine kurulu matematiksel algoritma.", 
            en: "Mathematical algorithm based on matrix manipulation and memory management." 
        },
        usage: { 
            tr: "Matris boyutlarını girin, elemanları doldurun ve transpoz sonucunu anında görün.", 
            en: "Enter matrix dimensions, fill in the elements, and see the transpose result instantly." 
        }
    },
    {
        id: 6, 
        complate: true, 
        type: 'Software',
        devlan: ["C"],
        licance:"None",
        title: { tr: "C Dynamic Struct Allocation", en: "C Dynamic Struct Allocation" },
        summary: { 
            tr: "Heap bellek yönetimi ve pointer (işaretçi) aritmetiği kullanarak dinamik veri yapıları oluşturma ve yönetme projesi.", 
            en: "A project focused on creating and managing dynamic data structures using heap memory allocation and pointer arithmetic." 
        },
        description: { 
            tr: "Bu proje, C dilinde belleğin verimli kullanımını hedefler. Stack yerine Heap alanında malloc() ile dinamik alan tahsis ederek, karmaşık veri yapılarının (struct) işaretçiler üzerinden nasıl manipüle edileceğini ve free() fonksiyonu ile bellek sızıntılarının (memory leak) nasıl önleneceğini gösterir.", 
            en: "This project targets efficient memory usage in C. By allocating dynamic space in the Heap using malloc(), it demonstrates how to manipulate complex data structures (structs) via pointers and prevent memory leaks using the free() function." 
        },
        developers: ["Sinan Uygun"],
        image: { 
            tr: "/project/structmovement.svg", 
            en: "/project/structmovement.svg" 
        },
        link: { 
            tr: "https://github.com/oxidiancode/C_Struct_Movement_Button", 
            en: "https://github.com/oxidiancode/C_Struct_Movement_Button" 
        },
        installization: { 
            tr: "C derleyicisi ile derleyip, bellek yönetim süreçlerini terminal üzerinden izleyebilirsiniz.", 
            en: "Compile with a C compiler and monitor memory management processes via the terminal." 
        },
        introduction: { 
            tr: "Bellek yönetimi, işaretçiler ve dinamik veri yapıları üzerine teknik bir çalışma.", 
            en: "A technical study on memory management, pointers, and dynamic data structures." 
        },
        usage: { 
            tr: "Program çalışırken bellek tahsis edilir, veriler işlenir ve güvenli bir şekilde temizlenir.", 
            en: "Memory is allocated, data is processed, and safely cleared while the program runs." 
        }
    },
    {
        id: 7, 
        complate: true, 
        type: 'Software',
        devlan: ["C"],
        licance:"None",
        title: { tr: "C Terminal Navigation Engine", en: "C Terminal Navigation Engine" },
        summary: { 
            tr: "Windows API ve Buffer manipülasyonu kullanarak terminal imlecini yön tuşlarıyla gerçek zamanlı kontrol eden navigasyon motoru.", 
            en: "A navigation engine that controls the terminal cursor in real-time with arrow keys using Windows API and Buffer manipulation." 
        },
        description: { 
            tr: "Standart C kütüphaneleri yön tuşlarının gönderdiği çift kodlu (224 + KeyCode) veri yapısını algılayamaz. Bu proje, low-level girdi yakalama (getch) ve Windows konsol handle (STD_OUTPUT_HANDLE) yönetimi ile bu kısıtlamayı aşar. Geliştirilen gotoxy fonksiyonu, ekran yenileme yükünü azaltarak sadece değişen koordinatı güncelleyen performanslı bir render mantığı sunar.", 
            en: "Standard C libraries cannot detect the double-coded (224 + KeyCode) data structure sent by arrow keys. This project overcomes this limitation through low-level input capture (getch) and Windows console handle (STD_OUTPUT_HANDLE) management. The developed gotoxy function provides an efficient rendering logic that updates only the changed coordinates, reducing screen refresh load." 
        },
        developers: ["Sinan Uygun"],
        image: { 
            tr: "/project/movement.svg", 
            en: "/project/movement.svg" 
        },
        link: { 
            tr: "https://github.com/oxidiancode/C_Movement_Button", 
            en: "https://github.com/oxidiancode/C_Movement_Button" 
        },
        installization: { 
            tr: "Windows işletim sisteminde herhangi bir C derleyicisi (GCC, Dev-C++, Visual Studio) ile derlenebilir.", 
            en: "Can be compiled on Windows with any C compiler (GCC, Dev-C++, Visual Studio)." 
        },
        introduction: { 
            tr: "Windows API tabanlı, düşük seviyeli terminal kontrol ve girdi yönetimi çözümü.", 
            en: "Windows API-based, low-level terminal control and input management solution." 
        },
        usage: { 
            tr: "Programı çalıştırdıktan sonra yön tuşlarıyla terminal imlecini serbestçe hareket ettirebilirsiniz.", 
            en: "After running the program, you can move the terminal cursor freely using the arrow keys." 
        }
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