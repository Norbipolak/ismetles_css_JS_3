console.log(document);//Dokument egy objektum, ami rendelkezik különböző metódusokkal 

/*
Document Object Model 

A Document Object Model (DOM) a HTML dokumentum reprezentációja, a DOM-on keresztül tudjuk elérni a HTML dokumentum eggyes részeit 

Lehetővé teszi a Javascriptnek a html strukturájának (weboldal) megváltoztatását, különboző elemekhez való hozzáférést

Hogyan tudunk id-alapján egy elemet megkapni ->
const div1 = getElementById("div-1") 

Az objektumok azok kulcs-értékpárok 

const Car = {
    brand: "Volvo",
    type: "S60",
    color: "piros"
    goForward: function(speed){
        console.log(color)
        console.log(`A(z) ${this.color} színű ${this.brand} márkájú és ${this.brand} típusú autó ${speed} km/h-val megy előre`)
    }
};

Car.goForward(60);

A this az maga az objektum!!!!
Ha úgy pobálnám meg elérni a type nevű változót, igazából ez itt egy property, hogy simán csak color és nem this.color 
Ha csak simán a goForward függvény felett ki szerenénk íratna, hogy console.log(color);
Mi történik -> 
és még ha meg is hívnánk a Car-ból a goForward-ot és meg is adnánk neki a speed-et -> Car.goForward(60);
    goForward: function(speed){
        console.log(color)
        console.log(`A(z) ${this.color} színű ${this.brand} márkájú és ${this.brand} típusú autó ${speed} km/h-val megy előre`)
    }
Így a color nevű változó az nincsen definiálva, ezért kapnánk egy not defined hibát!!!!(color is not defined)
és akkor a kódnak a futása az megállna!!!

és mi van abban az esetben ha készítünk a Car objektum felett egy color változót 

const color = "sárga";
Akkor az a console.log(color), ami a goForward függvényen belül van mit fog kiírni -> 
Kiírná azt, hogy sárga, mert ez egy globális változó és ehhez a függvényben hozzá tudunk férni, de viszont fordítva nem igaz 

Mi lenne, ha ezt csinálnánk -> 
    goForward: function(speed){
        const color = "sárga";
        console.log(color)
        console.log(`A(z) ${this.color} színű ${this.brand} márkájú és ${this.brand} típusú autó ${speed} km/h-val megy előre`)
    }
Ilyenkor is kiírná, hogy sárga, mert a függvényen belül meghatároztunk egy változót és utána csak kiírtuk 
Mert ő itt egy sárga nevű változót keres és ha lokálisan vagy globálisan definiált ez a változó akkor ezzel nincsen semmi probléma 
Akkor van probléma, ha nem definiált!!!!

Csinálunk egy hasonló goBackward függvényt mint a goForward 
const Car = {
    brand: "Volvo",
    type: "S60",
    color: "piros"
    goForward: function(speed){
        console.log(`A(z) ${this.color} színű ${this.brand} márkájú és ${this.brand} típusú autó ${speed} km/h-val megy előre`)
    },
        goBackward(speed){
        console.log(`A(z) ${this.color} színű ${this.brand} márkájú és ${this.brand} típusú autó ${speed} km/h-val megy hátra`)
    }
};

Car.goForward(40);
Car.goBackward(50);

goBackward(speed) - goForward: function(speed)
A kettő nem ugyanugy néz ki 
Ez egy másik féle szintaktika, de ugyanugy müködik, mintkettő!!!!!

Csinálunk itt egy brake nevő arrow function-t 
brake: ()=> {
    console.log(`A(z) ${this.color} színű ${this.brand} márkájú és ${this.brand} típusú autó fékez`);
}

brake();
Az lesz, hogy az undefined színű, undefined típusú .... fékez ha meghívjuk!!!!!!!!!!!!!!!!!!!!
Miért rossz így ->
Mert az arrow function egy másik scope-ot hoz létre!!!!
és csak úgy tudunk ezekre hívatkozni, hogy Car.color, Car.brand stb....
-> 
brake: ()=> {
    console.log(`A(z) ${Car.color} színű ${Car.brand} márkájú és ${Car.brand} típusú autó fékez`);
}

A goForward és goBackward nevű metódus!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! a függvénye része lesz, az meg nem, az egy arrow function és kész

Ilyenek az objektumok és a document is pontosan ilyen objektum
Annak is megvannak a kulcs-értékpárai meg rendelkezik metódusokkal is 

Megnézzük, hogy milyen metódusokkal rendelkezik a Car objektum 
->
[[Prototype]]: Object 
    constructor 
    hasOwnProperty
    toString

és a documentnek a prototype-jában is vannak mindenféle metódus 
console.log(docuemnt.__proto__); -> így lehet ezt kiírni konzolra

Itt azok vannak benne, amiker örököl mástól 
****************************************************************************************************************************************
Mi a különbség a függvény(function) és a metódus között -> 
Hogy a metódusd egy objektumban van!!!!!!!!!!!!!!!!!!!! vagy egy osztályban

const div1 = document.getElementById(#div-1);
console.log(div1) -> visszakapjuk a div-et, <div id='div-1'>1</div>
Ez képes id alapján lementeni bármilyen tag-et!!!!!!!!!!!!!!!!!!!!!!!!!

Hogyan lehet másképpen lementeni a div-1 id-val rendelkező tag-et
-> 
const div1_1 = document.querySelector("#div-1");
Tehát kétféleképpen, getElementById és querySelector, de ezzel ugye mindent le lehet menteni, ezért kell a # elé!!!!!
pl. id, class, tagnév, name, bármilyen attributum alapján!!!!!

document.getElementById: Lement egy elemet az id alapján 
document.querySelector: Hogyha a # karaktert alkalmazzuk az id neve előtt, akkor ID alapján menti le az első elemet, amit megtalált 
Tehát ő mindig az első előfordulást keresi!!!!!

Hogyan tudunk ezekhez az elemekhez hozzáférni class alapján ->
Csináltunk 3 div-et és megadtuk mindegyiknek a div class-t
    <div class="div">1</div>
    <div class="div">2</div>
    <div class="div">3</div>

1. const divs_1 = document.getElementsByClassName("div")
Ez itt mindegyiket lementi, annyit amennyinek meg van adva ez a class, hogy div!!!!
és csinál nekünk egy HTML collection-t 
console.log(divs_1);
-> 
HTMLCollection(3) {div.div, div.div, div.div}     ezeket, akkor el tudjuk érni index alapján 
0: div.div
1: div.div
2: div.div
length: 3 
[[Prototype]]: HTMLCollection

HTMLCollectionben megnézzük, hogy milyen metódusokkal rendelkezik(olyan nagyon sokkal nem)

2. querySelector 
Mi lesz ilyenkor ->
const div = document.querySelector(".div");
console.log(div),
Csak egy darab elemet fog lementeni az elsőt!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

3. querySelectorAll
Le fogja menteni az összeset 
const divs_2 = document.querySelectorAll(".div");
console.log(divs_2);
Mit fog nekünk visszadni, mi lesz a visszatérési értéke ->
Nodelist(3)[div.div, div.div, div.div]
0: div.div
1: div.div
2: div.div
length: 3 
[[Prototype]]: NodeList 
(Hasonló, mint egy tömb, csak mondjuk nincsen itt map vagy filter de ugyanugy van length meg indexei, végig tudunk iterálni rajtuk)
    entries
    forEach 
    items
    keys 
    length 
    values
    constructor 

És akkor ennek már több metódusa van, mint egy HTMLCollectio-nek pl. entries, forEach, keys, values 
Ezek azért jók, hogy itt vannak mert sokféle dologra tudjuk őket használni

pl. entries 
const entries = divs_2.entries();
console.log(entries);
kaptunk egy Array Iterator-t!!!!!!!!!!!!!!!!!!!!!!!!!
Ha van Array Iterator, akkor tudjuk a for-t használni!!!

for(const entry of entries) {
    console.log(entry);
}
[0, div.div] (2)
    0: 0
    1: div.div
    length: 2
    [[Prototype]]: Array
[1, div.div] (2)
    0: 1
    1: div.div
    length: 2
    [[Prototype]]: Array
[2, div.div] (2)
    0: 2
    1: div.div
    length: 2
    [[Prototype]]: Array

Nulla az első div, egy a második div, kettő a harmadik div!!!
Ezek a 0,1,2 ezek az indexei, az entries visszaad nekünk egy tömbben lévő tömbböket és az első eleme ennek az index második az maga div 

Az entries az egy olyan tömb, amelyik más tömböket tartalmaz, az indexek és maga a div elem párosítását tartalmazzák 
Az első elem az magát az indexet a második pedig magát a div elemet jelöli 

Azt is meg lehet csinálni, hogy egy for of-val végigmegyünk ennek a divs_2-nek!!!!!
for(const d of divs_2){
    console.log(d);
}
-> 
<div class="div">1</div>
<div class="div">2</div>
<div class="div">3</div>
És akkor itt for of-val simán végigmegyünk az elemeken 

Lehet-e for of-val végigmenni a HTMLCollection-ön?
Lehet, de ami nincsen pl. benne a HTMLCollectionben az a keys, values, entries 

Térjünk vissza az entries-re 
!!!!!!!
Az entries az eredetileg az objektumokhoz lett kitalálva és az objektumok kulcsát illetve értékét, kulcsait értékeit tárolja egy tömbben
lévő tömbben, tömbbökben 
Tehát ez nekünk úgy müködik jól, hogy van nekünk egy Car objektumunk 
és akkor aztz mondjuk egy for of-val, hogy prop mint property és akkor az of után meg Object.entries(Car)!!!!!!!!!

Object.entries(Car), mert nem lehet hozzáférni úgy, hogy Car.entries()!!!

for(const prop of Object.entries(Car)) {
    console.log(prop);
}
És akkor az Object.entries(Car) visszaad nekünk egy ilyet, hogy 
console.log(Object.entries(Car))
->
(6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
   0: (2) ['brand', 'Volvo']
   1: (2) ['type', 'S60']
   2: (2) ['color', 'piros']
   3: (2) ['goForweard', f]
   4: (2) ['gobackward', f]
   5: (2) ['break', f]
   length: 6
   [[Prototype]]: Array(0)
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Egy tömb, amiben kettő elemű tömbök találhatóak meg és akkora fura módon, hogy brand - Volvo, type - S60, color - piros, goForward - f
csak nem fejti ki pontosan, hogy mi az a function 
!!!
Tehát a kulcs-értélkpárok egy tömben lévő tömbökben találhatóak, aminek két eleme van, a kulcs meg az érték!!!
Ezt alavetően objektumokhoz találták ki 
-> 
for (const prop of Object.entries(Car)) {
    console.log(`$[prop[0]] - $[prop[1]]`);
}
brand - Volvo
type - S60
color - piros
goForward - function(speed) {console.log(`A(z) ${this.color} színű, ${this.brand} márkájú......megy előre`)}
goBackward - function(speed) {console.log(`A(z) ${this.color} színű, ${this.brand} márkájú......megy hátra`)}
break - ()=> console.log(`A(z) ${Car.color} színű, ${Car.brand} márkájú......................fékez)
!!!!!!!!!!!!!!!!!
Így könnyű végigiterálni 
**************************************************************************************************************************
Késíitünk egy sima egyszerü tömböt 

const tomb = ["a", "b", "c", "d", "e"];

for(const entry of tomb.entries()) {
    console.log(entry)
}
Itt a tömböknél müködik a tömb.entries()!!!!!!!!!!
Mert annak az object a prototype-ja 
(2) [0, 'a']
(2) [1, 'b']
(2) [2, 'c']
(2) [3, 'd']
(2) [4, 'e']
Mi fog itt történni
->
0 az a, 1 a b, 2 a c, 3 a d, 4 az e, azért mert a tömbök is objektumok a JavaScriptben és ezért ugy veszi a JavaScript, hogy 
a tömböknek az indexei azok a kulcsai, tehát olyan objektumok, amiknek nem definiáljuk a kulcsait
Az értékeikhez, mint kulcsok hozzárendeli az indexeket!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Ugyanezt látjuk a NodeList-nél is, viszont a HTMLCollection az nem rendelkezik ilyen metódusokkal 
A NodeList az sok esetben azért hasznosabb, mert ugye rendelkezik ezekkel a plusz metódusokkal pl. a forEach-vel végig lehet menni!!!
->
Azt tudjuk, hogy a forEach() a JavaScriptben az nem egy loop (ciklus), hanem egy metódus!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Tehát, ha mondjuk a HTMLColeection nem rendelkezik egy olyan metódussal, hogy forEach, akkor nem lehet használni a forEach()-et

Ha NodeList meg rendelkezik olyannal, hogy forEach(), akkor lehet azt mondani 
!!!!!!!!!!!!!!!!!!
divs_2.forEach((d)=> {
    console.log(d);
})
->
Itt végigmegyünk a divs_2 tömbön (Nodelist) egy forEach-vel, ami vár egy callback function-t, itt arrow callback function 
Minden egyes eleme ennek a divs_2-nek lesz a d (ezzel van reprezentálva)!!!!!!!
És akkor így megy végig (iterál) a forEach az összes elemén, a d reprezentálja az adott elemet amin van (ott tart) és ezt meg kikonzolozza 
<div class="div">1</div>
<div class="div">2</div>
<div class="div">3</div>

Eredmény pedig teljesen az, mintha egy for of-val mentünk volna végig rajt
->
for(const d of divs_2){
    console.log(d);
}
Itt is a d az adott elemet jelenti, amit kikonzoloz és megy tovább a következő elemre, amit majd megint kikonzoloz
Ugye a forEach-nél még kapunk egy indexet is meg az array minden egyes elemnél ó, de ha ezekre nincsen szükségünk, akkor könnyebb 
a sima a for of használata

querySelectorAll-nak elönyösebb a használata, mint a getElemetsByClassName, pontosan azért mert a querySelector egy NodeList-et add,
aminek meg több metódusa van, amit tudunk a késöbbiekben használni, pl. ilyen az elöbbi forEach() is
**************************************************************************************************************************************
Hogyan tudunk tagnév alapján lementeni valamit
Erre csináltunk span-eket
    <span>1</span>
    <span>2</span>
    <span>3</span>
1. const spans_1 = document.getElementsByTagName("span");
console.log(spans_1);
Kaptunk egy HTMLCollection-t 
->
HTMLCollection (3) [span, span, span]
    0: span
    1: span
    2: span
    length: 3 
    [[Prototype]]: HTMLCollection

2. const spans_2 = document.querySelector("span");
console.log(spans_2);
Ha szeretnénk egy NodeList-et, akkor meg a querySelector(All)-val kell lementeni
->
NodeList (3) [span, span, span]
    0: span
    1: span
    2: span
    length: 3 
    [[Prototype]]: NodeList
És akkor van pl. entries(), forEach(), item(), values(), keys()
*********************************************************************************************************************************************
Hogyan lehet name alapján lementeni valamit, hozzáférés name attributum alapján 
Miért jó ha egy input mező benne van egy label-ben 
-> mert jobb lesz így a visibility, functionality, usability, ez a best practise, de használhatjuk anélköl is 
    <h3>Dohányzol-e?</h3>
    <label>
        <input type="radio" value="1" name="smoking"> Igen 
    </label>
    <label>
        <input type="radio" value="0" name="smoking"> Nem
    </label>
Radio type az a pötty, amit ki tudunk jelölni, mindegyiknek megadtuk a smoking name-et de viszont az egyiknek a value 1-et a másiknak pedig
a value 0-át
van ilyen, hogy getElementsByName, ami egy NodeList-et fog visszadni a többivel ellentétben ->
const smoking_1 = dolcument.getElementsByName("smoking");
NodeList(2) [input, input]
0: input
1: input 
length: 2
[[Prototype]]: NodeList

De le lehet ezt is menteni querySelector-vel is de ez () egy kicsit másmilyen formában lesz mint # vagy a . 
const smoking_2 = document.querySelector("[name='smoking']")
("[name='smoking']")
tehát beletesszük egy szögletes zárójelbe meghatározzuk, hogy a name attributum alapján szeretnénk lementeni 
name= és ide meg egy ''-be beírjuk, hogy mi a name, amit megadtunk neki 
Fontos, hogy így bármilyen attributum alapján tud menteni!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Tehát nem csak a name alapján, hanem saját attributumok alapján 
*****************************************************************************************************************************************
Mi az a ECMAScript 
Az gyakorlatilag a JavaScriptnek a szabvénya és ez írja le, hogy hogyan kell implementálni a JavaScriptet és azért szükséges ez, 
mert az eggyes böngészők, mondjuk a Chrome és a Firefox ami tényleges külön gyártja még ezeket az interpretereket!!!!!!!!!!!!!!
Ezek másképpen dolgozzák fel egy kicsit a JavaScriptet!!!
Vannak A Chrome alapú böngészők, most már az Edge is az, meg minden ami Chrome alapú, ez rengeteg fajta böngésző, meg van a Firefox
és mindkettő egy kicsit másféleképpen dolgozza fel a JavaScriptet és ennek a szabványait írják le az ECMAScriptben 
és volt az ECMAScript 6-os szabvány és onnantól kezdve csomó új feature elérhetővé vált a nyelvben, mint pl. ezek a querySelector-ok
vagy az osztályok, azok sem voltak mindig elérhetőek, localStorage, sessionStorage és akkor meg lehet nézni, hogy ezek mikor jelentek meg 

Ezt meg lehet nézni, ha mondjuk van valami újdonság a nyelvben és mondjuk csak a Chrome legújabb változata támogatja ezt, akkor kétszer is 
meggondoljuk, hogy használjuk-e ezt majd 
De ugyanez igaz a CSS-re, mert pl. az orientation:landscape vagy portrait az egy újabb dolog vagy a repeat(auto-fill, minmax())
vagy van egy olyan, hogy calc() css-ben
width: calc(100% - 30px); mindig 100% széles minusz 30px és akkor ezt így ugye tudja tartani 
**********************************************************************************************************************************************
HTML attributumok manipulációja 
Itt az az érdekes, hogy pl. az id is egy html attributum, meg a class is, meg az is, hogy src, type
Minden, amit úgy csinálunk, hogy van a taggünk és akkor valami egyenlő aposztrófban valamivel 

Pl. itt tudjuk manipulálni a classList-et(Class-ek manipulálása)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Mondjuk csinálunk egy div-et, aminek megadunk egy id-t és akkor a square lementésre kerül 
<div id="square"></div>

const squareDiv = document.querySelector("#square");

Nagyon fontos!!!!!!!!!!!!!!!!!!!!!classList.add
HTML-ben csináltunk egy style tag-et, amiben megformáztuk egy osztályt, amit majd megadunk ennek a squareDiv-nek 
<style>
    .blue-square {
        width: 300px;
        height: 300px;
        background-color: blue;
        transition: all 3s ease;
    }
</style>

squareDiv.classList.add("blue-square");
Transition pedig azt csinálja, hogy az eredeti színe, ami itt fehér abból árnyalatossan át fog változni kékké 

de ezt a class-t le is tudjuk szedni pl. egy setTimeOut segítségével, ami azt fogja csinálni, hogy vár 3 másodpercet 
és akkor hajtja végre azt ami benne van!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
ugye itt meg az lesz majd benne, hogy squareDiv.classList.remove, hogy leszedje ezt az osztályt 

setTimeOut(()=> {
    squareDiv.classList.remove("blue-square");
}, 3000)

és akkor ez a square ez szépen megjelenik 3ms alatt kék lesz és utána vár 3ms és eltünik 

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
setInterval-val meg tudunk csinálni egy toggle-t 
A setInterval abban különbözik a setTimeOut-tól, hogy az interval az nem egyszer fogja végrehajtani, azt ami benne van hanem 
folyamatosan, olyan időközönként, intervallumonként, amit meghatározunk neki, setTimeOut, pedig csak egyszer fog végbemenni, 
olyan időtartam után, amit megadtunk neki 
Tehát setInterval, nem egyszer fogja végrehajtani a callback functiont, addig amig le nem állítjuk egy konkrét parancssal 
hogy leálljon!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

És akkor itt mi nem azt fogjuk mondani, hogy add vagy remove hanem toggle 
->
Toggle az azt csinálja, hogyha rajta van a class, akkor leveszi, ha pedig nincs rajta, akkor meg rárakja, hozzáadja 

setInterval(()=> {
    squareDiv.classList.toggle("blue-square");
}, 1000)

clearInterval-val lehet ezt a folyamatot megállítani!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let counter = 0;

const intervalID = setInterval(()=> {
    squareDiv.classList.toggle("blue-square");

    console.log(intervalID);
}, 1000);

lementjük ezt a setInterval-t egy változóban és ennek az interval-nak van egy visszatérési értéke, ami egy number 
Ez az adott folyamatnak az id-ja, ami alapján mondjuk ezt meg lehet állítani!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

console.log(setIntervalID); -> 1 lesz (mert ez az első setInterval, amit készítettünk)
->
let counter = 0;

const intervalID = setInterval(()=> {
    squareDiv.classList.toggle("blue-square");

    counter++;

    if(counter === 10) {
        clearInterval(intervalID);
    }
}, 1000);

1. Létrehozunk egy const counter = 0; hogy majd ez alapján,meg tudjuk határozni, hogy mikor álljon le ez a setInterval függvény 
2. Megcsináljuk ezt az setInterval függvényt, fontos, hogy ez egy változóban legyen, mert van egy visszatérési értéke, ami alapján 
majd le tudjuk állítani!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
3. meghatározzuk, hogy mit csináljon, itt egy classList-et fog hozzáadni, levenni egy másodőpercenként 
4. counter++; 
5. if(counter === 10), tehát ez a függvény, mivel az van neki megadva, hogy 1000 milisec(1mp)-ként fusson le, és ebben az is benne van, hogy 
counter++, tehát minden eggyes lefutásnál hozza fog adni eggyet ehhez a counter-hez, meghatározzuk az if-ben, hogyha counter eléri a 10-et 
akkor 
clearInterval-val leállítjuk ezt a függvényt, ennek meg kell adni az függvény visszatérési értékét, tehát a intervalID-t, hogy tudjuk, hogy 
melyik függvényt állítjuk le, mert ez a intervalID, amikor kikonzoloztuk, akkor láttuk, hogy 1 lett és ezt az értéket kell megkapnia a 
clearInterval függvénynek is 


A setInterval függvény visszatérési értéke egy egyedi azonosító (ID), amelyet később felhasználhatsz a clearInterval függvénnyel
az időzítő leállításához. Ez az ID azonosítja az adott időzítőt, és lehetővé teszi számodra, 
hogy egy adott időzítőt állíts le, anélkül hogy befolyásolnád más időzítőket.

Másik példa erre -> 

Indítsd el az időzítőt, és tárold el az ID-t
const intervalId = setInterval(() => {
    console.log('Időzítő működik...');
}, 1000);

Időzítő leállítása a setInterval visszatérési értékének (ID) felhasználásával
setTimeout(() => {
    clearInterval(intervalId); Leállítja az időzítőt az ID segítségével
    console.log('Időzítő leállítva.');
}, 5000);

Tehát a clearInterval vár egy id-t és azt a folyamatot leállítja, aminek az id-jét itt megadtuk!!!!!!!!!!!!!!!!!!!!!!!!

Így lehet az osztályokat manipulálni, amik attributumok!!!!

De még ugy is meghatározhatunk egy class-t, hogy nem létrejozzuk a html és itt meg megadjuk az adott elemnek 
hanem itt is létrehozhatunk a style-val 
->
squareDiv.style.border = "3px solid brown";
Tehát itt a classList az a style attributum lesz és meg kell adni egy bizonyos tulajdonságoz, ennek a style-nak pl. border, backgroundColor
akármilyen css formázási dolgot 

let counter = 0;
squareDiv.style.border = "3px solid brown" ez a border mindig ott lesz attól függetlenül, hogy rajta van a blue-sqaure vagy nincs

const intervalID = setInterval(()=> {
    squareDiv.classList.toggle("blue-square");

    counter++;

    if(counter === 10) {
        clearInterval(intervalID);
    }

} 1000);

squareDiv.style.border = "3px solid brown"
ez ugyanez, mintha ide beírnánk ->
<div style="border: 3px solid brown"></div>

Így tudjuk manipulálni az attributumokat, de van még a setAttribure, removeAttribute, getAttribute is !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Amikkel meg attributum név alapján tudunk manipulálni 
*/

