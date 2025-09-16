console.log("Hemsidan laddades!");

const logInBtn = document.getElementById("loggaInKnapp");
const logInBtn2 = document.getElementById("loggaInKnapp2");
const registerBtn = document.getElementById("skapaKontoKnapp");
const hemBtn = document.getElementById("hemKnapp");
const titelBtn = document.getElementById("titelKnapp")


if (logInBtn){

    logInBtn.addEventListener("click", function() {
        window.location.href = "loggaIn.html";
    });
}
if(logInBtn2){ 

    logInBtn2.addEventListener("click", function() {
        window.location.href = "loggaIn.html";
    });
}
if(registerBtn){

    registerBtn.addEventListener("click", function() {
        window.location.href = "skapaKonto.html";
    });
}
if(hemBtn){

    hemBtn.addEventListener("click", function() {
        window.location.href = "index.html";
    });
}
if(titelBtn){

    titelBtn.addEventListener("click", function() {
        window.location.href = "index.html";
    });
}
