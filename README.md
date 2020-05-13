# WeatherApp

Aplikace na předpověď počasí.

## Development server

Pro spuštění aplikace na localhost udělejte prosím následující:

1. Stáhněte si projekt kliknutím na "Clone or download" a uložte jej do složky Users/'Jméno uživatele'.
2. Stáhněte a nainstalujte Node.js [ZDE](https://nodejs.org/en/). 
3. Otevřete příkazový řádek spusťte v tomto pořadí
    - `npm install npm@latest -g`
    - `npm install -g typescript`
    - `npm install -g @angular/cli`
    - `npm install -g @angular/cli`
4. Poté v příkazovém řádku napište `cd angular-weather-app-master` (měli byste se defaultně nacházet na Users/'Jméno uživatele')
5. Nyní aplikaci spusťe pomocí příkazu `ng serve`.
6. Spusťe internetový prohlížeč a otevřete `http://localhost:4200/`

## Live server

Aplikaci je možné vidět [ZDE](https://devrozz.github.io/angular-weather-app/).

Bohužel došlo k problému při uploadu skrz větší soubor obsahující seznam měst pro našeptáváč při vyhledávání a tato funkcionalita je zde nedostupná, stejně jako logo aplikace. Za problém se omlouvám.

Pro kompletní funkcionalitu a zážitek z aplikace spusťte aplikaci na lokálním počítači, pomocí návodu výše.

## Vnitřní struktura aplikace

Aplikace se skládá ze:

4 komponent:   
- App.component - Hlavní komponenta, která zaobaluje celou aplikaci
- Header.component - Komponenta obsahující header stránky (název + logo)
- Search.component - Komponenta pro vyhledávání měst a získání aktuální lokality
- Weather-detail.component - Komponenta obsahující detail počasí a graf s teplotou v jednotlivých dnech

1 service:     
- Weather.service - Obsahuje logiku pro získání:    
    - počasí pro následujících 5 dní z API
    - počasí pro aktuální lokalitu z API
    - seznam měst z lokálního souboru

2 modely:      
- Weather-model - Model počasí obsahující datum, teplotu, pocitovou teplotu, vlhkost, oblačnost a ikonu počasí
- City-model - Model obsahující ID a název města

