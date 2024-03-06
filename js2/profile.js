let profile = false;

let alert_ok = document.getElementsByClassName("alert-ok")[0];
let alert_error = document.getElementsByClassName("alert-error")[0];

if(profile){
    alert_ok.style.display = "block";
    alert_error.style.display = "none"
}else{
    alert_ok.style.display = "none";
    alert_error.style.display = "block"
} 