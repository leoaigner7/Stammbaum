// Stammbaum-Daten der Familie Aigner
// Jede Person: id, name, geburt, geburtsort, tod, todesort, vater, mutter, notiz, quelle
// "vater"/"mutter" verweisen auf die id einer anderen Person.
// Unbekannte Angaben einfach leer lassen ("").
window.FAMILIE = {
  start: "leo",
  personen: [
    { id: "leo",    name: "Leo Aigner",    geschlecht: "m", geburt: "24.03.2004", geburtsort: "Landau an der Isar", vater: "helmut", mutter: "birgit", quelle: "eigene Angabe" },
    { id: "eva",    name: "Eva Aigner",    geschlecht: "w", geburt: "25.01.2001", geburtsort: "", vater: "helmut", mutter: "birgit", notiz: "Schwester von Leo", quelle: "eigene Angabe" },
    { id: "helmut", name: "Helmut Aigner", geschlecht: "m", geburt: "", geburtsort: "", vater: "josef", mutter: "ida", quelle: "eigene Angabe" },
    { id: "birgit", name: "Birgit Aigner geb. Bentele", geschlecht: "w", geburt: "", geburtsort: "", notiz: "geb. Bentele", vater: "", mutter: "", quelle: "eigene Angabe" }
    { id: "josef",  name: "Josef Aigner",  geschlecht: "m", geburt: "", geburtsort: "", tod: "verstorben", wohnort: "Pilsting", notiz: "lebte in Pilsting", vater: "", mutter: "", quelle: "eigene Angabe" },
    { id: "ida",    name: "Ida Aigner",    geschlecht: "w", geburt: "", geburtsort: "", tod: "verstorben", wohnort: "Pilsting", notiz: "lebte in Pilsting; Geburtsname unbekannt", vater: "", mutter: "", quelle: "eigene Angabe" }
  ]
};
