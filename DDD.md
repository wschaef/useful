# Domain Driven Design

## Ablauf
### Storyteling
Ziel -> fachliche Domain verstehen
Tool -> https://www.wps.de/modeler/
Methode -> erzählen der fachlichen Geschichten

### Subdomains
Ziel -> fachliche Unterdomänen finden und einheitliche Sprache innerhalb dieser Domänen
Tool - > WPS Modeler
Methode -> Gruppieren von Nodes auf dem Diagramm des Storytellings

### Arten der Subdomains (CORE, SUPPORTING, GENERIC)
Ziel -> explizite Markierung der Subdomains abhängig von Wichtigkeit aus der fachlichen Sicht
CORE - Ist für das Bussines erfolgskritisch, Alleinstellungsmerkmal
SUPPORTING - Ist notwendig aber kein Alleinstellungsmerkmal
GENERIC - Produkt auf dem Markt kaufen

### Bounded Context
Ziel Abbildung von fachlichen Domain aus technische Contexte (=Domains)
Entität - hat Zustand und eine ID
Aggregate - transaktionale Einheit über mehrere Entitäten
Value-Objekte - hat Zustand aber keine ID

### Rollen und Arten der Beziehungen zwischen den Bounded Contexten

#### Rollen
Upper /Down - Einfluß fliesst von oben nach unten. Eine Beziehung zwischen zwei BCs, in denen die Aktionen der Gruppe „Upstream“ den Projekterfolg der Gruppe „Downstream“ beeinflussen, aber die Aktionen der Downstream-Gruppe haben keine Auswirkungen auf die Upstream-Projekte.

#### Arten
Customer / Supplier
* U und D haben eine Vertragsbeziehung
* Meistenst gibt es ein API mit Versionen bereit

Conformist
* U kann beliebige Änderungen machen, ohne sich mit D abzusprechen

Published Language
* öffentliche Standards - z.B. OpendId Connect

Mutially Dependent
* Techn. Abhängikeit ist entgegengesetzt der fachl. Abhängikeit
* das ist schlecht

#### Maßnahmen
Anti Corruption Layer 
* BC Planung muss das Schnittstellenmodell von BC Buchhaltung auf sein internes Modell mappen. Dieses Mapping ist komplexer, da Tagesbuchungen auf Wochenbuchungen gemappt werden müssen. Daher ist es sinnvoll dieses Mapping in einer expliziten Komponenten zu kapseln.

### techn. Design
Ziel - Design der Architektur für die bounded Contexte
Methode - zuerst NFAs dann die Architektur (z.B. Installierbarkeit für kleinen Kunden ist wichtiger als Skalierbarkeit)

