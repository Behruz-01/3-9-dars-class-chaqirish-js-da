var elForm = document.querySelector(".form")
var elInput = document.querySelector(".form__input")
var elButtton = document.querySelector(".form__btn")
var elMan = document.querySelector(".head__man")
var elValo = document.querySelector(".head__velo")
var elCar = document.querySelector(".head__car")
var elAirplane = document.querySelector(".head__airplane")


elForm.addEventListener("submit" , function(event){
    event.preventDefault();

    var elValue = elInput.value;
    var Person = 3.6;
    var Velosiped = 20.1;
    var Mashina = 70;
    var Plane = 800;
    var elResult = document.querySelector(".result")


    if (isNaN(elValue)){
        elResult.textContent = "son kiritish kerak";


        elResult.classList.add("result-error");
        elResult.classList.remove("result-success");


        return
    }


    if (elValue <=0 ){
        elResult.textContent = "0 dan katta son kiriting";


        elResult.classList.add("result-error");
        elResult.classList.remove("result-success");


        return
    }

    else{
        elResult.textContent = "ma'lumot to'g'ri kiritildi";
        elResult.classList.add("result-success");
        elResult.classList.remove("result-error");
    }


    function people() {
        var hour = Math.floor(elValue / Person);
        var minute = Math.floor((elValue / Person - hour) * 60);
        var second = Math.floor(((elValue / Person - hour) * 60 - minute) * 60);
        return hour + ' soat ' + minute + ' minut ' + second + 'secund';
    }


    function velo() {
        var hour = Math.floor(elValue / Velosiped);
        var minute = Math.floor((elValue / Velosiped - hour) * 60);
        var second = Math.floor(((elValue / Velosiped - hour) * 60 - minute) * 60);
        return hour + ' soat ' + minute + ' minut ' + second + 'secund';
    }

    function car() {
        var hour = Math.floor(elValue / Mashina);
        var minute = Math.floor((elValue / Mashina - hour) * 60);
        var second = Math.floor(((elValue / Mashina - hour) * 60 - minute) * 60);
        return hour + ' soat ' + minute + ' minut ' + second + 'secund';
    }


    function airplane() {
        var hour = Math.floor(elValue / Plane);
        var minute = Math.floor((elValue / Plane - hour) * 60);
        var second = Math.floor(((elValue / Plane - hour) * 60 - minute) * 60);
        return hour + ' soat ' + minute + ' minut ' + second + 'secund';
    }
    /*
    function people() {
        return elValue/Person;
    }
    function velo() {
        return elValue/Velosiped;
    }

    function car() {
        return elValue/Mashina;
    }

    function airplane() {
        return elValue/Plane;
    }


*/


    elMan.textContent = people();
    elValo.textContent = (velo());
    elCar.textContent = (car());
    elAirplane.textContent =/* Math.round(airplane());*/ airplane();
})