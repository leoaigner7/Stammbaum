// Stammbaum-Daten der Familie Aigner
// Jede Person: id, name, geburt, geburtsort, tod, todesort, wohnort, vater, mutter, notiz, quelle
// "vater"/"mutter" verweisen auf die id einer anderen Person.
// Unbekannte Angaben einfach leer lassen ("").
window.FAMILIE = {
  start: "leo",
  personen: [
    { id: "leo",    name: "Leo Aigner",    geschlecht: "m", geburt: "24.03.2004", geburtsort: "Landau an der Isar", vater: "helmut", mutter: "birgit", quelle: "eigene Angabe" },
    { id: "eva",    name: "Eva Aigner",    geschlecht: "w", geburt: "25.01.2001", geburtsort: "", vater: "helmut", mutter: "birgit", notiz: "Schwester von Leo", quelle: "eigene Angabe" },
    { id: "helmut", name: "Helmut Aigner", geschlecht: "m", geburt: "15.12.1968", geburtsort: "", vater: "josef", mutter: "ida", quelle: "eigene Angabe" },
    { id: "birgit", name: "Birgit Aigner geb. Bentele", geschlecht: "w", geburt: "30.04.1968", geburtsort: "", notiz: "geb. Bentele", vater: "", mutter: "", quelle: "eigene Angabe" },
    { id: "josef",  name: "Josef Aigner",  geschlecht: "m", geburt: "22.12.1935", geburtsort: "", tod: "13.10.2019", todesort: "Oberndorf (Markt Pilsting)", wohnort: "Pilsting", vater: "", mutter: "", quelle: "eigene Angabe" },
    { id: "ida",    name: "Ida Aigner",    geschlecht: "w", geburt: "", geburtsort: "", tod: "verstorben", wohnort: "Pilsting", notiz: "Schwester: Sophie Geier", vater: "", mutter: "", quelle: "eigene Angabe" },
    { id: "sophie", name: "Sophie Geier",  geschlecht: "w", geburt: "", geburtsort: "", notiz: "Schwester von Oma Ida (lebt); unklar ob Geier Geburts- oder Ehename", vater: "", mutter: "", quelle: "eigene Angabe" }
  ]
};
