# Min Rbot 2 for WonderKit V2 av MakeKit

Velkommen til programeringen av Min Robot 2 i WonderKit serien fra MakeKit as

## Første testen

Før vi går i gang med programeringen av hele så sjekker vi om lysdiodene er koblet riktig, det er en forkjsel her fra Versjon 1, Nå bruker vi P2 i stedet for P0 for å slå de av og på, så her kommer testen

```blocks
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
})
```
Her bruker vi knapp a for å slå på "Øynene", forsikre deg om at begge LED lysdiodene lyser.

### Fungerte det?

Når dette fungerer kan vi gå videre.
### ~tip

#### Fugerte ikke lysene?
Sjekk at koblingene med krokodilleklemmene er satt på riktig plass P2 eller pinne 2, og at de er koblet riktig på baksiden, lyser de svakt har du nok koblet de i serie og ikke i parralell

### ~

## Oppgaven vår

I denne oppgaven skal vi få roboten til å vinke og blunke med øynene, når det blir for lyst eller for mørkt, bruker du en micro:bit V2 kan du bytte ut lys med lyd.
(Det er også lurt å legge inn slik at man kan teste, derfor legger vi inn slik at den reagerer på knappe A)

til dette trenger vi flere typer blokker, la oss begynne med ``||basic: on start||``, vi legger inn et ikon for å forsikre oss om at vi har rett kode på microbiten når vi starter oppgaven
```block
basic.showIcon(IconNames.Happy)
```

under ``||basic: velg showIcon||`` og sett et valgfritt ikon, vi trenger også to ting under ``||pin: ligger under advanced blokkene||`` nederst i blokkmenyen

Her trenger vi følgende blokker:

Den første slår av lysene som er koblet til pinne 2 på microbiten

```block
pins.digitalWritePin(DigitalPin.P2, 0)
```
og den neste setter armen i utgangsposisjon, her bruker vi P0 som er koblet til servoen via WonderKit kortet, også setter vi denne til 30
```block
pins.servoWritePin(AnalogPin.P0, 30)
```


Her setter vi først øynene av også setter vi servoen (Armen) i utgangsposisjon med følgende kode:

```blocks
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P2, 0)
pins.servoWritePin(AnalogPin.P0, 30)
```

Da er vi ferdig med starten og kan gå videre, bar jobbet så langt

## Hovedoppgaven
Målet vårt er jo å få roboten vår til å vinke og blunke med øynene når vi senker lyset, eller med microbit V2 lager masse lyd, for å få til dette må vi starte koden med en IF/ELLER.
(Det er også lurt å legge inn en liten test, så i vår kode har vi valgt å legge inn at den også fungerer ved å trykke på knapp A)

Nå trenger vi flere blokker, la oss starte med IF/ELLER

```block
if (true) {
    	
    } else {
    	
    }
    ```
Her må vi fortelle hva vi skal sjekk og verdiene den skal reagere på, da trenger vi følgende blokk, dette er en eller (or) blokk som gjør at vi kan sjekke om dette eller dette er gjort
(du finner denne også under ``||logic:logic -> boolean||``)

```block
if (false || false) {
    	
    } else {
    	
    }
```

Nå kan vi legge til verdiene vi må sammenlikne for å utføre handlingen, dette finner vi også under ``||logic: logic -> comparison||``, der vi nå skal teste om lysnivået er lik eller under 60
Vi må da bruke ``||input: light level||`` i spørringen vårt

```block
if (input.lightLevel() <= 60 || false) {
    	
    } else {
    	
    }
```
Tidligere sa vi også at det er lurt og ha med en test, denne la vi på knapp A, dette er også en ``||input: input blokk||``

 ### koden vi har kommet frem til så langt skal da være:

```blocks
    basic.forever(function () {
    if (input.lightLevel() <= 60 || input.buttonIsPressed(Button.A)) {
    	
    } else {
    	
    }
})
```

## Handling når ting stemmer

Nå må vi gå løs på hva som skal skje når det blir mørkt eller vi trykker knapp A

