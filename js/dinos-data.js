"use strict";
 
const DinosListObjCtrl = (function dinosArrayCtrl () {

  const pathSm = "./images/images_sm/";
  const pathLg = "./images/images_lg/";

  const getImgSrcSm = function () {
    return (pathSm + this.name + this.imgFile).toLowerCase()
  };
  
  const getImgSrc = function () {
    return (pathLg + this.name + this.imgFile).toLowerCase()
  };

  const dinosObj = {
    Stegosaurus:{
      name: "Stegosaurus",
      era: "svrchní jura - asi před 155 až 150 miliony let",
      food: "býložravec",
      height: "až 4 metry",
      length: "až 9 metrů",
      weigth: " až 4000 kilogramů",
      interestingPoint: "„Objevil se také ve slavném románu britského spisovatele A. C. Doyla Ztracený svět z roku 1912. V roce 1982 byl Stegosaurus zvolen státním dinosaurem Colorada. Stegosaurus se objevil i v mnoha filmech s tematikou pravěku, včetně filmů Cesta do pravěku, Ztracený svět: Jurský park a Jurský park 3 nebo v seriálech Putování s dinosaury a Planeta dinosaurů.“",
      imgFile: ".png",
      cardCls: "stego",
      source: "https://cs.wikipedia.org/w/index.php?title=Stegosaurus&oldid=19000767",
      toolTip: "https://pixabay.com/",
    },
    Ankylosaurus:{
      name: "Ankylosaurus",
      era: "svrchní křída - asi před 68 až 66 miliony let",
      food: "býložravec",
      height: "až 2 metry",
      length: "až 9 metrů",
      weigth: "až 8000 kilogramů",
      interestingPoint: "„Ankylosaurus se často objevuje ve filmech i dokumentech. Nechybí například ve filmu Jurský park 3, v dokumentech jako je Putování s dinosaury nebo v knižních příbězích, například v knize Poslední dny dinosaurů.“",
      imgFile: ".png",
      cardCls: "ankylo",
      source: "https://cs.wikipedia.org/w/index.php?title=Ankylosaurus&oldid=18900792",
      toolTip: "https://pixabay.com/",
    },
    Amargasaurus:{
      name: "Amargasaurus",
      era: "spodní křída",
      food: "býložravec",
      height: "-",
      length: "12 až 13 metrů",
      weigth: "2 500 až 4 000 kilogramů",
      interestingPoint: "Amargasuarus se měl objevit ve filmu Dinosaurus(2000) od Walta Disneyho, ale byl vyřazen v předprodukční fázi. Jeho zbarvení, stejně jako zbarvení jiných dinosaurů, je spíše spekulací. Účel jeho kostěných výběžků na krku není s jistotou znám.",  
      imgFile: ".png",
      cardCls: "amarga",
      source: "https://cs.wikipedia.org/wiki/Amargasaurus",
      toolTip: "https://pixabay.com/",
    },
    Tyrannosaurus:{
      name: "Tyrannosaurus",
      era: "svrchní křída - asi před 68 až 66 miliony let",
      food: "masožravec",
      height: "až 13 metrů",
      length: "až 5 metrů",
      weigth: "6 000 až 7 500 kilogramů",
      interestingPoint: "„Do roku 2019 byl za největšího známého teropoda vůbec považován druh Spinosaurus aegyptiacus, u něhož je odhadována celková tělesná délka možná až na víc než 15 metrů. Ve zmíněném roce byl nicméně popsán obří jedinec tyranosaura 'Scotty', který sice nebyl tak dlouhý jako největší spinosauři (délka 12 až 13 metrů), celkově jej ale výrazně předčil svojí mohutností a tedy i hmotností (kolem 8870 kilogramů). Je tedy pravděpodobné, že druh T. rex byl skutečně největším známým teropodním dinosaurem (alespoň co se celkové hmotnosti týká).“",  
      imgFile: ".jpg",
      cardCls: "tyranno",
      source: "https://cs.wikipedia.org/wiki/Tyrannosaurus_rex",
      toolTip: "https://pixabay.com/",
    },
    Archeopteryx:{
      name: "Archeopteryx",
      era: "Svrchní jura - asi před 151 až 148 miliony let",
      food: "masožravec",
      height: "40 až 50 centimetrů",
      length: "rozpětí křídel zhruba 70 centimetrů",
      weigth: "0,5 až 1 kilogramu",
      interestingPoint: "Navzdory jeho opeření se dodnes vedou spory o to, zda byl archeopteryx schopen letu či nikoliv. Byl objeven v roce 1860, tzn. pouhé dva roky po vydání slavného díla Charlese Darwina - O původu druhů. V té době šlo o prvního lidem známého opeřeného dinosaura.",  
      imgFile: ".png",
      cardCls: "archeopt",
      source: "https://cs.wikipedia.org/wiki/Archaeopteryx",
      toolTip: "https://pixabay.com/",
    },
    Argentinosaurus:{
      name: "Argentinosaurus",
      era: "Svrchní křída - asi před 96 až 94 miliony let",
      food: "býložravec",
      height: "-",
      length: "22 až 26 metrů",
      weigth: "73 000 až 96 400 kilogramů",
      interestingPoint: "Jedná se o jednoho z největších dinosaurů všech dob a pravděpodobně jde o největšího známého suchozemského živočicha vůbec. Navzdory tomu „existují však jisté indicie v podobě obrovitých izolovaných kostí o ještě větších dinosaurech než byl Argentinosaurus, ty se však ztratily nebo o jejich příslušnosti panují dohady (např. Amphicoelias či Bruhathkayosaurus, jehož pozůstatky mohou být zkamenělým kmenem stromu). Zhruba stejně velký byl i Patagotitan, jehož objev byl v médiích oznámen roku 2014 a oficiální popis vyšel roku 2017.",  
      imgFile: ".jpg",
      cardCls: "argentino",
      source: "https://cs.wikipedia.org/wiki/Argentinosaurus",
      toolTip: "https://pixabay.com/",
    },
    Brachiosaurus: {
      name: "Brachiosaurus",
      era: "Svrchní jura - asi před 154 až 150 miliony let",
      food: "býložravec",
      height: "až 13 metrů",
      length: "22 až 26 metrů",
      weigth: "35 000 až 58 000 kilogramů",
      interestingPoint: "„Brachiosaurus patří k nejznámějším a nejpopulárnějším dinosaurům, mimo jiné byl také největším dinosaurem ve filmu Jurský park, díky kterému se stal obecně známým. Ve většině knih o dinosaurech až do počátku 90. let byl také uváděn jako největší známý dinosaurus. Kostra afrického brachiosaura v berlínském Humboldtově muzeu (Museum für Naturkunde) je stále nejvyšší smontovanou kostrou dinosaura na světě (výška exponátu v roce 2010 činila 13,26 metru, délka asi 23 metrů).“",  
      imgFile: ".png",
      cardCls: "brachio",
      source: "https://cs.wikipedia.org/wiki/Argentinosaurus",
      toolTip: "https://pixabay.com/",
    },
    Diplodocus: {
      name: "Diplodocus",
      era: "svrchní jura - asi před 154 až 148 miliony let",
      food: "býložravec",
      height: "-",
      length: "25 až 30 metrů",
      weigth: "až 16 000 kilogramů",
      interestingPoint: "„Diplodocus byl podle stavby chrupu nepochybně býložravec. Zuby mu ale sloužily pouze pro trhání potravy (například listí ze stromů), ne pro její rozžvýkání. Po sežrání potravy někdy polykal kameny (gastrolity), kterými v prvním žaludku potravu rozmělnil. Z tohoto důvodu nejspíš také žil blízko vody, kde je zeleň měkčí, šťavnatější a lépe stravitelná. Z tohoto důvodu nejspíš také žil blízko vody, kde je zeleň měkčí, šťavnatější a lépe stravitelná. Do vody však často nevstupoval. S délkou kolem 30 metrů patřil k nejdelším živočichům všech dob. Samotný jeho ocas mohl být dlouhý přes 15 metrů, krk pak přes 6 metrů.“",  
      imgFile: ".jpg",
      cardCls: "diplo",
      source: "https://cs.wikipedia.org/wiki/Diplodocus",
      toolTip: "https://commons.wikimedia.org/wiki/User:Fred_Wierum",
    },
    Iguanodon: {
      name: "Iguanodon",
      era: "spodní křída - asi před 126 až 125 miliony let",
      food: "býložravec",
      height: "-",
      length: "10 až 13 metrů",
      weigth: "3 000 až 15 000 kilogramů",
      interestingPoint: "Dodnes se vedou spory o to, jakou potravu iguanodoni přesně jedli. Pravděpodobně šlo o býložravce, který byl ve své době dominantním druhem. „V České republice lze modely iguanodona vidět v tzv. DinoParku Plzeň a DinoParku Vyškov. Iguanodon byl také hrdinou několika filmů. Například v Disneyho filmu Dinosaurus (anglicky: Dinosaur) hraje hlavní roli Iguanodon Aladar a mezi ostatními postavami jsou ještě další tři iguanodoni. Vzdáleně s filmem souvisí i strašidelná jízda stejného názvu ve Walt Disney World Resort, jejíž zápletka spočívá v hledání iguanodona a jeho přenesení do současnosti. Iguanodon je také jeden ze tří dinosauřích rodů, které inspirovaly tvůrce Godzilly; další dva jsou Tyrannosaurus a Stegosaurus. Iguanodon se objevil i v některých filmech série The Land Before Time či epizodách stejnojmenného televizního seriálu.“",  
      imgFile: ".jpg",
      cardCls: "iguano",
      source: "https://cs.wikipedia.org/wiki/Iguanodon",
      toolTip: "https://pixabay.com/",
    },
    Pteranodon: {
      name: "Pteranodon",
      era: "svrchní křída - asi před 86 až 84,5 miliony let",
      food: "masožravec",
      height: "-",
      length: "rozpětí křídel až 6,25 metrů",
      weigth: "až 100 kilogramů",
      interestingPoint: "„Patří k velmi populárním pravěkým živočichům a sehrál důležitou roli například ve filmech Jurský park 3, Ztracený svět: Jurský park, a také v televizních programech BBC Pronásledován dinosaury (Chased by Dinosaurs) a Mořské příšery (Sea Monsters).“",  
      imgFile: ".png",
      cardCls: "pteranod",
      source: "https://cs.wikipedia.org/wiki/Pteranodon",
      toolTip: "ArthurWeasley~commonswiki",
    },
    Spinosaurus: {
      name: "Spinosaurus",
      era: "přelom spodní a svrchní křídy - asi před 112 až 97 miliony let",
      food: "masožravec",
      height: "-",
      length: "16 až 18 metrů",
      weigth: "až 20 000 kilogramů",
      interestingPoint: "Patří mezi největší teropodní dinosaury - dravé, masožravé dinosaury. Některé odhady z něj činí největšího dvounohého živočicha, který kdy chodil po zemi. Podle některých vědců byl největším masožravým dinosaurem. „Spinosaurus je nejpopulárnějším a nejnebezpečnějším dinosaurem ve filmu Jurský park 3. V televizních dokumentech se objevil především v prvním díle dokumentu Megazvířata nebo na začátku filmu Tajuplní dinosauři. Spolu s karcharodontosaurem je hlavním tématem 1. dílu dokumentu Planet Dinosaur jménem Ztracený svět. V dokumentu je vyobrazen podle nejnovějších poznatků jako 'obojživelný 'dinosaurus živící se rybami. Právě toto nové pojetí fyziologie spinosaura přineslo na přelomu druhé a třetí dekády 21. století velkou míru popularity tomuto africkému dinosaurovi.“",  
      imgFile: ".jpg",
      cardCls: "spinos",
      source: "https://cs.wikipedia.org/wiki/Spinosaurus",
      toolTip: "https://pixabay.com/",
    },
    Triceratops: {
      name: "Triceratops",
      era: "svrchní křída - asi před 68 až 66 miliony let",
      food: "býložravec",
      height: "-",
      length: "8 až 12 metrů",
      weigth: "až 9 000 kilogramů",
      interestingPoint: "„Triceratops je jedním z ikonických dinosaurů, proto bývá často zpodobňován. Objevuje se již v románu Ztracený svět z roku 1912 a ve filmech. Významnou úlohu měl také v knize a filmu Jurský park. Objevil se již v prvním dílu fiktivně-dokumentárního seriálu Prehistorický park. Triceratops se štětinami na těle (dle moderního pohledu) se objevuje také v knize Poslední dny dinosaurů.“",  
      imgFile: ".png",
      cardCls: "tricera",
      source: "https://cs.wikipedia.org/wiki/Triceratops",
      toolTip: "tomozaurus.deviantart.com",
    },
    Apatosaurus: {
      name: "Apatosaurus",
      era: "svrchní jura - asi před 150 miliony let",
      food: "býložravec",
      height: "-",
      length: "23 až 26 metrů",
      weigth: "až 41 000 kilogramů",
      interestingPoint: "„Apatosauři dorůstali do své konečné velikosti kolem 10 let. Obratle apatosaura měly velmi neobvyklý tvar.[13] Existuje domněnka, že duté obratle sauropodů byly za života těchto tvorů vyplněny vzdušnými vaky, podobně jako u dnešních ptáků, se kterými jsou (byť se to nezdá pravděpodobné) tito obři vzdáleně příbuzní. U dinosaurů tyto morfologické struktury plnily podobnou funkci jako u ptáků, a sice odlehčení hmotnosti těla a možná také zlepšení respirace. Apatosaurus byl ztvárněn v dětském filmu/seriálu Transformers jako Sludge - autobot, který se může měnit do formy apatosaura.“",  
      imgFile: ".png",
      cardCls: "apato",
      source: "https://cs.wikipedia.org/wiki/Apatosaurus",
      toolTip: "https://pixabay.com/",
    },
    Velociraptor: {
      name: "Velociraptor",
      era: "svrchní křída - asi před 75 až 71 miliony let",
      food: "masožravec",
      height: "-",
      length: "2,1 metru",
      weigth: "až 25 kilogramů",
      interestingPoint: "„Tento dinosaurus je známý především díky své záporné „roli“ dravého zabijáka ve velkofilmu Jurský park z roku 1993 (i jeho třech pokračování a také ve filmu Jurský svět). V tomto filmu byl velociraptor ve svých charakteristikách prezentován dosti přehnaně (dvakrát větší než ve skutečnosti, neuvěřitelně inteligentní, bleskově rychlý, s nekonečným apetitem). Důvodem je prostá skutečnost, že filmový velociraptor byl vytvořen podle svého severoamerického příbuzného, mohutnějšího rodu Deinonychus (v době natáčení filmu panovala mezi některými vědci domněnka, že se jedná o stejný rod). Objevuje se také například v pseudo-dokumentárním cyklu Dinosaur Planet z roku 2003, v díle seriálu Putování s dinosaury: Gigantičtí ještěři a kameo hraje také v Putování s dinosaury: Monstra pravěkých oceánů, kde na začátku pronásleduje hlavního hrdinu. Mládě Velociraptora se objevuje také ve čtvrté epizodě třetí řady britského sci-fi seriálu Pravěk útočí.“",  
      imgFile: ".png",
      cardCls: "veloci",
      source: "https://cs.wikipedia.org/wiki/Velociraptor",
      toolTip: "https://pixabay.com/",
    },
    Carnotaurus: {
      name: "Carnotaurus",
      era: "svrchní křída - asi před 72 až 69,9 miliony let",
      food: "masožravec",
      height: "až 8 metrů",
      length: "až 9 metrů",
      weigth: "až 2 700 kilogramů",
      interestingPoint: "„Carnotaurus schopný měnit barvu kůže (literární smyšlenka) se objevuje také v románu Michaela Crichtona Ztracený svět: Jurský park. Model kostry karnotaura o délce 8 metrů je od prosince roku 2008 možné vidět v Chlupáčově muzeu historie Země v Praze. Jde o vůbec první dinosauří kostru v Čechách, umístěnou v trvalé expozici.“",  
      imgFile: ".jpg",
      cardCls: "carno",
      source: "https://cs.wikipedia.org/wiki/Carnotaurus",
      toolTip: "https://pixabay.com/",
    },
    Allosaurus: {
      name: "Allosaurus",
      era: "svrchní jura - asi před 155 až 150 miliony let",
      food: "masožravec",
      height: "až 12 metrů",
      length: "7 až 9 metrů",
      weigth: "až 3 000 kilogramů",
      interestingPoint: "„Allosaurus se objevil v Putování s dinosaury - Balada o Alosaurovi.“",  
      imgFile: ".png",
      cardCls: "allosaur",
      source: "https://cs.wikipedia.org/wiki/Allosaurus",
      toolTip: "https://commons.wikimedia.org/wiki/User:Jakubhal",
    },
    Parasaurolophus: {
      name: "Parasaurolophus",
      era: "svrchní křída - asi před 76 až 74 miliony let",
      food: "býložravec",
      height: "až 5 metrů",
      length: "až 10 metrů",
      weigth: "až 2 800 kilogramů",
      interestingPoint: "„Parasaurolophové se objevují v románu i filmu Jurský park i ve filmu Jurský park 3. Jsou správně zobrazeni jako stádní zvířata, dorozumívající se troubením za pomoci svých lebečních hřebenů. Stejně tak se objevují v šestém díle seriálu Prehistorický park nebo též v trikovém dokumentu Země albertosaura.“",  
      imgFile: ".jpg",
      cardCls: "parasaur",
      source: "https://cs.wikipedia.org/wiki/Parasaurolophus",
      toolTip: "https://www.deviantart.com/tomozaurus, nalezeno na wiki",
    },
    Deinonychus: {
      name: "Deinonychus",
      era: "spodní křída - asi 115 až 108 miliony let",
      food: "masožravec",
      height: "až 1,7 metru",
      length: "až 4 metry",
      weigth: "až 100 kilogramů",
      interestingPoint: "„Deinonychové byli zřejmě smečkoví lovci, jak dokazuje i množství jejich fosilních zubů, objevovaných na některých lokalitách. Pravděpodobně dokázali společnými silami ulovit větší kořist, než byli oni sami. V úvahu přicházejí například někteří ornitopodi střední velikosti. Deinonychus se objevil v románech Jurský park a Ztracený svět Michaela Crichtona a filmových adaptacích režiséra Stevena Spielberga.“",  
      imgFile: ".png",
      cardCls: "deino",
      source: "https://cs.wikipedia.org/wiki/Deinonychus",
      toolTip: "https://commons.wikimedia.org/wiki/User:Ferahgo_the_Assassin/",
    },
    Condorraptor: {
      name: "Condorraptor",
      era: "střední jura - asi před 170 miliony let",
      food: "masožravec",
      height: "-",
      length: "až 8,5 metry",
      weigth: "až 1650 kilogramů",
      interestingPoint: "„Condorraptor nechyběl ani ve filmu Jurský Park.“",  
      imgFile: ".jpg",
      cardCls: "condo",
      source: "https://cs.wikipedia.org/wiki/Condorraptor",
      toolTip: "https://commons.wikimedia.org/wiki/File:Condorraptor.jpg",
    },
    Gallimimus: {
      name: "Gallimimus",
      era: "svrchní křída - asi 71 až 68 milionů let",
      food: "všežravec",
      height: "až 2 metry",
      length: "až 8 metrů",
      weigth: "až 440 kilogramů",
      interestingPoint: "„Dříve si vědci mysleli, že gallimimovy „ruce“ nebyly schopny nic uchopit. Vědci se domnívali, že svýma „rukama“ hrabal v hlíně a hledal kořínky, nebo že kradl dinosauří, plazí a ptačí vejce. Později byl také vyobrazován, jak požírá trávu. Dnes se však vědci přiklánějí především k možnosti, že galimimus byl spíše všežravec. Gallimimové nechybí v románu i filmu Jurský park a ve filmech Jurský svět a Jurský svět: Zánik říše.“",
      imgFile: ".jpg",
      cardCls: "galli",
      source: "https://cs.wikipedia.org/wiki/Gallimimus",
      toolTip: "https://commons.wikimedia.org/wiki/User:Steveoc_86",
    },
    Therizinosaurus: {
      name: "Therizinosaurus",
      era: "svrchní křída - asi před 71 miliony let",
      food: "všežravec",
      height: "až 6,1 metrů",
      length: "až 10 metrů",
      weigth: "až 5 500 kilogramů",
      interestingPoint: "„Therizinosaurus disponoval dlouhými drápy na předních končetinách. Jejich funkce se stala předmětem odborných debat. Vyvrácena nebyla ani bojová, ani hloubící, ani úchopová funkce. Nejpravděpodobněji však byly využívány k obstarávání potravy úchytem či přitahováním. Therizinosaurus se objevil ve filmu Jurský park.“",  
      imgFile: ".png",
      cardCls: "therizi",
      source: "https://cs.wikipedia.org/wiki/Therizinosaurus",
      toolTip: "https://commons.wikimedia.org/wiki/User:PaleoNeolitic",
    },
    Amurosaurus: {
      name: "Amurosaurus",
      era: "svrchní křída - asi před 66 miliony let",
      food: "všežravec",
      height: "-",
      length: "až 8 metrů",
      weigth: "až 3 000 kilogramů",
      interestingPoint: "„Amurosaurusova kostra je vystavena v paleontologickém muzeu na území dnešního Ruska. Jednalo se o dinosaura pohybujícího se po dvou nohách, tzv. bipedálního.“",  
      imgFile: ".jpg",
      cardCls: "amuro",
      source: "https://cs.wikipedia.org/wiki/Amurosaurus",
      toolTip: "https://en.wikipedia.org/wiki/User:Debivort",
    },
    Pachycephalosaurus: {
      name: "Pachycephalosaurus",
      era: "svrchní křída - asi před 70 až 66 miliony let",
      food: "býložravec",
      height: "až 2 metry",
      length: "až 8 metrů",
      weigth: "až 450 kilogramů",
      interestingPoint: "„Pachycephalosauři měli na vrchní části lebky útvar připomínající helmu. O jejím účelu se vedou spory. Jednou z nich byla také ta, že tuto kostěnou helmu využívali v soubojích s jedinci svého vlastního druhu. Pachycephalosaurus se objevuje ve filmech Jurský park a Ztracený svět: Jurský park. “",  
      imgFile: ".jpg",
      cardCls: "amuro",
      source: "https://cs.wikipedia.org/wiki/Pachycephalosaurus",
      toolTip: "https://commons.wikimedia.org/wiki/User:Fred_Wierum",
    },
    Lycaenops: {
      name: "Lycaenops",
      era: "svrchní křída - asi před 270 až 252 miliony let",
      food: "masožravec",
      height: "-",
      length: "až 1 metr",
      weigth: "až 15 kilogramů",
      interestingPoint: "„Lycaenops byl pojmenován po vlku. Pravděpodobně se živil malými obratlovci - ještěrkami a dicyndony. Běhal s nohama podél těla, tedy zůsobem vlastním savcům. Tímto způsobem neběhaly příslušníci jiných druhů, a to lycaenopsům proti nim dávalo výhodu rychlejšího pohybu.“",  
      imgFile: ".jpg",
      cardCls: "lyca",
      source: "https://cs.wikipedia.org/wiki/Lycaenops",
      toolTip: "https://commons.wikimedia.org/wiki/Creator:Dmitry_Bogdanov",
    },
    Pterodactylus: {
      name: "Pterodactylus",
      era: "svrchní jura - asi před 151 až 148 miliony let",
      food: "masožravec",
      height: "-",
      length: "rozpětí křídel až 1,5 metru",
      weigth: "-",
      interestingPoint: "„Tento létající plaz je jedním z prvních objevených a vědecky popsaných ptakoještěrů vůbec (dříve byl objeven nejspíš jen \"Pester Exemplar\" - dnes Aurorazhdarcho micronyx). První zkameněliny Pterodactylusů byly identifikovány již kolem roku 1784 italským učencem Cosimou A. Collinim. Řádně vědecky popsán pak byl počátkem 19. století. Vzhledem k anatomické podobnosti kostry Pterodactylusa a krokodýlů se vžilo již v této době nepřesné označení \"létající plazi\".“",  
      imgFile: ".png",
      cardCls: "pteroda",
      source: "https://cs.wikipedia.org/wiki/Pterodactylus",
      toolTip: "https://commons.wikimedia.org/wiki/User:Dinoguy2/",
    },

  };

  const addImgSrcSmAndimgSrc = function addImgSrcSmAndimgSrc() {
    for (let dino in dinosObj) {
      //  Getter for small sized images - saving traffic load
      Object.defineProperty(dinosObj[dino], "imgSrcSm", {
        get: function () {
        return getImgSrcSm.call(this);
        }
      });
      //  Getter for large/normal sized images - saving traffic load
      Object.defineProperty(dinosObj[dino], "imgSrc", {
        get: function () {
        return getImgSrc.call(this);
        }
      });
      // Colors of badges - cernivores, herbivores, all - defined in dinoStyles.css
      Object.defineProperty(dinosObj[dino], "foodCls", {
        get: function () {
          return this.food == "masožravec" ? "my-red" : this.food == "všežravec" ? "my-orange" : "my-green";
        }
      });
    }
  }

  return {
    // Iterate over all dinos objects and add them computed properties - saving time of adding new dino data
    init: function() {
        addImgSrcSmAndimgSrc();
      return;
    },
    getDinosObj: function () {
      return dinosObj;
    },
    getPathToImages: function (size) {
      return size == "sm" ? pathSm : pathLg;  
    },
  };
})();

// Run init to get full data in dinos details objects
DinosListObjCtrl.init();