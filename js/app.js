document.addEventListener("DOMContentLoaded", function() {
    var navList = document.querySelectorAll(".nav-list");
    var firstNavList = [];
    firstNavList.push(navList[0]);
    var arrowUp = document.querySelector(".arrow-up");
    var navUl = document.querySelector(".nav-right-hover ul");
    var navLi = document.querySelectorAll(".nav-right-hover ul li");
    var label = document.querySelectorAll(".picture-label");
    var picture = document.querySelectorAll(".picture");

    console.log(firstNavList[0]);
    console.log(arrowUp);
    console.log(navUl);
    console.log(navLi);

// MENU MOUSEOVER & OUT

    function mouseOver(event){
        navUl.parentElement.classList.add("show-block");
        arrowUp.classList.add("show-block");
    }

   function mouseOut(event){
        navUl.parentElement.classList.remove("show-block");
        arrowUp.classList.remove("show-block");
    }

    firstNavList[0].addEventListener("mouseover", mouseOver);
    arrowUp.addEventListener("mouseover", mouseOver);
    navUl.parentElement.addEventListener("mouseover", mouseOver);
    navUl.addEventListener("mouseout", mouseOut);


// PICTURE LABEL FADE OUT

    for(var i=0; i<picture.length-1; i++){
        picture[i].addEventListener("mouseover", function(){
        this.firstElementChild.classList.add("fadeout");
        })
        picture[i].addEventListener("mouseleave", function(){
            this.firstElementChild.classList.remove("fadeout");
        })
    }


//SLIDER

    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var slider = document.querySelectorAll(".slider");
    var counter = 0;

    var array=[];
    for(var i = 0; i < slider.length; i++){
        array.push(slider[i]);
    }
    array[counter].classList.add("show");


    var clickNext = function(){

        array[counter].classList.toggle("show");

        if(counter<array.length-1) {
            counter++;
        } else {
            counter=0;
        }
        array[counter].classList.toggle("show");

    };


    var clickPrev = function(){

        array[counter].classList.toggle("show");

        if(counter > 0) {
            counter--;
        } else {
            counter=array.length-1;
        }
        array[counter].classList.toggle("show");

    };


    prev.addEventListener("click", clickPrev);
    next.addEventListener("click", clickNext);

//SUMMARY SLIDE DOWN

    var list_arrow = document.getElementsByClassName("list_arrow");
    var list_panel = document.getElementsByClassName("list_panel");

    for(var i=0; i<list_arrow.length; i++) {
        list_arrow[i].addEventListener("click", function () {
            this.nextElementSibling.classList.toggle("show");
        })
    }

//SUMMARY FROM LIST TO PANEL

    var panel_left = document.getElementsByClassName("panel_left");
    var your_chair = document.getElementById("chosen_chair");
    var lis = document.querySelectorAll(".list_panel li");
    var list_label = document.querySelectorAll(".list_label");
    var color = document.querySelector(".color");
    var pattern = document.querySelector(".pattern");
    var transport = document.querySelector(".transport");
    var transport_check = document.getElementById("transport");
    var title_value = document.querySelector(".title.value");
    var color_value = document.querySelector(".color.value");
    var pattern_value = document.querySelector(".pattern.value");
    var trasport_value = document.querySelector(".transport.value");
    title_value.innerText="";


    for(var i=0; i<3; i++){
        lis[i].addEventListener("click", function(){
            your_chair.innerText = this.innerText;
            list_label[0].innerText = this.innerText;
            this.parentElement.classList.remove("show");
            title_value.innerText = parseInt(200);
            summary();
        })
    }

    for(var i=3; i<6;i++){
        lis[i].addEventListener("click", function(){
            list_label[1].innerText = this.innerText;
            this.parentElement.classList.remove("show");
            summary();
        })
    }

    for(var i=6; i<8;i++) {
        lis[i].addEventListener("click", function () {
            list_label[2].innerText = this.innerText;
            pattern.style.visibility="visible";
            pattern.innerText = this.innerText;
            this.parentElement.classList.remove("show");
            pattern_value.innerText = parseInt(0);
            summary();
        })

    }

//TRANSPORT

    transport.classList.add("hide");
    pattern.classList.add("hide");
    trasport_value.classList.add("hide");

    var label_check = document.querySelector(".checkbox label");
    label_check.addEventListener("click",function () {
        transport.classList.toggle("hide");
        trasport_value.classList.toggle("hide");
        trasport_value.innerText = transport_check.getAttribute('data-transport-price');
        summary();
    });

//SUM

    var summary = function () {
        var sum = document.querySelector(".sum strong");
        var values = document.querySelectorAll(".value");
        var valuesLength = values.length;
        var result = 0;
        var array = [];

        console.log(values[1]);

        for(var i=0; i<valuesLength; i++){
            if(values[i].innerText!==""){
                result += parseInt(values[i].innerText);
                sum.innerText = result;
            }
            console.log(values[i].innerText);

            console.log(result);
        }
        return sum;
    }






/*
        for (var i = 0; i < valuesLength; i++) {
            if (values.innerText == "") {
                sum.innerText = "";
            }
            else if (valuesLength > 0){
                result += parseInt(values[i].innerText);
            }
            else {
                result -= parseInt(values[i].innerText);
            }
        }
        sum.innerText = result;
             var add = parseInt(values[i].innerText);
             result += add;
         }

    summary();*/


});