Vi vil at den skal vinke og blinke 6 ganger hver gang IF/ELLER stemmer, dvs. at lyset blir under 60 eller knapp A trykkes, til dette trenger vi en ``||loops: loops||``

```block
for (let index = 0; index < 6; index++) {
        	
        }
```
Inne i ``||loops: løkken||`` må fortelle hva som skal skje, vi bruker det samme som ved start for å styre lysene og armen

```block
pins.digitalWritePin(DigitalPin.P2, 0)
pins.servoWritePin(AnalogPin.P0, 10)
```
Vi legger også inn et ikon og en liten pause, vi bruker pausen for at servoen skal få tid til å fullføre bevegelsen
```block
basic.showIcon(IconNames.Heart)
basic.pause(200)
```
Pause finner vi under ``||basic: basic||``

Vi må nå da sette dette sammen slik at vi får den til å vinke og blunke, som vist under:

```blocks
basic.forever(function () {
    if (input.lightLevel() < 60 || input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 6; index++) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.servoWritePin(AnalogPin.P0, 65)
            basic.showIcon(IconNames.Heart)
            basic.pause(200)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.servoWritePin(AnalogPin.P0, 10)
            basic.pause(200)
            basic.showIcon(IconNames.SmallHeart)
        }
```
### ~alert

#### Se nøye på tallene i servo write pin og digital write pin
I del en av løkken (før og etter pause) byttes servo tallet til 65, dette løfter armen, og lysene blir også satt til 1, altså på, i neste del senker vi armen til ved å sette servo til 10 også slukker vi lysene.
Vi endrer også ikonet.
### ~


## Hva skal skje når handlingen er utført?

Når hanslingen over er ferdig eller den ikke er utløst må vi gå tilbake til utgandspunktet, dette gjør vi ELSE delen av testen vår, dette vil jo også skje når handlingen er utført.

Vi kopierer da det vi har i ``||basic: on start||`` og får da følgende kode

```blocks
basic.forever(function () {
    if (input.lightLevel() < 60 || input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 6; index++) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.servoWritePin(AnalogPin.P0, 65)
            basic.showIcon(IconNames.Heart)
            basic.pause(200)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.servoWritePin(AnalogPin.P0, 10)
            basic.pause(200)
            basic.showIcon(IconNames.SmallHeart)
        }
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.servoWritePin(AnalogPin.P0, 30)
        basic.showIcon(IconNames.Happy)
    }
})
```

## Da er vi ferdige

Koden er nå ferdig og bør se ut som denne?

```blocks
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P2, 0)
pins.servoWritePin(AnalogPin.P0, 30)
basic.forever(function () {
    if (input.lightLevel() < 60 || input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 6; index++) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.servoWritePin(AnalogPin.P0, 65)
            basic.showIcon(IconNames.Heart)
            basic.pause(200)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.servoWritePin(AnalogPin.P0, 10)
            basic.pause(200)
            basic.showIcon(IconNames.SmallHeart)
        }
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.servoWritePin(AnalogPin.P0, 30)
        basic.showIcon(IconNames.Happy)
    }
})
```

Da er tiden inne for å overføre koden, sette inn batteriet (Dette treger man for å drive servoen som gjør at armen vireker) og teste

##Hvordan teste?

På micro:bit er den midterste av lysdiodene foran også en lyssensor, ved å holde over denne blir lyset under 60 og roboten bør da vinke og blunke 6 ganger, gjør den ikke det kan du forsøke å holde knapp A inne litt, for å se om den da gjør som den skal.
Forsikre deg også om at ikonet du har valgt som start ikon i ``||basic:on start||`` stemmer med koden din, da vet du at koden din er overført

Hvis ingen av delene eller bare noen av de fungerer har det nok oppstått en liten feil et sted, dette er fort gjort, da må man feilsøke litt, så er vi sikker på at du finner feilen.

## Til slutt

Vi håper du har fått roboten til å fungere som den skal, har du dette er du godt på vei til å bli en god programmerer.

Vi ønsker deg lykke til videre i utviklingen din som utvikler.







    









