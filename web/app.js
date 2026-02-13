/* ===== I18N ===== */
const i18n = {
  fr: { title: "Calculateur de chemin de vie", label: "Date de naissance", placeholder: "jj/mm/aaaa", action: "Calculer", lifepath: "Chemin de vie", master: "Nombre ma\u00eetre", debt: "Dette karmique (jour)", day: "Jour", month: "Mois", year: "Ann\u00e9e", total: "Total", settings: "R\u00e9glages", language: "Langue", theme: "Th\u00e8me \u00e9l\u00e9ment", close: "Fermer", earth: "Terre", spirit: "Esprit", metal: "M\u00e9tal", air: "Air", water: "Eau", fire: "Feu", legend: "L\u00e9gende", legendMaster: "11, 22, 33 \u2014 Nombres ma\u00eetres", legendDebt: "13, 14, 16, 19 \u2014 Dettes karmiques (jour)", legendLifepath: "1\u20139 \u2014 Chemin de vie" },
  en: { title: "Life Path Calculator", label: "Date of birth", placeholder: "dd/mm/yyyy", action: "Calculate", lifepath: "Life path", master: "Master number", debt: "Karmic debt (day)", day: "Day", month: "Month", year: "Year", total: "Total", settings: "Settings", language: "Language", theme: "Element theme", close: "Close", earth: "Earth", spirit: "Spirit", metal: "Metal", air: "Air", water: "Water", fire: "Fire", legend: "Legend", legendMaster: "11, 22, 33 \u2014 Master numbers", legendDebt: "13, 14, 16, 19 \u2014 Karmic debts (day)", legendLifepath: "1\u20139 \u2014 Life path" },
  ht: { title: "Kalkilat\u00e8 chemen lavi", label: "Dat nesans", placeholder: "jj/mm/aaaa", action: "Kalkile", lifepath: "Chemen lavi", master: "Nonb m\u00e8t", debt: "D\u00e8t kamik (jou)", day: "Jou", month: "Mwa", year: "Ane", total: "Total", settings: "Reglaj", language: "Lang", theme: "T\u00e8m elem\u00e0n", close: "F\u00e8men", earth: "T\u00e8", spirit: "Espri", metal: "Metal", air: "L\u00e8", water: "Dlo", fire: "Dife" },
  es: { title: "Calculadora de camino de vida", label: "Fecha de nacimiento", placeholder: "dd/mm/aaaa", action: "Calcular", lifepath: "Camino de vida", master: "N\u00famero maestro", debt: "Deuda k\u00e1rmica (d\u00eda)", day: "D\u00eda", month: "Mes", year: "A\u00f1o", total: "Total", settings: "Ajustes", language: "Idioma", theme: "Tema elemento", close: "Cerrar", earth: "Tierra", spirit: "Esp\u00edritu", metal: "Metal", air: "Aire", water: "Agua", fire: "Fuego" },
  pt: { title: "Calculadora de caminho de vida", label: "Data de nascimento", placeholder: "dd/mm/aaaa", action: "Calcular", lifepath: "Caminho de vida", master: "N\u00famero mestre", debt: "D\u00e9bito c\u00e1rmico (dia)", day: "Dia", month: "M\u00eas", year: "Ano", total: "Total", settings: "Configura\u00e7\u00f5es", language: "Idioma", theme: "Tema elemento", close: "Fechar", earth: "Terra", spirit: "Esp\u00edrito", metal: "Metal", air: "Ar", water: "\u00c1gua", fire: "Fogo" },
  de: { title: "Lebensweg-Rechner", label: "Geburtsdatum", placeholder: "TT/MM/JJJJ", action: "Berechnen", lifepath: "Lebensweg", master: "Meisterzahl", debt: "Karmische Schuld (Tag)", day: "Tag", month: "Monat", year: "Jahr", total: "Gesamt", settings: "Einstellungen", language: "Sprache", theme: "Element-Thema", close: "Schlie\u00dfen", earth: "Erde", spirit: "Geist", metal: "Metall", air: "Luft", water: "Wasser", fire: "Feuer" },
  it: { title: "Calcolatore del percorso di vita", label: "Data di nascita", placeholder: "gg/mm/aaaa", action: "Calcola", lifepath: "Percorso di vita", master: "Numero maestro", debt: "Debito karmico (giorno)", day: "Giorno", month: "Mese", year: "Anno", total: "Totale", settings: "Impostazioni", language: "Lingua", theme: "Tema elemento", close: "Chiudi", earth: "Terra", spirit: "Spirito", metal: "Metallo", air: "Aria", water: "Acqua", fire: "Fuoco" },
  nl: { title: "Levenspad-calculator", label: "Geboortedatum", placeholder: "dd/mm/jjjj", action: "Berekenen", lifepath: "Levenspad", master: "Meesternummer", debt: "Karmische schuld (dag)", day: "Dag", month: "Maand", year: "Jaar", total: "Totaal", settings: "Instellingen", language: "Taal", theme: "Element thema", close: "Sluiten", earth: "Aarde", spirit: "Geest", metal: "Metaal", air: "Lucht", water: "Water", fire: "Vuur" },
  ru: { title: "\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0443\u0442\u0438", label: "\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f", placeholder: "\u0434\u0434/\u043c\u043c/\u0433\u0433\u0433\u0433", action: "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c", lifepath: "\u0416\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u0439 \u043f\u0443\u0442\u044c", master: "\u041c\u0430\u0441\u0442\u0435\u0440-\u0447\u0438\u0441\u043b\u043e", debt: "\u041a\u0430\u0440\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u0433 (\u0434\u0435\u043d\u044c)", day: "\u0414\u0435\u043d\u044c", month: "\u041c\u0435\u0441\u044f\u0446", year: "\u0413\u043e\u0434", total: "\u0418\u0442\u043e\u0433", settings: "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438", language: "\u042f\u0437\u044b\u043a", theme: "\u0422\u0435\u043c\u0430 \u0441\u0442\u0438\u0445\u0438\u0438", close: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c", earth: "\u0417\u0435\u043c\u043b\u044f", spirit: "\u0414\u0443\u0445", metal: "\u041c\u0435\u0442\u0430\u043b\u043b", air: "\u0412\u043e\u0437\u0434\u0443\u0445", water: "\u0412\u043e\u0434\u0430", fire: "\u041e\u0433\u043e\u043d\u044c" },
  ar: { title: "\u062d\u0627\u0633\u0628\u0629 \u0645\u0633\u0627\u0631 \u0627\u0644\u062d\u064a\u0627\u0629", label: "\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0645\u064a\u0644\u0627\u062f", placeholder: "\u064a\u064a/\u0634\u0634/\u0633\u0633\u0633\u0633", action: "\u0627\u062d\u0633\u0628", lifepath: "\u0645\u0633\u0627\u0631 \u0627\u0644\u062d\u064a\u0627\u0629", master: "\u0631\u0642\u0645 \u0631\u0626\u064a\u0633\u064a", debt: "\u062f\u064a\u0646 \u0643\u0627\u0631\u0645\u064a (\u064a\u0648\u0645)", day: "\u064a\u0648\u0645", month: "\u0634\u0647\u0631", year: "\u0633\u0646\u0629", total: "\u0627\u0644\u0645\u062c\u0645\u0648\u0639", settings: "\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a", language: "\u0627\u0644\u0644\u063a\u0629", theme: "\u0639\u0646\u0635\u0631 \u0627\u0644\u0645\u0648\u0636\u0648\u0639", close: "\u0625\u063a\u0644\u0627\u0642", earth: "\u0623\u0631\u0636", spirit: "\u0631\u0648\u062d", metal: "\u0645\u0639\u062f\u0646", air: "\u0647\u0648\u0627\u0621", water: "\u0645\u0627\u0621", fire: "\u0646\u0627\u0631" },
  zh: { title: "\u751f\u547d\u8def\u5f84\u8ba1\u7b97\u5668", label: "\u51fa\u751f\u65e5\u671f", placeholder: "\u65e5/\u6708/\u5e74", action: "\u8ba1\u7b97", lifepath: "\u751f\u547d\u8def\u5f84", master: "\u4e3b\u5b0c\u6570", debt: "\u4e1a\u529b\u503a (\u65e5)", day: "\u65e5", month: "\u6708", year: "\u5e74", total: "\u603b\u8ba1", settings: "\u8bbe\u7f6e", language: "\u8bed\u8a00", theme: "\u5143\u7d20\u4e3b\u9898", close: "\u5173\u95ed", earth: "\u571f", spirit: "\u7075", metal: "\u91d1", air: "\u6c14", water: "\u6c34", fire: "\u706b" },
  ja: { title: "\u30e9\u30a4\u30d5\u30d1\u30b9\u8a08\u7b97\u6a5f", label: "\u751f\u5e74\u6708\u65e5", placeholder: "\u65e5/\u6708/\u5e74", action: "\u8a08\u7b97", lifepath: "\u30e9\u30a4\u30d5\u30d1\u30b9", master: "\u30de\u30b9\u30bf\u30fc\u30ca\u30f3\u30d0\u30fc", debt: "\u30ab\u30eb\u30de\u306e\u8ca0\u50b5 (\u65e5)", day: "\u65e5", month: "\u6708", year: "\u5e74", total: "\u5408\u8a08", settings: "\u8a2d\u5b9a", language: "\u8a00\u8a9e", theme: "\u30a8\u30ec\u30e1\u30f3\u30c8\u30c6\u30fc\u30de", close: "\u9589\u3058\u308b", earth: "\u571f", spirit: "\u970a", metal: "\u91d1", air: "\u98a8", water: "\u6c34", fire: "\u706b" },
  ko: { title: "\uc0dd\uba85 \uacbd\ub85c \uacc4\uc0b0\uae30", label: "\uc0dd\ub144\uc6d4\uc77c", placeholder: "\uc77c/\uc6d4/\ub144", action: "\uacc4\uc0b0", lifepath: "\uc0dd\uba85 \uacbd\ub85c", master: "\ub9c8\uc2a4\ud130 \ub118\ubc84", debt: "\uce74\ub974\ub9c8 \ube5a (\uc77c)", day: "\uc77c", month: "\uc6d4", year: "\ub144", total: "\ud569\uacc4", settings: "\uc124\uc815", language: "\uc5b8\uc5b4", theme: "\uc694\uc18c \ud14c\ub9c8", close: "\ub2eb\uae30", earth: "\ud1a0", spirit: "\uc601", metal: "\uae08", air: "\uacf5\uae30", water: "\uc218", fire: "\ud654" },
  hi: { title: "\u091c\u0940\u0935\u0928 \u092a\u0925 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091f\u0930", label: "\u091c\u0928\u094d\u092e \u0924\u093f\u0925\u093f", placeholder: "\u0926\u0926/\u092e\u092e/\u0935\u0935\u0935\u0935", action: "\u0917\u0923\u0928\u093e \u0915\u0930\u0947\u0902", lifepath: "\u091c\u0940\u0935\u0928 \u092a\u0925", master: "\u092e\u093e\u0938\u094d\u091f\u0930 \u0928\u0902\u092c\u0930", debt: "\u0915\u093e\u0930\u094d\u092e\u093f\u0915 \u090b\u0923 (\u0926\u093f\u0928)", day: "\u0926\u093f\u0928", month: "\u092e\u0939\u0940\u0928\u093e", year: "\u0935\u0930\u094d\u0937", total: "\u0915\u0941\u0932", settings: "\u0938\u0947\u091f\u093f\u0902\u0917\u094d\u0938", language: "\u092d\u093e\u0937\u093e", theme: "\u0924\u0924\u094d\u0935 \u0925\u0940\u092e", close: "\u092c\u0902\u0926 \u0915\u0930\u0947\u0902", earth: "\u092a\u0943\u0925\u094d\u0935\u0940", spirit: "\u0906\u0924\u094d\u092e\u093e", metal: "\u0927\u093e\u0924\u0941", air: "\u0935\u093e\u092f\u0941", water: "\u091c\u0932", fire: "\u0905\u0917\u094d\u0928\u093f" },
  sw: { title: "Kikokotoo cha njia ya maisha", label: "Tarehe ya kuzaliwa", placeholder: "ss/mm/mmmm", action: "Kokotoa", lifepath: "Njia ya maisha", master: "Namba kuu", debt: "Deni la karma (siku)", day: "Siku", month: "Mwezi", year: "Mwaka", total: "Jumla", settings: "Mipangilio", language: "Lugha", theme: "Mandhari ya kipengele", close: "Funga", earth: "Ardhi", spirit: "Roho", metal: "Chuma", air: "Hewa", water: "Maji", fire: "Moto" },
  wo: { title: "Xalaat mi nuy jot ci yoonu dundal", label: "Bis bu judd\u00f6o", placeholder: "bb/ss/aaaa", action: "Lim", lifepath: "Yoonu dundal", master: "Nimero borom", debt: "B\u00e9ral karma (bis)", day: "Bis", month: "Weer", year: "At", total: "Tollu", settings: "Teral", language: "L\u00e0kk", theme: "Tonu jikko", close: "T\u00eedd", earth: "Suuf", spirit: "Xel", metal: "Metal", air: "Ngelaw", water: "Ndox", fire: "Safara" },
  yo: { title: "A\u1e63\u00e0r\u00f2 \u1ecdn\u00e0 \u00ecgb\u00e9s\u00ec ay\u00e9", label: "\u1eccj\u1ecd\u0301 \u00ecb\u00ed", placeholder: "\u1ecdj/os/\u1ecdd\u00fan", action: "S\u00e0 \u00ecs\u00edr\u00f2", lifepath: "\u1eccn\u00e0 \u00ecgb\u00e9s\u00ec", master: "N\u1ecd\u0301mb\u00e0 al\u00e1\u1e63\u1eb9", debt: "Gb\u00e8s\u00e8 karma (\u1ecdj\u1ecd\u0301)", day: "\u1eccj\u1ecd\u0301", month: "Os\u00f9", year: "\u1eccd\u00fan", total: "\u00c0p\u00e0p\u1ecd\u0300", settings: "Eto", language: "\u00c8d\u00e8", theme: "\u00c8r\u00f2j\u00e0 \u00e0k\u00f3r\u00ed", close: "Pa\u0301d\u00e9", earth: "Il\u1eb9\u0300", spirit: "\u00c8m\u00ed", metal: "Irin", air: "Af\u1eb9\u0301f\u1eb9\u0301", water: "Omi", fire: "In\u00e1" },
  pl: { title: "Kalkulator \u015bcie\u017cki \u017cycia", label: "Data urodzenia", placeholder: "dd/mm/rrrr", action: "Oblicz", lifepath: "\u015acie\u017cka \u017cycia", master: "Liczba mistrzowska", debt: "D\u0142ug karmiczny (dzie\u0144)", day: "Dzie\u0144", month: "Miesi\u0105c", year: "Rok", total: "Suma", settings: "Ustawienia", language: "J\u0119zyk", theme: "Motyw \u017cywio\u0142u", close: "Zamknij", earth: "Ziemia", spirit: "Duch", metal: "Metal", air: "Powietrze", water: "Woda", fire: "Ogie\u0144" },
  tr: { title: "Ya\u015fam yolu hesaplay\u0131c\u0131", label: "Do\u011fum tarihi", placeholder: "gg/aa/yyyy", action: "Hesapla", lifepath: "Ya\u015fam yolu", master: "\u00dcst say\u0131", debt: "Karmik bor\u00e7 (g\u00fcn)", day: "G\u00fcn", month: "Ay", year: "Y\u0131l", total: "Toplam", settings: "Ayarlar", language: "Dil", theme: "Element temas\u0131", close: "Kapat", earth: "Toprak", spirit: "Ruh", metal: "Metal", air: "Hava", water: "Su", fire: "Ate\u015f" },
  vi: { title: "M\u00e1y t\u00ednh \u0111\u01b0\u1eddng \u0111\u1eddi", label: "Ng\u00e0y sinh", placeholder: "nn/tt/nnnn", action: "T\u00ednh", lifepath: "\u0110\u01b0\u1eddng \u0111\u1eddi", master: "S\u1ed1 ch\u1ee7", debt: "N\u1ee3 nghi\u1ec7p (ng\u00e0y)", day: "Ng\u00e0y", month: "Th\u00e1ng", year: "N\u0103m", total: "T\u1ed5ng", settings: "C\u00e0i \u0111\u1eb7t", language: "Ng\u00f4n ng\u1eef", theme: "Ch\u1ee7 \u0111\u1ec1 nguy\u00ean t\u1ed1", close: "\u0110\u00f3ng", earth: "\u0110\u1ea5t", spirit: "Linh", metal: "Kim", air: "Kh\u00ed", water: "Th\u1ee7y", fire: "H\u1ecfa" },
  th: { title: "\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e04\u0e33\u0e19\u0e27\u0e13\u0e40\u0e2a\u0e49\u0e19\u0e17\u0e32\u0e07\u0e0a\u0e35\u0e27\u0e34\u0e15", label: "\u0e27\u0e31\u0e19\u0e40\u0e01\u0e34\u0e14", placeholder: "\u0e27\u0e27/\u0e14\u0e14/\u0e1b\u0e1b\u0e1b\u0e1b", action: "\u0e04\u0e33\u0e19\u0e27\u0e13", lifepath: "\u0e40\u0e2a\u0e49\u0e19\u0e17\u0e32\u0e07\u0e0a\u0e35\u0e27\u0e34\u0e15", master: "\u0e40\u0e25\u0e02\u0e2b\u0e25\u0e31\u0e01", debt: "\u0e2b\u0e19\u0e35\u0e49\u0e01\u0e23\u0e23\u0e21 (\u0e27\u0e31\u0e19)", day: "\u0e27\u0e31\u0e19", month: "\u0e40\u0e14\u0e37\u0e2d\u0e19", year: "\u0e1b\u0e35", total: "\u0e23\u0e27\u0e21", settings: "\u0e01\u0e32\u0e23\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32", language: "\u0e20\u0e32\u0e29\u0e32", theme: "\u0e18\u0e35\u0e21\u0e18\u0e32\u0e15\u0e38", close: "\u0e1b\u0e34\u0e14", earth: "\u0e14\u0e34\u0e19", spirit: "\u0e27\u0e34\u0e0d\u0e0d\u0e32\u0e13", metal: "\u0e42\u0e25\u0e2b\u0e30", air: "\u0e25\u0e21", water: "\u0e19\u0e49\u0e33", fire: "\u0e44\u0e1f" },
  uk: { title: "\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0436\u0438\u0442\u0442\u0454\u0432\u043e\u0433\u043e \u0448\u043b\u044f\u0445\u0443", label: "\u0414\u0430\u0442\u0430 \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f", placeholder: "\u0434\u0434/\u043c\u043c/\u0440\u0440\u0440\u0440", action: "\u041e\u0431\u0447\u0438\u0441\u043b\u0438\u0442\u0438", lifepath: "\u0416\u0438\u0442\u0442\u0454\u0432\u0438\u0439 \u0448\u043b\u044f\u0445", master: "\u041c\u0430\u0439\u0441\u0442\u0435\u0440-\u0447\u0438\u0441\u043b\u043e", debt: "\u041a\u0430\u0440\u043c\u0456\u0447\u043d\u0438\u0439 \u0431\u043e\u0440\u0433 (\u0434\u0435\u043d\u044c)", day: "\u0414\u0435\u043d\u044c", month: "\u041c\u0456\u0441\u044f\u0446\u044c", year: "\u0420\u0456\u043a", total: "\u0412\u0441\u044c\u043e\u0433\u043e", settings: "\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f", language: "\u041c\u043e\u0432\u0430", theme: "\u0422\u0435\u043c\u0430 \u0441\u0442\u0438\u0445\u0456\u0457", close: "\u0417\u0430\u043a\u0440\u0438\u0442\u0438", earth: "\u0417\u0435\u043c\u043b\u044f", spirit: "\u0414\u0443\u0445", metal: "\u041c\u0435\u0442\u0430\u043b", air: "\u041f\u043e\u0432\u0456\u0442\u0440\u044f", water: "\u0412\u043e\u0434\u0430", fire: "\u0412\u043e\u0433\u043e\u043d\u044c" },
  ro: { title: "Calculator de drum al vie\u021bii", label: "Data na\u0219terii", placeholder: "zz/ll/aaaa", action: "Calculeaz\u0103", lifepath: "Drumul vie\u021bii", master: "Num\u0103r maestru", debt: "Datorie karmic\u0103 (zi)", day: "Zi", month: "Lun\u0103", year: "An", total: "Total", settings: "Set\u0103ri", language: "Limb\u0103", theme: "Tema elementului", close: "\u00cenchide", earth: "P\u0103m\u00e2nt", spirit: "Spirit", metal: "Metal", air: "Aer", water: "Ap\u0103", fire: "Foc" },
  cs: { title: "Kalkula\u010dka \u017eivotn\u00ed cesty", label: "Datum narozen\u00ed", placeholder: "dd/mm/rrrr", action: "Vypo\u010d\u00edtat", lifepath: "\u017divotn\u00ed cesta", master: "Hlavn\u00ed \u010d\u00edslo", debt: "Karmick\u00fd dluh (den)", day: "Den", month: "M\u011bs\u00edc", year: "Rok", total: "Celkem", settings: "Nastaven\u00ed", language: "Jazyk", theme: "T\u00e9ma prvku", close: "Zav\u0159\u00edt", earth: "Zem\u011b", spirit: "Duch", metal: "Kov", air: "Vzduch", water: "Voda", fire: "Ohe\u0148" },
  el: { title: "\u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03c4\u03ae\u03c2 \u03bc\u03bf\u03bd\u03bf\u03c0\u03b1\u03c4\u03b9\u03bf\u03cd \u03b6\u03c9\u03ae\u03c2", label: "\u0397\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1 \u03b3\u03ad\u03bd\u03bd\u03b7\u03c3\u03b7\u03c2", placeholder: "\u03b7\u03b7/\u03bc\u03bc/\u03b5\u03b5\u03b5\u03b5", action: "\u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03cc\u03c2", lifepath: "\u039c\u03bf\u03bd\u03bf\u03c0\u03ac\u03c4\u03b9 \u03b6\u03c9\u03ae\u03c2", master: "\u039a\u03cd\u03c1\u03b9\u03bf\u03c2 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2", debt: "\u039a\u03b1\u03c1\u03bc\u03b9\u03ba\u03cc \u03c7\u03c1\u03ad\u03bf\u03c2 (\u03b7\u03bc\u03ad\u03c1\u03b1)", day: "\u0397\u03bc\u03ad\u03c1\u03b1", month: "\u039c\u03ae\u03bd\u03b1\u03c2", year: "\u0388\u03c4\u03bf\u03c2", total: "\u03a3\u03cd\u03bd\u03bf\u03bb\u03bf", settings: "\u03a1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2", language: "\u0393\u03bb\u03ce\u03c3\u03c3\u03b1", theme: "\u0398\u03ad\u03bc\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf\u03c5", close: "\u039a\u03bb\u03b5\u03af\u03c3\u03b9\u03bc\u03bf", earth: "\u0393\u03b7", spirit: "\u03a0\u03bd\u03b5\u03cd\u03bc\u03b1", metal: "\u039c\u03ad\u03c4\u03b1\u03bb\u03bb\u03bf", air: "\u0391\u03ad\u03c1\u03b1\u03c2", water: "\u039d\u03b5\u03c1\u03cc", fire: "\u03a6\u03c9\u03c4\u03b9\u03ac" },
  he: { title: "\u05de\u05d7\u05e9\u05d1\u05d5\u05df \u05e0\u05ea\u05d9\u05d1 \u05d7\u05d9\u05d9\u05dd", label: "\u05ea\u05d0\u05e8\u05d9\u05da \u05dc\u05d9\u05d3\u05d4", placeholder: "\u05d9\u05d9/\u05d7\u05d7/\u05e9\u05e9\u05e9\u05e9", action: "\u05d7\u05e9\u05d1", lifepath: "\u05e0\u05ea\u05d9\u05d1 \u05d7\u05d9\u05d9\u05dd", master: "\u05de\u05e1\u05e4\u05e8 \u05de\u05d0\u05e1\u05d8\u05e8", debt: "\u05d7\u05d5\u05d1 \u05e7\u05e8\u05de\u05d9 (\u05d9\u05d5\u05dd)", day: "\u05d9\u05d5\u05dd", month: "\u05d7\u05d5\u05d3\u05e9", year: "\u05e9\u05e0\u05d4", total: "\u05e1\u05d4\u05f4\u05db", settings: "\u05d4\u05d2\u05d3\u05e8\u05d5\u05ea", language: "\u05e9\u05e4\u05d4", theme: "\u05e2\u05e8\u05db\u05ea \u05e0\u05d5\u05e9\u05d0 \u05d9\u05e1\u05d5\u05d3", close: "\u05e1\u05d2\u05d5\u05e8", earth: "\u05d0\u05d3\u05de\u05d4", spirit: "\u05e8\u05d5\u05d7", metal: "\u05de\u05ea\u05db\u05ea", air: "\u05d0\u05d5\u05d5\u05d9\u05e8", water: "\u05de\u05d9\u05dd", fire: "\u05d0\u05e9" },
  id: { title: "Kalkulator jalur kehidupan", label: "Tanggal lahir", placeholder: "hh/bb/tttt", action: "Hitung", lifepath: "Jalur kehidupan", master: "Angka master", debt: "Hutang karma (hari)", day: "Hari", month: "Bulan", year: "Tahun", total: "Total", settings: "Pengaturan", language: "Bahasa", theme: "Tema elemen", close: "Tutup", earth: "Bumi", spirit: "Roh", metal: "Logam", air: "Udara", water: "Air", fire: "Api" },
  ms: { title: "Kalkulator laluan kehidupan", label: "Tarikh lahir", placeholder: "hh/bb/tttt", action: "Kira", lifepath: "Laluan kehidupan", master: "Nombor induk", debt: "Hutang karma (hari)", day: "Hari", month: "Bulan", year: "Tahun", total: "Jumlah", settings: "Tetapan", language: "Bahasa", theme: "Tema elemen", close: "Tutup", earth: "Bumi", spirit: "Roh", metal: "Logam", air: "Udara", water: "Air", fire: "Api" },
  fa: { title: "\u0645\u0627\u0634\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0645\u0633\u06cc\u0631 \u0632\u0646\u062f\u06af\u06cc", label: "\u062a\u0627\u0631\u06cc\u062e \u062a\u0648\u0644\u062f", placeholder: "\u0631\u0631/\u0645\u0645/\u0633\u0633\u0633\u0633", action: "\u0645\u062d\u0627\u0633\u0628\u0647", lifepath: "\u0645\u0633\u06cc\u0631 \u0632\u0646\u062f\u06af\u06cc", master: "\u0639\u062f\u062f \u0627\u0633\u062a\u0627\u062f", debt: "\u0628\u062f\u0647\u06cc \u06a9\u0627\u0631\u0645\u0627 (\u0631\u0648\u0632)", day: "\u0631\u0648\u0632", month: "\u0645\u0627\u0647", year: "\u0633\u0627\u0644", total: "\u0645\u062c\u0645\u0648\u0639", settings: "\u062a\u0646\u0638\u06cc\u0645\u0627\u062a", language: "\u0632\u0628\u0627\u0646", theme: "\u0645\u0648\u0636\u0648\u0639 \u0639\u0646\u0635\u0631", close: "\u0628\u0633\u062a\u0646", earth: "\u062e\u0627\u06a9", spirit: "\u0631\u0648\u062d", metal: "\u0641\u0644\u0632", air: "\u0628\u0627\u062f", water: "\u0622\u0628", fire: "\u0622\u062a\u0634" },
  bn: { title: "\u099c\u09c0\u09ac\u09a8 \u09aa\u09a5 \u0995\u09cd\u09af\u09be\u09b2\u0995\u09c1\u09b2\u09c7\u099f\u09b0", label: "\u099c\u09a8\u09cd\u09ae \u09a4\u09be\u09b0\u09bf\u0996", placeholder: "\u09a6\u09a6/\u09ae\u09ae/\u09ac\u09ac\u09ac\u09ac", action: "\u0997\u09a3\u09a8\u09be", lifepath: "\u099c\u09c0\u09ac\u09a8 \u09aa\u09a5", master: "\u09ae\u09be\u09b8\u09cd\u099f\u09be\u09b0 \u09a8\u09ae\u09cd\u09ac\u09b0", debt: "\u0995\u09be\u09b0\u09cd\u09ae\u09bf\u0995 \u098b\u09a3 (\u09a6\u09bf\u09a8)", day: "\u09a6\u09bf\u09a8", month: "\u09ae\u09be\u09b8", year: "\u09ac\u099b\u09b0", total: "\u09ae\u09cb\u099f", settings: "\u09b8\u09c7\u099f\u09bf\u0982\u09b8", language: "\u09ad\u09be\u09b7\u09be", theme: "\u0989\u09aa\u09be\u09a6\u09be\u09a8 \u09a5\u09bf\u09ae", close: "\u09ac\u09a8\u09cd\u09a7", earth: "\u09ae\u09be\u099f\u09bf", spirit: "\u0986\u09a4\u09cd\u09ae\u09be", metal: "\u09a7\u09be\u09a4\u09c1", air: "\u09ac\u09be\u09a4\u09be\u09b8", water: "\u099c\u09b2", fire: "\u0986\u0997\u09c1\u09a8" },
  sv: { title: "Livets v\u00e4g-kalkylator", label: "F\u00f6delsedatum", placeholder: "dd/mm/\u00e5\u00e5\u00e5\u00e5", action: "Ber\u00e4kna", lifepath: "Livets v\u00e4g", master: "Mastertal", debt: "Karmisk skuld (dag)", day: "Dag", month: "M\u00e5nad", year: "\u00c5r", total: "Totalt", settings: "Inst\u00e4llningar", language: "Spr\u00e5k", theme: "Elementtema", close: "St\u00e4ng", earth: "Jord", spirit: "Ande", metal: "Metall", air: "Luft", water: "Vatten", fire: "Eld" },
  da: { title: "Livssti-beregner", label: "F\u00f8dselsdato", placeholder: "dd/mm/\u00e5\u00e5\u00e5\u00e5", action: "Beregn", lifepath: "Livssti", master: "Mestertal", debt: "Karmisk g\u00e6ld (dag)", day: "Dag", month: "M\u00e5ned", year: "\u00c5r", total: "Total", settings: "Indstillinger", language: "Sprog", theme: "Elementtema", close: "Luk", earth: "Jord", spirit: "\u00c5nd", metal: "Metal", air: "Luft", water: "Vand", fire: "Ild" },
  fi: { title: "El\u00e4m\u00e4npolkulaskuri", label: "Syntym\u00e4p\u00e4iv\u00e4", placeholder: "pp/kk/vvvv", action: "Laske", lifepath: "El\u00e4m\u00e4npolku", master: "Mestarinumero", debt: "Karminen velka (p\u00e4iv\u00e4)", day: "P\u00e4iv\u00e4", month: "Kuukausi", year: "Vuosi", total: "Yhteens\u00e4", settings: "Asetukset", language: "Kieli", theme: "Elementtiteema", close: "Sulje", earth: "Maa", spirit: "Henki", metal: "Metalli", air: "Ilma", water: "Vesi", fire: "Tuli" },
  hu: { title: "\u00c9letp\u00e1lya-sz\u00e1mol\u00f3", label: "Sz\u00fclet\u00e9si d\u00e1tum", placeholder: "nn/hh/\u00e9\u00e9\u00e9\u00e9", action: "Sz\u00e1mol", lifepath: "\u00c9letp\u00e1lya", master: "Mestersz\u00e1m", debt: "Karmikus ad\u00f3ss\u00e1g (nap)", day: "Nap", month: "H\u00f3nap", year: "\u00c9v", total: "\u00d6sszes", settings: "Be\u00e1ll\u00edt\u00e1sok", language: "Nyelv", theme: "Elem t\u00e9ma", close: "Bez\u00e1r\u00e1s", earth: "F\u00f6ld", spirit: "Szellem", metal: "F\u00e9m", air: "Lev\u00e9g\u0151", water: "V\u00edz", fire: "T\u0171z" },
  ca: { title: "Calculadora del cam\u00ed de vida", label: "Data de naixement", placeholder: "dd/mm/aaaa", action: "Calcula", lifepath: "Cam\u00ed de vida", master: "Nombre mestre", debt: "Deute k\u00e0rmic (dia)", day: "Dia", month: "Mes", year: "Any", total: "Total", settings: "Configuraci\u00f3", language: "Idioma", theme: "Tema element", close: "Tanca", earth: "Terra", spirit: "Esperit", metal: "Metall", air: "Aire", water: "Aigua", fire: "Foc" },
  hr: { title: "Kalkulator \u017eivotnog puta", label: "Datum ro\u0111enja", placeholder: "dd/mm/gggg", action: "Izra\u010dunaj", lifepath: "\u017divotni put", master: "Glavni broj", debt: "Karmi\u010dki dug (dan)", day: "Dan", month: "Mjesec", year: "Godina", total: "Ukupno", settings: "Postavke", language: "Jezik", theme: "Tema elementa", close: "Zatvori", earth: "Zemlja", spirit: "Duh", metal: "Metal", air: "Zrak", water: "Voda", fire: "Vatra" },
  af: { title: "Lewenspad-sakrekenaar", label: "Geboortedatum", placeholder: "dd/mm/jjjj", action: "Bereken", lifepath: "Lewenspad", master: "Meesternommer", debt: "Karmiese skuld (dag)", day: "Dag", month: "Maand", year: "Jaar", total: "Totaal", settings: "Instellings", language: "Taal", theme: "Element tema", close: "Sluit", earth: "Aarde", spirit: "Gees", metal: "Metaal", air: "Lug", water: "Water", fire: "Vuur" },
  zu: { title: "Isibali sendlela yokuphila", label: "Usuku lokuzalwa", placeholder: "nn/yy/uuuu", action: "Bala", lifepath: "Indlela yokuphila", master: "Inombolo enkulu", debt: "Isikweletu se-karma (usuku)", day: "Usuku", month: "Inyanga", year: "Unyaka", total: "Isamba", settings: "Izilungiselelo", language: "Ulimi", theme: "Indikimba ye-element", close: "Vala", earth: "Umhlaba", spirit: "Umoya", metal: "Insimbi", air: "Umoya", water: "Amanzi", fire: "Umlilo" },
  xh: { title: "Isibali sendlela yobomi", label: "Umhla wokuzalwa", placeholder: "mm/nn/uuuu", action: "Bala", lifepath: "Indlela yobomi", master: "Inani elikhulu", debt: "Ityala le-karma (usuku)", day: "Usuku", month: "Inyanga", year: "Unyaka", total: "Iyonke", settings: "Izicwangciso", language: "Ulwimi", theme: "Umxholo wesiqalelo", close: "Vala", earth: "Umhlaba", spirit: "Umoya", metal: "Isinyithi", air: "Umoya", water: "Amanzi", fire: "Umlilo" },
  ha: { title: "Na'urar hanyar rayuwa", label: "Ranar haihuwa", placeholder: "rr/ww/ssss", action: "Lissafa", lifepath: "Hanyar rayuwa", master: "Lambar jagora", debt: "Bashin karma (rana)", day: "Rana", month: "Wata", year: "Shekara", total: "Jimilla", settings: "Saiti", language: "Harshe", theme: "Jigon abu", close: "Rufe", earth: "\u01b3asa", spirit: "Ruhi", metal: "\u01b3arfe", air: "Iska", water: "Ruwa", fire: "Wuta" },
  am: { title: "የሕይወት መስመር ቆጣሪ", label: "የትውልድ ቀን", placeholder: "ቀቀ/ወወ/ዓዓዓዓ", action: "አስላ", lifepath: "የሕይወት መስመር", master: "የማስተር ቁጥር", debt: "የካርማ እዳ (ቀን)", day: "ቀን", month: "ወር", year: "ዓመት", total: "ድምር", settings: "ቅንብሮች", language: "቉ን቉", theme: "የንጥረ ነገር ገጽታ", close: "ዝጋ", earth: "ምድር", spirit: "መንፍስ", metal: "ብረት", air: "አየር", water: "ውሃ", fire: "እሳት" },
  ig: { title: "Ngwa ịgụ ụzọ ndụ", label: "Ụbọchị ọmụmụ", placeholder: "dd/mm/yyyy", action: "Gbakọọ", lifepath: "Ụzọ ndụ", master: "Nọmba ukwu", debt: "Ụgbọ karma (ụbọchị)", day: "Ụbọchị", month: "Ọnwa", year: "Afọ", total: "Niile", settings: "Ntọhapụta", language: "Asụsụ", theme: "Isiori", close: "Mechie", earth: "Ala", spirit: "Mmụọ", metal: "Igwe", air: "Ikuku", water: "Mmiri", fire: "Ọkụ" },
};

/* Auto-generate legend translations from existing i18n keys */
const _legendTitles = {
  fr: "L\u00e9gende", en: "Legend", ht: "Lejann", es: "Leyenda", pt: "Legenda",
  de: "Legende", it: "Legenda", nl: "Legenda",
  ru: "\u041b\u0435\u0433\u0435\u043d\u0434\u0430", ar: "\u0645\u0641\u062a\u0627\u062d",
  zh: "\u56fe\u4f8b", ja: "\u51e1\u4f8b", ko: "\ubc94\ub840",
  hi: "\u0938\u0942\u091a\u0915", sw: "Ufunguo", wo: "L\u00e9j\u00e0nd",
  yo: "\u00c0l\u00e0y\u00e9", pl: "Legenda", tr: "G\u00f6sterge", vi: "Ch\u00fa gi\u1ea3i",
  th: "\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22", uk: "\u041b\u0435\u0433\u0435\u043d\u0434\u0430",
  ro: "Legend\u0103", cs: "Legenda",
  el: "\u03a5\u03c0\u03cc\u03bc\u03bd\u03b7\u03bc\u03b1", he: "\u05de\u05e7\u05e8\u05d0",
  id: "Keterangan", ms: "Petunjuk",
  fa: "\u0631\u0627\u0647\u0646\u0645\u0627", bn: "\u09b8\u09c2\u099a\u0995",
  sv: "Teckenf\u00f6rklaring", da: "Forklaring", fi: "Selite",
  hu: "Jelmagy\u00e1r\u00e1zat", ca: "Llegenda", hr: "Legenda", af: "Sleutel",
  zu: "Isikhombisi", xh: "Isikhokelo", ha: "Bayani",
  am: "\u1218\u130d\u1208\u132b", ig: "Nk\u1ecdwa"
};
for (const lang in i18n) {
  const lg = _legendTitles[lang] || "Legend";
  if (!i18n[lang].legend) i18n[lang].legend = lg;
  if (!i18n[lang].legendMaster) i18n[lang].legendMaster = "11, 22, 33 \u2014 " + i18n[lang].master;
  if (!i18n[lang].legendDebt) i18n[lang].legendDebt = "13, 14, 16, 19 \u2014 " + i18n[lang].debt;
  if (!i18n[lang].legendLifepath) i18n[lang].legendLifepath = "1\u20139 \u2014 " + i18n[lang].lifepath;
}

let currentLang = localStorage.getItem("lifepath-lang") || "fr";
let currentTheme = localStorage.getItem("lifepath-theme") || "earth";

const t = (key) => (i18n[currentLang] && i18n[currentLang][key]) || i18n.en[key] || i18n.fr[key] || key;

/* ===== DOM ===== */
const form = document.getElementById("lifepath-form");
const birthdateInput = document.getElementById("birthdate");
const result = document.getElementById("result");
const masterResult = document.getElementById("master-result");
const detailBox = document.getElementById("detail");
const debtOutput = document.getElementById("debt");
const legendBox = document.getElementById("legend");

const karmicDebtNumbers = new Set([13, 14, 16, 19]);
const masterNumbers = new Set([11, 22, 33]);

const isFinalValue = (value) => value <= 9 || masterNumbers.has(value);

const clearResult = () => {
  result.textContent = "";
  detailBox.innerHTML = "";
  debtOutput.textContent = "";
  debtOutput.hidden = true;
  masterResult.textContent = "";
  masterResult.hidden = true;
  result.classList.remove("result--debt");
  result.classList.remove("result--master");
  legendBox.hidden = true;
};

const sumDigits = (value) => {
  let total = 0;
  for (const char of String(value)) {
    total += Number(char);
  }
  return total;
};

const reduceToSingleDigit = (value) => {
  let reduced = value;
  while (!isFinalValue(reduced)) {
    reduced = sumDigits(reduced);
  }
  return reduced;
};

const wrapSpecial = (num) => {
  const n = typeof num === "number" ? num : parseInt(num, 10);
  if (masterNumbers.has(n)) return `<span class="step-master">${n}</span>`;
  if (karmicDebtNumbers.has(n)) return `<span class="step-debt">${n}</span>`;
  return String(n);
};

const reduceWithSteps = (numStr) => {
  const value = parseInt(numStr, 10);
  /* Preserve master numbers at component level */
  if (masterNumbers.has(value)) {
    return { result: value, detail: `<span class="step-master">${value}</span> \u2728`, isMaster: true };
  }
  if (karmicDebtNumbers.has(value)) {
    const reduced = sumDigits(value);
    return { result: reduced, detail: `<span class="step-debt">${value}</span> \u2192 ${String(value).split("").join(" + ")} = ${reduced}`, isMaster: false, hasDebt: true, debtValue: value };
  }
  const digits = String(numStr);
  const parts = digits.split("");
  let total = sumDigits(digits);
  let line = `${parts.join(" + ")} = ${wrapSpecial(total)}`;
  while (!isFinalValue(total)) {
    const nextParts = String(total).split("");
    total = sumDigits(total);
    line += ` \u2192 ${nextParts.join(" + ")} = ${wrapSpecial(total)}`;
  }
  return { result: total, detail: line, isMaster: masterNumbers.has(total) };
};

const getKarmicDebtFromDay = (dateString) => {
  const day = parseInt(dateString.substring(0, 2), 10);
  return karmicDebtNumbers.has(day) ? day : null;
};

const calculateLifepath = (dateString) => {
  const digits = dateString.replace(/\D/g, "");
  if (!digits || digits.length !== 8) {
    return { value: "", details: [], debt: null, isMaster: false };
  }
  const dd = digits.substring(0, 2);
  const mm = digits.substring(2, 4);
  const yyyy = digits.substring(4, 8);

  const day = reduceWithSteps(dd);
  const month = reduceWithSteps(mm);
  const year = reduceWithSteps(yyyy);

  const totalSum = day.result + month.result + year.result;
  const final = reduceWithSteps(String(totalSum));

  const details = [
    { label: "Jour", raw: dd, detail: day.detail, result: day.result, isMaster: day.isMaster, hasDebt: day.hasDebt },
    { label: "Mois", raw: mm, detail: month.detail, result: month.result, isMaster: month.isMaster, hasDebt: month.hasDebt },
    { label: "Ann\u00e9e", raw: yyyy, detail: year.detail, result: year.result, isMaster: year.isMaster, hasDebt: year.hasDebt },
    {
      label: "Total",
      raw: null,
      detail: `${wrapSpecial(day.result)} + ${wrapSpecial(month.result)} + ${wrapSpecial(year.result)} = ${wrapSpecial(totalSum)}${totalSum !== final.result ? " \u2192 " + final.detail.split(" = ").slice(1).join(" = ") : ""}`,
      result: final.result,
      isMaster: final.isMaster,
    },
  ];

  const isMaster = masterNumbers.has(final.result);
  const debt = getKarmicDebtFromDay(dateString);
  return { value: final.result, details, debt, isMaster };
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const dateValue = birthdateInput.value;
  if (!dateValue) {
    clearResult();
    return;
  }
  const lifepath = calculateLifepath(dateValue);
  detailBox.innerHTML = "";
  const labelKeys = ["day", "month", "year", "total"];
  lifepath.details.forEach((step, idx) => {
    const row = document.createElement("div");
    row.className = "detail-row";
    if (step.isMaster) row.classList.add("detail-row--master");
    const lbl = document.createElement("span");
    lbl.className = "detail-label";
    lbl.textContent = t(labelKeys[idx]);
    const val = document.createElement("span");
    val.className = "detail-value";
    val.innerHTML = step.detail;
    row.appendChild(lbl);
    row.appendChild(val);
    if (step.hasDebt) row.classList.add("detail-row--debt");
    if (idx === 3) row.classList.add("detail-row--total");
    detailBox.appendChild(row);
  });
  /* Always show life path */
  result.textContent = lifepath.value ? `${t("lifepath")} : ${lifepath.value}` : "";

  /* Apply master styling to main result too */
  if (lifepath.isMaster) {
    result.classList.add("result--master");
  } else {
    result.classList.remove("result--master");
  }

  /* Show master number as separate highlighted result */
  if (lifepath.isMaster) {
    masterResult.textContent = `\u2728 ${t("master")} : ${lifepath.value} \u2728`;
    masterResult.hidden = false;
  } else {
    masterResult.textContent = "";
    masterResult.hidden = true;
  }

  /* Show karmic debt as separate highlighted result */
  if (lifepath.debt) {
    result.classList.add("result--debt");
    debtOutput.textContent = `${t("debt")} : ${lifepath.debt}/${reduceToSingleDigit(lifepath.debt)}`;
    debtOutput.hidden = false;
  } else {
    result.classList.remove("result--debt");
    debtOutput.textContent = "";
    debtOutput.hidden = true;
  }

  /* Show legend */
  legendBox.hidden = false;
});

