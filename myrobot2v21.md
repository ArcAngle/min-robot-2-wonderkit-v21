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

Nå må vi gå løs på hva som skal skje når det blir mørkt eller vi trykker knapp a







    









