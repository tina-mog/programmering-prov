
document.querySelector("#access_site").addEventListener("click", accessSite);

function accessSite(){
    var age = prompt("Du måste minst vara 20 år för att besöka denna sidan! Hur gammal är du?");

    if (parseInt(age,0) >= 20) {
        document.querySelector("main").style.display= "block";
    } else {
      window.location.href = "https://google.se"
    }
}

document.querySelector("#home_button").addEventListener("click", homeButton);

function homeButton(){
    document.querySelector("main").style.display= "none";
}

alert("För att se hela sidan tryck på <Utforska> knappen i headern");