birthdateInput.addEventListener("input", (e) => {
  const cursorPos = e.target.selectionStart;
  const oldVal = e.target.value;
  let digits = oldVal.replace(/\D/g, "");
  if (digits.length > 8) digits = digits.substring(0, 8);
  let formatted = "";
  for (let i = 0; i < digits.length; i++) {
    if (i === 2 || i === 4) formatted += "/";
    formatted += digits[i];
  }
  e.target.value = formatted;
  /* Restore cursor: advance past auto-inserted slash */
  let newPos = cursorPos;
  if (formatted.length > oldVal.length) {
    newPos = cursorPos + (formatted.length - oldVal.length);
  }
  e.target.setSelectionRange(newPos, newPos);
  clearResult();
});

birthdateInput.addEventListener("keydown", (e) => {
  /* Allow backspace to delete a slash naturally */
  if (e.key === "Backspace") {
    const pos = e.target.selectionStart;
    if (pos > 0 && e.target.value[pos - 1] === "/") {
      e.preventDefault();
      const v = e.target.value;
      e.target.value = v.substring(0, pos - 2) + v.substring(pos);
      e.target.setSelectionRange(pos - 2, pos - 2);
      e.target.dispatchEvent(new Event("input"));
    }
  }
});

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    clearResult();
  }
});

