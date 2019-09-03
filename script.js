
//Hämtar id för button och en eventlistener för knapp och kalla på funktion.
let myBtn = document.getElementById("myBtn").addEventListener("click", myFunction);


function myFunction() {
    let usrAge = document.getElementById("textForm").value; //Hämta värde från input 
    let a = Number(usrAge); //konvertera string till number
    
    if (a < 18) {  //Kolla om ålder är under 18
        alert("För ung");
    } else if (a >= 18 && a <= 65) { //ålder 18 och inte över 65
        alert("Rätt ålder");
    } else       //Över 65 
    alert("För gammal");
}