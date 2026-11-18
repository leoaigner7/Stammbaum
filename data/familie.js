// Stammbaum-Daten der Familie Aigner
// Felder je Person:
//   id, name, geschlecht (m/w), geburt, geburtsort, tod, todesort, wohnort, notiz, quelle
//   vater / mutter   -> id der Eltern (wenn bekannt)
//   partner          -> id des Ehepartners
//   geschwister_von  -> id eines Geschwisters (wenn die Eltern noch unbekannt sind)
// Unbekannte Angaben einfach leer lassen ("").
window.FAMILIE = {
  start: "leo",
  quellen: {
    ta_josef: "Traueranzeige Josef Aigner, idowa / Landauer Zeitung, Okt. 2019 (quellen/traueranzeige_josef_aigner_2019.png)",
    pb_pilsting: "Pfarrbrief Pilsting-Wallersdorf (Messintention Fam. Helmut Aigner für † Mutter u. Oma Ida Aigner)"
  },
  personen: [
    // Generation 1 – ich und Geschwister
    { id: "leo",    name: "Leo Aigner",    geschlecht: "m", geburt: "24.03.2004", geburtsort: "Landau an der Isar", vater: "helmut", mutter: "birgit", quelle: "eigene Angabe; ta_josef" },
    { id: "eva",    name: "Eva Aigner",    geschlecht: "w", geburt: "25.01.2001", vater: "helmut", mutter: "birgit", quelle: "eigene Angabe; ta_josef" },

    // Generation 2 – Eltern, Onkel, Tanten
    { id: "helmut", name: "Helmut Aigner", geschlecht: "m", geburt: "15.12.1968", vater: "josef", mutter: "ida", partner: "birgit", quelle: "eigene Angabe; ta_josef" },
    { id: "birgit", name: "Birgit Aigner geb. Bentele", geschlecht: "w", geburt: "30.04.1968", partner: "helmut", quelle: "eigene Angabe; ta_josef" },
    { id: "josef_jun", name: "Josef Aigner (jun.)", geschlecht: "m", vater: "josef", mutter: "ida", partner: "ulrike", notiz: "Onkel, Bruder von Helmut", quelle: "ta_josef" },
    { id: "ulrike", name: "Ulrike Aigner", geschlecht: "w", partner: "josef_jun", notiz: "Ehefrau von Onkel Josef; Geburtsname unbekannt", quelle: "ta_josef" },

    // Cousin/Cousine – Kinder von Josef jun. & Ulrike (bestätigt)
    { id: "tobias", name: "Tobias Aigner", geschlecht: "m", vater: "josef_jun", mutter: "ulrike", notiz: "Cousin von Leo", quelle: "ta_josef" },
    { id: "ines",   name: "Ines Aigner",   geschlecht: "w", vater: "josef_jun", mutter: "ulrike", notiz: "Cousine von Leo", quelle: "ta_josef" },

    // Generation 3 – Großeltern und deren Geschwister
    { id: "josef",  name: "Josef Aigner",  geschlecht: "m", geburt: "22.12.1935", tod: "13.10.2019", todesort: "Oberndorf (Markt Pilsting)", wohnort: "Oberndorf, Pilsting", partner: "ida", notiz: "Beerdigt 18.10.2019, Pfarrkirche Pilsting", quelle: "eigene Angabe; ta_josef" },
    { id: "ida",    name: "Ida Aigner",    geschlecht: "w", tod: "vor 2019, evtl. 2007", wohnort: "Pilsting", partner: "josef", notiz: "Geburtsname unbekannt (nicht Geier – das ist der Ehename ihrer Schwester)", quelle: "eigene Angabe; pb_pilsting; ta_josef (dort nicht mehr genannt)" },

    { id: "anna_wimmer", name: "Anna Wimmer geb. Aigner", geschlecht: "w", geschwister_von: "josef", partner: "konrad_wimmer", notiz: "Schwester von Opa Josef", quelle: "ta_josef" },
    { id: "konrad_wimmer", name: "Konrad Wimmer", geschlecht: "m", partner: "anna_wimmer", notiz: "Ehemann von Anna", quelle: "ta_josef" },
    { id: "hans_aigner", name: "Hans Aigner", geschlecht: "m", geschwister_von: "josef", partner: "irene_aigner", notiz: "Bruder von Opa Josef", quelle: "ta_josef" },
    { id: "irene_aigner", name: "Irene Aigner", geschlecht: "w", partner: "hans_aigner", notiz: "Ehefrau von Hans", quelle: "ta_josef" },

    { id: "sofie",  name: "Sofie Geier",   geschlecht: "w", geschwister_von: "ida", partner: "helmut_geier", tod: "nach 2022", notiz: "Schwester von Oma Ida; verstorben; Geier = Ehename", quelle: "eigene Angabe; ta_josef (\"Schwägerin mit Helmut\")" },
    { id: "helmut_geier", name: "Helmut Geier", geschlecht: "m", partner: "sofie", notiz: "Ehemann von Sofie", quelle: "ta_josef" }
  ]
};
