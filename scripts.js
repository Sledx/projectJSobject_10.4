$(function(){

    var samsungS6 = new Telefon("Samsung Galaxy S6", 2300, "navy blue", "75%"),
        iPhone6s = new Telefon("iPhone 6s", 2450, "silver", "20%"),
        onePlus = new Telefon("OnePlus One", 2100, "black", "5%");

    function Telefon(marka, cena, kolor, popularnosc) {
        this.model = marka; // [model = marka] nie rozumiem jednej rzeczy. Czy to działa tak, że tworzymy obiekt samsunga, konstruktorem Telefon i teraz przypisuje się wartosc Samsung Galaxy S6 (marka) do właściwości/parametru model. I teraz dlaczego this.? Przeciez za kazdym razem i tak przypisywana jest inna wartosc wiec w kolejnym obiekcie i tak model bedzie inny, tzn powinien byc i potem przy metodzie log wyswietlimy sobie np. parametr model (tak jak poniżej w metodzie z prototypem, zamiast this.model wrzucajac sam model). Jak tutaj zrobilem bez this. to co ciekawe wszystkie obiekty przyjely parametr model jako wartosc z ostatniego obiektu. Jeszcze gdyby przyjely wartosc pierwszego - czyli Samsung Galaxy S6 - bo wtedy by to oznaczalo ze po prostu zapisuje sie w konstruktorze/klasie ten parametr i juz zostaje do kolejnych instancji obiektu, ale że ostatni (OnePlus One)? Nie czaje.
        this.cena = cena;
        this.kolor = kolor;
        this.popularnosc = popularnosc;
    }
    Telefon.prototype.printInfo     = function() {
        console.log("Marka telefonu to " + this.model + ", kolor to " + this.kolor + ", a cena to " + this.cena + ". Jego popularnosc w sklepie to " + this.popularnosc + ".");
    }
    samsungS6.printInfo();
    iPhone6s.printInfo();
    onePlus.printInfo();
});
