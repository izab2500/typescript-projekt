# 🏆 Projektuppgift – Programmering i TypeScript

**Öppna Akademin** är ett fiktivt universitet som erbjuder gratis onlineutbildning med ett brett utbud av kurser inom olika ämnesområden.


## 📄 Webbsidor & funktionalitet

Webbplatsen består av flera sidor med funktioner som sökning, sortering, filtrering, hantering av kurser och skapande av ett personligt ramschema.


## 🏠 Hem

Startsidan beskriver Öppna Akademin, vad som erbjuds och vilka funktioner plattformen innehåller.

Innehåller även en CTA-sektion som leder användaren vidare till kurser-sidan.


## 📚 Kurser

Visar alla kurser, 50 åt gången med “visa fler”-knapp.

### Användaren kan:

- 🔎 Söka globalt på kurskod eller kursnamn  
- 🎯 Filtrera inom ett specifikt ämne  
- 📂 Lista kurser per ämnesområde  
- ↕️ Sortera stigande eller fallande på:
  - Kurskod  
  - Kursnamn  
  - Poäng  
  - Ämne  
- ➕ Lägga till eller ta bort kurser från ramschemat  


## 📝 Ramschema

Visar alla kurser som lagts till från kurssidan.

### Funktioner:

- Summering av totala högskolepoäng  
- Antal valda kurser  
- Möjlighet att ta bort kurser  

Om inga kurser är tillagda visas:

- Inget ramschema har skapats


## 👨‍💻 Om

Beskriver Öppna Akademins vision, syfte och arbetssätt.

Innehåller även en CTA som leder vidare till kurser-sidan.

## 📩 Kontakt

Kontaktformulär med:

- Namn  
- E-post  
- Meddelande  

Formuläret är validerat och simulerar ett verkligt inskickat meddelande (under knappen).

På större skärmar visas även en bildsektion bredvid formuläret.


## 🥴 404 – Sidan hittades inte

Visas när användaren försöker nå en URL som inte existerar inom domänet.

Innehåller en emoji, ett felmeddelande och en länk tillbaka till startsidan.


## 🍃 Dataflöde & kommunikation

### **CourseService**
Hanterar logik för kurssidan:

- Sökning  
- Filtrering  
- Sortering  
- Pagination (visa fler kurser)  

### **StudyPlanService**
Hanterar logik för ramschemat:

- Lägga till eller ta bort kurs-ID i **localStorage** 
- Räkna antal valda kurser  
- Beräkna total högskolepoäng  

Båda services initieras i **AppComponent** för central hantering och enkel synk mellan sidor via localStorage.


## 📱 Responsivitet

Webbplatsen är responsiv och anpassar sig efter olika skrämstorlekar:

- Desktop
- Tablet
- Mobil


## 🎖️ Extra funktionalitet (för överbetyg)

- Extra sidor: Hem, Om, Kontakt och 404  
- Pagination: 50 kurser åt gången med “visa fler”-knapp  
- Sökning inom ämnesområde
- Sortering på kursattribut (kurskod, kursnamn, poäng och ämne) (stigande/fallande)  
- Toggling av kurser för ramschema (Kurser-sidan):
  - "Lägg till" eller “Ta bort” beroende på status  


## 🌐 Besök webbplatsen

[Öppna Akademin](https://typescript-projekt.vercel.app/)


## 📄 Rapport

[Öppna rapport](docs/programmering_i_typescript-projekt.pdf)
