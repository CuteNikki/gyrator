export interface Subtopic {
  id: string;
  title: string;
  materials?: string[];
}

export interface Topic {
  id: string;
  title: string;
  materials?: string[];
  subtopics?: Subtopic[];
}

export interface Category {
  id: string;
  name: string;
  topics: Topic[];
}

export const learningData: Category[] = [
  {
    id: 'B',
    name: 'Betriebssysteme',
    topics: [
      {
        id: 'B.0',
        title: 'Betriebssysteme',
        subtopics: [{ id: 'B.0.0', title: 'Inhalt', materials: ['Lerntext'] }],
      },
      {
        id: 'B.1',
        title: 'Anwendung',
        subtopics: [
          {
            id: 'B.1.1',
            title: 'Einführung',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Übungen'],
          },
          { id: 'B.1.2', title: 'Oberflächen', materials: ['Folie'] },
          {
            id: 'B.1.3',
            title: 'Befehle und Dateisystem',
            materials: ['Lerntext', 'Arbeitsblatt', 'Übungen'],
          },
          {
            id: 'B.1.4',
            title: 'E-A-Umleitung und Befehlsverkettung',
            materials: ['Lerntext', 'Arbeitsblatt', 'Übungen'],
          },
          {
            id: 'B.1.5',
            title: 'Umgebungsvariablen',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Übungen'],
          },
          {
            id: 'B.1.6',
            title: 'Wildcards',
            materials: ['Lerntext', 'Arbeitsblatt', 'Übungen'],
          },
        ],
      },
      {
        id: 'B.2',
        title: 'Installation und Konfiguration',
        subtopics: [
          { id: 'B.2.1', title: 'Bootvorgang', materials: ['Arbeitsblatt'] },
          { id: 'B.2.2', title: 'Partitionen und Formate' },
          {
            id: 'B.2.3',
            title: 'Installation (mit VirtualBox)',
            materials: ['Folie'],
          },
          { id: 'B.2.4', title: 'Konfiguration' },
        ],
      },
    ],
  },
  {
    id: 'C',
    name: 'Programmieren in C',
    topics: [
      {
        id: 'C.0',
        title: 'Programmieren in C',
        subtopics: [
          { id: 'C.0.0', title: 'Inhalt', materials: ['Lerntext'] },
          { id: 'C.0.1', title: 'Literatur', materials: ['Lerntext'] },
          { id: 'C.0.2', title: 'Links', materials: ['Lerntext'] },
          {
            id: 'C.0.3',
            title: 'Werkzeuge',
            materials: ['Lerntext', 'Software'],
          },
          { id: 'C.0.4', title: 'Übersicht', materials: ['Lerntext'] },
        ],
      },
      {
        id: 'C.1',
        title: 'Programmstrukturen',
        subtopics: [
          {
            id: 'C.1.1',
            title: 'Unser erstes C-Programm',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Versuch',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.1.2',
            title: 'Berechnungen und Ausgabe',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.1.3',
            title: 'Variablen und Datentypen',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.1.4',
            title: 'Eingabe',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'C.1.5',
            title: 'Verzweigung',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.1.6',
            title: 'Abweisende Schleife',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.1.7',
            title: 'Zählschleife',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'C.1.8',
            title: 'Fußgesteuerte Schleife',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.1.9',
            title: 'Mehrfachauswahl',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
        ],
      },
      {
        id: 'C.2',
        title: 'Funktionen',
        subtopics: [
          {
            id: 'C.2.1',
            title: 'Top-Down-Methode',
            materials: ['Lerntext', 'Übungen'],
          },
          {
            id: 'C.2.2',
            title: 'Funktionen benutzen',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Software'],
          },
          {
            id: 'C.2.3',
            title: 'Funktionen erstellen',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.2.4',
            title: 'Sichtbarkeit und Lebensdauer',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'C.2.5',
            title: 'Parameter',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Versuch',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.2.6',
            title: 'Rückgabewert',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'C.2.7',
            title: 'Rekursive Aufrufe',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'C.2.8',
            title: 'Dokumentation',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Versuch',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.2.9',
            title: 'Funktionen testen',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
        ],
      },
      {
        id: 'C.3',
        title: 'C-Datentypen',
        subtopics: [
          {
            id: 'C.3.1',
            title: 'Datentyp char',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.3.2',
            title: 'Ganze Zahlen und Bit-Bearbeitung',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Software'],
          },
          {
            id: 'C.3.3',
            title: 'Gleitkommazahlen und Mathe-Lib',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'C.3.4',
            title: 'Komplexe Zahlen in C99',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'C.3.5',
            title: 'Unicode-Zeichen und Multibyte-Sequenzen',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'C.3.6',
            title: 'Typkonvertierung',
            materials: ['Lerntext', 'Software'],
          },
        ],
      },
      {
        id: 'C.4',
        title: 'Datenstrukturen',
        subtopics: [
          {
            id: 'C.4.1',
            title: 'Zeiger',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.4.2',
            title: 'Zeiger und Funktionen',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'C.4.3',
            title: 'Arrays',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Versuch',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.4.4',
            title: 'Strings',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Versuch',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.4.5',
            title: 'Mehrdimensionale Arrays',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'C.4.6',
            title: 'Zuweisung von Arrays an Zeiger',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.4.7',
            title: 'Rechnen mit Zeigern',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'C.4.8',
            title: 'Übergabe eines Arraynamens an eine Funktion',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.4.9',
            title: 'In-Place-Substitution',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.4.10',
            title: 'Konstante Zeichenketten',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'C.4.11',
            title: 'Rückgabe von Arrays durch Funktionen',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.4.12',
            title: 'String-Bibliothek',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
        ],
      },
      {
        id: 'C.5',
        title: 'Datenstrukturen II',
        subtopics: [
          {
            id: 'C.5.1',
            title: 'Records',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.5.2',
            title: 'Records und Funktionen',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'C.5.3',
            title: 'Arrays von Records',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Versuch',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.5.4',
            title: 'Unions',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'C.5.5',
            title: 'Aufzählungen',
            materials: ['Lerntext', 'Software'],
          },
          { id: 'C.5.6', title: 'Anonyme Records und Unions' },
          { id: 'C.5.7', title: 'Bitfelder' },
          {
            id: 'C.5.8',
            title: 'Datenstrukturen dokumentieren',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie'],
          },
        ],
      },
      {
        id: 'C.6',
        title: 'Extras',
        subtopics: [
          {
            id: 'C.6.1',
            title: 'Schreiben in Dateien',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.6.2',
            title: 'Lesen aus Dateien',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Versuch',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.6.3',
            title: 'Argumente für main()',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'C.6.4',
            title: 'Dynamische Speicherverwaltung',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.6.5',
            title: 'Funktionszeiger',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'C.6.6',
            title: 'Deklarationen verstehen',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.6.7',
            title: 'Typdefinitionen mit typedef',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Software'],
          },
          {
            id: 'C.6.8',
            title: 'Modularisierung in C',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Versuch',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.6.9',
            title: 'Präprozessor',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'C.6.10',
            title: 'Datum und Zeit in C',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'C.6.11',
            title: 'Umwandlungen zwischen Zahl und String',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Versuch',
              'Software',
              'Übungen',
            ],
          },
        ],
      },
      {
        id: 'C.7',
        title: 'Projekte',
        subtopics: [
          { id: 'C.7.0', title: 'Alle', materials: ['Versuch'] },
          {
            id: 'C.7.1',
            title: 'Artikelverwaltung',
            materials: ['Arbeitsblatt'],
          },
          {
            id: 'C.7.2',
            title: 'Prüfungstrainer',
            materials: ['Arbeitsblatt', 'Software'],
          },
          {
            id: 'C.7.3',
            title: 'Widerstandsrechner',
            materials: ['Arbeitsblatt'],
          },
          {
            id: 'C.7.4',
            title: 'Ausgleichsgerade',
            materials: ['Arbeitsblatt'],
          },
          { id: 'C.7.5', title: 'Webvoltmeter', materials: ['Arbeitsblatt'] },
          {
            id: 'C.7.6',
            title: 'Flächenberechnung',
            materials: ['Arbeitsblatt'],
          },
          {
            id: 'C.7.7',
            title: 'Drehencoder',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'C.7.8',
            title: 'Referenz-Lister',
            materials: ['Arbeitsblatt'],
          },
          {
            id: 'C.7.9',
            title: 'Logging-Modul',
            materials: ['Arbeitsblatt', 'Software'],
          },
          {
            id: 'C.7.10',
            title: 'chkdsk-Monitor',
            materials: ['Arbeitsblatt', 'Software'],
          },
          {
            id: 'C.7.11',
            title: 'DDS-Bibliothek',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'C.7.12',
            title: 'VFD-Bibliothek',
            materials: ['Lerntext', 'Arbeitsblatt'],
          },
          {
            id: 'C.7.13',
            title: 'Software-Oszilloskop',
            materials: ['Arbeitsblatt'],
          },
          {
            id: 'C.7.14',
            title: 'Drehencoder an USB',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Software'],
          },
        ],
      },
      {
        id: 'C.8',
        title: 'Sonstiges',
        subtopics: [
          {
            id: 'C.8.1',
            title: 'Variable Argumentlisten',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'C.8.2',
            title: 'Lokale und globale Sprünge',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Software'],
          },
          {
            id: 'C.8.3',
            title: 'Signalbehandlung',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'C.8.4',
            title: 'Alarm-Timer',
            materials: ['Lerntext', 'Software'],
          },
          {
            id: 'C.8.5',
            title: 'Reguläre Ausdrücke',
            materials: ['Lerntext', 'Software'],
          },
          { id: 'C.8.6', title: 'CGI', materials: ['Lerntext', 'Software'] },
          {
            id: 'C.8.7',
            title: 'Dateiformate',
            materials: ['Arbeitsblatt', 'Folie', 'Versuch', 'Software'],
          },
        ],
      },
      {
        id: 'C.9',
        title: 'GTK',
        subtopics: [
          {
            id: 'C.9.1',
            title: 'Einführung',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'C.9.2',
            title: 'Callback-Funktionen',
            materials: ['Lerntext', 'Software'],
          },
          {
            id: 'C.9.3',
            title: 'Etikett',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'C.9.4',
            title: 'Schaltfläche',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'C.9.5',
            title: 'Schachtel',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'C.9.6',
            title: 'Parameter an die Callback-Funktion übergeben',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'C.9.7',
            title: 'Eingabefelder',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'C.9.8',
            title: 'Weitere Widgets',
            materials: ['Folie', 'Versuch', 'Software'],
          },
          {
            id: 'C.9.9',
            title: 'Glade und GTK-Builder',
            materials: ['Lerntext', 'Software'],
          },
          {
            id: 'C.9.10',
            title: 'Zeichenfläche',
            materials: ['Lerntext', 'Software'],
          },
          {
            id: 'C.9.11',
            title: 'Mausklicks',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Software'],
          },
          {
            id: 'C.9.12',
            title: 'Timer',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
        ],
      },
    ],
  },
  {
    id: 'D',
    name: 'Programmieren in C++',
    topics: [
      {
        id: 'D.0',
        title: 'Programmieren in C++',
        subtopics: [
          { id: 'D.0.0', title: 'Inhalt', materials: ['Lerntext'] },
          { id: 'D.0.1', title: 'Literatur', materials: ['Lerntext'] },
          { id: 'D.0.2', title: 'Links', materials: ['Lerntext'] },
        ],
      },
      {
        id: 'D.1',
        title: 'C++-Programmstrukturen',
        subtopics: [],
      },
      {
        id: 'D.2',
        title: 'C++-Funktionen',
        subtopics: [],
      },
      {
        id: 'D.3',
        title: 'C++-Datenstrukturen',
        subtopics: [],
      },
      {
        id: 'D.4',
        title: 'Von C nach C++',
        subtopics: [
          {
            id: 'D.4.1',
            title: 'Einführung in die Objektorientierung',
            materials: ['Lerntext', 'Folie', 'Software', 'Übungen'],
          },
          {
            id: 'D.4.2',
            title: 'Default-Parameter',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'D.4.3',
            title: 'Overloading von Funktionen',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'D.4.4',
            title: 'Referenzen',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'D.4.5',
            title: 'new und delete',
            materials: ['Lerntext', 'Software'],
          },
        ],
      },
      {
        id: 'D.5',
        title: 'Einführung und Klassen',
        subtopics: [
          {
            id: 'D.5.1',
            title: 'Neue Möglichkeiten für structs',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Versuch',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'D.5.2',
            title: 'Zugriffsschutz für Komponenten',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'D.5.3',
            title: 'Konstruktor und Destruktor',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'D.5.4',
            title: 'Externe Definition von Methoden',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'D.5.5',
            title: 'Mehrere Objekte einer Klasse',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'D.5.6',
            title: 'Assoziation, Aggregation, Komposition',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'D.5.7',
            title: 'Element-Init.-Liste im Konstruktor',
            materials: ['Lerntext', 'Software'],
          },
        ],
      },
      {
        id: 'D.6',
        title: 'C++-Zugaben',
        subtopics: [
          { id: 'D.6.1', title: 'Statische Elemente' },
          { id: 'D.6.2', title: 'Overloading von Operatoren' },
          { id: 'D.6.3', title: 'Overloading von Funktionen (friends)' },
          { id: 'D.6.4', title: 'Funktions-Templates' },
          { id: 'D.6.5', title: 'Klassen-Templates' },
        ],
      },
      {
        id: 'D.7',
        title: 'Dynamischer Speicher in Objekten',
        subtopics: [
          {
            id: 'D.7.1',
            title: 'Konstruktor und Destruktor',
            materials: ['Lerntext', 'Software'],
          },
          {
            id: 'D.7.2',
            title: 'Kopierkonstruktor',
            materials: ['Lerntext', 'Software'],
          },
          {
            id: 'D.7.3',
            title: 'Zuweisungsoperator',
            materials: ['Lerntext', 'Software'],
          },
        ],
      },
      {
        id: 'D.8',
        title: 'Vererbung',
        subtopics: [
          {
            id: 'D.8.1',
            title: 'Einführung',
            materials: ['Lerntext', 'Software'],
          },
          { id: 'D.8.2', title: 'Arten der Vererbung' },
          {
            id: 'D.8.3',
            title: 'Überschreiben von Methoden',
            materials: ['Software'],
          },
          {
            id: 'D.8.4',
            title: 'Vererbung von Konstruktor und Destruktor',
            materials: ['Software'],
          },
        ],
      },
      {
        id: 'D.9',
        title: 'Polymorphie',
        subtopics: [
          { id: 'D.9.0', title: 'Allgemein', materials: ['Software'] },
          { id: 'D.9.1', title: 'Basisklassenzeiger' },
          { id: 'D.9.2', title: 'Virtuelle Methoden' },
          {
            id: 'D.9.3',
            title: 'Rein virtuelle Methoden und abstrakte Klassen',
          },
          { id: 'D.9.4', title: 'Rein abstrakte Klassen (Interface-Klassen)' },
          { id: 'D.9.5', title: 'Mehrfachvererbung' },
        ],
      },
      {
        id: 'D.10',
        title: 'Standard Template Library',
        subtopics: [],
      },
      {
        id: 'D.11',
        title: 'Qt',
        subtopics: [],
      },
    ],
  },
  {
    id: 'E',
    name: 'Elektronik',
    topics: [
      {
        id: 'E.0',
        title: 'Elektronik',
        subtopics: [
          { id: 'E.0.0', title: 'Inhalt', materials: ['Lerntext'] },
          { id: 'E.0.1', title: 'Literatur', materials: ['Lerntext'] },
          { id: 'E.0.2', title: 'Links', materials: ['Lerntext'] },
        ],
      },
      {
        id: 'E.1',
        title: 'Dioden',
        subtopics: [
          {
            id: 'E.1.1',
            title: 'Anschluss einer LED',
            materials: ['Lerntext', 'Arbeitsblatt'],
          },
          {
            id: 'E.1.2',
            title: 'Aufnahme einer Kennlinie',
            materials: ['Lerntext', 'Folie', 'Versuch'],
          },
          {
            id: 'E.1.3',
            title: 'Arbeiten mit der Kennlinie',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie'],
          },
          {
            id: 'E.1.4',
            title: 'Funktionsweise',
            materials: ['Arbeitsblatt', 'Folie'],
          },
          { id: 'E.1.5', title: 'Anwendung', materials: ['Arbeitsblatt'] },
        ],
      },
      {
        id: 'E.2',
        title: 'Netzteil',
        subtopics: [
          { id: 'E.2.1', title: 'Netztrafo' },
          { id: 'E.2.2', title: 'Gleichrichter', materials: ['Versuch'] },
          { id: 'E.2.3', title: 'Ladekondensator', materials: ['Versuch'] },
          { id: 'E.2.4', title: 'Siebkette' },
          { id: 'E.2.5', title: 'Stabilisierung' },
        ],
      },
      {
        id: 'E.3',
        title: 'Transistor als Schalter',
        subtopics: [
          { id: 'E.3.1', title: 'Schalten einer LED' },
          { id: 'E.3.2', title: 'Schalten einer Last' },
          { id: 'E.3.3', title: 'Schalten eines Relais: Dimensionierung' },
          { id: 'E.3.4', title: 'Inverterstufe', materials: ['Folie'] },
          { id: 'E.3.5', title: 'Digital-ICs in der Praxis' },
          { id: 'E.3.6', title: 'Zusammenschaltung von Digital-ICs' },
          { id: 'E.3.7', title: 'Zeitverhalten' },
        ],
      },
      {
        id: 'E.4',
        title: 'Transistor als Verstärker',
        subtopics: [
          { id: 'E.4.1', title: 'Einführung', materials: ['Versuch'] },
          {
            id: 'E.4.2',
            title: 'Arbeitspunkteinstellung',
            materials: ['Arbeitsblatt'],
          },
          { id: 'E.4.3', title: 'Arbeitspunktstabilisierung' },
          { id: 'E.4.4', title: 'Kollektorschaltung' },
        ],
      },
      {
        id: 'E.5',
        title: 'FET',
        subtopics: [{ id: 'E.5.1', title: 'Grundlagen' }],
      },
      {
        id: 'E.6',
        title: 'Operationsverstärker',
        subtopics: [
          { id: 'E.6.1', title: 'Einführung' },
          { id: 'E.6.2', title: 'Komparator' },
          { id: 'E.6.3', title: 'Nichtinvertierender Verstärker' },
          { id: 'E.6.4', title: 'Invertierender Verstärker' },
          { id: 'E.6.5', title: 'Invertierender Addierer' },
          { id: 'E.6.6', title: 'Subtrahierer' },
          { id: 'E.6.7', title: 'Instrumentationsverstärker' },
          { id: 'E.6.8', title: 'Nichtlineare Anwendungen' },
          { id: 'E.6.9', title: 'Schmitt-Trigger' },
          { id: 'E.6.10', title: 'Astabile Kippstufe' },
        ],
      },
      {
        id: 'E.7',
        title: 'Systemtheorie',
        subtopics: [{ id: 'E.7.1', title: 'Grundlagen' }],
      },
      {
        id: 'E.8',
        title: 'Konstantstromquellen',
        subtopics: [],
      },
      {
        id: 'E.9',
        title: 'Projekte',
        subtopics: [
          { id: 'E.9.1', title: 'Oszillator' },
          { id: 'E.9.2', title: 'SDR-Frontend' },
          { id: 'E.9.3', title: 'LED-Kubus' },
          { id: 'E.9.4', title: 'Elektronisches Elektroskop' },
          {
            id: 'E.9.5',
            title: 'DCF77-Empfänger',
            materials: ['Arbeitsblatt'],
          },
        ],
      },
    ],
  },
  {
    id: 'G',
    name: 'Grundlagen ET',
    topics: [
      {
        id: 'G.0',
        title: 'Grundlagen ET',
        subtopics: [
          { id: 'G.0.0', title: 'Inhalt', materials: ['Lerntext'] },
          { id: 'G.0.1', title: 'Literatur', materials: ['Lerntext'] },
          { id: 'G.0.2', title: 'Links', materials: ['Lerntext'] },
          { id: 'G.0.4', title: 'Übersicht', materials: ['Lerntext', 'Folie'] },
        ],
      },
      {
        id: 'G.1',
        title: 'Grundlagen',
        subtopics: [
          {
            id: 'G.1.0',
            title: 'Arbeit im Messlabor',
            materials: ['Lerntext', 'Folie'],
          },
          { id: 'G.1.1', title: 'Einführung', materials: ['Arbeitsblatt'] },
          {
            id: 'G.1.2',
            title: 'Elektrischer Strom',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Versuch'],
          },
          {
            id: 'G.1.3',
            title: 'Elektrische Spannung',
            materials: ['Lerntext', 'Arbeitsblatt', 'Versuch'],
          },
          {
            id: 'G.1.4',
            title: 'Potential',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie'],
          },
          {
            id: 'G.1.5',
            title: 'Gleich- und Wechselgrößen',
            materials: ['Lerntext'],
          },
          {
            id: 'G.1.6',
            title: 'Ohmsches Gesetz',
            materials: ['Lerntext', 'Arbeitsblatt', 'Übungen'],
          },
          {
            id: 'G.1.7',
            title: 'Widerstände in der Technik',
            materials: ['Lerntext'],
          },
          {
            id: 'G.1.8',
            title: 'Widerstand einer Leitung',
            materials: ['Lerntext', 'Arbeitsblatt'],
          },
          {
            id: 'G.1.9',
            title: 'Leistung',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Übungen'],
          },
          {
            id: 'G.1.10',
            title: 'Energie und Kosten',
            materials: ['Lerntext'],
          },
        ],
      },
      {
        id: 'G.2',
        title: 'Widerstandsschaltungen',
        subtopics: [
          {
            id: 'G.2.1',
            title: 'Reihenschaltung',
            materials: ['Lerntext', 'Arbeitsblatt'],
          },
          {
            id: 'G.2.2',
            title: 'Parallelschaltung',
            materials: ['Lerntext', 'Arbeitsblatt'],
          },
          { id: 'G.2.3', title: 'Gruppenschaltung' },
          { id: 'G.2.4', title: 'Brückenschaltung' },
          { id: 'G.2.5', title: 'Spannungsteiler' },
          { id: 'G.2.6', title: 'Messschaltungen' },
          { id: 'G.2.7', title: 'Messbereichserweiterung' },
          { id: 'G.2.8', title: 'Spannungs- und Stromfehlerschaltung' },
          { id: 'G.2.9', title: 'Leistungsmessung' },
          { id: 'G.2.10', title: 'Methode der Ersatzspannungsquelle' },
          { id: 'G.2.11', title: 'Methode der Ersatzstromquelle' },
        ],
      },
      {
        id: 'G.3',
        title: 'Quellen',
        subtopics: [
          {
            id: 'G.3.1',
            title: 'Innenwiderstand',
            materials: ['Lerntext', 'Arbeitsblatt'],
          },
          {
            id: 'G.3.2',
            title: 'Leistungsanpassung',
            materials: ['Arbeitsblatt'],
          },
          {
            id: 'G.3.3',
            title: 'Primärzellen (Batterien)',
            materials: ['Arbeitsblatt'],
          },
          {
            id: 'G.3.4',
            title: 'Sekundärzellen (Akkumulatoren)',
            materials: ['Arbeitsblatt'],
          },
          { id: 'G.3.5', title: 'Zusammenschaltung von Quellen' },
          {
            id: 'G.3.6',
            title: 'Weitere Energiequellen',
            materials: ['Arbeitsblatt'],
          },
        ],
      },
      {
        id: 'G.4',
        title: 'Installationstechnik',
        subtopics: [
          { id: 'G.4.1', title: 'Einführung', materials: ['Folie'] },
          { id: 'G.4.2', title: 'Sicherheit' },
          { id: 'G.4.3', title: 'Installationsbereiche, Verlegearten' },
          { id: 'G.4.4', title: 'Stromlaufplan', materials: ['Folie'] },
          {
            id: 'G.4.5',
            title: 'Betriebsmittelkennzeichnung',
            materials: ['Lerntext'],
          },
          {
            id: 'G.4.6',
            title: 'Leitungen',
            materials: ['Arbeitsblatt', 'Folie'],
          },
          { id: 'G.4.7', title: 'Sicherungen', materials: ['Arbeitsblatt'] },
          { id: 'G.4.8', title: 'Netzformen' },
          { id: 'G.4.9', title: 'Schutzmaßnahmen' },
          {
            id: 'G.4.10',
            title: 'Installationsschaltungen',
            materials: ['Folie'],
          },
        ],
      },
      {
        id: 'G.5',
        title: 'Kondensator',
        subtopics: [
          { id: 'G.5.1', title: 'Einführung' },
          { id: 'G.5.2', title: 'Kapazität' },
          {
            id: 'G.5.3',
            title: 'Typen',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie'],
          },
          {
            id: 'G.5.4',
            title: 'Entladekurve',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Versuch'],
          },
          { id: 'G.5.5', title: 'Ladekurve', materials: ['Versuch'] },
          {
            id: 'G.5.6',
            title: 'Lade- und Entlade-Stromverlauf',
            materials: ['Folie'],
          },
          { id: 'G.5.7', title: 'C-Parallel- und Reihenschaltung' },
        ],
      },
      {
        id: 'G.6',
        title: 'Magnetfeld und Spule',
        subtopics: [
          {
            id: 'G.6.1',
            title: 'Dauermagnetismus',
            materials: ['Lerntext', 'Arbeitsblatt'],
          },
          { id: 'G.6.2', title: 'Durchflutung und Feldstärke' },
          { id: 'G.6.3', title: 'Fluss und Flussdichte', materials: ['Folie'] },
          { id: 'G.6.4', title: 'Induktionsgesetz, Generator, Trafo' },
          { id: 'G.6.5', title: 'Motorprinzip' },
          { id: 'G.6.6', title: 'Selbstinduktion', materials: ['Folie'] },
          {
            id: 'G.6.7',
            title: 'Selbstinduktion und Zeitverhalten',
            materials: ['Folie'],
          },
          { id: 'G.6.8', title: 'Reihen- und Parallelschaltung' },
        ],
      },
    ],
  },
  {
    id: 'I',
    name: 'IT-Systeme',
    topics: [
      {
        id: 'I.0',
        title: 'IT-Systeme',
        subtopics: [
          { id: 'I.0.0', title: 'Inhalt', materials: ['Lerntext'] },
          { id: 'I.0.1', title: 'Literatur', materials: ['Lerntext'] },
          { id: 'I.0.2', title: 'Links', materials: ['Lerntext'] },
          { id: 'I.0.4', title: 'Übersicht', materials: ['Folie'] },
        ],
      },
      {
        id: 'I.1',
        title: 'Einführung und Zahlensysteme',
        subtopics: [
          {
            id: 'I.1.1',
            title: 'Einführung',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Übungen'],
          },
          {
            id: 'I.1.2',
            title: 'Stellenwertsysteme',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'I.1.3',
            title: 'Rechnen mit Dualzahlen',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Übungen'],
          },
          {
            id: 'I.1.4',
            title: 'Darstellung negativer Zahlen',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'I.1.5',
            title: 'Darstellung gebrochener Zahlen',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
        ],
      },
      {
        id: 'I.2',
        title: 'Codierung',
        subtopics: [
          {
            id: 'I.2.1',
            title: 'Was ist Codierung?',
            materials: ['Lerntext', 'Folie', 'Software'],
          },
          {
            id: 'I.2.2',
            title: 'Von ASCII bis UNICODE',
            materials: ['Lerntext', 'Folie', 'Software'],
          },
          {
            id: 'I.2.3',
            title: 'UTF-8, UTF-16 und UTF-32',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie'],
          },
          {
            id: 'I.2.4',
            title: 'Fehlererkennung',
            materials: ['Arbeitsblatt'],
          },
        ],
      },
      {
        id: 'I.3',
        title: 'Logische Verknüpfungen',
        subtopics: [
          { id: 'I.3.1', title: 'Einführung' },
          { id: 'I.3.2', title: 'Logische Grundverknüpfungen' },
          { id: 'I.3.3', title: 'Bausteine' },
          {
            id: 'I.3.4',
            title: 'Aufbau und Test einer Logikschaltung',
            materials: ['Versuch'],
          },
          {
            id: 'I.3.5',
            title: 'Aufbau eines Volladdierers',
            materials: ['Arbeitsblatt', 'Folie', 'Versuch'],
          },
          { id: 'I.3.6', title: 'Register', materials: ['Arbeitsblatt'] },
        ],
      },
      {
        id: 'I.4',
        title: 'PC-Hardware',
        subtopics: [
          {
            id: 'I.4.1',
            title: 'Bestandteile eines PCs',
            materials: ['Lerntext'],
          },
          {
            id: 'I.4.2',
            title: 'Aufbau',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'I.4.3',
            title: 'Bussystem',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Übungen'],
          },
          {
            id: 'I.4.4',
            title: 'Hauptspeicher',
            materials: ['Lerntext', 'Folie', 'Übungen'],
          },
          {
            id: 'I.4.5',
            title: 'Mikroprozessor (CPU)',
            materials: ['Lerntext', 'Folie'],
          },
          { id: 'I.4.6', title: 'Massenspeicher' },
          { id: 'I.4.7', title: 'Peripherie', materials: ['Lerntext'] },
          { id: 'I.4.8', title: 'Aktuelles', materials: ['Arbeitsblatt'] },
          { id: 'I.4.9', title: 'USV', materials: ['Lerntext'] },
          {
            id: 'I.4.10',
            title: 'Blades und Racks und Towers',
            materials: ['Lerntext'],
          },
        ],
      },
    ],
  },
  {
    id: 'J',
    name: 'Programmieren in Java',
    topics: [
      {
        id: 'J.0',
        title: 'Programmieren in Java',
        subtopics: [{ id: 'J.0.0', title: 'Inhalt', materials: ['Lerntext'] }],
      },
      {
        id: 'J.1',
        title: 'Grundlagen',
        subtopics: [
          {
            id: 'J.1.1',
            title: 'Ein erstes Programm',
            materials: ['Software'],
          },
          {
            id: 'J.1.2',
            title: 'Berechnung und Ausgabe von Zahlen',
            materials: ['Software'],
          },
          {
            id: 'J.1.3',
            title: 'Variablen und Datentypen',
            materials: ['Lerntext', 'Software'],
          },
          { id: 'J.1.4', title: 'Eingabe', materials: ['Software'] },
          {
            id: 'J.1.5',
            title: 'Verzweigung',
            materials: ['Folie', 'Software'],
          },
          {
            id: 'J.1.6',
            title: 'Abweisende Schleife mit while',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Software'],
          },
          {
            id: 'J.1.7',
            title: 'Zählschleife mit for',
            materials: ['Software'],
          },
          { id: 'J.1.8', title: 'Fußgesteuerte Schleife mit do' },
          { id: 'J.1.9', title: 'Mehrfachauswahl mit switch' },
        ],
      },
    ],
  },
  {
    id: 'L',
    name: 'Linux',
    topics: [
      {
        id: 'L.0',
        title: 'Linux',
        subtopics: [
          { id: 'L.0.0', title: 'Inhalt', materials: ['Lerntext'] },
          { id: 'L.0.1', title: 'Literatur', materials: ['Lerntext'] },
          { id: 'L.0.2', title: 'Links', materials: ['Lerntext'] },
        ],
      },
      {
        id: 'L.1',
        title: 'Anwendung',
        subtopics: [
          {
            id: 'L.1.1',
            title: 'Einführung',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Übungen'],
          },
          {
            id: 'L.1.2',
            title: 'Befehle',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Versuch',
              'Übungen',
            ],
          },
          {
            id: 'L.1.3',
            title: 'Dateisystem',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Übungen'],
          },
          {
            id: 'L.1.4',
            title: 'Berechtigungen',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Versuch',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'L.1.5',
            title: 'Prozesse',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'L.1.6',
            title: 'Umleitung und Verkettung',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'L.1.7',
            title: 'Expansion und Substitution',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Versuch',
              'Übungen',
            ],
          },
          {
            id: 'L.1.8',
            title: 'Suchen und Finden im Dateisystem',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Versuch',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'L.1.9',
            title: 'Kommandosubstitution',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Übungen'],
          },
          {
            id: 'L.1.10',
            title: 'ACLs',
            materials: ['Lerntext', 'Arbeitsblatt'],
          },
          {
            id: 'L.1.11',
            title: 'Kommunikation',
            materials: ['Lerntext', 'Arbeitsblatt'],
          },
        ],
      },
      {
        id: 'L.2',
        title: 'Skripte',
        subtopics: [
          {
            id: 'L.2.1',
            title: 'Einführung',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'L.2.2',
            title: 'Variablen',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'L.2.3',
            title: 'Parameter und Rückgabewerte',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software', 'Übungen'],
          },
          {
            id: 'L.2.4',
            title: 'Verzweigung',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'L.2.5',
            title: 'Mehrfachauswahl',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Software'],
          },
          {
            id: 'L.2.6',
            title: 'Schleifen',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'L.2.7',
            title: 'Funktionen',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'L.2.8',
            title: 'Shell-Hilfen',
            materials: ['Lerntext', 'Software'],
          },
          {
            id: 'L.2.9',
            title: 'Hilfsprogramme',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
        ],
      },
      {
        id: 'L.3',
        title: 'Grundkonfiguration',
        subtopics: [
          {
            id: 'L.3.1',
            title: 'Installation',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Software'],
          },
          {
            id: 'L.3.2',
            title: 'Paketverwaltung',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Versuch',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'L.3.3',
            title: 'Systemzustand ermitteln',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Übungen'],
          },
          {
            id: 'L.3.4',
            title: 'Systemstart',
            materials: [
              'Lerntext',
              'Arbeitsblatt',
              'Folie',
              'Versuch',
              'Software',
              'Übungen',
            ],
          },
          {
            id: 'L.3.5',
            title: 'Automatisierung',
            materials: ['Lerntext', 'Übungen'],
          },
          {
            id: 'L.3.6',
            title: 'Benutzer und Gruppen',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'L.3.7',
            title: 'Konfiguration von sudo',
            materials: ['Lerntext'],
          },
          { id: 'L.3.8', title: 'GUI mit X11' },
          { id: 'L.3.9', title: 'Drucken und Sonstiges' },
        ],
      },
      {
        id: 'L.4',
        title: 'Datenträger',
        subtopics: [
          {
            id: 'L.4.1',
            title: 'Partitionen',
            materials: ['Lerntext', 'Arbeitsblatt'],
          },
          {
            id: 'L.4.2',
            title: 'Dateisysteme',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie'],
          },
          { id: 'L.4.3', title: 'RAID', materials: ['Lerntext'] },
          { id: 'L.4.4', title: 'LVM' },
          { id: 'L.4.5', title: 'Quota', materials: ['Lerntext'] },
          { id: 'L.4.6', title: 'Datensicherung', materials: ['Lerntext'] },
          {
            id: 'L.4.7',
            title: 'Bootvorgang',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie'],
          },
          { id: 'L.4.8', title: 'Verschlüsselung', materials: ['Versuch'] },
        ],
      },
      {
        id: 'L.5',
        title: 'Netzwerk',
        subtopics: [
          {
            id: 'L.5.1',
            title: 'Grundkonfiguration',
            materials: ['Lerntext', 'Arbeitsblatt'],
          },
          {
            id: 'L.5.2',
            title: 'DHCP',
            materials: ['Lerntext', 'Arbeitsblatt'],
          },
          { id: 'L.5.3', title: 'DNS' },
          {
            id: 'L.5.4',
            title: 'Routing',
            materials: ['Lerntext', 'Arbeitsblatt'],
          },
          { id: 'L.5.5', title: 'iptables' },
          { id: 'L.5.6', title: 'NAT' },
        ],
      },
      {
        id: 'L.6',
        title: 'Server',
        subtopics: [
          {
            id: 'L.6.1',
            title: 'Superserver',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie'],
          },
          { id: 'L.6.2', title: 'SSH', materials: ['Lerntext'] },
          { id: 'L.6.3', title: 'ftp', materials: ['Lerntext', 'Folie'] },
          { id: 'L.6.4', title: 'NFS', materials: ['Lerntext'] },
          {
            id: 'L.6.5',
            title: 'Samba',
            materials: ['Lerntext', 'Arbeitsblatt'],
          },
          { id: 'L.6.6', title: 'Apache', materials: ['Lerntext', 'Folie'] },
          { id: 'L.6.7', title: 'E-Mail' },
          { id: 'L.6.8', title: 'NTP' },
          { id: 'L.6.9', title: 'LDAP' },
        ],
      },
      {
        id: 'L.7',
        title: 'Spezielle Anwendungen',
        subtopics: [
          {
            id: 'L.7.1',
            title: 'vi',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie'],
          },
          { id: 'L.7.2', title: 'sed' },
          { id: 'L.7.3', title: 'mySQL' },
          { id: 'L.7.4', title: 'iconv und recode' },
          { id: 'L.7.5', title: 'GPG' },
          { id: 'L.7.6', title: 'TeX', materials: ['Lerntext', 'Software'] },
        ],
      },
      {
        id: 'L.8',
        title: 'Programmierung',
        subtopics: [
          {
            id: 'L.8.1',
            title: 'Installieren von Source-Paketen',
            materials: ['Lerntext', 'Arbeitsblatt'],
          },
          {
            id: 'L.8.2',
            title: 'make',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          { id: 'L.8.3', title: 'autoconf' },
        ],
      },
      {
        id: 'L.9',
        title: 'Extras',
        subtopics: [
          {
            id: 'L.9.1',
            title: 'Umgang mit dem Raspberry Pi',
            materials: ['Software'],
          },
        ],
      },
    ],
  },
  {
    id: 'M',
    name: 'Mikrocontrollertechnik',
    topics: [
      {
        id: 'M.0',
        title: 'Mikrocontrollertechnik',
        subtopics: [
          { id: 'M.0.0', title: 'Inhalt', materials: ['Lerntext'] },
          { id: 'M.0.1', title: 'Literatur', materials: ['Lerntext'] },
          { id: 'M.0.2', title: 'Links', materials: ['Lerntext'] },
          { id: 'M.0.3', title: 'Werkzeuge', materials: ['Lerntext'] },
          { id: 'M.0.4', title: 'Übersicht', materials: ['Lerntext'] },
        ],
      },
      {
        id: 'M.1',
        title: 'Atmega-Programmierung in ASM',
        subtopics: [
          { id: 'M.1.1', title: 'Aufbau des Entwicklungssystems' },
          {
            id: 'M.1.2',
            title: 'Erstes Programm',
            materials: ['Lerntext', 'Folie', 'Software'],
          },
          {
            id: 'M.1.3',
            title: 'Modell des Mikrocontrollers',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Software'],
          },
          {
            id: 'M.1.4',
            title: 'Port-Bit-Befehle',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'M.1.5',
            title: 'Eingabeports und Verzweigung',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Software'],
          },
          {
            id: 'M.1.6',
            title: 'Warteschleife',
            materials: ['Lerntext', 'Software'],
          },
          {
            id: 'M.1.7',
            title: 'Verschachtelte Schleifen',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'M.1.8',
            title: 'Stack und Unterprogramme',
            materials: ['Lerntext', 'Software'],
          },
          {
            id: 'M.1.9',
            title: 'LED-Ziffernanzeige',
            materials: ['Lerntext', 'Software'],
          },
        ],
      },
      {
        id: 'M.2',
        title: 'Atmega-Peripherie',
        subtopics: [
          {
            id: 'M.2.1',
            title: 'Interrupts',
            materials: ['Lerntext', 'Folie', 'Software'],
          },
          {
            id: 'M.2.2',
            title: 'Timer',
            materials: ['Lerntext', 'Folie', 'Software'],
          },
          {
            id: 'M.2.3',
            title: 'Serielle Schnittstelle',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Software'],
          },
          {
            id: 'M.2.4',
            title: 'Konstanten im Flash-EPROM',
            materials: ['Lerntext', 'Software'],
          },
          {
            id: 'M.2.5',
            title: 'SRAM',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'M.2.6',
            title: 'EEPROM',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          { id: 'M.2.7', title: 'Komparator' },
          { id: 'M.2.8', title: 'ADC', materials: ['Lerntext', 'Software'] },
        ],
      },
      {
        id: 'M.3',
        title: 'Atmega-Programmierung in C',
        subtopics: [
          {
            id: 'M.3.1',
            title: 'Einführung',
            materials: ['Lerntext', 'Software'],
          },
          {
            id: 'M.3.2',
            title: 'Zugriff auf Register',
            materials: ['Lerntext', 'Arbeitsblatt'],
          },
          {
            id: 'M.3.3',
            title: 'Zugriff auf SRAM, Flash und EEPROM',
            materials: ['Lerntext', 'Software'],
          },
          {
            id: 'M.3.4',
            title: 'Interrupts',
            materials: ['Folie', 'Software'],
          },
        ],
      },
      {
        id: 'M.4',
        title: 'Peripherie ansprechen in C',
        subtopics: [
          {
            id: 'M.4.1',
            title: 'LCD',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'M.4.2',
            title: 'I2C-Bus',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
        ],
      },
    ],
  },
  {
    id: 'N',
    name: 'Netzwerktechnik',
    topics: [
      {
        id: 'N.0',
        title: 'Netzwerktechnik',
        subtopics: [{ id: 'N.0.0', title: 'Inhalt', materials: ['Lerntext'] }],
      },
      {
        id: 'N.6',
        title: 'IT-Sicherheit',
        subtopics: [
          { id: 'N.6.0', title: 'Alle' },
          { id: 'N.6.1', title: 'Strukturen', materials: ['Lerntext'] },
          { id: 'N.6.2', title: 'Dimensionen', materials: ['Lerntext'] },
          { id: 'N.6.3', title: 'Gefahren', materials: ['Lerntext'] },
          { id: 'N.6.4', title: 'Vertraulichkeit' },
          { id: 'N.6.5', title: 'Integrität' },
          { id: 'N.6.6', title: 'Hochverfügbarkeit' },
          { id: 'N.6.7', title: 'Verteidigung' },
          { id: 'N.6.8', title: 'Bereiche und Gesetze' },
        ],
      },
    ],
  },
  {
    id: 'O',
    name: 'Ökologie und Ergonomie',
    topics: [
      {
        id: 'O.0',
        title: 'Ökologie und Ergonomie',
        subtopics: [{ id: 'O.0.0', title: 'Inhalt', materials: ['Lerntext'] }],
      },
      {
        id: 'O.1',
        title: 'PC Reuse',
        subtopics: [
          { id: 'O.1.1', title: 'Energiebilanz eines PCs' },
          { id: 'O.1.2', title: 'Rohstoffe' },
          { id: 'O.1.3', title: 'Entsorgung' },
          { id: 'O.1.4', title: 'Wiederverwendung' },
        ],
      },
      {
        id: 'O.2',
        title: 'Ergonomie',
        subtopics: [
          { id: 'O.2.1', title: 'Einführung', materials: ['Arbeitsblatt'] },
          { id: 'O.2.2', title: 'Hardware' },
          { id: 'O.2.3', title: 'Software' },
        ],
      },
      {
        id: 'O.3',
        title: 'Projektentwicklung',
        subtopics: [
          {
            id: 'O.3.1',
            title: 'Klassisches Phasenmodell',
            materials: ['Lerntext', 'Folie'],
          },
          {
            id: 'O.3.2',
            title: 'Projekt-Dokumentation',
            materials: ['Lerntext'],
          },
          { id: 'O.3.3', title: 'Phase 0: Vorschlag', materials: ['Lerntext'] },
          {
            id: 'O.3.4',
            title: 'Phase 1: Planen und umreißen',
            materials: ['Lerntext'],
          },
          {
            id: 'O.3.5',
            title: 'Phase 2: Konzepte entwickeln',
            materials: ['Lerntext', 'Folie'],
          },
          {
            id: 'O.3.6',
            title: 'Phase 3: Eine Struktur entwerfen',
            materials: ['Lerntext'],
          },
          {
            id: 'O.3.7',
            title: 'Phase 4: Implementieren und testen',
            materials: ['Software'],
          },
          { id: 'O.3.8', title: 'Phasen 5 und 6: Einführung und Betrieb' },
          { id: 'O.3.9', title: 'Alternativen zum Phasenmodell' },
        ],
      },
    ],
  },
  {
    id: 'U',
    name: 'Übertragungstechnik',
    topics: [
      {
        id: 'U.0',
        title: 'Übertragungstechnik',
        subtopics: [
          { id: 'U.0.0', title: 'Inhalt', materials: ['Lerntext'] },
          { id: 'U.0.1', title: 'Literatur', materials: ['Lerntext'] },
          { id: 'U.0.2', title: 'Links', materials: ['Lerntext'] },
        ],
      },
      {
        id: 'U.1',
        title: 'Leitungen',
        subtopics: [
          { id: 'U.1.1', title: 'Dämpfung und Dämpfungsmaß' },
          { id: 'U.1.2', title: 'Pegel' },
          {
            id: 'U.1.3',
            title: 'Frequenzabhängikeit der Dämpfung',
            materials: ['Folie'],
          },
          { id: 'U.1.4', title: 'Reflexion und Wellenwiderstand' },
        ],
      },
      {
        id: 'U.2',
        title: 'Lichtwellenleiter',
        subtopics: [
          {
            id: 'U.2.1',
            title: 'Wie funktioniert ein Lichtwellenleiter?',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie', 'Software'],
          },
          {
            id: 'U.2.2',
            title: 'Übertragung',
            materials: ['Lerntext', 'Arbeitsblatt', 'Folie'],
          },
          {
            id: 'U.2.3',
            title: 'Betrieb und Messung bei LWL auf langen Strecken',
            materials: ['Lerntext'],
          },
        ],
      },
      {
        id: 'U.3',
        title: 'Elektromagnetische Wellen',
        subtopics: [
          { id: 'U.3.1', title: 'Einführung' },
          { id: 'U.3.2', title: 'Empfangene Leistung' },
          { id: 'U.3.3', title: 'Frequenzspektrum' },
        ],
      },
      {
        id: 'U.4',
        title: 'Modulationsarten',
        subtopics: [
          { id: 'U.4.1', title: 'Multiplexverfahren' },
          { id: 'U.4.2', title: 'AM und ASK' },
          { id: 'U.4.3', title: 'DSB und SSB' },
        ],
      },
    ],
  },
  {
    id: 'W',
    name: 'Wechselstromtechnik',
    topics: [
      {
        id: 'W.0',
        title: 'Wechselstromtechnik',
        subtopics: [{ id: 'W.0.0', title: 'Inhalt', materials: ['Lerntext'] }],
      },
      {
        id: 'W.1',
        title: 'Messen von Wechselgrößen',
        subtopics: [
          { id: 'W.1.1', title: 'Was ist Wechselspannung?' },
          { id: 'W.1.2', title: 'Kenngrößen', materials: ['Arbeitsblatt'] },
          {
            id: 'W.1.3',
            title: 'Messung von Spitzenwerten mit dem Oszilloskop',
          },
          {
            id: 'W.1.4',
            title: 'Messung von Mittelwerten mit dem DVM',
            materials: ['Arbeitsblatt'],
          },
          { id: 'W.1.5', title: 'Frequenzmessung mit dem Oszi' },
          {
            id: 'W.1.6',
            title: 'Phasenmessung mit dem Oszi',
            materials: ['Folie'],
          },
        ],
      },
      {
        id: 'W.2',
        title: 'R und C im Wechselstromkreis',
        subtopics: [
          {
            id: 'W.2.1',
            title: 'Widerstand im Wechselstromkreis',
            materials: ['Arbeitsblatt'],
          },
          {
            id: 'W.2.2',
            title: 'Xc im Wechselstromkreis',
            materials: ['Versuch'],
          },
          {
            id: 'W.2.3',
            title: 'Verlauf von U und I, Phasenverschiebung',
            materials: ['Arbeitsblatt'],
          },
        ],
      },
      {
        id: 'W.3',
        title: 'RC-Reihenschaltung',
        subtopics: [
          { id: 'W.3.1', title: 'Zeigerdiagramme' },
          { id: 'W.3.2', title: 'Spannungen' },
          { id: 'W.3.3', title: 'Widerstände und Strom' },
          { id: 'W.3.4', title: 'Leistungen' },
        ],
      },
      {
        id: 'W.4',
        title: 'RC-Filterschaltungen',
        subtopics: [
          { id: 'W.4.1', title: 'RC-Tiefpass' },
          { id: 'W.4.2', title: 'RC-Hochpass' },
          { id: 'W.4.3', title: 'RC-Bandpass' },
        ],
      },
      {
        id: 'W.5',
        title: 'Spule im Wechselstromkreis',
        subtopics: [
          { id: 'W.5.1', title: 'Induktiver Blindwiderstand' },
          { id: 'W.5.2', title: 'Phasenverschiebung' },
          { id: 'W.5.3', title: 'RL-Reihenschaltung' },
          { id: 'W.5.4', title: 'Reale Spule' },
        ],
      },
      {
        id: 'W.6',
        title: 'RC, RL parallel',
        subtopics: [
          { id: 'W.6.1', title: 'RC-Parallelschaltung' },
          { id: 'W.6.2', title: 'RL-Parallelschaltung' },
        ],
      },
      {
        id: 'W.7',
        title: 'Schwingkreis',
        subtopics: [
          { id: 'W.7.1', title: 'Reihenschwingkreis', materials: ['Folie'] },
          { id: 'W.7.2', title: 'RLC-Parallelschwingkreis' },
        ],
      },
    ],
  },
  {
    id: 'X',
    name: 'XML',
    topics: [
      {
        id: 'X.0',
        title: 'XML',
        subtopics: [
          { id: 'X.0.0', title: 'Inhalt', materials: ['Lerntext'] },
          { id: 'X.0.1', title: 'Literatur', materials: ['Lerntext'] },
          { id: 'X.0.2', title: 'Links', materials: ['Lerntext'] },
        ],
      },
      {
        id: 'X.1',
        title: 'HTML',
        subtopics: [
          {
            id: 'X.1.1',
            title: 'Einführung',
            materials: ['Lerntext', 'Arbeitsblatt'],
          },
          {
            id: 'X.1.2',
            title: 'HTTP',
            materials: ['Lerntext', 'Arbeitsblatt'],
          },
          {
            id: 'X.1.3',
            title: 'HTML-Grundlagen',
            materials: ['Lerntext', 'Software'],
          },
          {
            id: 'X.1.4',
            title: 'Attribute, Listen und Tabellen',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'X.1.5',
            title: 'Verweise',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'X.1.6',
            title: 'Einbinden von Bildern',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'X.1.7',
            title: 'Frames',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          {
            id: 'X.1.8',
            title: 'Formulare',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          { id: 'X.1.9', title: 'CGI', materials: ['Lerntext', 'Software'] },
          { id: 'X.1.10', title: 'Cascading Style Sheets' },
        ],
      },
      {
        id: 'X.2',
        title: 'XML',
        subtopics: [
          {
            id: 'X.2.1',
            title: 'Einführung',
            materials: ['Lerntext', 'Software'],
          },
          {
            id: 'X.2.2',
            title: 'Mehrere Elemente verwenden',
            materials: ['Lerntext', 'Arbeitsblatt', 'Software'],
          },
          { id: 'X.2.3', title: 'XML und CSS' },
          { id: 'X.2.4', title: 'Wellformed XML' },
          { id: 'X.2.5', title: 'Valid XML und DTDs' },
          { id: 'X.2.6', title: 'Elemente in der DTD' },
          { id: 'X.2.7', title: 'Attribute in der DTD' },
          { id: 'X.2.8', title: 'Entitäten, Inhalte' },
        ],
      },
      {
        id: 'X.3',
        title: 'XSL',
        subtopics: [
          { id: 'X.3.1', title: 'Formatvorlage' },
          { id: 'X.3.2', title: 'Dokumentbaum' },
          { id: 'X.3.3', title: 'Knotenmengen suchen und einsetzen' },
          { id: 'X.3.4', title: 'Elemente und Attribute erzeugen' },
        ],
      },
      {
        id: 'X.4',
        title: 'SVG',
        subtopics: [{ id: 'X.4.1', title: 'Einführung' }],
      },
    ],
  },
];
