console.dir(document);
//document.title="elso nev"
//document.log(document.head)
// documenty.all[8].textContent = "Masik cim"
//console.log(document.getElementById("main_titile"));
//document.getElementById("main_title").textContent = "harmadik cim";
//let cim = document.getElementById("main_title");
//cim.textContent = "negyedik cim";
/*for (let i = 0; i < items.lenght; i++) {
  if (i % 2 == 0) {
    item[i].style.backgraundColor = "lightgrey";
  }
}*/
/*console.log(document.getElementsByTagName("h2"));
let h2= document.getElementsByTagName*/
//id #
//class .
//tag akkor semmi nem megy elebe
/*console.log(document.querySelector("elso a"));// css 

let elsoLink = dokument.querySelector("#elso a);
elsoLink.style.color = "red";*/

/*console.log(document.querySelector("elso p"));

let elsoParagraf = dokument.querySelector("#elso p");
elsoParagraf.style.color = "red";*/
/*console.log(document.querySelectorAll(".title"));
let lista = document.querySelectorAll(".title");
lista[1].style.color = "pink";*/
//html oldal 5 fuggveny
//getbyid,byclass,tagname, queryselektror,meg all
//.perentNode kiválasszuk a szülőt objekt
//.perentElement Hasolno objekt
//childNode minden ami a gyerekben van (array)
// first-. last-objekt
// children a tányak azaz elemnetek amik benne vannak (array)
//firstElementChild objekt
//lastElementChod objekt
//sibling (next-, previous-) utánna és előtte lévő dolgok pl text
/*let paragraf = document.querySelector("#masodik p");
console.log(paragraf.previousElementSibling);*/
/*let paragraf = document.querySelector("#masodik p");
console.log(paragraf.previousSibling.previousSibling);// kozte van a text*/
console.log(document.getElementById("container"));
let container = document.getElementById("container");
container.children[2].style.backgroundColor = "green";
