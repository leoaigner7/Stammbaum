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
    ta_sophie: "Traueranzeige Sophie Geier geb. Angermaier, idowa, Jan. 2024 (quellen/traueranzeige_sophie_geier_2024.png)",
    pb_pilsting: "Pfarrbriefe Pfarreiengemeinschaft Pilsting-Wallersdorf 2024–2026, Messintentionen (pilsting-wallersdorf.de/pfarrbrief-archiv)"
  },
  personen: [
    // Generation 1 – ich und Geschwister
    { id: "leo",    name: "Leo Aigner",    geschlecht: "m", geburt: "24.03.2004", geburtsort: "Landau an der Isar", vater: "helmut", mutter: "birgit", quelle: "eigene Angabe; ta_josef" },
    { id: "eva",    name: "Eva Aigner",    geschlecht: "w", geburt: "25.01.2001", vater: "helmut", mutter: "birgit", quelle: "eigene Angabe; ta_josef" },

    // Generation 2 – Eltern, Onkel, Tanten
    { id: "helmut", name: "Helmut Aigner", geschlecht: "m", geburt: "15.12.1968", vater: "josef", mutter: "ida", partner: "birgit", quelle: "eigene Angabe; ta_josef" },
    { id: "birgit", name: "Birgit Aigner geb. Bentele", geschlecht: "w", geburt: "30.04.1968", partner: "helmut", vater: "josef_bentele", quelle: "eigene Angabe; ta_josef" },
    { id: "josef_jun", name: "Josef Aigner (jun.)", geschlecht: "m", vater: "josef", mutter: "ida", partner: "ulrike", notiz: "Onkel, Bruder von Helmut", quelle: "ta_josef" },
    { id: "ulrike", name: "Ulrike Aigner", geschlecht: "w", partner: "josef_jun", notiz: "Ehefrau von Onkel Josef; Geburtsname unbekannt", quelle: "ta_josef" },

    // Cousin/Cousine – Kinder von Josef jun. & Ulrike (bestätigt)
    { id: "tobias", name: "Tobias Aigner", geschlecht: "m", vater: "josef_jun", mutter: "ulrike", notiz: "Cousin von Leo", quelle: "ta_josef" },
    { id: "ines",   name: "Ines Aigner",   geschlecht: "w", vater: "josef_jun", mutter: "ulrike", notiz: "Cousine von Leo", quelle: "ta_josef" },

    // Generation 3 – Großeltern und deren Geschwister
    { id: "josef_bentele", name: "Josef Bentele", geschlecht: "m", tod: "ca. 2004/05", notiz: "Vater von Mama Birgit (bestätigt)", quelle: "pb_pilsting; eigene Angabe" },
    { id: "josef",  name: "Josef Aigner",  geschlecht: "m", geburt: "22.12.1935", tod: "13.10.2019", todesort: "Oberndorf (Markt Pilsting)", wohnort: "Oberndorf, Pilsting", partner: "ida", notiz: "Beerdigt 18.10.2019, Pfarrkirche Pilsting", quelle: "eigene Angabe; ta_josef" },
    { id: "ida",    name: "Ida Aigner geb. Angermaier",    geschlecht: "w", geburt: "Anfang/Mitte Mai (Jahr ?)", tod: "Ende August, evtl. 2007", wohnort: "Pilsting", partner: "josef", geburtsort: "vermutl. Pilsting", notiz: "Daten abgeleitet aus Gedenkmessen (Geburtstag ~9./10. Mai, Sterbetag ~22.–25. Aug.); Geburtsname Angermaier abgeleitet aus Traueranzeige ihrer Schwester Sophie", quelle: "eigene Angabe; ta_sophie; pb_pilsting; ta_josef (dort nicht mehr genannt)" },

    { id: "anna_wimmer", name: "Anna Wimmer geb. Aigner", geschlecht: "w", geschwister_von: "josef", partner: "konrad_wimmer", notiz: "Schwester von Opa Josef", quelle: "ta_josef" },
    { id: "konrad_wimmer", name: "Konrad Wimmer", geschlecht: "m", partner: "anna_wimmer", notiz: "Ehemann von Anna", quelle: "ta_josef" },
    { id: "hans_aigner", name: "Hans Aigner", geschlecht: "m", geschwister_von: "josef", partner: "irene_aigner", notiz: "Bruder von Opa Josef", quelle: "ta_josef" },
    { id: "irene_aigner", name: "Irene Aigner", geschlecht: "w", partner: "hans_aigner", notiz: "Ehefrau von Hans", quelle: "ta_josef" },

    { id: "sofie",  name: "Sophie Geier geb. Angermaier", geschlecht: "w", geburt: "01.12.1932", tod: "20.01.2024", wohnort: "Pilsting", geschwister_von: "ida", partner: "helmut_geier", notiz: "Schwester von Oma Ida; Urnenbestattung Pilsting 26.01.2024", quelle: "ta_sophie; ta_josef (\"Sofie Geier, Schwägerin mit Helmut\")" },
    { id: "helmut_geier", name: "Helmut Geier", geschlecht: "m", partner: "sofie", notiz: "Ehemann von Sofie", quelle: "ta_josef" }
,

    // Zuordnung noch offen
    { id: "rosa_zellner", name: "Rosa Zellner", geschlecht: "w", wohnort: "Pfarrkirchen", partner: "josef_zellner", offen: "Tante von Papa Helmut (bestätigt) – Schwester von Ida oder von Josef?", notiz: "Geburtstag ~Mitte Oktober, Sterbetag ~Ende August", quelle: "pb_pilsting" },
    { id: "josef_zellner", name: "Josef Zellner", geschlecht: "m", partner: "rosa_zellner", offen: "Onkel von Papa Helmut (vermutl. Ehemann von Rosa)", notiz: "Sterbetag ~um den 19.–22. März, Geburtstag ~Mitte Juli", quelle: "pb_pilsting" },
  ]
};
