//Her skal du skrive din typescriptkode

// let test = document.getElementById("0");

// console.log(test);

// let test2 = document.getElementsByClassName("sundt");

// console.log(test2);

// let test3 = document.getElementsByTagName("li");

// console.log(test3);   

// for (let i = 0; i < test3.length; i++) { 
//     console.log(i);
// }

//document.getElementsByTagName("li")[0].setAttribute("class", "sundt");

// let nyclass = document.getElementsByClassName("usundt");
// let test = document.getElementsByTagName("li");

// virker ikke ordentligt
// for (let i = 0; i < nyclass.length; i++) { 
//     console.log(nyclass[i])
//     nyclass[i].setAttribute("class", "sundt");
// }

// while (nyclass.length) {
//     nyclass[0].setAttribute("class", "sundt");
// }


// var parentAfLi = document.getElementById("0").parentNode.nodeName;

// console.log(parentAfLi);

// let firstChildAfUl = document.getElementById("liste").firstChild.nodeName;

// console.log(firstChildAfUl);


//Martins eksempel
let listeblandet = document.getElementById("liste");
let liTag1 = document.createElement("li");
let liTagText = document.createTextNode("Advocado");
liTag1.setAttribute("id", "4");
liTag1.setAttribute("class", "sundt");
liTag1.appendChild(liTagText);
listeblandet.appendChild(liTag1);

//mit eget eksempel
// let liTag1 = document.createElement("li");
// let liTagText = document.createTextNode("Advocado");
// liTag1.appendChild(liTagText);
// document.getElementById("liste").appendChild(liTag1)
// document.getElementsByTagName("li")[4].setAttribute("id", "4");
// document.getElementsByTagName("li")[4].setAttribute("class", "sundt");



let usund1 = document.getElementById("0");
document.getElementById("listeUsund").appendChild(usund1);

let usund2 = document.getElementById("2");
document.getElementById("listeUsund").appendChild(usund2);

document.getElementById("0").textContent = "pistacie nødder";

let Slet = document.getElementById("3");
Slet.parentNode.removeChild(Slet);