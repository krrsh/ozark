//Selecting burger icon, xmark, leftnavbar
var bar = document.getElementById("bar")
var x = document.getElementById("xmark")
var leftnav = document.querySelector(".left-nav")

function clickBar(){
    leftnav.style.left = "0%";
}
function hideBar(){
    leftnav.style.left = "-50%";
}

//selecting input, h3 tag text under collections
var elements = document.querySelectorAll("h3");

function dltElement(){
    var input = document.querySelector(".searchbar");
    for(var i=0; i<elements.length; i++){
        if(elements[i].textContent.toUpperCase().indexOf((input.value).toUpperCase()) < 0){
            elements[i].parentElement.style.display = "none";
        }
        else
        elements[i].parentElement.style.display = "block";

    }
}

//selecting the New arraivals a tag and trending a tag
//selecting the sections
var newArrtag = document.getElementById("newarrtag")
var trendingtag = document.getElementById("trendingtag")

var newarrsection = document.querySelector(".newArr")
var trendingsection = document.querySelector("#trendingsec")

function clickingNewarr(){
    newarrsection.scrollIntoView({ behavior: 'smooth' });
    leftnav.style.left = "-50%";
}

function clickingTrending(){
    trendingsection.scrollIntoView({ behavior: 'smooth' });
    leftnav.style.left = "-50%";
}

