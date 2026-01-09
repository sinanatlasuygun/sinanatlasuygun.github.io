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
    type: 'Art', 
    devlan: ["Pixel Art"], 
    licance: "None", 
    title: { 
        tr: "Forest Sanctuary: Pixel Edition", 
        en: "Forest Sanctuary: Pixel Edition" 
    },
    summary: { 
        tr: "100x100 canvas üzerinde, sınırlı palet kullanılarak tasarlanmış, atmosferik derinliğe sahip piksel sanat çalışması.", 
        en: "An atmospheric pixel art piece with depth, designed on a 100x100 canvas using a limited color palette." 
    },
    description: { 
        tr: "Bu çalışma, düşük çözünürlük kısıtlamaları altında doku ve ışık manipülasyonuna odaklanır. Çatıdaki yosun efektleri ve taş duvarlardaki gölgeleme, dither (noktalama) tekniği yerine doğrudan renk geçişleriyle sağlanmıştır. Mimari yapı, kuzey mitolojisindeki kulübelerden esinlenilerek 'çapraz kiriş' (cross-beam) detaylarıyla zenginleştirilmiştir.", 
        en: "This work focuses on texture and light manipulation under low-resolution constraints. Moss effects on the roof and shading on stone walls are achieved through direct color transitions rather than dithering. The architecture is enriched with 'cross-beam' details inspired by Nordic cottages." 
    },
    developers: ["Sinan Uygun"],
    image: { 
        tr: "/art/forest_home.gif", 
        en: "/art/forest_home.gif" 
    },
    link: { 
        tr: "#", 
        en: "#" 
    },
    installization: { 
        tr: "Asset olarak oyun motorlarında (Unity, Godot) veya web arayüzlerinde dekoratif eleman olarak kullanılabilir.", 
        en: "Can be used as an asset in game engines (Unity, Godot) or as a decorative element in web interfaces." 
    },
    introduction: { 
        tr: "Geleneksel piksel disipliniyle oluşturulmuş dijital illüstrasyon.", 
        en: "Digital illustration created with traditional pixel discipline." 
    },
    usage: { 
        tr: "Görsel, atmosferik bir arka plan veya bir oyun içi mekan konsepti olarak sergilenmektedir.", 
        en: "The visual is exhibited as an atmospheric background or an in-game location concept." 
    }
},
{
    id: 4, 
    complate: true, 
    type: 'Art',
    devlan: ["Pixel Art"], 
    licance: "None",
    title: { 
        tr: "Arcane Elixir: Frozen Depths", 
        en: "Arcane Elixir: Frozen Depths" 
    },
    summary: { 
        tr: "Cam kırılması, sıvı yansıması ve buz kristali partikülleri üzerine odaklanmış yüksek kontrastlı piksel illüstrasyon.", 
        en: "A high-contrast pixel illustration focusing on glass refraction, liquid reflection, and ice crystal particles." 
    },
    description: { 
        tr: "Bu çalışmada 'Anti-Aliasing' teknikleri kullanılarak camın kavisli yapısı yumuşatılmıştır. İçerideki sıvı için 4 farklı mavi tonu kullanılarak derinlik hissi yaratılmış, kristal parçacıkları için 'Specular Highlight' (parlama) noktaları stratejik olarak yerleştirilmiştir. Mantar tıpanın dokusu, sınırlı renk paletiyle organik bir materyal hissi verecek şekilde işlenmiştir.", 
        en: "In this work, Anti-Aliasing techniques were used to smooth the curved structure of the glass. A sense of depth was created using 4 different blue tones for the liquid, and Specular Highlight points were strategically placed for the crystal particles. The texture of the cork stopper was rendered to give an organic material feel with a limited color palette." 
    },
    developers: ["Sinan Uygun"],
    image: { 
        tr: "/art/ice_elixir.png", 
        en: "/art/ice_elixir.png" 
    },
    link: { 
        tr: "#", 
        en: "#" 
    },
    installization: { 
        tr: "Oyun içi envanter öğesi, NFT koleksiyonu veya UI ikonu olarak ölçeklenebilir.", 
        en: "Can be scaled as an in-game inventory item, NFT collection, or UI icon." 
    },
    introduction: { 
        tr: "Fantezi RPG öğeleri için optimize edilmiş, düşük çözünürlüklü dijital varlık.", 
        en: "Low-resolution digital asset optimized for fantasy RPG elements." 
    },
    usage: { 
        tr: "Kullanıcı arayüzlerinde (UI) veya karakter yetenek ekranlarında dekoratif görsel olarak kullanılabilir.", 
        en: "Can be used as a decorative visual in user interfaces (UI) or character skill screens." 
    }
},
    {
        id: 5, 
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
        id: 6, 
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
        id: 7, 
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
        id: 8, 
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
        id: 9, 
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
    {
    id: 10, 
    complate: true, 
    type: 'Art',
    devlan: ["Pixel Art"], 
    licance: "None",
    title: { 
        tr: "Vintage Gold Coin: 8-Bit Loop", 
        en: "Vintage Gold Coin: 8-Bit Loop" 
    },
    summary: { 
        tr: "Dairesel rotasyon ve ışık kırılması üzerine odaklanmış, sonsuz döngüye (loop) sahip 8-bit altın sikke animasyonu.", 
        en: "An 8-bit gold coin animation with an infinite loop, focusing on circular rotation and light refraction." 
    },
    description: { 
        tr: "Bu çalışmada, paranın dönüş efektini vermek için 'orthographic projection' mantığı kullanılmıştır. Animasyonun her karesinde parlayan (highlight) noktalar, merkezdeki gravür detayının derinliğini koruyacak şekilde kaydırılmıştır. Toplam 6 kareden oluşan döngü, akıcı bir illüzyon yaratmak için sabit hızda (constant framerate) optimize edilmiştir.", 
        en: "In this work, the 'orthographic projection' logic was used to convey the rotation effect of the coin. Highlight points in each frame have been shifted to preserve the depth of the center engraving detail. The 6-frame loop is optimized at a constant framerate to create a smooth illusion." 
    },
    developers: ["Sinan Uygun"],
    image: { 
        tr: "/art/coin.gif", 
        en: "/art/coin.gif" 
    },
    link: { 
        tr: "#", 
        en: "#" 
    },
    installization: { 
        tr: "Oyun içi toplama öğesi (collectible) veya dijital cüzdan arayüzleri için optimize edilmiştir.", 
        en: "Optimized for in-game collectibles or digital wallet interfaces." 
    },
    introduction: { 
        tr: "Klasik arcade estetiğine sahip, düşük çözünürlüklü animasyonlu varlık.", 
        en: "Low-resolution animated asset with classic arcade aesthetics." 
    },
    usage: { 
        tr: "Web tabanlı oyunlarda, ödül sistemlerinde veya başarı ikonlarında kullanılabilir.", 
        en: "Can be used in web-based games, reward systems, or achievement icons." 
    }
},
    {
    id: 11, 
    complate: true, 
    type: 'Art',
    devlan: ["Pixel Art"], 
    licance: "None",
    title: { 
        tr: "Goblin Raider: Frontal Sprite", 
        en: "Goblin Raider: Frontal Sprite" 
    },
    summary: { 
        tr: "RPG projeleri için optimize edilmiş, simetrik anatomi ve yüksek kontrastlı gölgeleme içeren 8-bit düşman karakter tasarımı.", 
        en: "8-bit enemy character design featuring symmetric anatomy and high-contrast shading, optimized for RPG projects." 
    },
    description: { 
        tr: "Bu çalışmada, karakterin tehditkar duruşunu pekiştirmek için 'top-down' perspektife uygun omuz ve kulak yapısı geliştirilmiştir. Kas hatları ve yüz ifadeleri için derin gölge (dark-outline) tekniği kullanılarak karakterin arka plandan ayrışması sağlanmıştır. Altın küpe detaylarındaki 'pixel-shimmer' etkisi, karakterin statüsünü ve görsel çeşitliliğini artırmak amacıyla eklenmiştir.", 
        en: "In this work, the shoulder and ear structure suitable for a 'top-down' perspective was developed to reinforce the character's menacing stance. Dark-outline techniques were used for muscle lines and facial expressions to ensure the character stands out from the background. The 'pixel-shimmer' effect on the golden earring details was added to increase the character's status and visual variety." 
    },
    developers: ["Sinan Uygun"],
    image: { 
        tr: "/art/gobln.gif", 
        en: "/art/gobln.gif" 
    },
    link: { 
        tr: "#", 
        en: "#" 
    },
    installization: { 
        tr: "2D oyun motorlarında (Unity, Godot, RPG Maker) düşman birimi veya NPC olarak doğrudan kullanılabilir.", 
        en: "Can be used directly as an enemy unit or NPC in 2D game engines (Unity, Godot, RPG Maker)." 
    },
    introduction: { 
        tr: "Fantezi temalı oyun dünyaları için tasarlanmış yüksek kaliteli piksel karakter varlığı.", 
        en: "High-quality pixel character asset designed for fantasy-themed game worlds." 
    },
    usage: { 
        tr: "Savaş ekranlarında, diyalog pencerelerinde veya harita üzerinde düşman birimi olarak sergilenebilir.", 
        en: "Can be displayed on battle screens, dialogue windows, or as an enemy unit on the map." 
    }
    },
    {
    id: 12, 
    complate: true, 
    type: 'Art',
    devlan: ["Pixel Art"], 
    licance: "None",
    title: { 
        tr: "Forbidden Fruit: Health Asset", 
        en: "Forbidden Fruit: Health Asset" 
    },
    summary: { 
        tr: "Yüksek doygunluklu renk paleti ve belirgin dış hatlar kullanılarak tasarlanmış, klasik envanter öğesi illüstrasyonu.", 
        en: "Classic inventory item illustration designed using a high-saturation color palette and distinct outlines." 
    },
    description: { 
        tr: "Bu çalışmada, objenin hacimsel formunu vurgulamak için dairesel gölgeleme teknikleri uygulanmıştır. Yaprak detayındaki yeşil kontrastı, meyvenin kırmızısıyla tamamlayıcı bir denge kurar. Yüzeydeki beyaz parlama noktaları (highlights), objeye taze ve etkileşime hazır bir materyal hissi kazandırır.", 
        en: "In this work, circular shading techniques were applied to emphasize the volumetric form of the object. The green contrast in the leaf detail creates a complementary balance with the red of the fruit. White highlight points on the surface give the object a fresh and interaction-ready material feel." 
    },
    developers: ["Sinan Uygun"],
    image: { 
        tr: "/art/apple.png", 
        en: "/art/apple.png" 
    },
    link: { 
        tr: "#", 
        en: "#" 
    },
    installization: { 
        tr: "2D oyunlarda sağlık yenileme ikonu veya çevre etkileşim objesi olarak kullanılabilir.", 
        en: "Can be used as a health regeneration icon or environmental interaction object in 2D games." 
    },
    introduction: { 
        tr: "Basit formların piksel disipliniyle estetik bir görsele dönüştürüldüğü başlangıç seviyesi üstü çalışma.", 
        en: "A beyond-beginner work where simple forms are transformed into aesthetic visuals with pixel discipline." 
    },
    usage: { 
        tr: "HUD (Heads-up Display) arayüzlerinde veya toplama mekaniklerinde görsel materyal olarak sergilenmektedir.", 
        en: "Exhibited as visual material in HUD (Heads-up Display) interfaces or collection mechanics." 
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