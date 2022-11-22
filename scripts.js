function calculatetip(event){
    
event.preventDefault();
let bill = document.getElementById('bill').value;
let serviceQuality = document.getElementById('serviceQuality').value;
let numberOfpeople = document.getElementById('people').value;

if(bill == '' | serviceQuality ==  0) {
    alert("Por Favor, Preencha os Valores")
    return;
}
if(numberOfpeople == '' | numberOfpeople <= 1) {
    numberOfpeople = 1;
    document.getElementById('each').style.display = "none";
} else {
    document.getElementById('each').style.display = "block";
}

let total = (bill * serviceQuality) / numberOfpeople;
total = total.toFixed(2);
document.getElementById('tip').innerHTML = total;
document.getElementById('totaltip').style.display = "block";


}

document.getElementById('totaltip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit',calculatetip);