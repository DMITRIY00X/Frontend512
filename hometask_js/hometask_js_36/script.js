"use strict";

class Worker {
    constructor(name, surname, rate, days, workers) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
        this._workers = workers;

    }

    get name(){
        return this._name;
    }

    get surname(){
        return this._surname;
    }

    get getFullName(){
        return this._surname + " " + this._name;
    }

        get rate(){
        return this._rate;
    }
        get days(){
        return this._days;
    }
        get workers(){
        return this._workers;
    }
        getSalary(){
        return this._rate * this._days * this.workers;
    }
}

const worker = new Worker("Иван", "Иванов", 10, 31, 10);



class Boss extends Worker{

}

const boss = new Boss("Иван", "Иванов", 10, 31, 10);
console.log(boss.name);
console.log(boss.surname);
console.log(boss.getFullName);
console.log(boss.rate);
console.log(boss.days);
console.log(boss.workers);
console.log(boss.getSalary());

document.writeln(`Имя: ` + boss.name + `<br>`);
document.writeln(`Фамилия: `+ boss.surname + `<br>`);
document.writeln(`Полное имя: ` + boss.getFullName + `<br>`);
document.writeln(`Ставка: `+ boss.rate + `<br>`);
document.writeln(`Количество отработанных дней: `+ boss.days + `<br>`);
document.writeln(`Количество работников: `+ boss.workers + `<br>`);
document.writeln(`Зарплата: `+ boss.getSalary() + `<br>`);