window.addEventListener("beforeunload", () => {
  clearResult();
});

clearResult();

/* ===== SETTINGS PANEL ===== */
const settingsToggle = document.getElementById("settings-toggle");
const settingsPanel = document.getElementById("settings-panel");
const settingsOverlay = document.getElementById("settings-overlay");
const settingsClose = document.getElementById("settings-close");

const openSettings = () => {
  settingsPanel.classList.add("open");
  settingsOverlay.classList.add("open");
};

const closeSettingsPanel = () => {
  settingsPanel.classList.remove("open");
  settingsOverlay.classList.remove("open");
};

settingsToggle.addEventListener("click", openSettings);
settingsOverlay.addEventListener("click", closeSettingsPanel);
settingsClose.addEventListener("click", closeSettingsPanel);

/* ===== THEME SWITCHING ===== */
const applyTheme = (theme) => {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("lifepath-theme", theme);
  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.theme === theme);
  });
};

document.querySelectorAll(".theme-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyTheme(btn.dataset.theme));
});

/* ===== LANGUAGE SWITCHING ===== */
const applyLang = (lang) => {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("lifepath-lang", lang);

  document.getElementById("title").textContent = t("title");
  document.querySelector(".label").textContent = t("label");
  birthdateInput.placeholder = t("placeholder");
  document.querySelector(".action").textContent = t("action");

  document.querySelector("[data-i18n='settings']").textContent = t("settings");
  document.querySelector("[data-i18n='language']").textContent = t("language");
  document.querySelector("[data-i18n='theme']").textContent = t("theme");
  document.querySelector("[data-i18n='close']").textContent = t("close");

  /* Legend */
  const legendEl = document.querySelector("[data-i18n='legend']");
  if (legendEl) legendEl.textContent = t("legend");
  const legendMasterEl = document.querySelector("[data-i18n='legendMaster']");
  if (legendMasterEl) legendMasterEl.textContent = t("legendMaster");
  const legendDebtEl = document.querySelector("[data-i18n='legendDebt']");
  if (legendDebtEl) legendDebtEl.textContent = t("legendDebt");
  const legendLifepathEl = document.querySelector("[data-i18n='legendLifepath']");
  if (legendLifepathEl) legendLifepathEl.textContent = t("legendLifepath");

  document.querySelectorAll(".theme-btn").forEach((btn) => {
    const key = btn.dataset.theme;
    const icon = btn.querySelector(".theme-icon");
    const iconHTML = icon ? icon.outerHTML : "";
    btn.innerHTML = iconHTML + t(key);
  });

  const langSelect = document.getElementById("lang-select");
  if (langSelect) langSelect.value = lang;

  clearResult();
};

document.getElementById("lang-select").addEventListener("change", (e) => {
  applyLang(e.target.value);
});

/* ===== INIT PREFERENCES ===== */
applyTheme(currentTheme);
applyLang(currentLang);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js");
  });
}
